import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  FileText,
  Layers,
  Megaphone,
  ShieldCheck,
  Star,
  Target,
} from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { REVIEWS } from '../constants';
import { CASE_STUDY_PAGES } from '../constants-casestudies';
import { OfferLadder } from './OfferLadder';

const TITLE = 'Done-For-You Local Authority System | Zechariah Tokar';
const DESC =
  'Done-for-you local lead generation: I find the targets, build the money pages, add the supporting content, and grow your brand across Google, Reddit, YouTube, and AI search so ready-to-buy clients find and pick you.';

const CALENDLY = '/book';
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/00wbIU4rjfPh3cD3nV6c00U';

const track = (event: string, source: string) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, offer: 'Local Authority System', value: 2000, currency: 'USD', source });
};

const StartButton: React.FC<{ source: string; children?: React.ReactNode; className?: string }> = ({
  source,
  children = 'Get started - $2,000',
  className = 'btn btn-primary',
}) => (
  <a className={className} href={STRIPE_PAYMENT_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track('authority_system_checkout_click', source)}>
    {children} <ArrowUpRight size={17} strokeWidth={2} />
  </a>
);

const BookButton: React.FC<{ source: string; children?: React.ReactNode; className?: string }> = ({
  source,
  children = 'Questions first? Book a call',
  className = 'btn btn-ghost',
}) => (
  <a className={className} href={CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => track('authority_system_book_click', source)}>
    {children} <ArrowUpRight size={17} strokeWidth={2} />
  </a>
);

const results = [
  { metric: '10+', label: 'leads a month for North Star Ranch through Google and paid search' },
  { metric: '#1', label: 'for "Morristown eating disorder therapist" (Embracing Uncertainty)' },
  { metric: '+300%', label: 'increase in Google sales for ZStander' },
  { metric: '#1', label: 'for "Midwood Brooklyn real estate agent" (The Behfar Team)' },
];

const build = [
  {
    title: 'The money pages',
    body: 'Specific bottom-of-funnel pages for the exact searches ready-to-buy clients use. One page, one clear job.',
    icon: Target,
  },
  {
    title: 'The support that ranks them',
    body: 'Content silos and internal links built to push authority straight to your money pages, not random blog filler.',
    icon: Layers,
  },
  {
    title: 'Cross-platform reputation',
    body: 'Reddit, YouTube, Google, and Maps working together so your brand looks active and trusted everywhere buyers look.',
    icon: Megaphone,
  },
  {
    title: 'AI search visibility',
    body: 'Set up so ChatGPT, Gemini, and Perplexity have the clear public proof they need to recommend you by name.',
    icon: Bot,
  },
];

const fits = [
  'Therapy and mental health practices',
  'ABA and behavioral health providers',
  'Real estate teams and property managers',
  'Home care and local healthcare',
  'Local service businesses that live on referrals',
];

const faqs = [
  { q: 'How much does it cost?', a: 'A flat $2,000 to start the full build, as a one-time project with no long contract. Larger multi-location builds are quoted up from there. If you want to talk it through first, book a quick call.' },
  { q: 'Do you guarantee rankings?', a: 'No. Nobody honest can. What I promise is specific, bottom-of-funnel work aimed at real leads, and clear proof of what I did and why.' },
  { q: 'Is this another agency retainer?', a: 'No. I am a one-person, AI-powered operation. That means lower cost, direct communication, and work built around your actual business, not a pile of Fiverr blog posts.' },
  { q: 'Will this create a lot of work for me?', a: 'No. I pull what I need on one short call, then I execute. You should not get marketing homework.' },
  { q: 'What if it is not a fit?', a: 'If search and reputation are not right for your business, I will tell you on the call. I turn down work that will not help.' },
];

const selectedReviews = REVIEWS.filter((review) =>
  ['Brett Sheldon, LCSW', 'Yonatan Vinnik, LSW', 'Sean Littman', 'Menachem Encaoua', 'Raffi Bilek', 'Yehudah Kreitenberg'].includes(review.name)
);

const featuredCases = CASE_STUDY_PAGES.slice(0, 4);

