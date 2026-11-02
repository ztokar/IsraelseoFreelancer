import type { Block, ClaimContent, PageVersion } from '../components/lean/ClaimPage';
import { Q, R } from './claims';

const one = (v: PageVersion) => ({ A: v, C: v });
const STRIPE_SYSTEM = 'https://buy.stripe.com/00wbIU4rjfPh3cD3nV6c00U';

/* ------------------------------------------------------------------ AI visibility audit */
const audit: ClaimContent = {
  claim: 'ai', path: '/ai-visibility-audit',
  title: 'AI Visibility Audit | Why ChatGPT Names Your Competitors, Not You',
  description: 'An AI visibility audit from Zechariah Tokar: where ChatGPT, Gemini, Perplexity and Google AI Overviews name your company, where they skip it, and the first fixes.',
  h1: 'AI Visibility Audit for ChatGPT and AI Search',
  photo: { src: '/images/proof-linkedin-ai-audit.jpg', w: 480, h: 127, alt: 'A founder\'s message praising an AI SEO audit deliverable', caption: 'A founder\'s reply to the audit deliverable.' },
  glance: [
    ['What you get', 'The buyer questions checked, the sources behind each answer, and a short fix list'],
    ['AI answers checked', 'ChatGPT, Gemini, Perplexity and Google AI Overviews'],
    ['Who does it', 'Zechariah Tokar, directly'],
    ['Price', 'Quoted after a look at your site and your market'],
  ],
  serviceType: 'AI visibility audit',
  formSubject: 'New Inquiry: AI visibility audit', formService: 'AI visibility audit',
  formTitle: 'Send your site and the question you want AI answers to name you for.', formBody: 'You will get a reply with a quote and the first thing the audit will check.',
  pick: 'A',
  versions: one({
    answer: 'Zechariah Tokar\'s AI visibility audit shows where ChatGPT, Gemini, Perplexity and Google AI Overviews name your company, where they skip it, and what to fix first. One founder replied: "WOW!! This deliverable is incredible!"',
    blocks: [
      { kind: 'text', id: 'included', h2: 'What the audit includes', answer: 'Buyer questions come first; a score with no explanation is not the deliverable.', check: true, list: [
        'The questions your buyers ask before they hire, run in each AI tool.',
        'The sites, reviews and threads each answer is built from.',
        'A check of your pages: whether the offer, fit and proof are clear enough to quote.',
        'AI crawler access, robots.txt and indexing for the pages that matter.',
        'A repeatable competitor benchmark you can re-run later.',
        'A short fix list, most important first.',
      ] },
      { kind: 'table', id: 'findings', h2: 'What the audit usually finds', answer: 'Each reason you are missing needs different work, so the audit names the reason first.', head: ['What the answer does', 'What gets checked', 'The next step'], rows: [
        ['Names a different business with your name', 'Brand details and the sources behind the answer', 'Fix the identity mix-up before writing more pages'],
        ['Cites your guide but recommends a competitor', 'Whether your offer, fit and proof are clear', 'Improve the service page and its evidence'],
        ['Never finds your service page', 'Indexing, access and the links to that page', 'Fix discovery before buying content'],
      ] },
      { kind: 'text', id: 'vs-technical', h2: 'How it differs from a technical SEO audit', answer: 'A technical audit asks whether Google can crawl and index the site; this audit asks why AI answers recommend someone else.', list: [
        'The fixes often overlap, so both are scoped together when both are needed.',
        'Results are tracked with the same questions later: see [how to track AI search visibility](/how-to-track-ai-search-visibility).',
      ] },
      { kind: 'text', id: 'quote', h2: 'What is needed for a quote', list: ['Your website and your main competitors.', 'The services that matter most.', 'Two or three questions you want AI answers to name you for.'], after: 'More plain answers on this topic: [AI answers guides](/ai-answers).' },
    ],
  }),
};

