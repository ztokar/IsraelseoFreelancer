import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  FileBarChart,
  Link2,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Newspaper,
  PlayCircle,
  Search,
  Sparkles,
  Star,
} from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { REVIEWS } from '../constants';

const PATH = '/ai-seo-monthly';
const CANONICAL = `https://israelseofreelancer.com${PATH}`;
const TITLE = 'Monthly AI SEO Service | Show Up in Google & ChatGPT | Zechariah Tokar';
const DESC =
  'I run your SEO every month with my own AI system: pages, links, Reddit, press releases and your Google profile. $750 a month for the first 5 businesses.';

const PRICE = 750;
const CALENDLY = '/book';
const PHONE_DISPLAY = '+972 53-848-4641';
const WHATSAPP = `https://wa.me/972538484641?text=${encodeURIComponent('Hi Zechariah, I saw your monthly AI SEO page. My website is: ')}`;

const track = (event: string, source: string) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, offer: 'Monthly AI SEO', value: PRICE, currency: 'USD', source });
};

const WhatsAppButton: React.FC<{ source: string; children?: React.ReactNode; className?: string }> = ({
  source,
  children = 'WhatsApp me',
  className = 'btn btn-primary',
}) => (
  <a className={className} href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={() => track('ai_seo_monthly_whatsapp_click', source)}>
    <MessageCircle size={17} strokeWidth={2} /> {children}
  </a>
);

const BookButton: React.FC<{ source: string; children?: React.ReactNode; className?: string }> = ({
  source,
  children = 'Book a call',
  className = 'btn btn-ghost',
}) => (
  <a className={className} href={CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => track('ai_seo_monthly_book_click', source)}>
    {children} <ArrowUpRight size={17} strokeWidth={2} />
  </a>
);

const asks = [
  {
    where: 'Someone asks ChatGPT',
    query: 'i want to buy lucite shtenders in the US',
    img: '/images/proof-linkedin-chatgpt.jpg',
    w: 480,
    h: 255,
    alt: 'ChatGPT answering a question about buying lucite shtenders in the US and listing ZStander first',
    caption: 'ChatGPT names ZStander first. Their Google sales are up 300%.',
  },
  {
    where: 'Someone searches Google',
    query: 'eating disorder treatment in morristown nj',
    img: '/images/proof-linkedin-morristown.jpg',
    w: 480,
    h: 217,
    alt: 'Google results for eating disorder treatment in Morristown NJ showing Embracing Uncertainty at the top of the map pack',
    caption: 'Embracing Uncertainty sits at the top of the map pack.',
  },
];

const moreProof = [
  {
    img: '/images/proof-reddit-405k.jpg',
    w: 471,
    h: 159,
    alt: 'Reddit post statistics showing 405,000 views, 518 upvotes and 217 comments',
    title: '405K views on one Reddit post',
    body: 'Posted where people were asking for recommendations. 518 upvotes, 217 comments.',
  },
  {
    img: '/images/proof-google-lead.jpg',
    w: 441,
    h: 123,
    alt: 'Message from a parent asking about in-home ABA therapy who found the client on Google',
    title: 'A lead that found the client on Google',
    body: 'A parent asking an ABA practice about in-home therapy.',
  },
];

// Before and after numbers as Zechariah posted them on LinkedIn. Each row has its own scale.
const beforeAfter = [
  {
    label: 'Website leads in 30 days',
    before: 0,
    after: 22,
    beforeText: '0',
    afterText: '22',
    note: 'Local business, 4 months in. Reddit, press releases, backlinks and infographics.',
  },
  {
    label: 'Google searches the site shows up for',
    before: 20,
    after: 70,
    beforeText: '20',
    afterText: '70+',
    note: 'In 3 weeks. Relevant links, more service and area pages, Google Business Profile and Merchant Center.',
  },
  {
    label: 'Google and AI sales in 30 days',
    before: 2,
    after: 5,
    beforeText: '2k',
    afterText: '5k',
    note: 'Shopify store. New collections and the content that supports them. No link building, no Reddit.',
  },
  {
    label: 'Website leads a month',
    before: 0,
    after: 10,
    beforeText: '0',
    afterText: '4 to 10',
    note: 'Therapy practice that had already spent 15k+ on SEO with no website leads.',
  },
];

