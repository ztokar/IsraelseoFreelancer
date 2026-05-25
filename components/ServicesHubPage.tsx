import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

const TITLE = 'SEO Services Israel | Freelance SEO, AI Search, Reddit, Local and Ecommerce SEO | Zechariah Tokar';
const DESC = 'Choose the SEO service that fits the next business problem: technical cleanup, service pages, local search, Shopify SEO, AI visibility, Reddit, or ongoing support.';

const serviceGroups = [
  {
    title: 'Core SEO work',
    body: 'Start here when the site needs clearer priorities, better pages, or technical cleanup.',
    links: [
      { label: 'Freelance SEO', path: '/freelance-seo-israel' },
      { label: 'SEO consulting', path: '/seoconsulting' },
      { label: 'Technical SEO audit', path: '/technical-seo-audit' },
      { label: 'SEO writing', path: '/content-marketing-for-seo' },
    ],
  },
  {
    title: 'Growth channels',
    body: 'Use these when buyers are searching beyond normal Google results.',
    links: [
      { label: 'AI search visibility', path: '/ai-seo-consultant-israel' },
      { label: 'Reddit SEO', path: '/reddit-seo' },
      { label: 'Reddit marketing', path: '/reddit-marketing-services' },
      { label: 'YouTube SEO', path: '/youtube-seo' },
    ],
  },
  {
    title: 'Business type',
    body: 'Choose the page that matches how your customers find and compare you.',
    links: [
      { label: 'B2B SEO', path: '/b2b-seo-israel' },
      { label: 'Shopify SEO', path: '/shopify-seo' },
      { label: 'Google Business Profile', path: '/google-business-profile-seo' },
      { label: 'Link building', path: '/link-building-services' },
    ],
  },
];

export const ServicesHubPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/seo-services-israel' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/seo-services-israel" />
      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>SEO services
        </div>

        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">SEO services</span>
            <h1>SEO help for the page, channel, or search problem in front of you.</h1>
            <p className="answer">
              I work directly on SEO strategy and execution for companies targeting US and English-speaking markets. Pick the service that matches the problem: weak service pages, technical blockers, local visibility, ecommerce search, AI answers, Reddit, backlinks, or a monthly SEO plan.
            </p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Send your site</a>
              <NavLink className="btn btn-ghost" to="/case-studies">View case studies</NavLink>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Choose the right starting point</span>
              <h2>Not every site needs the same SEO work.</h2>
              <p className="lede">
                Some sites need a sharper offer page. Some need a crawl fix. Some need proof in Reddit, AI search, or local results before the main site converts. These groups help you find the closest fit.
              </p>
            </div>
            <div className="svc-grid">
              {serviceGroups.map((group) => (
                <article className="svc" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.body}</p>
                  <div className="links">
                    {group.links.map((link) => (
                      <NavLink key={link.path} to={link.path}>{link.label}</NavLink>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="narrow">
            <h2 className="block">How to choose</h2>
            <p>
              If you already know the issue, choose the matching service page. If you are not sure, send the site. I will look at the pages closest to leads or sales first, then tell you whether the first move should be writing, technical cleanup, links, local work, AI visibility, or a smaller consult.
            </p>
          </div>
        </section>
      </div>

      <ContactCTA
        subject="New SEO Services Hub Inquiry"
        title="Send the site and I will point you to the right SEO service."
        body="You do not need to diagnose the problem first. Send the URL and what you want fixed, and I will reply with the cleanest next step."
      />
    </>
  );
};
