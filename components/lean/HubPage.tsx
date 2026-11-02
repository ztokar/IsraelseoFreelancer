import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../../utils/seo';
import { HUBS, SITE_PAGES, SITE_URL } from '../../site-map';
import { JsonLd, LeanHero, Photo, PhotoCards, Section } from './Blocks';

// Picture for each guide card: the real screenshot that fits the topic first, else a site illustration.
const IMG: Record<string, Photo> = {
  chatgpt: { src: '/images/proof-linkedin-chatgpt.jpg', w: 480, h: 255, alt: 'A ChatGPT answer naming a client first' },
  aiSearch: { src: '/images/blog-ai-search-2026.jpg', w: 1600, h: 893, alt: 'Illustration of AI answers above search results' },
  audit: { src: '/images/proof-linkedin-ai-audit.jpg', w: 480, h: 127, alt: 'A client message about an AI SEO audit' },
  r405: { src: '/images/proof-reddit-405k.jpg', w: 471, h: 159, alt: 'A Reddit post with 405,000 views' },
  r12: { src: '/images/proof-reddit-12k.jpg', w: 830, h: 130, alt: 'Reddit post insights showing 12,000 views' },
  office: { src: '/images/blog-claude-code-content-marketing.jpg', w: 1600, h: 893, alt: 'Illustration of a person working in a bright office' },
  pipeline: { src: '/images/blog-seo-drives-pipeline-b2b.jpg', w: 1600, h: 893, alt: 'Illustration of search traffic turning into revenue' },
  funnel: { src: '/images/blog-b2b-seo-pipeline.jpg', w: 1200, h: 896, alt: 'Illustration of a funnel turning search into leads' },
  saas: { src: '/images/blog-saas-seo.jpg', w: 1600, h: 893, alt: 'Illustration of a SaaS company expanding into the US market' },
  cyber: { src: '/images/blog-cybersecurity-seo.jpg', w: 1600, h: 893, alt: 'Illustration of global security networks' },
  hebrew: { src: '/images/blog-hebrew-seo-checkers.jpg', w: 1600, h: 893, alt: 'Illustration of SEO checking tools' },
  morristown: { src: '/images/proof-linkedin-morristown.jpg', w: 480, h: 217, alt: 'A client practice at the top of a Google map pack' },
  me: { src: '/images/zechariah-tokar-outdoors.webp', w: 800, h: 692, alt: 'Zechariah Tokar', pos: 'center 30%' },
};
const CARD_IMG: Record<string, keyof typeof IMG> = {
  '/what-is-answer-engine-optimization': 'aiSearch', '/what-is-generative-engine-optimization': 'office', '/aeo-vs-geo-vs-seo': 'pipeline',
  '/how-to-rank-in-google-ai-overviews': 'aiSearch', '/how-to-get-cited-by-chatgpt': 'chatgpt', '/track-brand-mentions-in-chatgpt': 'chatgpt',
  '/how-to-track-ai-search-visibility': 'audit', '/ai-search-visibility-tools': 'saas', '/why-chatgpt-doesnt-mention-your-brand': 'audit',
  '/reddit-seo': 'r405', '/reddit-karma-account-age': 'r12', '/how-to-market-on-reddit': 'office', '/how-to-get-recommended-on-reddit': 'r405',
  '/how-to-rank-a-reddit-post-on-google': 'r12', '/why-does-reddit-rank-so-high-on-google': 'aiSearch', '/why-reddit-posts-get-removed': 'cyber',
  '/monitor-brand-mentions-on-reddit': 'audit', '/reddit-ads-vs-organic': 'pipeline', '/reddit-b2b-saas-lead-generation': 'saas',
  '/reddit-vs-linkedin-b2b-leads': 'funnel', '/resources/dataisbeautiful-claude-skill': 'me',
  '/seo-freelancer-vs-agency': 'me',
  '/google-business-profile-seo': 'morristown', '/saas-seo': 'saas', '/cybersecurity-seo': 'cyber', '/shopify-seo': 'chatgpt', '/google-merchant-center-seo': 'pipeline', '/programmatic-seo': 'funnel', '/youtube-seo': 'aiSearch', '/reddit-posting-service': 'r12', '/blog/claude-code-content-marketing-startups': 'office', '/blog/hebrew-seo-checkers-free-tools': 'hebrew',
};

export const imageFor = (path: string): Photo => IMG[CARD_IMG[path] || 'office'];