export const LocalAuthoritySystemPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/local-authority-system' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/local-authority-system" image="/images/proof-linkedin-morristown.jpg" />

      <main className="gp blueprint">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Local Authority System
        </div>

        <section className="bp-hero">
          <div className="wrap bp-hero-grid">
            <div>
              <span className="hero-badge"><ShieldCheck size={15} strokeWidth={2.2} /> Done for you</span>
              <h1>I build your whole local lead system for you.</h1>
              <p className="lede">
                I find the targets, build the money pages, add the content that ranks them, and grow your brand across Google, Reddit, YouTube, and AI search. Done with you, not homework for you.
              </p>
              <div className="bp-surfaces" aria-label="Surfaces covered">
                <span>Google & Maps</span>
                <span>Reddit</span>
                <span>YouTube</span>
                <span>ChatGPT & AI search</span>
              </div>
              <div className="hero-actions">
                <StartButton source="hero" />
                <NavLink className="btn btn-ghost" to="/case-studies">See the results</NavLink>
              </div>
              <p className="bp-cta-note">$2,000 flat to start. One-time build, no long contract. <a href={CALENDLY} target="_blank" rel="noopener noreferrer">Questions first? Book a call.</a></p>
            </div>
            <div className="bp-proof-stack" aria-label="Real proof screenshot">
              <figure className="bp-proof-main">
                <img src="/images/proof-linkedin-morristown.jpg" alt="LinkedIn featured image showing a local SEO ranking result" />
                <figcaption>A real local ranking result from a client campaign.</figcaption>
              </figure>
              <div className="bp-proof-notes">
                <span><CheckCircle2 size={16} strokeWidth={2.2} />Built around your business</span>
                <span><CheckCircle2 size={16} strokeWidth={2.2} />No filler work</span>
                <span><CheckCircle2 size={16} strokeWidth={2.2} />Honest, plain English</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bp-results-strip divider">
          <div className="wrap">
            <div className="results-grid">
              {results.map((r) => (
                <div className="result-cell" key={r.label}>
                  <span className="result-metric">{r.metric}</span>
                  <span className="result-label">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">The problem</span>
              <h2>You have a great business. Google and buyers just cannot tell.</h2>
            </div>
            <div className="copy-stack">
              <p className="lead-copy">Most agencies chase broad keywords, pump out blog filler, and send you a dashboard you never read. The leads never show up, and the money feels wasted.</p>
              <p>I do the opposite. I build specific bottom-of-funnel pages for the searches that turn into clients, support them so they rank, and grow your brand across the web so Google and AI both trust you. That is the whole system, done for you.</p>
            </div>
          </div>
        </section>

        <section className="bp-deliverables divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">What I build</span>
              <h2>Relevance and reputation, working as one system.</h2>
            </div>
            <div className="bp-deliverable-grid">
              {build.map((item) => {
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

        <section className="bp-fit-strip">
          <div className="wrap">
            <span className="eyebrow">Best fit</span>
            <div className="bp-fit-list">
              {fits.map((fit) => (
                <span key={fit}><CheckCircle2 size={16} strokeWidth={2.2} />{fit}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-testimonials divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Client reviews</span>
              <h2>Clients say the same three things: honest, clear, and it works.</h2>
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

        <section className="divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Case studies</span>
              <h2>Real campaigns, real numbers.</h2>
            </div>
            <div className="las-case-grid">
              {featuredCases.map((cs) => (
                <NavLink className="las-case-card" to={`/case-studies/${cs.slug}`} key={cs.slug}>
                  <span className="las-case-metric">{cs.metric}</span>
                  <h3>{cs.client}</h3>
                  <p>{cs.result}</p>
                  <span className="ladder-link">Read the case study <ArrowUpRight size={15} strokeWidth={2.2} /></span>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-why divider">
          <div className="wrap bp-why-grid">
            <div className="person-mark">ZT</div>
            <div>
              <span className="eyebrow">Why Zechariah</span>
              <h2>One person, AI-powered, and honest about what will actually help you.</h2>
              <p className="lede">I am Zechariah Tokar. I help local businesses get found and chosen across Google, Maps, Reddit, and AI search. Because I run lean with AI instead of a bloated agency, you get senior work at a fair price, direct communication, and no filler.</p>
              <p>If I do not think search will grow your business, I will tell you plainly. I would rather keep your trust than sell you something you do not need.</p>
            </div>
          </div>
        </section>

        <section className="bp-pricing" id="book">
          <div className="wrap bp-pricing-grid">
            <div>
              <span className="eyebrow">One flat price</span>
              <h2>$2,000 to start</h2>
              <p>A flat, honest price for the full build. One-time project, no long contract. Larger multi-location builds are quoted up from there.</p>
            </div>
            <div className="bp-price-card">
              <ul>
                {['Target research and money pages', 'Supporting content and internal links', 'Reddit, YouTube, and brand reputation', 'AI search visibility setup', 'One flat price for the build'].map((item) => (
                  <li key={item}><CheckCircle2 size={17} strokeWidth={2.2} />{item}</li>
                ))}
              </ul>
              <StartButton source="pricing" />
              <p className="bp-cta-note">Not ready for the full build? Start with the <NavLink to="/find-my-target">$20 Target Finder</NavLink>.</p>
            </div>
          </div>
        </section>

        <OfferLadder current="system" />

        <section className="bp-faq divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Common questions.</h2>
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

        <section className="gp-cta contact-cta" id="contact">
          <div className="wrap">
            <span className="eyebrow">Ready when you are</span>
            <h2>Let's build your local lead system.</h2>
            <p>Get started for a flat $2,000, or book a quick call first if you want to talk it through. Either way, I will be honest about what will actually help.</p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '26px' }}>
              <StartButton source="footer-cta" />
              <BookButton source="footer-cta" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
