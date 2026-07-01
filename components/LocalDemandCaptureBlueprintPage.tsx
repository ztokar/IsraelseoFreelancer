import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ClipboardList,
  FileText,
  MapPinned,
  Search,
  ShieldCheck,
  Star,
  Video,
} from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { CASE_STUDY_PAGES } from '../constants-casestudies';
import { REVIEWS } from '../constants';
import { ContactCTA } from './ContactCTA';

declare global {
  interface ImportMetaEnv {
    readonly VITE_BLUEPRINT_STRIPE_URL?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const TITLE = 'Local Demand Capture Blueprint | Google, Maps and AI Search Strategy | Zechariah Tokar';
const DESC =
  'A one-time personalized search strategy for local service businesses that want to show up when ready-to-buy clients search on Google, Maps, ChatGPT, Gemini, and Perplexity.';

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/8x2aEQ1f7auX00rcYv6c00S';
const checkoutUrl = import.meta.env.VITE_BLUEPRINT_STRIPE_URL || STRIPE_PAYMENT_LINK;

const trackCheckoutIntent = (source: string) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'blueprint_checkout_click',
    offer: 'Local Demand Capture Blueprint',
    value: 250,
    currency: 'USD',
    source,
  });
};

const PurchaseButton: React.FC<{ source: string; children?: React.ReactNode; className?: string }> = ({
  source,
  children = 'Get My Blueprint - $250',
  className = 'btn btn-primary',
}) => {
  const href = checkoutUrl || '#contact-fit';
  const isExternal = Boolean(checkoutUrl);

  return (
    <a
      className={className}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={() => trackCheckoutIntent(source)}
    >
      {children} <ArrowUpRight size={17} strokeWidth={2} />
    </a>
  );
};

const surfaces = ['Google Search', 'Google Maps', 'ChatGPT', 'Gemini', 'Perplexity'];

const localFits = [
  'Therapy practices',
  'ABA providers',
  'Home care agencies',
  'Healthcare consultants',
  'Real estate businesses',
  'High-trust local service companies',
];

const problems = [
  {
    title: 'Google does not clearly understand what you do',
    body: 'Your best services may be buried, grouped oddly, or described in a way that does not match how clients search.',
    icon: Search,
  },
  {
    title: 'The local proof is too thin',
    body: 'Maps, reviews, service-area pages, and public mentions may not give Google or buyers enough reason to choose you.',
    icon: MapPinned,
  },
  {
    title: 'AI tools do not have enough to recommend you',
    body: 'ChatGPT, Gemini, and Perplexity need clear public evidence before they can confidently name a business.',
    icon: Bot,
  },
];

const components = [
  {
    title: 'Search and Maps opportunity map',
    body: 'I identify the searches that are closest to real demand: service terms, location terms, comparison searches, and the questions buyers ask before reaching out.',
    points: ['Searches worth caring about', 'Competitors already winning them', 'What your current site is missing'],
  },
  {
    title: 'Pages and trust signals plan',
    body: 'I show which pages, reviews, profiles, citations, and proof points would make your business easier to understand and trust.',
    points: ['Missing service or location pages', 'Review and profile gaps', 'Simple trust fixes'],
  },
  {
    title: 'Recommendation-readiness review',
    body: 'I check whether AI tools and search results can describe your business clearly, then point out what would make you easier to recommend.',
    points: ['ChatGPT, Gemini, and Perplexity checks', 'Brand clarity issues', 'Public proof gaps'],
  },
];

const deliverables = [
  { title: 'Personalized search research', body: 'A review of your business, competitors, local search results, and the searches most likely to turn into leads.', icon: Search },
  { title: 'Custom strategy document', body: 'A clear written plan with the opportunities, missing pieces, and recommended next steps.', icon: FileText },
  { title: 'Loom walkthrough', body: 'A 15 to 25 minute video explaining what I found and why I would prioritize it that way.', icon: Video },
  { title: '30-day action plan', body: 'A short order of operations so you know what to fix first, what can wait, and what not to waste money on.', icon: ClipboardList },
];

