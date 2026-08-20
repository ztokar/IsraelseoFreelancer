import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';
import { ProofWall, RelatedPages } from './ConversionSections';

const TITLE = 'SEO Freelancer vs Agency: How to Choose | Zechariah Tokar';
const DESC = 'Who actually does the work, how decisions get made, and where each option wins. An honest comparison from someone on one side of it.';

const FAQS = [
  {
    q: 'Should I hire an SEO freelancer or an agency?',
    a: 'Hire a freelancer when you want the person doing the strategy to also do the work, and when SEO is the main channel you are trying to fix. Hire an agency when you need several channels running at once and you have someone internally to manage them.',
  },
  {
    q: 'Is a freelancer risky compared to an agency?',
    a: 'There is a real single-person risk, and it is fair to ask about it. The trade is that you always know who is doing the work. With an agency the team is bigger but you rarely control who is actually assigned to your account.',
  },
  {
    q: 'Can one person handle technical SEO, content and links?',
    a: 'For most small and mid-sized sites, yes. Very large sites with multiple product lines and a publishing team usually need more hands than one person has.',
  },
  {
    q: 'What happens if a freelancer becomes unavailable?',
    a: 'Ask for the work to be documented as it goes, and keep ownership of your own accounts and files. I set up client work so everything lives in your accounts, not mine.',
  },
  {
    q: 'How do I compare proposals fairly?',
    a: 'Ask each one who personally does the work, what they will do in the first month, and how they will show it worked. The answers separate the two options faster than a price list does.',
  },
];

const TABLE: [string, string, string][] = [
  ['Who does the work', 'The person you hired', 'Often a junior or rotating team'],
  ['Who you talk to', 'The same person every time', 'Usually an account manager'],
  ['Speed of decisions', 'One conversation', 'Passed between strategy and delivery'],
  ['Strategy', 'Built around your business', 'Often a shared playbook across clients'],
  ['Channel coverage', 'Deep in search', 'Search plus ads, social, email'],
  ['Capacity', 'Limited by one schedule', 'Scales with headcount'],
  ['Continuity risk', 'One person can become unavailable', 'Team covers, but staff turn over'],
  ['Best when', 'Search is the problem you need solved', 'You need a full marketing function'],
];

export const ComparisonFreelancerVsAgency: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/seo-freelancer-vs-agency' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/seo-freelancer-vs-agency" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <div className="gp gp-guide">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to="/seo-services-israel">SEO Services</NavLink><span>/</span>SEO freelancer vs agency
        </div>

        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">Comparison</span>
            <h1>SEO Freelancer vs Agency</h1>
            <p className="answer">
              Hire a freelancer when you want the person planning the work to also do it. Hire an agency
              when you need several marketing channels running at once and someone internally to steer them.
              Most of the other differences people argue about follow from that one.
            </p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Send your site <span className="arrow">↗</span></a>
              <NavLink className="btn btn-ghost" to="/case-studies">View case studies</NavLink>
            </div>
          </div>
        </section>

        <section>
          <div className="narrow">
            <h2 className="block">The honest comparison</h2>
            <p style={{ marginTop: '12px' }}>
              I am a freelancer, so treat this as a view from one side. I have tried to write the row
              about capacity and continuity the way an agency would argue it, because those points are real.
            </p>
            <div className="tbl-wrap">
              <table className="gtbl">
                <thead>
                  <tr><th>What you are comparing</th><th>Freelancer</th><th>Agency</th></tr>
                </thead>
                <tbody>
                  {TABLE.map(([factor, freelancer, agency]) => (
                    <tr key={factor}>
                      <td><strong>{factor}</strong></td>
                      <td>{freelancer}</td>
                      <td>{agency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="block" style={{ marginTop: '38px' }}>Where a freelancer is the better call</h2>
            <p style={{ marginTop: '12px' }}>
              Search is your main gap and you want it fixed rather than reported on. You would rather
              explain the business once, to the person who will act on it.
            </p>
            <ul className="guide-list">
              <li>You want the strategist doing the actual work.</li>
              <li>SEO is the channel you need moving, not five channels at once.</li>
              <li>You want decisions made in one conversation instead of three.</li>
              <li>You sell to US or English-speaking buyers and want copy that reads naturally to them.</li>
            </ul>

            <h2 className="block" style={{ marginTop: '38px' }}>Where an agency is the better call</h2>
            <p style={{ marginTop: '12px' }}>
              You need a marketing function, not a search specialist. That is a genuinely different job
              and one person is the wrong shape for it.
            </p>
            <ul className="guide-list">
              <li>You need SEO, paid ads, social and email running together.</li>
              <li>You have a large site and a publishing schedule that needs several people.</li>
              <li>You need guaranteed coverage when someone is away.</li>
              <li>You have someone internally who can manage an external team well.</li>
            </ul>

            <h2 className="block" style={{ marginTop: '38px' }}>The question that settles it</h2>
            <p style={{ marginTop: '12px' }}>
              Ask whoever you are speaking to who will personally do the work, and what they will do in
              the first month. Vague answers to that question tell you more than any comparison table.
            </p>
            <p style={{ marginTop: '12px' }}>
              With me the answer is short. I do the work, you deal with me, and everything lives in your
              own accounts. If you want to see how I scope a project before committing to anything,
              start with <NavLink to="/find-my-target">Find My Target</NavLink> or read the{' '}
              <NavLink to="/case-studies">case studies</NavLink>.
            </p>
          </div>
        </section>

        <ProofWall topic="general" limit={4} title="What the work has actually produced." />

        <RelatedPages
          title="Related pages"
          lede="If a freelancer is the direction you are leaning, these explain the specific services."
          links={[
            { label: 'Freelance SEO', path: '/freelance-seo-israel', type: 'Service', body: 'Hands-on SEO delivered directly.' },
            { label: 'SEO Consulting', path: '/seoconsulting', type: 'Service', body: 'Strategy and a prioritized roadmap.' },
            { label: 'Technical SEO Audit', path: '/technical-seo-audit', type: 'Service', body: 'Find what to fix first.' },
            { label: 'B2B SEO', path: '/b2b-seo-israel', type: 'Service', body: 'Pages built around buyer intent.' },
            { label: 'Answer Engine Optimization', path: '/answer-engine-optimization-services', type: 'Service', body: 'Get named in AI answers.' },
          ]}
        />

        <section className="divider">
          <div className="narrow">
            <span className="eyebrow">More questions</span>
            <h2 className="block" style={{ marginTop: '12px' }}>FAQs</h2>
            <div style={{ marginTop: '24px' }}>
              {FAQS.map((f) => (
                <div className="faq" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA
          subject="New Inquiry: Freelancer vs Agency Comparison"
          title="Want a straight answer on your site?"
          body="Send the site and what you want SEO to fix first. I will review it and reply with the practical next step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
