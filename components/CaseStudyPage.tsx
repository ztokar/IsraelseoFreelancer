import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CaseStudyPageData } from '../constants-casestudies';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';
import { RelatedPages } from './ConversionSections';

const Check = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);

export const CaseStudyPage: React.FC<{ content: CaseStudyPageData }> = ({ content }) => {
  useEffect(() => {
    updatePageSEO({ title: content.seoTitle, description: content.metaDescription, path: `/case-studies/${content.slug}` });
  }, [content]);

  return (
    <>
      <HeadSEO title={content.seoTitle} description={content.metaDescription} path={`/case-studies/${content.slug}`} />
      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to="/case-studies">Case Studies</NavLink><span>/</span>{content.client}
        </div>

        {/* Hero */}
        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">{content.eyebrow}</span>
            <h1>{content.h1}</h1>
            <p className="answer">{content.intro}</p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Send your site <span className="arrow">↗</span></a>
              <NavLink className="btn btn-ghost" to={content.relatedPath}>{content.relatedLabel}</NavLink>
            </div>
          </div>
        </section>

        {/* Situation + What I did + Result */}
        <section>
          <div className="narrow">
            <h2 className="block">The situation</h2>
            <p>{content.situation}</p>

            <h2 className="block" style={{ marginTop: '40px' }}>What I did</h2>
            <ul className="inc" style={{ gridTemplateColumns: '1fr' }}>
              {content.tactics.map((t) => <li key={t}><Check />{t}</li>)}
            </ul>

            <h2 className="block" style={{ marginTop: '40px' }}>The result</h2>
            <div className="chl" style={{ marginTop: '8px' }}>
              <div><div className="metric">{content.metric}</div></div>
              <div>
                <div className="eyebrow">{content.metricLabel}</div>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '10px', fontSize: '15px' }}>{content.result}</p>
              </div>
            </div>

            {content.proofImg && (
              <figure style={{ margin: '28px 0 0' }}>
                <img src={content.proofImg} alt={content.proofAlt || ''} style={{ width: '100%', borderRadius: '14px', border: '1px solid var(--hair)' }} />
                {content.proofCaption && <figcaption style={{ marginTop: '10px', fontSize: '13.5px', color: 'var(--muted)' }}>{content.proofCaption}</figcaption>}
              </figure>
            )}
          </div>
        </section>

        {/* FAQ */}
        {content.faqs.length > 0 && (
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
                <span className="eyebrow">Common questions</span>
                <h2 className="block" style={{ marginTop: '12px' }}>FAQs</h2>
                <div style={{ marginTop: '24px' }}>
                  {content.faqs.map((f) => (
                    <div className="faq" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <RelatedPages
          title="Related service and proof."
          lede="If this case matches your problem, the connected service page is the cleanest next step."
          links={[
            { label: content.relatedLabel, path: content.relatedPath, type: 'Related service', body: 'The service page connected to this result.' },
            { label: 'Reviews and results', path: '/reviews-results', type: 'Proof', body: 'More recommendations, public results, and places to vet the work.' },
            { label: 'All case studies', path: '/case-studies', type: 'Case studies', body: 'More examples across ecommerce, local, AI search, and Reddit.' },
          ]}
        />

        <ContactCTA
          subject={`New Inquiry from ${content.client} case study`}
          title="Want results like this for your site?"
          body="Send the site, I review the issue, then I reply with the practical first step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
