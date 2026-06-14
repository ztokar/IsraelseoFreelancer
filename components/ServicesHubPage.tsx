import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

const TITLE = 'SEO Services Israel | Direct Senior SEO for US Markets, Technical Audits, Content, Local Search and AI Search | Zechariah Tokar';
const DESC = 'SEO services in Israel for companies targeting US and English-speaking markets. Work directly with Zechariah on audits, content, local search, B2B SEO, ecommerce, and AI search.';

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
      { label: 'AI search', path: '/ai-seo-consultant-israel' },
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
            <h1>SEO services in Israel from the person doing the work.</h1>
            <p className="answer">
              I work directly on search engine optimization for companies targeting US and English-speaking markets. Pick the service that matches the problem: weak service pages, technical blockers, local search, ecommerce, AI answers, Reddit, backlinks, or an ongoing SEO plan.
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
              If you already know the issue, choose the matching service page. If you are not sure, send the site. I will look at the pages closest to leads or sales first, then tell you whether the first move should be writing, technical cleanup, links, local work, AI search, or a smaller consult.
            </p>
          </div>
        </section>

        <section className="divider">
          <div className="narrow guide-body">
            <div className="guide-block">
              <span className="eyebrow">01</span>
              <h2 className="block">Start with the search problem, not an SEO package.</h2>
              <p>You may need a technical SEO audit, a stronger service page, better local search visibility, or help earning trust around a page that already ranks. I review the site and the business goal first, then recommend the smallest useful scope. That keeps you from paying for a broad package when one clear problem is holding the site back.</p>
            </div>
            <div className="guide-block">
              <span className="eyebrow">02</span>
              <h2 className="block">One senior operator handles strategy and execution.</h2>
              <p>You work directly with me from the first review through the actual work. I can use Google Search Console, analytics, crawl data, search results, and buyer language to find the gap, then write the page or help fix the site. There is no account-manager relay between the recommendation and the person responsible for it.</p>
            </div>
            <div className="guide-block">
              <span className="eyebrow">03</span>
              <h2 className="block">Built for companies targeting English-speaking markets.</h2>
              <p>I am based in Israel and work mainly with companies selling to the United States and other English-speaking markets. That is useful for Israeli startups and international companies that need US-natural copy, clear positioning, and direct access. I do not position this as Hebrew SEO or local Israeli consumer marketing.</p>
            </div>
            <div className="guide-block">
              <span className="eyebrow">04</span>
              <h2 className="block">Project work or ongoing SEO support.</h2>
              <p>When the site has one known problem, I keep the job focused. That could mean rebuilding a page, auditing a technical problem, or cleaning up local search. If several parts of the site need attention month after month, ongoing support is usually more sensible. I explain the tradeoff before you commit.</p>
            </div>
            <div className="guide-block">
              <span className="eyebrow">05</span>
              <h2 className="block">Useful SEO services include knowing what not to do.</h2>
              <p>More content is not always the answer. Sometimes buyers do not understand the offer. Sometimes the strongest page is broken or the public proof is weak. I would rather fix that first than hand you a longer list of work.</p>
            </div>
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
