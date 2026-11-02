import React from 'react';
import { NavLink } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { CLAIMS, HUBS, PAGE_BY_PATH, SITE_URL } from '../../site-map';

// The defined term each term home owns (DefinedTerm schema and the tie-back line).
export const TERM_NAMES: Record<string, string> = {
  '/what-is-answer-engine-optimization': 'answer engine optimization',
  '/what-is-generative-engine-optimization': 'generative engine optimization',
  '/how-to-rank-in-google-ai-overviews': 'Google AI Overviews',
  '/how-to-track-ai-search-visibility': 'AI search visibility',
  '/track-brand-mentions-in-chatgpt': 'ChatGPT brand mentions',
  '/reddit-seo': 'Reddit SEO',
  '/reddit-karma-account-age': 'Reddit karma',
  '/google-business-profile-seo': 'Google Business Profile',
  '/technical-seo-audit': 'technical SEO audit',
};

const fmt = (d: string) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// Closing block every guide, term, leaf and proof page ends with: one link up to its claim (proves),
// its hub, and the author line to About (by). Claim pages, hubs and home carry none of it.
export const PageEnd: React.FC<{ path: string }> = ({ path }) => {
  const page = PAGE_BY_PATH[path];
  if (!page || !['guide', 'term', 'leaf', 'proof', 'noindex'].includes(page.type)) return null;
  if (page.type === 'noindex' && !page.hub) return null;
  const claim = page.claim ? CLAIMS[page.claim] : null;
  const hub = page.hub ? HUBS[page.hub] : null;
  const term = TERM_NAMES[path];
  const url = `${SITE_URL}${path}`;
  const schema: Record<string, unknown>[] = [];
  if (page.type === 'guide' || page.type === 'term') {
    schema.push({
      '@context': 'https://schema.org', '@type': 'Article', headline: page.label, url,
      dateModified: page.updated, author: { '@id': `${SITE_URL}/#person` }, publisher: { '@id': `${SITE_URL}/#organization` },
      ...(term ? { about: { '@id': `${url}#term` } } : {}),
    });
  }
  if (term) {
    schema.push({
      '@context': 'https://schema.org', '@type': 'DefinedTerm', '@id': `${url}#term`, name: term, url,
      inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Search visibility terms', url: `${SITE_URL}${page.hub || path}` },
    });
  }
  return (
    <section className="page-end" aria-label="About this page">
      {schema.length > 0 && <Head>{schema.map((s, i) => <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>)}</Head>}
      <div className="pe-wrap">
        {claim && page.type !== 'leaf' && page.type !== 'proof' && (
          <p className="pe-close">
            {term ? <>How {term} relates to {claim.label}: </> : <>Want this done for your company? </>}
            {claim.line} <NavLink to={claim.path}>See {claim.label}</NavLink>.
          </p>
        )}
        {claim && page.type === 'leaf' && (
          <p className="pe-close">Part of <NavLink to={claim.path}>{claim.label}</NavLink>. {claim.line}</p>
        )}
        {claim && page.type === 'proof' && (
          <p className="pe-close">This result backs <NavLink to={claim.path}>{claim.label}</NavLink>. More named results are on the <NavLink to="/case-studies">results page</NavLink>.</p>
        )}
        <p className="pe-by">
          {page.type === 'guide' || page.type === 'term' || page.type === 'noindex' ? 'Written by ' : 'Work done by '}
          <NavLink to="/about">Zechariah Tokar</NavLink>, search visibility consultant.
          {(page.type === 'guide' || page.type === 'term') && <> Updated <time dateTime={page.updated}>{fmt(page.updated)}</time>.</>}
          {hub && page.hub !== '/case-studies' && <> More in <NavLink to={page.hub!}>{hub.label}</NavLink>.</>}
        </p>
      </div>
    </section>
  );
};
