import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CaseStudyPageData } from '../constants-casestudies';
import { SOCIAL_LINKS } from '../constants';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ProtectedForm } from './ProtectedForm';

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
              <a className="btn btn-primary" href="#contact">Get my quick-wins audit <span className="arrow">↗</span></a>
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

        {/* CTA */}
        <section className="gp-cta" id="contact">
          <div className="wrap">
            <span className="eyebrow">Let's talk</span>
            <h2 style={{ marginTop: '12px' }}>Want results like this for your site?</h2>
            <p>Book a consultation and leave with a plan today, or send your site for a free quick-wins audit. You hear from me directly either way.</p>
            <div className="cta-cols">
              <div className="cta-card book">
                <h3>Book a consultation</h3>
                <p>A focused session on your site, your competitors, and the fastest path to rankings and leads. You leave with a plan you can act on right away.</p>
                <div className="price-note">Paid session · booked instantly</div>
                <a className="btn" href={SOCIAL_LINKS.calendly} target="_blank" rel="noopener noreferrer">Book your consultation <span className="arrow">↗</span></a>
              </div>
              <div className="cta-card">
                <span className="tag2">Or get a free audit</span>
                <h3 style={{ marginTop: '8px', marginBottom: '6px' }}>Send me your site</h3>
                <ProtectedForm
                  formspreeEndpoint="https://formspree.io/f/mpwvyzbr"
                  subject={`New Inquiry from ${content.client} case study`}
                  submitButtonText="Get my quick-wins audit"
                  showMessage={true}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
