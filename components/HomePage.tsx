import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CASE_STUDIES, PROOF_ITEMS, HOME_TESTIMONIALS } from '../constants';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

const TITLE = 'Zechariah Tokar | Search Visibility Consultant for US & English-Speaking Markets';
const DESC = 'Zechariah Tokar is a search visibility consultant for companies targeting US and English-speaking markets. SEO, AI search visibility, and Reddit, done by a senior operator directly.';

const services = [
  {
    title: 'SEO Services',
    body: 'Technical fixes, audits, monthly campaigns, and content built to rank and convert.',
    links: [
      { label: 'Freelance SEO', path: '/freelance-seo-israel' },
      { label: 'Consulting', path: '/seoconsulting' },
      { label: 'Content', path: '/content-marketing-for-seo' },
    ],
    icon: <svg fill="none" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  },
  {
    title: 'B2B & SaaS SEO',
    body: 'Reach decision-makers while they compare vendors, with pages built around buyer intent.',
    links: [
      { label: 'B2B SEO', path: '/b2b-seo-israel' },
      { label: 'SEO Consulting', path: '/seoconsulting' },
    ],
    icon: <svg fill="none" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/></svg>,
  },
  {
    title: 'Local & Service SEO',
    body: 'Win the local map pack and show up when nearby buyers search for help, including lawyers and clinics.',
    links: [
      { label: 'Google Business Profile', path: '/google-business-profile-seo' },
      { label: 'Freelance SEO', path: '/freelance-seo-israel' },
    ],
    icon: <svg fill="none" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 21s-7-5.6-7-11a7 7 0 0114 0c0 5.4-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  },
  {
    title: 'AI Search Visibility',
    body: 'Show up and get recommended inside ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
    links: [
      { label: 'AI SEO', path: '/ai-seo-consultant-israel' },
      { label: 'ChatGPT citations', path: '/how-to-get-cited-by-chatgpt' },
      { label: 'AI Overviews', path: '/how-to-rank-in-google-ai-overviews' },
    ],
    icon: <svg fill="none" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/><circle cx="12" cy="12" r="3"/></svg>,
  },
  {
    title: 'Reddit & Community',
    body: 'Be the brand real people recommend in the threads that rank in Google and feed AI answers.',
    links: [
      { label: 'Reddit Marketing', path: '/reddit-marketing-services' },
      { label: 'Reddit SEO', path: '/reddit-seo' },
      { label: 'Posting Service', path: '/reddit-posting-service' },
    ],
    icon: <svg fill="none" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 01-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1121 11.5z"/></svg>,
  },
  {
    title: 'For International Brands',
    body: 'Israeli startups and global companies entering the US, served by a native US-English operator.',
    links: [
      { label: 'Freelance SEO', path: '/freelance-seo-israel' },
      { label: 'B2B SEO', path: '/b2b-seo-israel' },
    ],
    icon: <svg fill="none" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>,
  },
];

const steps = [
  { h: 'Audit what already exists', p: 'Find the pages closest to revenue and what is holding them back.' },
  { h: 'Find the terms closest to buyers', p: 'The searches people make when they are ready to act, on Google and in AI answers.' },
  { h: 'Fix the weak pages first', p: 'Structure, copy, and technical blockers before publishing anything new.' },
  { h: 'Build the next pages that deserve to rank', p: 'New service, content, and proof pages that win the search and convert the click.' },
];

const caseSlug: Record<string, string> = {
  'ZStander': 'zstander-shopify-seo',
  'The Behfar Team': 'behfar-team-real-estate-seo',
  'North Star Ranch': 'north-star-ranch-micro-wedding-seo',
};

const blog = [
  { cat: 'AI Search', read: '8 min read', title: 'GEO: how to get cited by ChatGPT and Perplexity', path: '/blog/geo-ai-generative-engine-optimization' },
  { cat: 'B2B SEO', read: '7 min read', title: 'Why Israeli B2B companies struggle with SEO', path: '/blog/why-israeli-b2b-fail-seo' },
  { cat: 'AI Search', read: '6 min read', title: 'What changed in AI search in 2026', path: '/blog/ai-search-2026-updates' },
];

