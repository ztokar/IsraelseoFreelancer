"""Check the generated service pages and their real inbound link graph."""
import argparse
import json
from pathlib import Path
from urllib.parse import urlsplit
from xml.etree import ElementTree

from bs4 import BeautifulSoup

parser = argparse.ArgumentParser()
parser.add_argument('--dist', default='dist')
parser.add_argument('--out', required=True)
args = parser.parse_args()
root = Path(args.dist)
slugs = ['ai-visibility-audit', 'geo-content-optimization', 'ai-visibility-tracking-services', 'chatgpt-ads-management']
sitemap = ElementTree.fromstring((root / 'sitemap.xml').read_text(encoding='utf-8'))
urls = [node.text for node in sitemap.findall('.//{*}loc')]
errors = []
inbound = {slug: [] for slug in slugs}
for source in root.rglob('*.html'):
    soup = BeautifulSoup(source.read_text(encoding='utf-8'), 'html.parser')
    main = soup.select_one('main') or soup
    for slug in slugs:
        if main.select_one(f'a[href="/{slug}"]'):
            inbound[slug].append(str(source.relative_to(root)))
checks = []
for slug in slugs:
    file = root / f'{slug}.html'
    html = file.read_text(encoding='utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    canonical = f'https://israelseofreelancer.com/{slug}'
    row = {
        'slug': slug,
        'h1_count': len(soup.find_all('h1')),
        'canonical': [link.get('href') for link in soup.select('link[rel="canonical"]')],
        'title_count': len(soup.find_all('title')),
        'description_count': len(soup.select('meta[name="description"]')),
        'h1_byte_position': len(html[:html.index('<h1')].encode('utf-8')),
        'html_bytes': len(html.encode('utf-8')),
        'inbound': inbound[slug],
        'sitemap': canonical in urls,
        'faq_matches': True,
        'broken_links': [],
        'missing_assets': [],
    }
    if row['h1_count'] != 1 or row['title_count'] != 1 or row['description_count'] != 1:
        errors.append(f'{slug}: heading or metadata count')
    if row['canonical'] != [canonical] or not row['sitemap'] or not row['inbound']:
        errors.append(f'{slug}: canonical, sitemap or inbound link')
    if row['h1_byte_position'] > 50000:
        errors.append(f'{slug}: main heading buried in source')
    for script in soup.select('script[type="application/ld+json"]'):
        data = json.loads(script.string or script.get_text())
        for item in data.get('@graph', [data]):
            if item.get('@type') == 'FAQPage':
                for question in item['mainEntity']:
                    if question['name'] not in soup.get_text(' ', strip=True) or question['acceptedAnswer']['text'] not in soup.get_text(' ', strip=True):
                        row['faq_matches'] = False
                        errors.append(f'{slug}: FAQ schema differs from visible content')
    for link in soup.select('a[href^="/"]'):
        path = urlsplit(link['href']).path
        local = root / path.lstrip('/') if path != '/' else root / 'index.html'
        if not local.exists() and not local.with_suffix('.html').exists():
            row['broken_links'].append(path)
    for image in soup.select('img[src^="/"]'):
        if not (root / image['src'].lstrip('/')).exists():
            row['missing_assets'].append(image['src'])
    if row['broken_links'] or row['missing_assets']:
        errors.append(f'{slug}: missing internal target or image')
    checks.append(row)
for url in urls:
    path = urlsplit(url).path.strip('/')
    if not (root / (f'{path}.html' if path else 'index.html')).exists():
        errors.append(f'Sitemap URL lacks generated HTML: {url}')
result = {'pass': not errors, 'sitemap_urls': len(urls), 'pages': checks, 'errors': errors}
Path(args.out).write_text(json.dumps(result, indent=2), encoding='utf-8')
print(json.dumps(result, indent=2))
raise SystemExit(bool(errors))
