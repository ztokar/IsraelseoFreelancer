import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import type { ServiceOffer } from '../service-offers';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

const Copy: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return <>{parts.map((part, index) => {
    const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (!match) return <React.Fragment key={index}>{part}</React.Fragment>;
    return match[2].startsWith('/')
      ? <NavLink key={index} to={match[2]}>{match[1]}</NavLink>
      : <a key={index} href={match[2]} rel="nofollow noopener noreferrer" target="_blank">{match[1]}</a>;
  })}</>;
};

export const ServiceOfferPage: React.FC<{ offer: ServiceOffer }> = ({ offer }) => {
  const path = `/${offer.slug}`;
  useEffect(() => {
    updatePageSEO({ title: offer.seoTitle, description: offer.description, path, image: offer.photo });
  }, [offer, path]);

  const canonical = `https://israelseofreelancer.com${path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service', '@id': `${canonical}#service`, name: offer.title,
        description: offer.answer, url: canonical,
        provider: { '@id': 'https://israelseofreelancer.com/#person' },
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://israelseofreelancer.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://israelseofreelancer.com/seo-services-israel' },
          { '@type': 'ListItem', position: 3, name: offer.label, item: canonical },
        ],
      },
      {
        '@type': 'FAQPage', '@id': `${canonical}#faqs`, mainEntity: offer.faqs.map((faq) => ({
          '@type': 'Question', name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return <>
    <HeadSEO title={offer.seoTitle} description={offer.description} path={path} image={offer.photo} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <article className="gp service-offer">
      <nav className="wrap crumb" aria-label="Breadcrumb">
        <NavLink to="/">Home</NavLink><span aria-hidden="true">/</span>
        <NavLink to="/seo-services-israel">Services</NavLink><span aria-hidden="true">/</span>
        <span>{offer.label}</span>
      </nav>
      <section className="offer-hero">
        <div className="wrap offer-hero-grid">
          <div>
            <span className="eyebrow">Work directly with Zechariah Tokar</span>
            <h1>{offer.title}</h1>
            <p className="answer">{offer.answer}</p>
            <p className="offer-intro">{offer.intro}</p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Discuss my site <span aria-hidden="true">↗</span></a>
              <a className="btn btn-ghost" href="#scope">See the scope</a>
            </div>
          </div>
          <figure className="offer-portrait">
            <img src={offer.photo} alt={offer.photoAlt}
              width={offer.slug === 'geo-content-optimization' || offer.slug === 'ai-visibility-tracking-services' ? 562 : 800}
              height={offer.slug === 'ai-visibility-audit' ? 450 : offer.slug === 'chatgpt-ads-management' ? 447 : 1000}
              {...{ fetchpriority: 'high' }} />
            <figcaption>One consultant. Research, recommendations and hands-on work.</figcaption>
          </figure>
        </div>
      </section>

      <section className="offer-worksheet" aria-labelledby="worksheet-title">
        <div className="wrap">
          <span className="eyebrow">A useful starting point</span>
          <h2 id="worksheet-title">{offer.sampleTitle}</h2>
          <p className="offer-note">{offer.sampleNote}</p>
          <table className="offer-table">
            <caption className="sr-only">{offer.sampleTitle}</caption>
            <thead><tr>{offer.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead>
            <tbody>{offer.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0
              ? <th key={index} scope="row" data-label={offer.columns[index]}>{cell}</th>
              : <td key={index} data-label={offer.columns[index]}>{cell}</td>)}</tr>)}</tbody>
          </table>
          <p className="offer-takeaway">{offer.takeaway}</p>
        </div>
      </section>

      <section id="scope" className="offer-detail-section">
        <div className="wrap offer-content-grid">
          <aside className="offer-aside">
            <span className="eyebrow">Before you hire</span>
            <h2>Know what you are buying.</h2>
            <p>Read the scope, see the evidence and ask about your site.</p>
            <a href="#contact" className="text-link">Send your site <span aria-hidden="true">↗</span></a>
          </aside>
          <div className="offer-sections">
            {offer.sections.map((section, index) => <React.Fragment key={section.title}>
              <details className="offer-details" open={index < 2}>
                <summary><h2>{section.title}</h2><span aria-hidden="true" className="offer-toggle">+</span></summary>
                <div className="offer-prose">{section.paragraphs.map((paragraph) => <p key={paragraph}><Copy text={paragraph} /></p>)}</div>
              </details>
              {index === 2 && <figure className="offer-proof">
                <img src={offer.proof.image} alt={offer.proof.alt} width="480" height={offer.proof.image.includes('ai-audit') ? 127 : 255} loading="lazy" decoding="async" />
                <figcaption>{offer.proof.caption} <NavLink to={offer.proof.path}>{offer.proof.link} <span aria-hidden="true">↗</span></NavLink></figcaption>
              </figure>}
            </React.Fragment>)}
          </div>
        </div>
      </section>

      <section id="faqs" className="offer-faq-section">
        <div className="wrap offer-content-grid">
          <div><span className="eyebrow">Questions before starting</span><h2>Let’s make the scope clear.</h2></div>
          <div>{offer.faqs.map((faq) => <details className="offer-details" key={faq.question}>
            <summary><h3>{faq.question}</h3><span aria-hidden="true" className="offer-toggle">+</span></summary>
            <div className="offer-prose"><p>{faq.answer}</p></div>
          </details>)}</div>
        </div>
      </section>
      <section className="offer-resources">
        <div className="wrap">
          <span className="eyebrow">Keep reading</span><h2>Choose the next step that fits.</h2>
          <div className="offer-resource-links">{offer.resources.map((resource) => <NavLink key={resource.path} to={resource.path}>{resource.label}<span aria-hidden="true">↗</span></NavLink>)}</div>
          <NavLink to="/seo-services-israel" className="text-link">View all services <span aria-hidden="true">↗</span></NavLink>
        </div>
      </section>
    </article>
    <ContactCTA title={offer.cta} body="Send your website, the service you sell and the problem you want to solve. I will review it and reply with the practical next step."
      subject={`${offer.label} enquiry`} service={offer.label} issueLabel="What you want to improve"
      messageLabel="What would you like help with?" messagePlaceholder="Tell me about your offer, your audience and what you want to improve." />
  </>;
};
