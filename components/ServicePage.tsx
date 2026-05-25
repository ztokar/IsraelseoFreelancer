import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ServiceContent } from '../types';
import { SERVICES_LIST } from '../constants';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

interface ServicePageProps {
  content: ServiceContent;
}

const Check = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);

export const ServicePage: React.FC<ServicePageProps> = ({ content }) => {
  useEffect(() => {
    const pageTitle = content.seoTitle?.includes('Zechariah') ? content.seoTitle : `${content.seoTitle || content.title} | Zechariah Tokar`;
    updatePageSEO({
      title: pageTitle,
      description: content.metaDescription || content.description,
      path: `/${content.slug}`,
    });
  }, [content]);

  const heroTitle = content.title.replace(/\s*\.\s*$/, '');
  const supporting = SERVICES_LIST.filter((s) => s.slug !== content.slug).slice(0, 3);
  const cs = content.caseStudyHighlight;

  return (
    <>
      <HeadSEO
        title={content.seoTitle?.includes('Zechariah') ? content.seoTitle : `${content.seoTitle || content.title} | Zechariah Tokar`}
        description={content.metaDescription || content.description}
        path={`/${content.slug}`}
      />
      <div className="gp">
        {/* Breadcrumb */}
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to="/seo-services-israel">Services</NavLink><span>/</span>{content.subtitle}
        </div>

        {/* Hero */}
        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">{content.subtitle}</span>
            <h1>{heroTitle}</h1>
            <p className="answer">{content.description}</p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Get my quick-wins audit <span className="arrow">↗</span></a>
              {cs && <a className="btn btn-ghost" href="#case">See a real result</a>}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section>
          <div className="narrow">
            <h2 className="block">Who this is for</h2>
            <p>{content.marketFit || content.entityDefinition || content.bestFor}</p>
            {content.industries && (
              <div className="pills">
                {content.industries.map((i) => <span key={i}>{i}</span>)}
              </div>
            )}
          </div>
        </section>

        {/* What's included */}
        {content.features && content.features.length > 0 && (
          <section className="divider">
            <div className="wrap">
              <h2 className="block">What is included</h2>
              <p className="lede" style={{ fontSize: '17px' }}>The work that actually moves rankings and revenue, done for you.</p>
              <ul className="inc">
                {content.features.map((f) => <li key={f}><Check />{f}</li>)}
              </ul>
            </div>
          </section>
        )}

        {/* Mini process */}
        {content.process && content.process.steps.length > 0 && (
          <section className="divider">
            <div className="wrap">
              <h2 className="block">{content.process.title}</h2>
              <div className="pmini">
                {content.process.steps.slice(0, 4).map((step, i) => (
                  <div className="c" key={i}>
                    <div className="n">0{i + 1}</div>
                    <p style={{ marginTop: '6px', color: 'var(--ink-soft)', fontSize: '14.5px' }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case highlight */}
        {cs && (
          <section className="divider" id="case">
            <div className="wrap">
              <div className="chl">
                <div><div className="metric">{cs.metric}</div></div>
                <div>
                  <div className="eyebrow">{cs.client}{cs.industry ? ` · ${cs.industry}` : ''}</div>
                  <h3>{cs.context}</h3>
                  <p>{cs.description}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Supporting links */}
        <section className="support divider">
          <div className="wrap">
            <h2 className="block">Related services</h2>
            <p className="lede" style={{ fontSize: '17px' }}>This works best alongside these.</p>
            <div className="slink-grid">
              {supporting.map((s) => (
                <NavLink className="slink" to={`/${s.slug}`} key={s.slug}>
                  <div className="k">{s.subtitle}</div>
                  <h3>{s.title.replace(/\s*\.\s*$/, '')}</h3>
                  <p>{s.marketFit || s.description}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs + schema */}
        {content.faqs && content.faqs.length > 0 && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: content.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                  })),
                }),
              }}
            />
            <section className="divider">
              <div className="narrow">
                <span className="eyebrow">Common questions</span>
                <h2 className="block" style={{ marginTop: '12px' }}>Frequently asked questions</h2>
                <div style={{ marginTop: '24px' }}>
                  {content.faqs.map((faq) => (
                    <div className="faq" key={faq.question}>
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <ContactCTA
          subject={`New Inquiry: ${content.title}`}
          title={content.cta || 'Tell me what you want SEO to fix first.'}
          body="Send the site, your email, and the issue you want solved. I will review it and reply with the practical next step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
