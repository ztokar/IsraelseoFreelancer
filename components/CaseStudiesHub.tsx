import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CASE_STUDY_PAGES } from '../constants-casestudies';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

const TITLE = 'SEO Case Studies: Real Results in Ecommerce, Local, AI Search & Reddit | Zechariah Tokar';
const DESC = 'Real SEO case studies from Zechariah Tokar: +300% Shopify sales, #1 Brooklyn real estate, AI-search venue ranking, ABA therapy AI recommendations, and a 405K-view Reddit post.';

export const CaseStudiesHub: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/case-studies' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/case-studies" />
      <div className="gp">
        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">Selected work</span>
            <h1>Real campaigns. Real results.</h1>
            <p className="answer">Not polished claims. Each case study is the situation, what I actually did, and what happened, across ecommerce, local, AI search, and Reddit.</p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Send your site <span className="arrow">↗</span></a>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="svc-grid">
              {CASE_STUDY_PAGES.map((c) => (
                <NavLink className="svc" to={`/case-studies/${c.slug}`} key={c.slug} style={{ textDecoration: 'none' }}>
                  <div className="tag" style={{ fontFamily: 'Outfit', fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green)' }}>{c.eyebrow}</div>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '40px', color: 'var(--ink)', letterSpacing: '-0.03em', margin: '8px 0 2px' }}>{c.metric}</div>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: '15px', color: 'var(--ink)' }}>{c.metricLabel}</div>
                  <p style={{ flex: 1 }}>{c.intro}</p>
                  <div style={{ marginTop: '14px', fontFamily: 'Outfit', fontWeight: 600, fontSize: '13.5px', color: 'var(--green-dark)' }}>Read the {c.client} case →</div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA
          subject="New Inquiry from Case Studies Hub"
          title="Want to be the next case study?"
          body="Send the site and what you want SEO to fix first. I will review it and reply with a practical next step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
