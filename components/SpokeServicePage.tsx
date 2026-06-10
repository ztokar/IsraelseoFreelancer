import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SpokeService } from '../types';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';
import { FitSection, ProofWall, RelatedPages, ResultsGrid, cleanPublicCopy, topicFromSlug } from './ConversionSections';

interface SpokeServicePageProps {
  content: SpokeService;
}

const Check = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);

const Arrow = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" /></svg>
);

const relatedPathByLabel: Record<string, string> = {
  'AI SEO / GEO': '/ai-seo-consultant-israel',
  'SEO social posting': '/content-marketing-for-seo',
  'Content marketing for SEO': '/content-marketing-for-seo',
  'Reddit SEO': '/reddit-seo',
  'Reddit marketing services': '/reddit-marketing-services',
  'Reddit marketing expert': '/reddit-marketing-expert',
  'Reddit posting service': '/reddit-posting-service',
  'How Reddit gets cited by AI': '/reddit-ai-citations',
  'Reddit for B2B SaaS lead generation': '/reddit-b2b-saas-lead-generation',
  'Reddit vs LinkedIn for B2B leads': '/reddit-vs-linkedin-b2b-leads',
  'Reddit ads vs organic': '/reddit-ads-vs-organic',
  'Monitor brand mentions on Reddit': '/monitor-brand-mentions-on-reddit',
  'How to market on Reddit without getting banned': '/how-to-market-on-reddit-without-getting-banned',
  'How to find subreddits for marketing': '/how-to-find-subreddits-for-marketing',
  'Why Reddit posts get removed': '/why-reddit-posts-get-removed',
  'SEO services': '/seo-services-israel',
  'SEO consulting': '/seoconsulting',
  'B2B SEO': '/b2b-seo-israel',
  'SaaS SEO': '/saas-seo',
  'Cybersecurity SEO': '/cybersecurity-seo',
  'Fintech SEO': '/fintech-seo',
  'SEO writing': '/blog-content-seo',
  'Technical SEO audit': '/technical-seo-audit',
  'Backlinks': '/link-building-services',
  'Google Business Profile SEO': '/google-business-profile-seo',
  'Local citations / directories': '/local-citations-directories',
};

export const SpokeServicePage: React.FC<SpokeServicePageProps> = ({ content }) => {
  useEffect(() => {
    updatePageSEO({
      title: content.seoTitle,
      description: content.metaDescription,
      path: `/${content.slug}`,
    });
  }, [content]);

  const topic = topicFromSlug(content.slug);
  const relatedLinks = content.related.map((item) => ({
    label: item,
    path: relatedPathByLabel[item] || content.parentPath,
    type: item.includes('How') || item.includes('Why') ? 'Guide' : 'Related service',
    body: item.includes('Reddit')
      ? 'Useful if buyers compare you in community threads before they trust the main site.'
      : 'A connected page if this service is part of a larger search visibility problem.',
  }));

  return (
    <>
      <HeadSEO title={content.seoTitle} description={content.metaDescription} path={`/${content.slug}`} />

      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to={content.parentPath}>{content.parentLabel}</NavLink><span>/</span>{content.eyebrow}
        </div>

        <section className="shero">
          <div className="wrap shero-grid">
            <div>
              <span className="eyebrow">{content.eyebrow}</span>
              <h1>{content.title}</h1>
              <p className="answer">{cleanPublicCopy(content.intro)}</p>
              {content.fit && <p className="lede" style={{ marginTop: '18px' }}>{cleanPublicCopy(content.fit)}</p>}
              <div className="shero-actions">
                <a className="btn btn-primary" href="#contact">Send your site <span className="arrow-icon"><Arrow /></span></a>
                <NavLink className="btn btn-ghost" to={content.parentPath}>View {content.parentLabel}</NavLink>
              </div>
            </div>

            <aside className="service-card">
              <div className="service-card-top">
                <span>Best starting point</span>
                <b>By consultation</b>
              </div>
              <div className="zt-mini">
                <div className="zt-mark">ZT</div>
                <div>
                  <strong>Zechariah Tokar</strong>
                  <span>Freelance SEO consultant</span>
                </div>
              </div>
              <p>{cleanPublicCopy(content.bestFor)}</p>
              <div className="service-card-links">
                <span>Scope first</span>
                <span>Proof-led pages</span>
                <span>Clear next step</span>
              </div>
            </aside>
          </div>
        </section>

        <FitSection topic={topic} bestFor={content.bestFor} notFor={content.avoids} />

        <section className="divider service-included">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What I handle</span>
              <h2>{content.handleTitle || 'Clear scope before work starts.'}</h2>
              <p className="lede">{cleanPublicCopy(content.handleIntro || 'Use this page to see whether the service fits what you need, then send the site for a practical next step.')}</p>
            </div>
            <ul className="inc">
              {content.handles.map((item) => <li key={item}><Check />{cleanPublicCopy(item)}</li>)}
            </ul>
          </div>
        </section>

        <section className="service-approach">
          <div className="wrap">
            <div className="approach-head">
              <span className="eyebrow">Positioning</span>
              <h2>Most teams do not need more SEO activity. They need the right search problem fixed first.</h2>
            </div>
            <div className="approach-grid">
              <article>
                <div className="approach-dot" />
                <h3>The usual alternative</h3>
                <p>Publish more, ask an agency for another report, or wait for the current pages to start working.</p>
              </article>
              <article>
                <div className="approach-dot" />
                <h3>Why that stalls</h3>
                <p>{cleanPublicCopy(content.proof)}</p>
              </article>
              <article>
                <div className="approach-dot full" />
                <h3>What I do instead</h3>
                <p>I look at the page, channel, or buyer question closest to a lead, then build the cleanest path from search to trust to inquiry.</p>
              </article>
            </div>
          </div>
        </section>

        <ProofWall topic={topic} limit={6} />
        <ResultsGrid topic={topic} title="Selected results from related search visibility work." />

        <RelatedPages
          title="Connected pages for this service."
          lede="Use these if the real problem sits next to this service, not only inside it."
          links={relatedLinks}
        />

        {content.faqs && content.faqs.length > 0 && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: content.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
                }),
              }}
            />
            <section className="divider">
              <div className="narrow">
                <span className="eyebrow">More questions</span>
                <h2 className="block" style={{ marginTop: '12px' }}>FAQs</h2>
                <div style={{ marginTop: '24px' }}>
                  {content.faqs.map((f) => <div className="faq" key={f.q}><h3>{f.q}</h3><p>{cleanPublicCopy(f.a)}</p></div>)}
                </div>
              </div>
            </section>
          </>
        )}

        <ContactCTA
          subject={`New SEO Quote Request: ${content.title}`}
          title={content.cta}
          body="Send the site, I review the issue, then I reply with the practical first step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
