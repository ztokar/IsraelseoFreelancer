import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { REVIEWS } from '../constants';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';
import { ProofWall, RelatedPages } from './ConversionSections';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'About Zechariah Tokar | SEO Freelancer Israel',
      description:
        'About Zechariah Tokar, a freelance SEO consultant in Israel helping companies with SEO strategy, content, technical SEO, local SEO, ecommerce SEO, and AI search visibility.',
      path: '/about',
    });
  }, []);

  return (
    <>
      <HeadSEO
        title="About Zechariah Tokar | SEO Freelancer Israel"
        description="About Zechariah Tokar, a freelance SEO consultant in Israel helping companies with SEO strategy, content, technical SEO, local SEO, ecommerce SEO, and AI search visibility."
        path="/about"
      />

      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>About
        </div>

        <section className="shero">
          <div className="wrap shero-grid">
            <div>
              <span className="eyebrow">About</span>
              <h1>I am Zechariah Tokar, a freelance SEO consultant in Israel.</h1>
              <p className="answer">
                I help companies that want practical SEO work without an agency layer. Most of my work is hands-on: service pages, SEO writing, technical audits, local SEO, Shopify and ecommerce SEO, B2B SEO, AI search visibility, Reddit, YouTube, and authority work.
              </p>
              <div className="shero-actions">
                <a href="#contact" className="btn btn-primary">Send your site <span className="arrow">↗</span></a>
                <NavLink to="/seo-services-israel" className="btn btn-ghost">Browse services</NavLink>
              </div>
            </div>

            <aside className="service-card">
              <div className="service-card-top">
                <span>Who you work with</span>
                <b>Directly</b>
              </div>
              <div className="zt-mini">
                <div className="zt-mark">ZT</div>
                <div>
                  <strong>Zechariah Tokar</strong>
                  <span>Freelance SEO consultant</span>
                </div>
              </div>
              <p>"{REVIEWS[0].quote}"</p>
              <div className="service-card-links">
                <span>Strategy</span>
                <span>Execution</span>
                <span>Clear scope</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="authority">
          <div className="wrap">
            <div><span className="eyebrow">Point of view</span></div>
            <p className="big">
              My approach is simple. Look at the site, find the pages closest to leads or sales, fix what is unclear, and build from there. If a task should be done now, I will say that. If it is a distraction, I will say that too.
            </p>
          </div>
        </section>

        <section className="divider">
          <div className="wrap">
            <div className="svc-grid">
              {[
                ['What I usually fix', 'Unclear service pages, weak titles, technical SEO issues, content gaps, local visibility, and pages that do not bring enough inquiries.'],
                ['Who it fits', 'B2B companies, local businesses, ecommerce stores, agencies that need senior SEO help, and teams that want clear execution.'],
                ['How to start', 'Send the site and the problem. I will look at the likely work and quote the hours before anything starts.'],
              ].map(([title, body]) => (
                <article className="svc" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProofWall topic="general" limit={6} />

        <RelatedPages
          title="Useful pages before you reach out."
          lede="If you want to vet the work first, these pages give the clearest picture."
          links={[
            { label: 'Reviews and results', path: '/reviews-results', type: 'Proof', body: 'Recommendations, selected results, and places to vet my work.' },
            { label: 'Case studies', path: '/case-studies', type: 'Case studies', body: 'Specific examples across ecommerce, local, AI search, and Reddit.' },
            { label: 'SEO services', path: '/seo-services-israel', type: 'Services', body: 'The full menu of SEO services and starting points.' },
          ]}
        />

        <ContactCTA
          subject="New Inquiry from About Page"
          title="Send the site and what you want SEO to fix first."
          body="Send the site, I review the issue, then I reply with the practical first step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