const results = [
  { metric: '40+', label: 'brands helped with SEO' },
  { metric: '50+', label: 'businesses helped with their Google Business Profile' },
  { metric: '+300%', label: 'Google sales for ZStander, a Shopify store' },
  { metric: '#1', label: 'for "Midwood Brooklyn real estate agent" (The Behfar Team)' },
];

const coreWork = [
  'Fixes to the pages you already have: titles, internal links, speed and broken links',
  'Pages stuck on page 2 pushed toward page 1',
  'Every new page checked until Google indexes it',
];

const monthly = [
  { icon: MapPin, title: 'Google Business Profile and Merchant Center', body: 'Filled out, posted to and kept current. I have done this for 50+ businesses.' },
  { icon: Link2, title: 'Backlinks and local citations', body: 'Relevant links and listings that give Google a reason to trust your site.' },
  { icon: Newspaper, title: 'Press releases', body: 'News about your business, published on news sites.' },
  { icon: MessagesSquare, title: 'Reddit', body: 'Recommendations in the threads where people ask who to use. No spam, no fake upvotes.' },
  { icon: PlayCircle, title: 'YouTube and infographics', body: 'Short videos and visuals about your business for the places your buyers look.' },
  { icon: Bot, title: 'ChatGPT and AI answers', body: 'I check what ChatGPT, Gemini and Google AI say about you, and fix what is wrong or missing.' },
  { icon: FileBarChart, title: 'A monthly report with your logo', body: 'What I did, what moved and what is next, in plain English.' },
];

const fits = [
  'Therapy and mental health practices',
  'ABA and behavioral health',
  'Shopify stores',
  'Real estate teams and property managers',
  'Local service businesses',
];

const steps = [
  { title: 'Send me your website on WhatsApp.', body: 'One line is enough. Tell me what you sell and where.' },
  { title: 'I look at your site first.', body: 'If I can help, I tell you how. If I can not, I tell you that too.' },
  { title: 'You give me access and I start.', body: 'Your website, Search Console and Google Business Profile. My AI connects from there.' },
];

const faqs = [
  { q: 'How much does it cost?', a: '$750 a month. That is the price for the first 5 businesses I take on.' },
  { q: 'Who do I talk to?', a: `Me, Zechariah, directly. WhatsApp is fastest: ${PHONE_DISPLAY}. You can also book a call.` },
  { q: 'What do you need from me?', a: 'Access to your website (Shopify, WordPress, Wix, Webflow or whatever you use), your Google Search Console and your Google Business Profile. After that, you should not get marketing homework.' },
  { q: 'Do you guarantee rankings or AI mentions?', a: 'No. Nobody honest can. What I promise is work aimed at the searches that bring you customers, and a clear monthly report on what I did and what moved.' },
  { q: 'What if you can not help my business?', a: 'Then I will tell you up front. I only take businesses I am sure I can help. If I have a doubt, I will refer you to someone else or tell you to skip marketing for now.' },
  { q: 'How will I know what you did?', a: 'Every month you get a report with your logo on it: the pages, links, posts and fixes I did, and what changed in Google and AI search.' },
];

