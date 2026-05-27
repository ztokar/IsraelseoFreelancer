import React from 'react';
import { NavLink } from 'react-router-dom';
import { LINKEDIN_FEATURED_RESULTS, REVIEWS, SERVICES_LIST } from '../constants';
import type { ReviewItem } from '../types';

const Arrow = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" /></svg>
);

export const cleanPublicCopy = (text?: string) => (text || '')
  .replace(/information gain/gi, 'specific detail')
  .replace(/retrieval/gi, 'visibility')
  .replace(/retrieve the brand/gi, 'understand the brand')
  .replace(/\bBOFU\b/gi, 'buyer-intent');

export const topicFromSlug = (slug = '') => {
  const s = slug.toLowerCase();
  if (s.includes('shopify') || s.includes('merchant') || s.includes('ecommerce')) return 'ecommerce';
  if (s.includes('local') || s.includes('business-profile') || s.includes('citations')) return 'local';
  if (s.includes('reddit')) return 'reddit';
  if (s.includes('ai') || s.includes('chatgpt') || s.includes('geo') || s.includes('answer-engine')) return 'ai';
  if (s.includes('content') || s.includes('blog') || s.includes('writing')) return 'content';
  if (s.includes('b2b') || s.includes('saas') || s.includes('consult')) return 'b2b';
  return 'general';
};

export const reviewsForTopic = (topic: string, limit = 6): ReviewItem[] => {
  const wordsByTopic: Record<string, string[]> = {
    ecommerce: ['e-commerce', 'marketplace', 'shopify', 'store'],
    local: ['maps', 'local', 'google maps', '#1', 'therapy', 'real estate'],
    reddit: ['reddit', 'brand', 'marketing'],
    ai: ['ai', 'chatgpt', 'claude', 'automation', 'content'],
    content: ['content', 'writing', 'deliverable', 'pages', 'copy'],
    b2b: ['b2b', 'growth', 'marketing', 'pipeline', 'contracted'],
    general: [],
  };
  const keywords = wordsByTopic[topic] || [];
  const scored = REVIEWS.map((review, index) => {
    const haystack = `${review.quote} ${review.role} ${review.name}`.toLowerCase();
    const score = keywords.reduce((sum, word) => sum + (haystack.includes(word) ? 1 : 0), 0);
    return { review, score, index };
  });
  const selected = scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((item) => item.review);
  const fallback = REVIEWS.filter((review) => !selected.includes(review));
  return [...selected, ...fallback].slice(0, limit);
};

export const resultsForTopic = (topic: string, limit = 4) => {
  const keywordsByTopic: Record<string, string[]> = {
    ecommerce: ['shopify', 'ecommerce', 'shopping'],
    local: ['local', 'google maps', 'morristown'],
    reddit: ['reddit'],
    ai: ['ai', 'chatgpt', 'audit'],
    content: ['ai', 'chatgpt', 'content'],
    b2b: ['ai', 'audit', 'shopify'],
    general: [],
  };
  const keywords = keywordsByTopic[topic] || [];
  const scored = LINKEDIN_FEATURED_RESULTS.map((item, index) => {
    const haystack = `${item.title} ${item.metric} ${item.description}`.toLowerCase();
    const score = keywords.reduce((sum, word) => sum + (haystack.includes(word) ? 1 : 0), 0);
    return { item, score, index };
  });
  const selected = scored
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((entry) => entry.item);
  const fallback = LINKEDIN_FEATURED_RESULTS.filter((item) => !selected.includes(item));
  return [...selected, ...fallback].slice(0, limit);
};

