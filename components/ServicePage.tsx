import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ServiceContent } from '../types';
import { LINKEDIN_FEATURED_RESULTS, REVIEWS, SERVICES_LIST } from '../constants';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

interface ServicePageProps {
  content: ServiceContent;
}

const Check = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);

const Arrow = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" /></svg>
);

const resourceLinks = [
  { label: 'How to get cited by ChatGPT', path: '/how-to-get-cited-by-chatgpt', type: 'AI guide' },
  { label: 'How to market on Reddit', path: '/how-to-market-on-reddit', type: 'Reddit guide' },
  { label: 'Using Claude Code for content marketing', path: '/blog/claude-code-content-marketing-startups', type: 'Blog' },
];

const publicCopy = (text?: string) => (text || '')
  .replace(/information gain/gi, 'specific detail')
  .replace(/retrieval/gi, 'visibility')
  .replace(/retrieve the brand/gi, 'understand the brand');

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
  const relatedNames = content.relatedServices || [];
  const supportingFromContent = relatedNames
    .map((name) => SERVICES_LIST.find((service) => {
      const haystack = `${service.title} ${service.subtitle} ${service.primaryKeyword || ''}`.toLowerCase();
      return haystack.includes(name.toLowerCase());
    }))
    .filter(Boolean) as typeof SERVICES_LIST;
  const supporting = (supportingFromContent.length ? supportingFromContent : SERVICES_LIST.filter((service) => service.slug !== content.slug)).slice(0, 3);
  const cs = content.caseStudyHighlight;
  const pageReviews = REVIEWS.slice(0, 9);
  const featuredResults = LINKEDIN_FEATURED_RESULTS.slice(0, 4);
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Approach', href: '#approach' },
    { label: 'Proof', href: '#proof' },
    { label: 'Resources', href: '#resources' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      <HeadSEO
        title={content.seoTitle?.includes('Zechariah') ? content.seoTitle : `${content.seoTitle || content.title} | Zechariah Tokar`}
        description={content.metaDescription || content.description}
        path={`/${content.slug}`}
      />
      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to="/seo-services-israel">Services</NavLink><span>/</span>{content.subtitle}
        </div>

        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">{content.subtitle}</span>
            <h1>{heroTitle}</h1>
            <p className="answer">{content.description}</p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Get my quick-wins audit <span className="arrow-icon"><Arrow /></span></a>
              {cs && <a className="btn btn-ghost" href="#proof">See proof</a>}
            </div>
          </div>
        </section>

        <nav className="section-tabs" aria-label={`${content.subtitle} page sections`}>
          <div className="wrap">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
        </nav>

        <section id="overview">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">Overview</span>
              <h2>Clear scope before work starts.</h2>
            </div>
            <div className="copy-stack">
              <p className="lead-copy">{publicCopy(content.marketFit || content.entityDefinition || content.bestFor)}</p>
              <p>{publicCopy(content.ugcIntro?.what)}</p>
              <p>{publicCopy(content.ugcIntro?.why)}</p>
              {content.industries && (
                <div className="pills">
                  {content.industries.map((industry) => <span key={industry}>{industry}</span>)}
                </div>
              )}
            </div>
          </div>
        </section>

        {content.features && content.features.length > 0 && (
          <section className="divider service-included">
            <div className="wrap">
              <div className="sec-head">
                <span className="eyebrow">What is included</span>
                <h2>The work stays practical and tied to the page, search problem, or channel.</h2>
                <p className="lede">You get the pieces needed to make the service useful, not a bloated checklist.</p>
              </div>
              <ul className="inc">
                {content.features.map((feature) => <li key={feature}><Check />{feature}</li>)}
              </ul>
            </div>
          </section>
        )}

        <section className="service-approach" id="approach">
          <div className="wrap">
            <div className="approach-head">
              <span className="eyebrow">Approach</span>
              <h2>{publicCopy(content.ugcIntro?.how || 'I start with the pages closest to leads and fix the work in the right order.')}</h2>
            </div>
            <div className="approach-grid">
              {(content.deepDive && content.deepDive.length > 0 ? content.deepDive : [
                { title: 'What I check first', body: content.ugcIntro?.what || content.description },
                { title: 'Why it matters', body: content.ugcIntro?.why || content.bestFor || content.description },
              ]).slice(0, 2).map((item) => (
                <article key={item.title}>
                  <div className="approach-dot" />
                  <h3>{item.title}</h3>
                  <p>{publicCopy(item.body)}</p>
                </article>
              ))}
              <article>
                <div className="approach-dot full" />
                <h3>{content.process?.title || 'Process'}</h3>
                <ol>
                  {content.process.steps.slice(0, 4).map((step) => <li key={step}>{step}</li>)}
                </ol>
              </article>
            </div>
          </div>
        </section>

        <section className="proof-cases" id="proof">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">LinkedIn recommendations</span>
              <h2>What clients say after working with me.</h2>
              <p className="lede">Real recommendations from people who hired me for SEO, content, local search, and growth work.</p>
            </div>
            <div className="review-wall">
              {pageReviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-head">
                    <div className="review-initial">{review.initial}</div>
                    <div>
                      <h3>{review.name}</h3>
                      <p>{review.role}</p>
                    </div>
                  </div>
                  <blockquote>"{review.quote}"</blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="result-strip divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Selected results</span>
              <h2>Selected wins from SEO, local search, ecommerce, and AI visibility.</h2>
            </div>
            <div className="featured-result-grid">
              {featuredResults.map((item) => (
                <NavLink className="featured-result" to={item.path} key={item.title}>
                  <img src={item.image} alt={item.alt} />
                  <div>
                    <span>{item.title}</span>
                    <strong>{item.metric}</strong>
                    <p>{item.description}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <section className="person-section divider">
          <div className="wrap person-grid">
            <div className="person-mark">ZT</div>
            <div>
              <span className="eyebrow">Who you work with</span>
              <h2>You work directly with Zechariah.</h2>
              <p className="lede">The strategy and execution do not get handed to a junior team. I look at the site, decide what should be fixed first, and keep the next step clear enough to act on.</p>
            </div>
            <NavLink className="btn btn-ghost" to="/about">About Zechariah <span className="arrow-icon"><Arrow /></span></NavLink>
          </div>
        </section>

        <section className="support divider" id="resources">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Keep exploring</span>
              <h2>Related services and guides.</h2>
              <p className="lede">Helpful next pages should be easy to find without making the visitor hunt through the menu.</p>
            </div>
            <div className="slink-grid">
              {supporting.map((service) => (
                <NavLink className="slink" to={`/${service.slug}`} key={service.slug}>
                  <div className="k">{service.subtitle}</div>
                  <h3>{service.title.replace(/\s*\.\s*$/, '')}</h3>
                  <p>{service.marketFit || service.description}</p>
                  <span className="card-arrow"><Arrow /></span>
                </NavLink>
              ))}
            </div>
            <div className="resource-grid">
              {resourceLinks.map((item) => (
                <NavLink className="resource-card" to={item.path} key={item.path}>
                  <span>{item.type}</span>
                  <h3>{item.label}</h3>
                  <Arrow />
                </NavLink>
              ))}
            </div>
          </div>
        </section>

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
            <section className="divider" id="faqs">
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
