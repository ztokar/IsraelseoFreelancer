"""Use the existing Dejan runner and retain the complete sentence feedback CSV."""
import argparse
import csv
import importlib.util
import json
from pathlib import Path

from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

parser = argparse.ArgumentParser()
parser.add_argument('--drafts', required=True)
parser.add_argument('--out', required=True)
parser.add_argument('--only')
args = parser.parse_args()
spec = importlib.util.spec_from_file_location('existing_dejan', Path.home() / 'tools/serp-validation/scripts/dejan_batch.py')
runner = importlib.util.module_from_spec(spec)
spec.loader.exec_module(runner)
destination = Path(args.out)
destination.mkdir(parents=True, exist_ok=True)
records = {}
result_path = destination / 'results.json'
if result_path.exists():
    records = json.loads(result_path.read_text(encoding='utf-8'))
with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(accept_downloads=True)
    for file in sorted(Path(args.drafts).glob('*.html')):
        if args.only and file.stem != args.only:
            continue
        soup = BeautifulSoup(file.read_text(encoding='utf-8'), 'html.parser')
        text = soup.select_one('main').get_text(' ', strip=True)
        record = {'words': len(text.split()), 'chunks': []}
        for index, part in enumerate(runner.chunks(text), 1):
            score = runner.score_once(page, part)
            score['part'] = index
            score['words'] = len(part.split())
            try:
                collected = {}
                for scroll_step in range(70):
                    table = BeautifulSoup(page.locator('table[role="grid"]').evaluate('(element) => element.outerHTML'), 'html.parser')
                    headers = [cell.get_text(' ', strip=True) for cell in table.select('thead th')]
                    for row in table.select('tbody tr'):
                        collected[int(row.get('aria-rowindex'))] = [cell.get_text(' ', strip=True) for cell in row.select('td')]
                    expected = int(table.select_one('table').get('aria-rowcount', 1)) - 1
                    if len(collected) >= expected:
                        break
                    page.locator('.dvn-scroller').first.evaluate('(element) => { element.scrollTop += 140; }')
                    page.wait_for_timeout(200)
                values = [collected[key] for key in sorted(collected)]
                score['sentences'] = [dict(zip(headers, row)) for row in values]
                score['expected_sentence_rows'] = int(table.select_one('table').get('aria-rowcount', 1)) - 1
                if len(values) != score['expected_sentence_rows']:
                    raise RuntimeError(f'Incomplete sentence table: {len(values)} / {score["expected_sentence_rows"]}')
                csv_path = destination / f'{file.stem}-{index}-sentences.csv'
                with csv_path.open('w', newline='', encoding='utf-8') as csv_file:
                    writer = csv.writer(csv_file)
                    writer.writerow(headers)
                    writer.writerows(values)
                score['csv'] = str(csv_path)
            except Exception as error:
                score['feedback_error'] = str(error)[:300]
                page.screenshot(path=str(destination / f'{file.stem}-{index}-feedback.png'), full_page=True)
            score['pass'] = score.get('ai') is not None and score['ai'] < 20 and bool(score.get('sentences'))
            record['chunks'].append(score)
            records[file.stem] = record
            result_path.write_text(json.dumps(records, indent=2, ensure_ascii=False), encoding='utf-8')
            print(file.stem, index, score.get('ai'), 'sentence rows', len(score.get('sentences', [])), flush=True)
        record['pass'] = all(part['pass'] for part in record['chunks'])
        records[file.stem] = record
        result_path.write_text(json.dumps(records, indent=2, ensure_ascii=False), encoding='utf-8')
    browser.close()