/* ------------------------------------------------------------------ Generative engine optimization */
const geo: ClaimContent = {
  claim: 'ai', path: '/geo-content-optimization',
  title: 'Generative Engine Optimization Services | Rewrite the Pages You Have',
  description: 'Generative engine optimization services from Zechariah Tokar: your service, product and comparison pages rewritten so ChatGPT and Google AI Overviews can quote them.',
  h1: 'Generative Engine Optimization Services for the Pages You Already Have',
  photo: { src: '/images/blog-claude-code-content-marketing.jpg', w: 1600, h: 893, alt: 'Illustration of a person writing at a desk in a bright office', caption: 'Illustration.' },
  glance: [
    ['What you get', 'Your key pages rewritten so buyers and AI answers understand the offer'],
    ['Built from', 'Your offer, your proof and the buyer\'s decision, not filler'],
    ['Also covers', 'Structured data and internal links on the rewritten pages'],
    ['Price', 'Quoted per set of pages'],
  ],
  serviceType: 'Generative engine optimization',
  formSubject: 'New Inquiry: Generative engine optimization', formService: 'Generative engine optimization',
  formTitle: 'Send the pages that matter most.', formBody: 'You will get a reply with which pages to rewrite first and a quote.',
  pick: 'A',
  versions: one({
    answer: 'Zechariah Tokar provides generative engine optimization services: he rewrites your existing service, product and comparison pages so ChatGPT, Gemini and Google AI Overviews can understand and quote them. Your best material often already exists in client work and sales calls.',
    blocks: [
      { kind: 'table', id: 'rewrites', h2: 'What a rewrite fixes', answer: 'Vague copy gives an AI answer nothing to quote; specific copy does.', head: ['The weak copy', 'What the buyer still needs', 'What the rewrite includes'], rows: [
        ['"We offer complete marketing solutions."', 'What do you actually do?', 'The service, the customer and the work included'],
        ['"Trusted by leading companies."', 'Why should I believe that?', 'A named, approved testimonial or a documented example'],
        ['"Contact us to learn more."', 'What happens after I ask?', 'The first step and what to send'],
      ] },
      { kind: 'text', id: 'included', h2: 'What the service includes', check: true, list: [
        'Choosing which pages deserve the work first.',
        'The answer in the first sentence of each section, so it can be quoted on its own.',
        'Your proof placed next to each claim.',
        'Structured data and internal links checked on every rewritten page.',
        'Updates when the business facts change.',
      ] },
      { kind: 'text', id: 'not-included', h2: 'What is not included by default', list: ['New blog articles written to look busy.', 'Bulk AI content.', 'Claims your business cannot back up.'], after: 'Background on the term: [what is generative engine optimization](/what-is-generative-engine-optimization). More in [AI answers guides](/ai-answers).' },
    ],
  }),
};