export const ProofWall: React.FC<{ topic?: string; title?: string; lede?: string; limit?: number }> = ({
  topic = 'general',
  title = 'What people say after working with me.',
  lede = 'Proof should sit near the claims it supports. These recommendations give buyers a clearer reason to trust the work.',
  limit = 6,
}) => (
  <section className="proof-cases" id="proof">
    <div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">Client proof</span>
        <h2>{title}</h2>
        <p className="lede">{lede}</p>
      </div>
      <div className="review-wall">
        {reviewsForTopic(topic, limit).map((review) => (
          <article className="review-card" key={`${review.name}-${review.quote.slice(0, 18)}`}>
            <div className="review-head">
              <div className="review-initial">{review.initial}</div>
              <div>
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </div>
            <blockquote>"{review.quote}"</blockquote>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const ResultsGrid: React.FC<{ topic?: string; title?: string; limit?: number }> = ({
  topic = 'general',
  title = 'Selected wins that support the work.',
  limit = 4,
}) => (
  <section className="result-strip divider">
    <div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">Selected results</span>
        <h2>{title}</h2>
      </div>
      <div className="featured-result-grid">
        {resultsForTopic(topic, limit).map((item) => (
          <NavLink className="featured-result" to={item.path} key={item.title}>
            <img src={item.image} alt={item.alt} />
            <div>
              <span>{item.title}</span>
              <strong>{item.metric}</strong>
              <p>{item.description}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  </section>
);

export const FitSection: React.FC<{ topic?: string; bestFor?: string; notFor?: string[] }> = ({
  topic = 'general',
  bestFor,
  notFor,
}) => {
  const defaults: Record<string, { good: string[]; bad: string[] }> = {
    ecommerce: {
      good: ['Stores with products people already search for.', 'Teams with collection or product pages that need clearer buying copy.', 'Brands that need Google and Shopping surfaces to work together.'],
      bad: ['Stores with no search demand yet.', 'Brands looking for generic blog volume before product pages work.'],
    },
    local: {
      good: ['Local businesses that need Maps, service pages, and local proof to line up.', 'Teams that want practical ranking work, not a giant report.'],
      bad: ['Businesses that cannot serve the area they want to rank in.', 'Anyone looking for fake reviews or shortcuts.'],
    },
    reddit: {
      good: ['Brands already being discussed, compared, or questioned on Reddit.', 'Teams that want community research before they post.'],
      bad: ['Brands that want spam posts or fake conversations.', 'Products that cannot survive honest community feedback.'],
    },
    ai: {
      good: ['Brands that need to be named in AI answers and recommendation searches.', 'Teams with useful expertise that needs clearer pages and outside mentions.'],
      bad: ['Anyone looking for a secret AI trick.', 'Sites that do not yet explain the offer clearly.'],
    },
    content: {
      good: ['Companies that need pages with search intent, proof, and a conversion path.', 'Teams refreshing pages that rank but do not convert.'],
      bad: ['Teams that only want blog volume.', 'Projects where the offer is not clear enough to write around yet.'],
    },
    b2b: {
      good: ['B2B, SaaS, and service teams selling into English-speaking markets.', 'Companies that need buyer-intent pages, not traffic reports.'],
      bad: ['Teams chasing broad traffic with no sales path.', 'Companies that cannot support the claims their pages need to make.'],
    },
    general: {
      good: ['Companies that want clearer priorities and hands-on execution.', 'Teams that care more about qualified leads than vanity traffic.'],
      bad: ['Teams that want a thick report but no execution.', 'Projects where SEO is expected to fix an unclear offer by itself.'],
    },
  };
  const picked = defaults[topic] || defaults.general;
  return (
    <section className="fit-section divider">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Fit</span>
          <h2>Who this is for.</h2>
          <p className="lede">{cleanPublicCopy(bestFor) || picked.good[0]}</p>
        </div>
        <div className="fit-grid">
          <article className="fit-card yes">
            <h3>Good fit</h3>
            <ul>{picked.good.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="fit-card no">
            <h3>Not the right fit</h3>
            <ul>{(notFor && notFor.length ? notFor : picked.bad).map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export const RelatedPages: React.FC<{
  title?: string;
  lede?: string;
  links: { label: string; path: string; type?: string; body?: string }[];
}> = ({
  title = 'Helpful next pages.',
  lede = 'The next page should match the problem the buyer is trying to solve.',
  links,
}) => (
  <section className="support divider" id="resources">
    <div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">Keep exploring</span>
        <h2>{title}</h2>
        <p className="lede">{lede}</p>
      </div>
      <div className="slink-grid">
        {links.slice(0, 6).map((link) => (
          <NavLink className="slink" to={link.path} key={`${link.path}-${link.label}`}>
            <div className="k">{link.type || 'Related page'}</div>
            <h3>{link.label}</h3>
            {link.body && <p>{cleanPublicCopy(link.body)}</p>}
            <span className="card-arrow"><Arrow /></span>
          </NavLink>
        ))}
      </div>
    </div>
  </section>
);

export const relatedServiceLinks = (labels: string[] = [], currentSlug?: string) => {
  const matched = labels
    .map((label) => SERVICES_LIST.find((service) => {
      const haystack = `${service.title} ${service.subtitle} ${service.primaryKeyword || ''}`.toLowerCase();
      return haystack.includes(label.toLowerCase());
    }))
    .filter(Boolean)
    .map((service) => ({
      label: service!.title.replace(/\s*\.\s*$/, ''),
      path: `/${service!.slug}`,
      type: service!.subtitle,
      body: service!.marketFit || service!.description,
    }));
  const fallback = SERVICES_LIST
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 4)
    .map((service) => ({
      label: service.title.replace(/\s*\.\s*$/, ''),
      path: `/${service.slug}`,
      type: service.subtitle,
      body: service.marketFit || service.description,
    }));
  return (matched.length ? matched : fallback).slice(0, 4);
};