const faqs = [
  {
    q: 'Is this monthly SEO?',
    a: 'No. This is a one-time strategy blueprint. If implementation makes sense afterward, we can discuss it separately.',
  },
  {
    q: 'Do you guarantee rankings?',
    a: 'No. Nobody ethical can guarantee rankings. I do promise practical, honest recommendations based on real search and competitive research.',
  },
  {
    q: 'What happens after I buy?',
    a: 'Checkout should send you to the intake page. You will share your website, main service, target locations, and the biggest visibility problem you want solved.',
  },
  {
    q: 'Is this right for every business?',
    a: 'No. If your business does not depend on people searching for your service, this may not be a good fit. You can send me your site first and I will tell you honestly.',
  },
  {
    q: 'Are taxes added at checkout?',
    a: 'No tax should be added to this offer.',
  },
];

const proofScreenshots = [
  {
    label: 'Client feedback',
    img: '/images/proof-client-praise.jpg',
    alt: 'Client message praising an SEO deliverable',
    body: 'A real client reaction to a recent SEO deliverable.',
  },
  {
    label: 'Google lead',
    img: '/images/proof-google-lead.jpg',
    alt: 'Inbound lead message that found a provider on Google',
    body: 'A real inbound lead that found the provider on Google.',
  },
  {
    label: 'Reddit reach',
    img: '/images/proof-reddit-405k.jpg',
    alt: 'Reddit post stats showing 405,000 views',
    body: 'A single Reddit post reaching 405K views.',
  },
  {
    label: 'AI search visibility',
    img: '/images/proof-linkedin-chatgpt.jpg',
    alt: 'LinkedIn featured image about ranking on ChatGPT for lucite shtenders',
    body: 'A real LinkedIn screenshot about showing up in ChatGPT.',
  },
];

const selectedReviews = REVIEWS.filter((review) =>
  ['Brett Sheldon, LCSW', 'Yonatan Vinnik, LSW', 'Menachem Encaoua', 'Sean Littman', 'Raffi Bilek', 'Yehudah Kreitenberg'].includes(review.name)
);

const selectedCaseStudies = CASE_STUDY_PAGES.filter((study) =>
  ['behfar-team-real-estate-seo', 'achieving-stars-aba-therapy-seo', 'reddit-405k-views'].includes(study.slug)
);

export const LocalDemandCaptureBlueprintPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/local-demand-capture-blueprint' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/local-demand-capture-blueprint" image="/images/proof-linkedin-morristown.jpg" />

      <main className="gp blueprint">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Local Demand Capture Blueprint
        </div>

        <section className="bp-hero">
          <div className="wrap bp-hero-grid">
            <div>
              <h1>Find out why your local business is not showing up on Google, Maps, and AI search.</h1>
              <p className="lede">
                I personally analyze your website, local search presence, and public proof, then give you a practical plan to help ready-to-buy clients find you.
              </p>
              <div className="bp-surfaces" aria-label="Search surfaces covered">
                {surfaces.map((surface) => (
                  <span key={surface}>{surface}</span>
                ))}
              </div>
              <div className="hero-actions">
                <PurchaseButton source="hero" />
                <a className="btn btn-ghost" href="#contact-fit">Send your site first</a>
              </div>
              <p className="bp-cta-note">Not sure if this is a fit? Send me your site first and I will tell you honestly.</p>
            </div>
            <div className="bp-proof-stack" aria-label="Real proof screenshots">
              <figure className="bp-proof-main">
                <img src="/images/proof-linkedin-morristown.jpg" alt="LinkedIn featured image showing a local SEO ranking result" />
                <figcaption>Local search proof from a real campaign screenshot.</figcaption>
              </figure>
              <div className="bp-proof-notes">
                <span><CheckCircle2 size={16} strokeWidth={2.2} />Real client reviews</span>
                <span><CheckCircle2 size={16} strokeWidth={2.2} />Public case studies</span>
                <span><CheckCircle2 size={16} strokeWidth={2.2} />Actual campaign screenshots</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bp-fit-strip">
          <div className="wrap">
            <span className="eyebrow">Best fit</span>
            <div className="bp-fit-list">
              {localFits.map((fit) => (
                <span key={fit}><CheckCircle2 size={16} strokeWidth={2.2} />{fit}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">The problem</span>
              <h2>Good businesses often stay invisible online.</h2>
            </div>
            <div className="copy-stack">
              <p className="lead-copy">You may have happy clients, referrals, and years of experience, while less qualified competitors still show up first.</p>
              <p>Usually the issue is not one magic SEO trick. It is a set of missing signals: the right local pages, clearer service language, stronger proof, and a better connection between your website, Google profile, reviews, and public mentions.</p>
              <div className="bp-problem-grid">
                {problems.map((problem) => {
                  const Icon = problem.icon;
                  return (
                    <article key={problem.title}>
                      <Icon size={24} strokeWidth={1.8} />
                      <h3>{problem.title}</h3>
                      <p>{problem.body}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bp-testimonials divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Client reviews</span>
              <h2>Clients mention the same things: honesty, clarity, and practical results.</h2>
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

        <section className="bp-offer divider">
          <div className="wrap bp-offer-grid">
            <div>
              <span className="eyebrow">The offer</span>
              <h2>Local Demand Capture Blueprint<sup>TM</sup></h2>
              <p className="lede">A one-time personalized search strategy showing what I would fix first if your local business were mine.</p>
            </div>
            <div className="bp-offer-card">
              <ShieldCheck size={30} strokeWidth={1.8} />
              <p>No bloated monthly report. No vague agency audit. Just the practical moves most likely to help better clients find and trust you.</p>
              <PurchaseButton source="offer-card" className="btn btn-ghost" />
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What I check</span>
              <h2>Three parts, one clear plan.</h2>
            </div>
            <div className="bp-component-grid">
              {components.map((item, index) => (
                <article key={item.title}>
                  <span className="bp-step">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}><CheckCircle2 size={15} strokeWidth={2.2} />{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-deliverables divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">What you receive</span>
              <h2>A short strategy package you can actually use.</h2>
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

        <section className="bp-why divider">
          <div className="wrap bp-why-grid">
            <div className="person-mark">ZT</div>
            <div>
              <span className="eyebrow">Why Zechariah</span>
              <h2>I care more about the right next move than selling you SEO you do not need.</h2>
              <p className="lede">I am Zechariah Tokar, a search visibility consultant helping businesses get found across Google, Maps, Reddit, and AI search. I work directly with businesses targeting the US and English-speaking markets.</p>
              <p>I focus on practical search strategy for businesses that care about leads, not vanity traffic. If I do not think this will help you, I will say that clearly.</p>
            </div>
          </div>
        </section>

        <section className="bp-proof-gallery divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Screenshots</span>
              <h2>A few receipts from real work.</h2>
              <p className="lede">Client feedback, a Google lead, Reddit reach, and an AI-search proof post.</p>
            </div>
            <div className="bp-shot-grid">
              {proofScreenshots.map((proof) => (
                <figure key={`${proof.label}-${proof.img}`}>
                  <div className="bp-shot-img">
                    <img src={proof.img} alt={proof.alt} />
                  </div>
                  <figcaption><b>{proof.label}</b><span>{proof.body}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-case-band divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Selected outcomes</span>
              <h2>Related work that matches this offer.</h2>
            </div>
            <div className="bp-case-grid">
              {selectedCaseStudies.map((study) => (
                <NavLink className="bp-case-card" to={`/case-studies/${study.slug}`} key={study.slug}>
                  <div className="bp-case-metric">{study.metric}</div>
                  <div>
                    <span>{study.eyebrow}</span>
                    <h3>{study.h1}</h3>
                    <p>{study.result}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-pricing" id="purchase">
          <div className="wrap bp-pricing-grid">
            <div>
              <span className="eyebrow">Beta offer</span>
              <h2>$250 one-time</h2>
              <p>Future pricing will likely increase as demand grows. No tax should be added at checkout.</p>
            </div>
            <div className="bp-price-card">
              <ul>
                {['Personalized research', 'Search opportunity map', 'Google Doc strategy', 'Loom walkthrough', '30-day roadmap'].map((item) => (
                  <li key={item}><CheckCircle2 size={17} strokeWidth={2.2} />{item}</li>
                ))}
              </ul>
              <PurchaseButton source="pricing" />
              <p className="bp-cta-note">Delivered in 3 to 5 business days after intake.</p>
            </div>
          </div>
        </section>

        <section className="bp-faq divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Common questions before buying.</h2>
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
          subject="Blueprint fit check"
          eyebrow="Not sure?"
          title="Send your site first and I will tell you honestly."
          body="Share your website, main service, and target area. If the blueprint is not the right fit, I will say so before you buy."
          submitButtonText="Check fit first"
        />
      </main>
    </>
  );
};