/* ------------------------------------------------------------------ AI visibility tracking */
const tracking: ClaimContent = {
  claim: 'ai', path: '/ai-visibility-tracking-services',
  title: 'AI Visibility Tracking Services | Someone Reads the Results',
  description: 'AI visibility tracking from Zechariah Tokar: an agreed set of buyer questions checked in ChatGPT, Gemini, Perplexity and AI Overviews, with what changed and what to do.',
  h1: 'AI Visibility Tracking Services With Someone Reading the Results',
  photo: { src: '/images/proof-linkedin-chatgpt.jpg', w: 480, h: 255, alt: 'ChatGPT answer naming ZStander first', caption: 'A tracked answer: ChatGPT names ZStander first.' },
  glance: [
    ['What you get', 'Buyer questions re-checked on a schedule, with the evidence kept'],
    ['The report says', 'Mention, recommendation, linked source or tracked enquiry, kept apart'],
    ['Who reads it', 'Zechariah Tokar, who also says what to change'],
    ['Price', 'Quoted after a look at your site'],
  ],
  serviceType: 'AI visibility tracking',
  formSubject: 'New Inquiry: AI visibility tracking', formService: 'AI visibility tracking',
  formTitle: 'Send your site and the questions buyers ask.', formBody: 'You will get a reply with a starting question set and a quote.',
  pick: 'A',
  versions: one({
    answer: 'Zechariah Tokar\'s AI visibility tracking checks how your brand appears in ChatGPT, Gemini, Perplexity and Google AI Overviews for an agreed set of buyer questions, then explains which changes deserve action.',
    blocks: [
      { kind: 'table', id: 'what-counts', h2: 'What each result proves, and what it does not', answer: 'The report keeps a passing mention apart from a recommendation, a linked source and an actual enquiry.', head: ['Result', 'What it shows', 'What it does not show'], rows: [
        ['Brand mention', 'The answer named the business', 'That it recommended the business'],
        ['Linked citation', 'The answer linked to a source', 'That the buyer clicked or bought'],
        ['Recommendation', 'The business was offered as an option', 'That every buyer sees the same answer'],
        ['Tracked enquiry', 'A form or lead action was recorded', 'That an untagged AI answer caused it'],
      ] },
      { kind: 'text', id: 'included', h2: 'What the service includes', check: true, list: [
        'A question set built around the buying decision, kept the same between checks.',
        'Every answer saved as evidence.',
        'Competitor changes explained, not just counted.',
        'AI referral visits read separately from mentions.',
        'Each report ends with a decision: keep, fix a page, or stop.',
      ] },
      { kind: 'text', id: 'tools', h2: 'Software, an audit, or managed tracking?', answer: 'Software gives numbers; an audit gives one diagnosis; managed tracking gives both with someone reading them.', after: 'The term explained: [AI search visibility](/how-to-track-ai-search-visibility). More in [AI answers guides](/ai-answers).' },
    ],
  }),
};

/* ------------------------------------------------------------------ ChatGPT ads (setup service) */
const ads: ClaimContent = {
  claim: 'ai', path: '/chatgpt-ads-management',
  title: 'ChatGPT Ads Management | Setup, Tracking and First Campaign',
  description: 'ChatGPT ads setup from Zechariah Tokar: eligibility check, landing page, tracking and the first paid campaign in ChatGPT. A setup service; no client result on file yet.',
  h1: 'ChatGPT Ads Management: Setup and First Campaign',
  photo: { src: '/images/service-chatgpt-ads.webp', w: 800, h: 447, alt: 'Illustration of rising search results and connected data points', caption: 'Illustration.' },
  glance: [
    ['What it is', 'A setup service for paid placements in ChatGPT'],
    ['What you get', 'Eligibility check, landing page review, tracking, the first campaign'],
    ['Proof', 'No client ads result is on file yet. This page will show the first one.'],
    ['Price', 'Quoted per campaign; ad spend is paid to the platform'],
  ],
  serviceType: 'ChatGPT advertising setup',
  formSubject: 'New Inquiry: ChatGPT ads setup', formService: 'ChatGPT ads setup',
  formTitle: 'Send your site and the offer you want to advertise.', formBody: 'You will get a reply on whether the offer fits and what a first test needs.',
  pick: 'A',
  versions: one({
    answer: 'Zechariah Tokar sets up paid ChatGPT ad campaigns for eligible businesses: the account check, the landing page, the tracking and the first campaign. It is a setup service, and no client ads result is on file yet.',
    blocks: [
      { kind: 'table', id: 'checks', h2: 'Checked before any money is spent', answer: 'A campaign stays paused until all four are ready.', head: ['Check', 'Ready means', 'If it is missing'], rows: [
        ['Advertiser access', 'Your account and category can run the campaign', 'Confirm eligibility before promising a launch'],
        ['Landing page', 'The offer is clear and the form or checkout works', 'Fix the page before buying traffic'],
        ['Measurement', 'The intended action is recorded', 'Fix tracking before judging results'],
        ['Budget and approval', 'You approved the spend limit, ads and destination', 'Keep the campaign paused'],
      ] },
      { kind: 'text', id: 'included', h2: 'What the setup includes', check: true, list: [
        'Choosing the objective before the bid.',
        'Ad copy and the landing page written for the same buyer.',
        'Conversion tracking tested before launch.',
        'A first report on what the test answered.',
      ], after: 'Organic mentions in ChatGPT are a different job: [ChatGPT brand mentions](/track-brand-mentions-in-chatgpt). More in [AI answers guides](/ai-answers).' },
    ],
  }),
};