export const HomePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/' });
  }, []);

  const cases = CASE_STUDIES.slice(0, 3);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/" />
      <div className="gp">
        {/* HERO */}
        <section className="gp-hero">
          <div className="wrap">
            <div>
              <div className="hero-badge"><span className="pulse" />Based in Israel · working with US &amp; English-speaking markets</div>
              <h1>Get found where buyers are <em>already searching.</em></h1>
              <p className="lede">I am a search visibility consultant. I help companies turn underperforming pages into rankings, leads, and presence in AI answers and Reddit. You work with me directly, not a rotating agency team.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Send your site <span className="arrow">↗</span></a>
                <a className="btn btn-ghost" href="#cases">View case studies</a>
              </div>
              <div className="hero-trust">
                <span><strong>40+</strong> companies</span><span className="sep" />
                <span><strong>405k</strong> views on one Reddit post</span><span className="sep" />
                <span><strong>5.0</strong> client rating</span>
              </div>
            </div>
            <div className="hero-art">
              <img src="/images/redesign-hero.png" alt="Abstract visualization of search rankings rising with connected data nodes" />
            </div>
          </div>
        </section>

        {/* AUTHORITY */}
        <section className="authority">
          <div className="wrap">
            <div><span className="eyebrow">Why this works</span></div>
            <p className="big">Most SEO stops at traffic. I start with the searches people make <b>when they have money in hand</b>, then build the page that wins that search and turns the click into a lead.</p>
          </div>
        </section>

        <section className="fit-section divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Best fit</span>
              <h2>For teams that need the next SEO move to be obvious.</h2>
              <p className="lede">Most buyers are not deciding between ten SEO tasks. They are deciding whether they can trust the site, the brand, and the next step. That is the job I build around.</p>
            </div>
            <div className="fit-grid">
              <article className="fit-card yes">
                <h3>Good fit</h3>
                <ul>
                  <li>Companies targeting US or English-speaking buyers.</li>
                  <li>Teams with pages that rank, but do not bring enough leads.</li>
                  <li>Brands that need Google, AI answers, and Reddit to tell the same story.</li>
                </ul>
              </article>
              <article className="fit-card no">
                <h3>Not the right fit</h3>
                <ul>
                  <li>Teams looking for bulk content with no sales path.</li>
                  <li>Projects that want a big report but no execution.</li>
                  <li>Brands that cannot support the claims the page needs to make.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What I do</span>
              <h2>Full-stack search visibility, one senior operator.</h2>
              <p className="lede">SEO is no longer just Google. I cover the whole path a buyer takes: classic search, AI answers, and community results like Reddit.</p>
            </div>
            <div className="svc-grid">
              {services.map((s) => (
                <div className="svc" key={s.title}>
                  <div className="ic">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <div className="links">
                    {s.links.map((l) => <NavLink key={l.path + l.label} to={l.path}>{l.label}</NavLink>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="cases" id="cases">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Selected work</span>
              <h2>Real campaigns. Real results.</h2>
              <p>Not polished claims. Here is the situation, what I actually did, and what happened.</p>
            </div>
            <div className="case-grid">
              {cases.map((c) => {
                const slug = caseSlug[c.client];
                const inner = (
                  <>
                    <div className="tag">{c.industry} · {c.market}</div>
                    <div className="metric">{c.metric}</div>
                    <div className="ctx">{c.context}</div>
                    <p className="story">{c.description}</p>
                    {slug && <span className="read">Read the case <span>↗</span></span>}
                  </>
                );
                return slug ? (
                  <NavLink className="case" to={`/case-studies/${slug}`} key={c.client} style={{ textDecoration: 'none' }}>{inner}</NavLink>
                ) : (
                  <div className="case" key={c.client}>{inner}</div>
                );
              })}
            </div>
            <div style={{ marginTop: '24px' }}>
              <NavLink to="/case-studies" className="btn btn-ghost" style={{ background: 'transparent', color: '#fff', borderColor: 'var(--hair-light)' }}>View all case studies <span className="arrow">↗</span></NavLink>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process divider">
          <div className="wrap">
            <div>
              <span className="eyebrow">How I work</span>
              <h2 style={{ fontSize: '38px', marginTop: '14px' }}>A straight process with clear priorities.</h2>
              <p className="lede" style={{ marginTop: '16px' }}>I find what actually moves rankings and leads, and do that first. Less guessing, faster wins.</p>
            </div>
            <div className="steps">
              {steps.map((st, i) => (
                <div className="step" key={st.h}>
                  <div className="n">0{i + 1}</div>
                  <div><h3>{st.h}</h3><p>{st.p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="tst">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What clients say</span>
              <h2>Trusted by 40+ growth-focused companies.</h2>
            </div>
            <div className="tst-grid">
              {HOME_TESTIMONIALS.map((t) => (
                <div className="quote" key={t.name}>
                  <div className="stars">★★★★★</div>
                  <div className="result">{t.result}</div>
                  <blockquote>“{t.quote}”</blockquote>
                  <div className="who"><b>{t.name}</b><span>{t.title}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF STRIP */}
        <section className="proof divider">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: '32px' }}>
              <span className="eyebrow">Receipts, not promises</span>
              <h2>Things I have actually posted.</h2>
              <p className="lede">Real screenshots from real campaigns. Not stock dashboards.</p>
            </div>
            <div className="proof-grid">
              {PROOF_ITEMS.map((p) => (
                <figure className="pf" key={p.img}>
                  <img src={p.img} alt={p.alt} />
                  <figcaption>{p.caption_pre}<b>{p.caption_b}</b>{p.caption_post}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIATOR */}
        <section className="diff divider">
          <div className="wrap">
            <div>
              <span className="eyebrow">What sets the work apart</span>
              <h2 style={{ fontSize: '38px', marginTop: '14px' }}>Built for how people search in 2026.</h2>
              <p className="lede" style={{ marginTop: '16px' }}>Generic SEO still chases ten blue links. Buyers now ask AI and check Reddit before they ever reach your site. I make sure you show up across that whole path, and that the page converts when they land.</p>
              <a className="btn btn-primary" href="#contact" style={{ marginTop: '26px' }}>Send your site <span className="arrow">↗</span></a>
            </div>
            <div className="diff-card">
              <h3>You get a senior operator who:</h3>
              <ul className="diff-list">
                {[
                  'Does the strategy and the execution directly. No junior handoff.',
                  'Works across Google, AI answers, and Reddit, not just rankings.',
                  'Uses AI automations to ship fast and build real pages.',
                  'Writes US-natural copy and focuses on leads, not vanity traffic.',
                ].map((t) => (
                  <li key={t}><svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">From the blog</span>
              <h2>Notes on modern search.</h2>
            </div>
            <div className="blog-grid">
              {blog.map((b) => (
                <NavLink className="post" to={b.path} key={b.path}>
                  <div className="pimg"><div className="grad" /></div>
                  <div className="pbody">
                    <div className="meta"><span className="cat">{b.cat}</span><span>· {b.read}</span></div>
                    <h3>{b.title}</h3>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA
          subject="New SEO Audit Request from Homepage"
          title="Ready to get found and get leads?"
          body="Send the site, your email, and the issue you want SEO to fix first. I will review it and reply with the practical next step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
