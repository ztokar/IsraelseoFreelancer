import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';
import { Btn, MovingHero, Photo, PhotoCards, Quote, Receipts, Section } from './lean/Blocks';
import { CLAIMS, HUBS, SENTENCE } from '../site-map';
import { Q, R } from '../content/claims';

const TITLE = 'Zechariah Tokar | SEO, AI Search and Reddit Consultant for US Companies';
const DESC = 'Zechariah Tokar gets companies in the US and other English-speaking markets found in Google, AI answers and Reddit. One senior operator, results published for named clients.';

const SHOTS: Photo[] = [
  { src: '/images/zechariah-tokar-outdoors.webp', w: 800, h: 692, alt: 'Zechariah Tokar outdoors in a white cap', pos: 'center 30%', caption: 'Zechariah Tokar, search visibility consultant' },
  { src: '/images/proof-linkedin-chatgpt.jpg', w: 480, h: 255, alt: 'ChatGPT naming ZStander first for lucite shtenders in the US', caption: 'ChatGPT names ZStander first' },
  { src: '/images/service-audit-zechariah.webp', w: 800, h: 450, alt: 'Zechariah Tokar at his laptop', pos: 'center 30%', caption: 'One senior operator does the work' },
  { src: '/images/proof-reddit-405k.jpg', w: 471, h: 159, alt: 'Reddit post statistics: 405,000 views, 518 upvotes, 217 comments', caption: '405,000 views on one Reddit post' },
  { src: '/images/proof-linkedin-morristown.jpg', w: 480, h: 217, alt: 'A client practice at the top of the Morristown NJ map pack', caption: 'Top of the Morristown, NJ map pack' },
  { src: '/images/zechariah-tokar-hat-suit.webp', w: 600, h: 876, alt: 'Zechariah Tokar in a black hat and suit', pos: 'center 20%', caption: 'Results published for named clients' },
];

const CLAIM_CARDS = [
  { path: CLAIMS.ai.path, title: CLAIMS.ai.label, text: CLAIMS.ai.line + ' ZStander was named first in ChatGPT.', image: { src: '/images/service-tracking-zechariah.webp', w: 562, h: 1000, alt: 'Zechariah Tokar wearing a headset at his desk', pos: 'center 22%' } },
  { path: CLAIMS.reddit.path, title: CLAIMS.reddit.label, text: CLAIMS.reddit.line + ' One post passed 405,000 views.', image: { src: '/images/proof-reddit-405k.jpg', w: 471, h: 159, alt: 'Reddit post with 405,000 views' } },
  { path: CLAIMS.local.path, title: CLAIMS.local.label, text: CLAIMS.local.line + ' $20, $250 or $2,000.', image: { src: '/images/proof-linkedin-morristown.jpg', w: 480, h: 217, alt: 'Client practice at the top of a Google map pack', pos: 'left top' } },
  { path: CLAIMS.seo.path, title: CLAIMS.seo.label, text: CLAIMS.seo.line + ' ZStander grew Google sales 300% (client figure).', image: { src: '/images/service-content-zechariah.webp', w: 562, h: 1000, alt: 'Zechariah Tokar working at his desk', pos: 'center 22%' } },
];

const HUB_IMG: Record<string, Photo> = {
  '/ai-answers': { src: '/images/blog-ai-search-2026.jpg', w: 1600, h: 893, alt: 'Illustration of AI answers above search results' },
  '/reddit-guides': { src: '/images/blog-claude-code-content-marketing.jpg', w: 1600, h: 893, alt: 'Illustration of a person working in a bright office' },
  '/seo-guides': { src: '/images/blog-seo-drives-pipeline-b2b.jpg', w: 1600, h: 893, alt: 'Illustration of search traffic turning into revenue' },
  '/case-studies': { src: '/images/proof-linkedin-chatgpt.jpg', w: 480, h: 255, alt: 'ChatGPT answer naming a client first' },
};

// Version A (answer cards): the four doors first, proof after. Version C (proof first): receipts right under the hero.
export const HOME_PICK: 'A' | 'C' = 'A';

export const HomePage: React.FC<{ version?: 'A' | 'C' }> = ({ version = HOME_PICK }) => {
  useEffect(() => { updatePageSEO({ title: TITLE, description: DESC, path: '/' }); }, []);

  const claims = (
    <Section key="claims" h2="Four ways to get found" answer="Pick the place your buyers look first. Each page shows the work, the proof and the price.">
      <PhotoCards items={CLAIM_CARDS} />
    </Section>
  );
  const proof = (
    <Section key="proof" h2="Results for named clients" answer="Screenshots, not promises." tone="tint">
      <Receipts items={[R.chatgpt, R.r405, R.morristown]} />
      <div className="lquotes" style={{ marginTop: 18 }}><Quote {...Q.sean} /><Quote {...Q.yonatan} /></div>
    </Section>
  );
  const hubs = (
    <Section key="hubs" h2="Guides and results" answer="Plain answers to the questions buyers ask before they hire.">
      <PhotoCards items={Object.entries(HUBS).map(([path, h]) => ({ path, title: h.label, text: h.line, image: HUB_IMG[path] }))} />
    </Section>
  );
  const order = version === 'C' ? [proof, claims, hubs] : [claims, proof, hubs];

  return (
    <div className="lp">
      <HeadSEO title={TITLE} description={DESC} path="/" image="/images/ai-seo-monthly-share.jpg" />
      <section className="lh">
        <div className="lwrap lh-grid">
          <div className="lh-copy">
            <h1>Get Found in Google, AI Answers and Reddit</h1>
            <p className="lh-answer">{SENTENCE} One senior operator does the work, and results are published for named clients.</p>
            <ul className="home-proofline">
              <li><b>Named first</b> in ChatGPT for ZStander</li>
              <li><b>405K views</b> on one Reddit post</li>
              <li><b>Top</b> of the Morristown, NJ map pack</li>
            </ul>
            <div className="lh-actions">
              <Btn href="#contact">Send your site</Btn>
              <Btn href="/case-studies" ghost>See the results</Btn>
            </div>
          </div>
          <MovingHero shots={SHOTS} />
        </div>
      </section>
      {order}
      <Section h2="Who you work with" tone="tint">
        <p className="lsec-answer">Zechariah Tokar, based in Israel, writes in native US English for companies in the US, UK, Canada and Australia. No account managers and no junior handoff. <NavLink to="/about">More about Zechariah</NavLink>.</p>
      </Section>
      <ContactCTA
        subject="New SEO Audit Request from Homepage"
        title="Send your site. Get the first fix."
        body="Send the site, your email and the issue you want fixed first. You will get a reply with the practical next step."
        submitButtonText="Send my site"
      />
    </div>
  );
};