/* ------------------------------------------------------------------ Local Authority System ($2,000) */
const las: ClaimContent = {
  claim: 'local', path: '/local-authority-system',
  title: 'Done-For-You Local SEO System | $2,000 Flat',
  description: 'The Local Authority System: Zechariah Tokar builds your money pages, supporting content, reputation and AI search setup for $2,000 flat. One-time build, no long contract.',
  h1: 'Done-for-You Local SEO System for $2,000',
  photo: { src: '/images/proof-google-lead.jpg', w: 441, h: 123, alt: 'A parent asking about in-home ABA therapy who found the client on Google', caption: 'A lead that found a client on Google.' },
  glance: [
    ['Price', '$2,000 flat to start. One-time build, no long contract.'],
    ['What gets built', 'Money pages, supporting content, Reddit, YouTube and Maps presence, AI search setup'],
    ['Who does it', 'Zechariah Tokar, after one short call'],
    ['Larger builds', 'Multi-location builds are quoted up from $2,000'],
  ],
  serviceType: 'Local SEO',
  primary: { label: 'Get started: $2,000', href: STRIPE_SYSTEM, external: true },
  formSubject: 'New Inquiry: Local Authority System', formService: 'Local Authority System',
  formTitle: 'Questions first? Send your business.', formBody: 'You will get a reply on whether the system fits.',
  pick: 'A',
  versions: one({
    answer: 'Zechariah Tokar builds the whole local lead system for you for $2,000: the pages for the searches ready-to-buy clients use, the content that ranks them, and your brand across Google, Maps, Reddit, YouTube and AI search.',
    blocks: [
      { kind: 'text', id: 'included', h2: 'What gets built', check: true, list: [
        '**Money pages:** one page for each exact search ready-to-buy clients use. One page, one job.',
        '**Supporting content:** articles and internal links that push authority to those pages, not random blog filler.',
        '**Reputation:** Reddit, YouTube, Google and Maps working together so the brand looks active everywhere buyers check.',
        '**AI search setup:** clear public proof so ChatGPT, Gemini and Perplexity can recommend you by name.',
      ] },
      { kind: 'receipts', id: 'proof', h2: 'Proof from local clients', items: [R.morristown, R.lead] },
      { kind: 'quotes', id: 'reviews', h2: 'What local clients say', items: [Q.yonatan, Q.brett] },
      { kind: 'text', id: 'fit', h2: 'Who it is for', list: ['Therapy and mental health practices', 'ABA and behavioral health providers', 'Real estate teams and property managers', 'Home care and local healthcare', 'Local service businesses that live on referrals'] },
      { kind: 'faq', id: 'faq', h2: 'Questions buyers ask', items: [
        { q: 'Do you guarantee rankings?', a: 'No. Nobody honest can. The promise is specific work aimed at real leads, and clear proof of what was done and why.' },
        { q: 'Will this create a lot of work for me?', a: 'No. One short call collects what is needed, then the work gets done.' },
        { q: 'What if it is not a fit?', a: 'You will hear that on the call. Work that will not help is turned down.' },
      ] },
      { kind: 'text', id: 'more', h2: 'Learn the basics first', after: 'How your map listing works: [Google Business Profile](/google-business-profile-seo).' },
    ],
  }),
};

