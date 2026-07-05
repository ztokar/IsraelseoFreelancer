import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Crosshair, FileText, MapPinned, Star, Target } from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { REVIEWS } from '../constants';
import { OfferLadder } from './OfferLadder';
import { ContactCTA } from './ContactCTA';

declare global {
  interface ImportMetaEnv {
    readonly VITE_TARGET_STRIPE_URL?: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const TITLE = 'Find My Target | The $20 Local Lead Target Finder | Zechariah Tokar';
const DESC =
  'For $20, I find the single local search most likely to bring you paying clients, plus why it converts and the one page you would need to rank for it.';

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/6oUdR25vn32v00r7Eb6c00T';
const checkoutUrl = import.meta.env.VITE_TARGET_STRIPE_URL || STRIPE_PAYMENT_LINK;

const trackCheckoutIntent = (source: string) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'target_finder_checkout_click',
    offer: 'Local Lead Target Finder',
    value: 20,
    currency: 'USD',
    source,
  });
};

const PurchaseButton: React.FC<{ source: string; children?: React.ReactNode; className?: string }> = ({
  source,
  children = 'Get my target - $20',
  className = 'btn btn-primary',
}) => (
  <a className={className} href={checkoutUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCheckoutIntent(source)}>
    {children} <ArrowUpRight size={17} strokeWidth={2} />
  </a>
);

const deliverables = [
  {
    title: 'Your #1 target',
    body: 'The exact service, location, and buyer worth owning. Not "ABA therapy," but "in-home ABA in Denver for toddlers."',
    icon: Target,
  },
  {
    title: 'Why it wins',
    body: 'What your competitors are missing, and why this specific search turns into calls instead of empty traffic.',
    icon: Crosshair,
  },
  {
    title: 'The page to build',
    body: 'The one money page that would rank for it, so you know your very next move.',
    icon: FileText,
  },
];

const faqs = [
  { q: 'What exactly do I get?', a: 'A short written breakdown naming your single best local search target, a couple of runner-ups, why it converts, and the page you would build for it.' },
  { q: 'How fast?', a: 'Usually within 2 business days of your intake.' },
  { q: 'Is this a monthly SEO plan?', a: 'No. It is a one-time $20 research snack. If you want the full page plan afterward, that is the $250 Blueprint, and the whole build is the done-for-you tier.' },
  { q: 'What if it is not a fit?', a: 'If I look at your business and it is not a fit for search, I will tell you honestly and refund you. I would rather keep your trust.' },
  { q: 'Are taxes added?', a: 'No. It is a flat $20 at checkout.' },
];

const selectedReviews = REVIEWS.filter((review) =>
  ['Yonatan Vinnik, LSW', 'Brett Sheldon, LCSW', 'Menachem Encaoua'].includes(review.name)
);

export const TargetFinderPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/find-my-target' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/find-my-target" image="/images/proof-google-lead.jpg" />

      <main className="gp blueprint">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Find my target
        </div>

        <section className="bp-hero">
          <div className="wrap bp-hero-grid">
            <div>
              <span className="hero-badge"><Target size={15} strokeWidth={2.2} /> The $20 Target Finder</span>
              <h1>Find the one local search worth owning. For $20.</h1>
              <p className="lede">
                Most businesses target searches that are too broad to ever bring clients. Send me your site and I will find the single search most likely to bring you paying clients, and tell you why.
              </p>
              <div className="bp-surfaces" aria-label="What you get">
                <span>Your #1 target</span>
                <span>Why it converts</span>
                <span>The page to build</span>
              </div>
              <div className="hero-actions">
                <PurchaseButton source="hero" />
                <a className="btn btn-ghost" href="#contact-fit">Ask if it fits first</a>
              </div>
              <p className="bp-cta-note">Delivered in about 2 business days. No tax. Honest refund if it is not a fit.</p>
            </div>
            <div className="bp-proof-stack" aria-label="Real proof screenshot">
              <figure className="bp-proof-main">
                <img src="/images/proof-google-lead.jpg" alt="Inbound lead message from a client who found a provider on Google" />
                <figcaption>A real inbound lead that found the business on Google.</figcaption>
              </figure>
              <div className="bp-proof-notes">
                <span><CheckCircle2 size={16} strokeWidth={2.2} />One clear target</span>
                <span><CheckCircle2 size={16} strokeWidth={2.2} />Plain English</span>
                <span><CheckCircle2 size={16} strokeWidth={2.2} />No jargon, no fluff</span>
              </div>
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">Why broad targeting fails</span>
              <h2>"ABA therapy" is a fight you lose. "In-home ABA in Denver for toddlers" is one you win.</h2>
            </div>
            <div className="copy-stack">
              <p className="lead-copy">Broad searches are crowded, expensive, and full of people who are not ready to buy. So the leads never come, and the money feels wasted.</p>
              <p>A specific, bottom-of-funnel search has less competition and reaches people who already want your exact service in your exact area. That is the search worth building around. This $20 finds it for you before you spend a cent on pages or ads.</p>
            </div>
          </div>
        </section>

        <section className="bp-deliverables divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">What you get</span>
              <h2>One clear target. Three quick answers.</h2>
            </div>
            <div className="bp-deliverable-grid">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title}>
                    <Icon size={25} strokeWidth={1.8} />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bp-testimonials divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Client reviews</span>
              <h2>Real businesses, real local results.</h2>
            </div>
            <div className="review-wall">
              {selectedReviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-head">
                    <div className="review-initial">{review.initial}</div>
                    <div>
                      <h3>{review.name}</h3>
                      <p>{review.role}</p>
                    </div>
                  </div>
                  <div className="bp-stars" aria-label="Five star review">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}
                  </div>
                  <blockquote>"{review.quote}"</blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-pricing" id="purchase">
          <div className="wrap bp-pricing-grid">
            <div>
              <span className="eyebrow">One-time</span>
              <h2>$20 flat</h2>
              <p>The easiest way to see how I think about your business, before you commit to anything bigger. No tax added at checkout.</p>
            </div>
            <div className="bp-price-card">
              <ul>
                {['Your #1 local target', 'A couple of runner-ups', 'Why it converts', 'The page to build', 'Delivered in ~2 business days'].map((item) => (
                  <li key={item}><CheckCircle2 size={17} strokeWidth={2.2} />{item}</li>
                ))}
              </ul>
              <PurchaseButton source="pricing" />
              <p className="bp-cta-note">You will be sent to a short intake right after checkout.</p>
            </div>
          </div>
        </section>

        <OfferLadder current="target" />

        <section className="bp-faq divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Quick questions.</h2>
            </div>
            <div className="bp-faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA
          id="contact-fit"
          subject="Target Finder fit check"
          eyebrow="Not sure?"
          title="Send your site first and I will tell you honestly."
          body="Share your website, main service, and target area. If search is not the right fit for you, I will say so before you pay a cent."
          submitButtonText="Ask if it fits"
        />
      </main>
    </>
  );
};
