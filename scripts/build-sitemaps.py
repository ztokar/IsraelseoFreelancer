"""Writes public/sitemap.xml (an index) and one sitemap per page type from site-map.ts,
and public/_redirects from content/folds.ts. Run after changing either file: python scripts/build-sitemaps.py"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = 'https://israelseofreelancer.com'
site = (ROOT / 'site-map.ts').read_text()
pages = re.findall(r"\{ path: '([^']+)', label: '(?:[^'\\]|\\.)*', type: '(\w+)'(?:, claim: '\w+')?(?:, hub: '[^']+')?, updated: (D|'[\d-]+')", site)
D = re.search(r"const D = '([\d-]+)'", site).group(1)
groups = {
    'sitemap-services.xml': ('claim', 'leaf'),
    'sitemap-guides.xml': ('guide', 'hub'),
    'sitemap-terms.xml': ('term',),
    'sitemap-proof.xml': ('proof',),
    'sitemap-about.xml': ('home', 'entity', 'legal'),
}
latest = {}
for name, types in groups.items():
    rows = [(p, D if u == 'D' else u.strip("'")) for p, t, u in pages if t in types and not (t == 'hub' and p == '/case-studies' and name == 'sitemap-guides.xml')]
    if name == 'sitemap-proof.xml':
        rows = [(p, D if u == 'D' else u.strip("'")) for p, t, u in pages if t == 'proof' or p == '/case-studies']
    if name == 'sitemap-guides.xml':
        rows = [r for r in rows if r[0] != '/case-studies']
    latest[name] = max(u for _, u in rows)
    body = ''.join(f'  <url><loc>{BASE}{p}</loc><lastmod>{u}</lastmod></url>\n' for p, u in rows)
    (ROOT / 'public' / name).write_text(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{body}</urlset>\n')
idx = ''.join(f'  <sitemap><loc>{BASE}/{n}</loc><lastmod>{u}</lastmod></sitemap>\n' for n, u in latest.items())
(ROOT / 'public' / 'sitemap.xml').write_text(f'<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{idx}</sitemapindex>\n')
(ROOT / 'public' / 'robots.txt').write_text(f'User-agent: *\nAllow: /\nDisallow: /preview/\n\nSitemap: {BASE}/sitemap.xml\n')

folds = re.findall(r"\['(/[^']*)', '(/[^'#]*)(?:#[^']*)?'\]", (ROOT / 'content' / 'folds.ts').read_text().split('export const REDIRECTS')[1])
lines = ['# Static files', '/sitemap.xml  /sitemap.xml  200', '/robots.txt   /robots.txt   200', '',
         '# Pages merged into a better home: one hop, no chains', *[f'{a}  {b}  301' for a, b in folds], '',
         '# Everything else to the app', '/*  /index.html  200', '']
(ROOT / 'public' / '_redirects').write_text('\n'.join(lines))
print(len(pages), 'pages;', {n: len(re.findall('<url>', (ROOT / 'public' / n).read_text())) for n in groups}, len(folds), 'redirects')

# RSS feed: guides and term pages only (folded and hidden pages are not in it).
from email.utils import format_datetime
from datetime import datetime, timezone
from html import escape
items = re.findall(r"\{ path: '([^']+)', label: '((?:[^'\\]|\\.)*)', type: '(guide|term)'[^}]*?updated: (D|'[\d-]+'),\s*summary: '((?:[^'\\]|\\.)*)'", site, re.S)
rss = []
for p, label, t, u, summ in items:
    d = datetime.fromisoformat(D if u == 'D' else u.strip("'")).replace(hour=12, tzinfo=timezone.utc)
    rss.append(f"    <item><title>{escape(label.replace(chr(92), ''))}</title><link>{BASE}{p}</link><guid>{BASE}{p}</guid><pubDate>{format_datetime(d)}</pubDate><description>{escape(summ.replace(chr(92), ''))}</description></item>")
(ROOT / 'public' / 'feed.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Zechariah Tokar: guides on Google, AI answers and Reddit</title>\n    <link>' + BASE + '</link>\n    <description>Guides by Zechariah Tokar, search visibility consultant.</description>\n    <language>en-us</language>\n' + '\n'.join(rss) + '\n  </channel>\n</rss>\n')
print(len(rss), 'feed items')
