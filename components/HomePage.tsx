import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { FORMSPREE_ENDPOINT } from './ContactCTA';
import { ProtectedForm } from './ProtectedForm';
import { Block, RB_FACES, renderBlock, ScrollOrb, useRise } from './lean/ClaimPage';
import { AskDemo, BuyerMap, Climb } from './lean/Motion';
import { CLAIMS, ClaimKey, HUBS } from '../site-map';
import { RES, SYSTEM } from '../content/claims';

// COPY RULE (his call, 2026-11-18): first person, his LinkedIn voice, very short. Voice sheet: rebuild-2026-11/voice.md.
// Same Banner design as the service pages (rb.css). H1 and title are the researched ones from the 2026-11-12 build.
const TITLE = 'Zechariah Tokar | SEO, AI Search and Reddit Consultant for US Companies';
const DESC = 'I get companies found in Google, AI answers and Reddit. See the results my clients got, then send me your site and I will tell you what I would fix first.';

// No prices on the home page (his call, 2026-11-18): the $750 plan is only the automated AI SEO plan; custom plans run to $3,000 and more.

const RESULTS: Block = { kind: 'results', id: 'results', h2: 'Does it work? Here are my clients.', items: [RES.yonatan, RES.zstander, RES.brett, RES.sean, RES.behfar], after: 'More in [results and case studies](/case-studies).' };

const PRICES: Block = { kind: 'table', id: 'plans', h2: 'How can we work together?', answer: 'It depends on what you need.', head: ['Option', 'What you get'], rows: [
  ['[Monthly AI SEO plan](/ai-seo-monthly)', 'My AI system runs your SEO every month: pages, links, Reddit, your Google profile and AI answer checks.'],
  ['[AI visibility audit](/ai-visibility-audit)', 'One time. Where AI names you, where it skips you, and the fix list.'],
  ['Consultation', 'A paid session on your site and your plan. Message me first.'],
  ['[Local SEO](/local-seo-services)', 'Map pack, Google Business Profile and local pages.'],
  ['Custom plan', 'Bigger sites, more locations, tougher markets.'],
] };

const FIT: Block = { kind: 'text', id: 'fit', h2: 'Who is this for?', answer: 'Owners who want more customers, not SEO jargon.', lines: [
  'You have a good service. You want more customers at a fair price.',
  'Local businesses and Shopify stores are where it works best. My clients are in the US, UK, Canada and Australia.',
] };

const ORDER: ClaimKey[] = ['ai', 'reddit', 'local', 'seo'];

export const HomePage: React.FC<{ version?: 'A' | 'C' }> = () => {
  useEffect(() => { updatePageSEO({ title: TITLE, description: DESC, path: '/' }); }, []);
  const root = useRise('home');
  return (
    <div className="rb" ref={root}>
      <HeadSEO title={TITLE} description={DESC} path="/" image="/images/ai-seo-monthly-share.jpg" />
      <section className="hero"><div className="wrap">
        <h1 className="long">Get Found in Google, AI Answers and Reddit</h1>
        <p className="lead">More leads from the places your buyers search. I handle the SEO.</p>
        <div className="actions">
          <a className="btn fill" href="#contact">Send your site</a>
          <a className="btn ghost" href="#results">See results</a>
        </div>
        <p className="faces"><span>{RB_FACES.map((f) => <img key={f} src={`/images/clients/${f}.webp`} alt="" width={40} height={40} />)}</span>Trusted by 45+ brands</p>
        <AskDemo />
      </div></section>
      <ScrollOrb />
      {renderBlock(RESULTS, 0)}
      <section id="services" className="sec"><div className="wrap">
        <h2>What do I do?</h2>
        <p className="ans widea">Four ways to get found. Pick the place your buyers look first.</p>
        <BuyerMap />
        <div className="sibs four">
          {ORDER.map((k) => <NavLink key={k} to={CLAIMS[k].path} className="sib"><b>{CLAIMS[k].label}</b><span>{CLAIMS[k].line}</span></NavLink>)}
        </div>
      </div></section>
      {renderBlock(SYSTEM, 2)}
      {renderBlock(PRICES, 3)}
      {renderBlock(FIT, 4)}
      <section id="guides" className="sec"><div className="wrap">
        <h2>Want to read first?</h2>
        <p className="ans widea">Plain answers to the questions owners ask before they hire.</p>
        <div className="sibs four">
          {Object.entries(HUBS).map(([path, h]) => <NavLink key={path} to={path} className="sib"><b>{h.label}</b><span>{h.line}</span></NavLink>)}
        </div>
        <p className="after"><NavLink to="/about">More about me</NavLink></p>
      </div></section>
      <section id="contact" className="sec"><div className="wrap cols">
        <div>
          <h2>How do I start?</h2>
          <p className="ans">Send me your site.</p>
          <p className="sub">I’ll look at it and tell you what I’d fix first. Want to talk? Message me first. If it’s a fit, I’ll set up a quick call.</p>
          <Climb />
        </div>
        <div className="rbform">
          <ProtectedForm
            formspreeEndpoint={FORMSPREE_ENDPOINT}
            subject="New SEO Audit Request from Homepage"
            submitButtonText="Send your site"
            showMessage
            messageLabel="What do you want to be found for?"
            messagePlaceholder="The search or question you want to show up for"
          />
        </div>
      </div></section>
    </div>
  );
};