/* ------------------------------------------------------------------ B2B SEO (receives the Israel B2B blog family) */
const b2b: ClaimContent = {
  claim: 'seo', path: '/b2b-seo-israel',
  title: 'B2B SEO Services in Israel | For Companies Selling to US Buyers',
  description: 'B2B SEO from Zechariah Tokar for Israeli and global SaaS, fintech and tech companies selling into the US: buyer-intent pages that bring pipeline, not traffic.',
  h1: 'B2B SEO Services for Israeli and Global Companies Selling to US Buyers',
  photo: { src: '/images/blog-b2b-seo-pipeline.jpg', w: 1200, h: 896, alt: 'Illustration of a funnel turning search into leads and conversions', caption: 'Illustration.' },
  glance: [
    ['Who it is for', 'B2B, SaaS, fintech and cybersecurity companies selling into the US and other English-speaking markets'],
    ['What gets built', 'Service, use-case, comparison and pricing pages buyers read before contacting sales'],
    ['Who does it', 'Zechariah Tokar, based in Israel, writing in native US English'],
    ['Not included', 'Hebrew SEO or Israeli consumer marketing'],
    ['Price', 'Scoped after a review of your site'],
  ],
  serviceType: 'B2B SEO',
  formSubject: 'New SEO Audit Request: B2B SEO', formService: 'B2B SEO',
  formTitle: 'Send your site and the buyer search you most want to win.', formBody: 'You will get a reply with the first pages to fix.',
  pick: 'A',
  versions: one({
    answer: 'Zechariah Tokar provides B2B SEO for Israeli and global companies selling to buyers in the US and other English-speaking markets. The work starts with the pages buyers read right before they contact sales.',
    blocks: [
      { kind: 'text', id: 'included', h2: 'What B2B SEO services include', check: true, list: [
        'A map of the searches buyers run while comparing vendors.',
        'Service and use-case pages with a clear offer and proof.',
        'Comparison, alternatives and pricing-intent pages.',
        'Refreshes of pages that rank but do not bring leads.',
        'Internal links that send authority to those pages.',
        'Lead tracking, so search can be tied to pipeline.',
      ] },
      { kind: 'cards', id: 'questions', h2: 'Why B2B SEO often fails, and what works', cards: [
        { id: 'pipeline', h: 'Pipeline, not traffic', p: ['B2B searches have low volume, and that is normal. A few buyers searching for the exact service are worth more than thousands of readers of a general blog.', 'So the first pages to build answer the searches closest to a sales call: the service, the use case, the comparison, the price question. Content marketing comes after demand capture, not before.'] },
        { id: 'why-b2b-seo-fails', h: 'The common mistakes', p: ['Chasing traffic instead of pipeline. Copying US content without the authority to rank it. No clear vertical. Weak pages for buyers who are ready. Ignoring that several people at the buyer\'s company research before a deal.'] },
        { id: 'us-market', h: 'Selling from Israel into the US market', p: ['US search results are more crowded, so they take more authority and sharper pages. Messaging has to match how US buyers describe the problem, in native US English, not a translation of the home-market pitch.'] },
        { id: 'attribution', h: 'Tying SEO to revenue', p: ['High-intent searches and research searches need different pages. Leads from search are tagged and followed into the CRM, so the report shows pipeline, not only visits.'] },
        { id: 'fintech', h: 'Fintech SEO', p: ['Money topics are held to Google\'s highest trust bar. Fintech pages need accurate, supportable claims, clear security and compliance language, and comparison and use-case pages buyers read before they choose.'] },
        { id: 'evaluate', h: 'How to judge a B2B SEO provider', p: ['Ask for a buyer-intent keyword plan rather than volume, real bottom-of-funnel pages, a plan for AI answers, links earned rather than bought, and a way to report revenue.'] },
      ] },
      { kind: 'quotes', id: 'proof', h2: 'What B2B clients say', items: [Q.sean, Q.yehudah] },
      { kind: 'text', id: 'more', h2: 'Related reading', after: 'Hiring help for SEO: [SEO guides](/seo-guides). How AI answers choose vendors: [answer engine optimization](/what-is-answer-engine-optimization).' },
    ],
  }),
};

export const LEAF_PAGES: ClaimContent[] = [audit, geo, tracking, ads, las, b2b];
export type { Block };
