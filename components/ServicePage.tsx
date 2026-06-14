import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ServiceContent } from '../types';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';
import { cleanPublicCopy, FitSection, ProofWall, RelatedPages, ResultsGrid, relatedServiceLinks, topicFromSlug } from './ConversionSections';

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
  const cs = content.caseStudyHighlight;
  const topic = topicFromSlug(content.slug);
  const supporting = relatedServiceLinks(content.relatedServices, content.slug);
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Fit', href: '#fit' },
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
              <a className="btn btn-primary" href="#contact">Send your site <span className="arrow-icon"><Arrow /></span></a>
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
              <p className="lead-copy">{cleanPublicCopy(content.marketFit || content.entityDefinition || content.bestFor)}</p>
              <p>{cleanPublicCopy(content.ugcIntro?.what)}</p>
              <p>{cleanPublicCopy(content.ugcIntro?.why)}</p>
              {content.industries && (
                <div className="pills">
                  {content.industries.map((industry) => <span key={industry}>{industry}</span>)}
                </div>
              )}
            </div>
          </div>
        </section>

        <div id="fit">
          <FitSection topic={topic} bestFor={content.bestFor || content.marketFit} />
        </div>

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
              <h2>{cleanPublicCopy(content.ugcIntro?.how || 'I start with the pages closest to leads and fix the work in the right order.')}</h2>
            </div>
            <div className="approach-grid">
              {(content.deepDive && content.deepDive.length > 0 ? content.deepDive : [
                { title: 'What I check first', body: content.ugcIntro?.what || content.description },
                { title: 'Why it matters', body: content.ugcIntro?.why || content.bestFor || content.description },
              ]).slice(0, 2).map((item) => (
                <article key={item.title}>
                  <div className="approach-dot" />
                  <h3>{item.title}</h3>
                  <p>{cleanPublicCopy(item.body)}</p>
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

        {content.deepDive && content.deepDive.length > 2 && (
          <section className="divider">
            <div className="narrow guide-body">
              {content.deepDive.slice(2).map((item, index) => (
                <div className="guide-block" key={item.title}>
                  <span className="eyebrow">0{index + 1}</span>
                  <h2 className="block">{item.title}</h2>
                  <p>{cleanPublicCopy(item.body)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <ProofWall
          topic={topic}
          title="What clients say after working with me."
          lede="Relevant recommendations from companies and founders who hired me for SEO, content, local search, growth, and execution."
          limit={6}
        />

        <ResultsGrid topic={topic} title="Selected wins from similar search problems." />

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

        <RelatedPages
          title="Related services and guides."
          lede="Helpful next pages should be easy to find without making the visitor hunt through the menu."
          links={[...supporting, ...resourceLinks.map((item) => ({ label: item.label, path: item.path, type: item.type }))]}
        />

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
