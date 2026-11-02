import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { CASE_STUDY_PAGES } from '../constants-casestudies';
import { HUBS, SITE_URL } from '../site-map';
import { JsonLd, LeanHero, PhotoCards, Quote, Receipts, Section } from './lean/Blocks';
import { Q, R } from '../content/claims';

const TITLE = 'Results | Named Clients in Google, ChatGPT and Reddit';
const DESC = 'Results Zechariah Tokar published for named clients: ZStander named first in ChatGPT, a 405K-view Reddit post, the top of a Morristown map pack, and the reviews behind them.';

const CARD_IMG: Record<string, { src: string; w: number; h: number; alt: string; pos?: string }> = {
  'zstander-shopify-seo': { src: '/images/proof-linkedin-chatgpt.jpg', w: 480, h: 255, alt: 'ChatGPT naming ZStander first' },
  'behfar-team-real-estate-seo': { src: '/images/zechariah-tokar-hat-suit.webp', w: 600, h: 876, alt: 'Zechariah Tokar', pos: 'center 20%' },
  'north-star-ranch-micro-wedding-seo': { src: '/images/service-tracking-zechariah.webp', w: 562, h: 1000, alt: 'Zechariah Tokar at his desk', pos: 'center 22%' },
  'achieving-stars-aba-therapy-seo': { src: '/images/proof-google-lead.jpg', w: 441, h: 123, alt: 'A parent who found the client on Google' },
  'reddit-405k-views': { src: '/images/proof-reddit-405k.jpg', w: 471, h: 159, alt: 'A Reddit post with 405,000 views' },
};

export const CaseStudiesHub: React.FC = () => {
  useEffect(() => { updatePageSEO({ title: TITLE, description: DESC, path: '/case-studies' }); }, []);
  const schema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': `${SITE_URL}/case-studies#hub`, name: 'Results for named clients', url: `${SITE_URL}/case-studies`,
    hasPart: CASE_STUDY_PAGES.map((c) => ({ '@type': 'Article', name: c.h1, url: `${SITE_URL}/case-studies/${c.slug}` })),
  };
  return (
    <div className="lp">
      <HeadSEO title={TITLE} description={DESC} path="/case-studies" image="/images/proof-linkedin-chatgpt.jpg" />
      <LeanHero
        h1="Results for Named Clients"
        answer="Every result here names the client and shows the screenshot. Zechariah Tokar does the work himself, for companies in the US and other English-speaking markets."
        photo={{ src: '/images/proof-linkedin-chatgpt.jpg', w: 480, h: 255, alt: 'ChatGPT answering where to buy lucite shtenders in the US and naming ZStander first', caption: 'ChatGPT names ZStander first.' }}
        primary={{ label: 'Read the case studies', href: '#cases' }}
        secondary={{ label: 'All reviews', href: '/reviews-results' }}
      />
      <Section id="cases" h2="Case studies">
        <PhotoCards items={CASE_STUDY_PAGES.map((c) => ({ path: `/case-studies/${c.slug}`, title: c.client, meta: `${c.metric} ${c.metricLabel}`, text: c.intro, image: CARD_IMG[c.slug] }))} />
      </Section>
      <Section id="screenshots" h2="The screenshots" answer="Real screens from real campaigns, at full size." tone="tint">
        <Receipts items={[R.chatgpt, R.morristown, R.r405, R.r12, R.lead, R.aiAudit]} />
      </Section>
      <Section id="reviews" h2="What clients say" answer="Word for word, with the client's real name. More on the [reviews page](/reviews-results).">
        <div className="lquotes">{[Q.sean, Q.yonatan, Q.brett, Q.rivka].map((q) => <Quote key={q.name} {...q} />)}</div>
      </Section>
      <Section h2="Guides" tone="tint">
        <div className="siblings">
          {Object.entries(HUBS).filter(([p]) => p !== '/case-studies').map(([p, o]) => <NavLink key={p} to={p} className="sibling"><strong>{o.label}</strong><span>{o.line}</span></NavLink>)}
        </div>
      </Section>
      <JsonLd data={schema} />
    </div>
  );
};
