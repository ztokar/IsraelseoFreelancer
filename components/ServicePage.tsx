import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ServiceContent } from '../types';
import { SOCIAL_LINKS, SERVICES_LIST } from '../constants';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ProtectedForm } from './ProtectedForm';

interface ServicePageProps {
  content: ServiceContent;
}

const Check = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);

export const ServicePage: React.FC<ServicePageProps> = ({ content }) => {
  useEffect(() => {
    updatePageSEO({
      title: `${content.seoTitle || content.title} | Zechariah Tokar`,
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
        title={`${content.seoTitle || content.title} | Zechariah Tokar`}
        description={content.metaDescription || content.description}
        path={`/${content.slug}`}
      />
      <div className="gp">
        {/* Breadcrumb */}
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to="/#cases">Services</NavLink><span>/</span>{content.subtitle}
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
            <p>{content.marketFit || content.entityDefinition}</p>
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

        {/* CTA */}
        <section className="gp-cta" id="contact">
          <div className="wrap">
            <span className="eyebrow">Let's talk</span>
            <h2 style={{ marginTop: '12px' }}>{content.cta || 'Ready to get found and get leads?'}</h2>
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
                  subject={`New Inquiry: ${content.title}`}
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