const selectedReviews = REVIEWS.filter((review) =>
  ['Brett Sheldon, LCSW', 'Yonatan Vinnik, LSW', 'Sean Littman', 'Menachem Encaoua', 'Raffi Bilek', 'Yehudah Kreitenberg'].includes(review.name)
);

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Monthly AI SEO',
      serviceType: 'SEO and AI search visibility',
      description: DESC,
      url: CANONICAL,
      image: 'https://israelseofreelancer.com/images/service-audit-zechariah.webp',
      provider: { '@id': 'https://israelseofreelancer.com/#person' },
      offers: {
        '@type': 'Offer',
        price: String(PRICE),
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: String(PRICE), priceCurrency: 'USD', unitText: 'MONTH' },
        url: CANONICAL,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://israelseofreelancer.com/' },
        { '@type': 'ListItem', position: 2, name: 'Monthly AI SEO', item: CANONICAL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faqs`,
      mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
    },
  ],
};

export const AiSeoMonthlyPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: PATH, image: '/images/service-audit-zechariah.webp' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path={PATH} image="/images/service-audit-zechariah.webp" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />

      <main className="gp blueprint aim">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Monthly AI SEO
        </div>

        <section className="bp-hero aim-hero">
          <div className="wrap aim-hero-grid">
            <div>
              <span className="hero-badge"><Sparkles size={15} strokeWidth={2.2} /> 5 spots at $750 a month</span>
              <h1>Get picked when people ask Google and ChatGPT who to hire.</h1>
              <p className="lede">Monthly AI SEO for local businesses, Shopify stores and therapy practices, run by me and my own AI system.</p>
              <div className="bp-surfaces" aria-label="Where I get you found">
                <span>Google & Maps</span>
                <span>ChatGPT & AI answers</span>
                <span>Reddit</span>
                <span>Press</span>
                <span>YouTube</span>
              </div>
              <div className="hero-actions">
                <WhatsAppButton source="hero" />
                <BookButton source="hero" />
              </div>
              <p className="bp-cta-note">$750 a month for the first 5 businesses. You work with me directly.</p>
            </div>
            <figure className="aim-hero-photo">
              <img src="/images/service-audit-zechariah.webp" width={800} height={450} alt="Zechariah Tokar working on client SEO at his desk" fetchPriority="high" />
              <a className="aim-text-card" href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={() => track('ai_seo_monthly_whatsapp_click', 'hero-card')}>
                <span className="aim-text-icon"><MessageCircle size={20} strokeWidth={2} /></span>
                <span>
                  <b>Text Zechariah, the one doing the work</b>
                  <span>{PHONE_DISPLAY} on WhatsApp</span>
                </span>
              </a>
            </figure>
          </div>
        </section>

        <section className="aim-ask divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Real screenshots</span>
              <h2>Someone asks. My clients come up first.</h2>
            </div>
            <div className="aim-ask-grid">
              {asks.map((a) => (
                <figure className="aim-ask-card" key={a.img}>
                  <div className="aim-bubble">
                    <span>{a.where}</span>
                    <p><Search size={15} strokeWidth={2.2} />{a.query}</p>
                  </div>
                  <div className="aim-shot"><img src={a.img} width={a.w} height={a.h} alt={a.alt} loading="lazy" /></div>
                  <figcaption>{a.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="aim-more-proof">
              {moreProof.map((p) => (
                <figure key={p.img}>
                  <div className="aim-shot aim-shot-sm"><img src={p.img} width={p.w} height={p.h} alt={p.alt} loading="lazy" /></div>
                  <figcaption><b>{p.title}</b><span>{p.body}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="aim-ba divider">
          <div className="wrap">
            <div className="sec-head">
              <h2>Before and after, from recent clients.</h2>
              <p className="aim-sub">The numbers as I posted them on LinkedIn. Each card is its own business.</p>
            </div>
            <div className="aim-ba-grid">
              {beforeAfter.map((row) => (
                <article className="aim-ba-card" key={row.label}>
                  <h3>{row.label}</h3>
                  <div className="aim-bars" role="img" aria-label={`${row.label}: before ${row.beforeText}, now ${row.afterText}`}>
                    <div className="aim-bar-row">
                      <span className="aim-bar-key">Before</span>
                      <span className="aim-bar-track"><span className="aim-bar aim-bar-before" style={{ width: `${(row.before / row.after) * 100}%` }} /></span>
                      <span className="aim-bar-val">{row.beforeText}</span>
                    </div>
                    <div className="aim-bar-row">
                      <span className="aim-bar-key">Now</span>
                      <span className="aim-bar-track"><span className="aim-bar aim-bar-now" style={{ width: '100%' }} /></span>
                      <span className="aim-bar-val aim-bar-val-now">{row.afterText}</span>
                    </div>
                  </div>
                  <p>{row.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bp-results-strip">
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

        <section className="aim-month divider">
          <div className="wrap">
            <div className="sec-head">
              <h2>What you get every month.</h2>
              <p className="aim-sub">Google, AI answers, Reddit, press and links, run as one plan for your business.</p>
            </div>
            <div className="aim-month-grid">
              <article className="aim-core">
                <Search size={26} strokeWidth={1.8} />
                <h3>Pages that win the searches your buyers type</h3>
                <p>I map what people search before they hire or buy, then build a page for each one: your services, your towns, your store collections.</p>
                <ul>
                  {coreWork.map((item) => (
                    <li key={item}><CheckCircle2 size={17} strokeWidth={2.2} />{item}</li>
                  ))}
                </ul>
              </article>
              <div className="aim-rows">
                {monthly.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="aim-row" key={item.title}>
                      <Icon size={22} strokeWidth={1.9} />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="aim-work divider">
          <div className="wrap aim-work-grid">
            <figure className="aim-work-photo">
              <img src="/images/service-content-zechariah.webp" width={562} height={1000} alt="Zechariah Tokar at his desk planning a client's monthly SEO work" loading="lazy" />
            </figure>
            <div className="copy-stack">
              <span className="eyebrow">How I work</span>
              <h2>One person, a lot of AI, and a plan for every client.</h2>
              <div className="aim-work-list">
                <div><CalendarDays size={20} strokeWidth={2} /><p>Every client gets a monthly calendar: pages, backlinks, Reddit and videos, planned before the month starts.</p></div>
                <div><Sparkles size={20} strokeWidth={2} /><p>I learn in kollel, so my day runs on sedarim. Between first and second seder I research that day's client. Between second and third seder the work gets published and sent to Google.</p></div>
                <div><Bot size={20} strokeWidth={2} /><p>My AI is connected to every platform I work in, from your website to Search Console. It even orders the backlinks and guest posts. That is how one person covers all of it.</p></div>
                <div><Newspaper size={20} strokeWidth={2} /><p>An automation pulls the latest AI and SEO news every day, so your plan keeps up with Google.</p></div>
              </div>
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

        <section className="aim-quote divider">
          <div className="wrap">
            <blockquote>
              <p>"I only take on a business I'm 1000 percent sure I can help. If I have a doubt, I will refer them or tell them not to do marketing."</p>
              <footer>Zechariah, on LinkedIn</footer>
            </blockquote>
          </div>
        </section>

        <section className="bp-testimonials divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Client reviews</span>
              <h2>What clients say about working with me.</h2>
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

        <section className="bp-pricing" id="price">
          <div className="wrap bp-pricing-grid">
            <div>
              <span className="eyebrow">First 5 businesses</span>
              <h2>$750 a month</h2>
              <p>That is the price for the first 5 businesses I take on. You get everything on this page, run by me, with a report every month.</p>
            </div>
            <div className="bp-price-card">
              <ul>
                {['Pages for the searches your buyers type', 'Fixes, indexing and page 2 pushes', 'Google Business Profile and citations', 'Backlinks, press releases and Reddit', 'AI answer checks and a monthly report'].map((item) => (
                  <li key={item}><CheckCircle2 size={17} strokeWidth={2.2} />{item}</li>
                ))}
              </ul>
              <WhatsAppButton source="pricing" children="WhatsApp me for a spot" />
              <p className="bp-cta-note">Rather talk first? <a href={CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => track('ai_seo_monthly_book_click', 'pricing')}>Book a call.</a></p>
            </div>
          </div>
        </section>

        <section className="aim-steps divider">
          <div className="wrap">
            <div className="sec-head">
              <h2>How to start.</h2>
            </div>
            <div className="bp-component-grid">
              {steps.map((step, i) => (
                <article key={step.title}>
                  <span className="bp-step">STEP {i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

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
            <img className="aim-cta-photo" src="/images/service-tracking-zechariah.webp" width={562} height={1000} alt="Zechariah Tokar" loading="lazy" />
            <h2>Want one of the 5 spots?</h2>
            <p>Send me your website on WhatsApp. I will look at it first and tell you honestly if I can help.</p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '26px' }}>
              <WhatsAppButton source="footer-cta" />
              <BookButton source="footer-cta" />
            </div>
            <p className="aim-cta-phone">{PHONE_DISPLAY} on WhatsApp</p>
          </div>
        </section>
      </main>
    </>
  );
};