interface HubText { h1: string; title: string; description: string; answer: string; photo: Photo; next?: string }
const HUB_TEXT: Record<string, HubText> = {
  '/ai-answers': {
    h1: 'Getting Into AI Answers: Guides to ChatGPT, Gemini and AI Overviews',
    title: 'AI Answers Guides | ChatGPT, Gemini and Google AI Overviews',
    description: 'Plain guides on how ChatGPT, Gemini, Perplexity and Google AI Overviews choose the brands they name, and how to track and change it. By Zechariah Tokar.',
    answer: 'These guides explain how ChatGPT, Gemini, Perplexity and Google AI Overviews choose which brands to name, and what a company in the US or another English-speaking market can do about it. Each one answers one question.',
    photo: { src: '/images/blog-ai-search-2026.jpg', w: 1600, h: 893, alt: 'Illustration of AI answers shown above classic search results', caption: 'Illustration: AI answers above the classic results.' },
    next: 'The newest questions to add here: which AI answers cite which sources, and how AI Mode differs from AI Overviews.',
  },
  '/reddit-guides': {
    h1: 'Reddit Marketing Guides: Without Bans, Into Google',
    title: 'Reddit Marketing Guides | Post Without Bans, Rank in Google',
    description: 'Guides from Zechariah Tokar on marketing on Reddit without getting banned, Reddit SEO, karma, and how Reddit threads reach Google and AI answers.',
    answer: 'These guides cover how to market on Reddit without getting banned and how Reddit threads end up in Google and AI answers. They come from the same method behind a post that passed 405,000 views.',
    photo: { src: '/images/proof-reddit-405k.jpg', w: 471, h: 159, alt: 'Reddit post statistics: 405,000 views, 518 upvotes, 217 comments', caption: 'The post behind the method: 405,000 views.' },
  },
  '/seo-guides': {
    h1: 'SEO Guides for B2B Companies and Online Stores',
    title: 'SEO Guides | Hiring, Content and Reputation',
    description: 'SEO guides from Zechariah Tokar for companies in the US and English-speaking markets: hiring a freelancer or an agency, content with Claude Code, reputation.',
    answer: 'These guides answer the questions companies ask before they spend on Google SEO: who to hire, how to produce content, and what shows when buyers search your name.',
    photo: { src: '/images/blog-seo-drives-pipeline-b2b.jpg', w: 1600, h: 893, alt: 'Illustration of search traffic flowing into revenue', caption: 'Illustration: search traffic turning into revenue.' },
    next: 'Coming next: how to hire an SEO freelancer, what a technical SEO audit checks, and what SEO content writing should deliver.',
  },
};

export const HubPage: React.FC<{ path: string }> = ({ path }) => {
  const h = HUB_TEXT[path];
  useEffect(() => { updatePageSEO({ title: h.title, description: h.description, path }); }, [h, path]);
  const children = SITE_PAGES.filter((p) => p.hub === path);
  const others = Object.entries(HUBS).filter(([p]) => p !== path);
  const schema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': `${SITE_URL}${path}#hub`, name: h.h1, url: `${SITE_URL}${path}`,
    about: h.description, author: { '@id': `${SITE_URL}/#person` },
    hasPart: children.filter((c) => c.type !== 'noindex').map((c) => ({ '@type': c.type === 'term' ? 'DefinedTerm' : 'Article', name: c.label, url: `${SITE_URL}${c.path}` })),
  };
  return (
    <div className="lp">
      <HeadSEO title={h.title} description={h.description} path={path} image={h.photo.src} />
      <LeanHero h1={h.h1} answer={h.answer} photo={h.photo} primary={{ label: `Read the ${children.length} guides`, href: '#guides' }} />
      <Section id="guides" h2={`${children.length} guides, one question each`}>
        <PhotoCards items={children.map((c) => ({ path: c.path, title: c.label, text: c.summary || '', image: IMG[CARD_IMG[c.path] || 'office'], meta: c.type === 'term' ? 'Definition' : c.type === 'noindex' ? 'Archive' : 'Guide' }))} />
      </Section>
      <Section h2="Other guides" tone="tint">
        <div className="siblings">
          {others.map(([p, o]) => <NavLink key={p} to={p} className="sibling"><strong>{o.label}</strong><span>{o.line}</span></NavLink>)}
        </div>
      </Section>
      <JsonLd data={schema} />
    </div>
  );
};
