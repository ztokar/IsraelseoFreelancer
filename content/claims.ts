import type { Block, ClaimContent, PageVersion, Result } from '../components/lean/ClaimPage';
import type { Photo, Receipt } from '../components/lean/Blocks';

// COPY RULE (his call, 2026-11-18): first person, his LinkedIn voice, very short. Voice sheet: rebuild-2026-11/voice.md.
// Do not repeat "I do the work myself" and do not compare against agencies. No refund promise.
// Prices: only the fixed offers show a number. Audits, consulting and custom work are priced after a look at the site.

export const one = (v: PageVersion) => ({ A: v, C: v });
export const SHARE: Photo = { src: '/images/zechariah-tokar-outdoors.webp', alt: 'Zechariah Tokar', w: 640, h: 800 };
export const MONTHLY = '$1,000 a month, month to month';

const img = (k: string) => `/images/clients/${k}-arch.webp`;

// Verified results. Quotes are word for word from his LinkedIn recommendations; figures are from his own posts and the case studies.
export const RES: Record<string, Result> = {
  yonatan: { who: 'Yonatan Vinnik, LSW', role: 'Child and family therapist', win: '#1 on Google Maps in one week', say: '“Within one week, our business was showing up #1 on Google Maps for every target search term we cared about.”', img: img('yonatan') },
  zstander: { who: 'ZStander', role: 'Judaica store on Shopify', win: '#1 on ChatGPT for “lucite shtenders”', say: 'Google sales up 300%.', img: img('zstander') },
  zstanderSales: { who: 'ZStander', role: 'Judaica store on Shopify', win: 'Google sales up 300%', say: 'Most collection pages had only a title and a product grid. I fixed the collection pages, the internal links and Google Shopping.', img: img('zstander') },
  brett: { who: 'Brett Sheldon, LCSW', role: 'CEO, Launch Point Behavioral Health Network', win: 'Top of his key searches', say: '“Within a couple of months, I was ranking at the top for my key searches, which honestly shocked me.”', img: img('brett') },
  brettMap: { who: 'Brett Sheldon, LCSW', role: 'Therapy practice in Morristown, NJ', win: 'Top of the Google map pack', say: '“Within a couple of months, I was ranking at the top for my key searches, which honestly shocked me.”', img: img('brett') },
  brettSaved: { who: 'Brett Sheldon, LCSW', role: 'CEO, Launch Point Behavioral Health Network', win: 'Top of his key searches', say: '“I have literally saved a ridiculous amount of money, easily thousands of dollars!”', img: img('brett') },
  sean: { who: 'Sean Littman', role: 'Founder, GiveSuite', win: 'Nearly 7 figures in revenue', say: '“He was able to help us fix our clients merchant center account in under 10 hours.”', img: img('sean') },
  behfar: { who: 'The Behfar Team', role: 'Brooklyn real estate', win: '#1 on ChatGPT for “best Midwood Brooklyn real estate agent”', say: 'From 0 website inquiries to 2 to 4 a month.', logo: '/images/clients/behfar-logo.webp' },
  behfarLocal: { who: 'The Behfar Team', role: 'Brooklyn real estate', win: 'From 0 inquiries to 2 to 4 a month', say: 'Top of Google for Midwood Brooklyn real estate searches.', logo: '/images/clients/behfar-logo.webp' },
  therapy: { who: 'A local therapy practice', role: 'Before: generic AI content', win: '0 leads to up to 20 a month', say: 'Same site. My SEO system instead of AI slop.' },
  northstar: { who: 'North Star Ranch', role: 'Micro-wedding venue', win: '10+ leads a month', say: 'A site built to be the answer for its searches. Client figure.' },
  founder: { who: 'A founder', role: 'Reply to my AI SEO audit', win: '“WOW!! This deliverable is incredible!”', say: 'The audit found brand-name confusion and citation gaps.' },
  reddit405: { who: 'My own Reddit post', role: 'Organic, no paid promotion', win: '405,000 views', say: '518 upvotes and 217 comments.' },
  reddit12: { who: 'A client post', role: 'Written with the same method', win: '12,000 views' },
  rivka: { who: 'Rivka Neumann', role: 'Founder, Flyhost.me', win: '“He doesn’t just tick boxes, he cares.”', say: '“SEO isn’t about doing all the right things, it’s about bringing the right people to your site. That’s exactly what he does.”' },
  yehudah: { who: 'Yehudah Kreitenberg', role: 'CBDO, PayIP', win: '“Both creative and analytical, a rare combination”', say: '“Quickly understands how to deliver real results.”' },
  menachem: { who: 'Menachem Encaoua', role: 'Founder', win: '“Very knowledgeable and honest”', say: '“He took the time to understand my business and explained strategy in a way that was practical and easy to follow.”' },
};

// Older proof records, still used by the home page, the results page and the Reddit SEO page.
export const R: Record<string, Receipt> = {
  chatgpt: { src: '/images/proof-linkedin-chatgpt.jpg', w: 480, h: 255, label: 'AI answer', metric: 'Named first', alt: 'ChatGPT answering where to buy lucite shtenders in the US and listing ZStander first', caption: 'Asked where to buy lucite shtenders in the US, **ChatGPT named ZStander first.**', source: 'Client: ZStander. Screenshot from Zechariah Tokar\'s LinkedIn.' },
  aiAudit: { src: '/images/proof-linkedin-ai-audit.jpg', w: 480, h: 127, label: 'AI SEO audit', metric: 'Client reply', alt: 'A client message praising an AI SEO audit deliverable', caption: 'A founder\'s reply to an AI SEO audit that found brand-name confusion and citation gaps.', source: 'Client message, shared on LinkedIn.' },
  morristown: { src: '/images/proof-linkedin-morristown.jpg', w: 480, h: 217, label: 'Map pack', metric: 'Top spot', alt: 'Google results for eating disorder treatment in Morristown NJ with the client at the top of the map pack', caption: 'A client practice **at the top of the Google map pack** for eating disorder treatment in Morristown, NJ.', source: 'Client: Embracing Uncertainty.' },
  lead: { src: '/images/proof-google-lead.jpg', w: 441, h: 123, label: 'Inbound lead', metric: 'Found on Google', alt: 'A parent asking about in-home ABA therapy who found the client on Google', caption: 'A parent asking about in-home ABA therapy who **found the client on Google.**', source: 'Client: ABA therapy practice.' },
  r405: { src: '/images/proof-reddit-405k.jpg', w: 471, h: 159, label: 'Reddit post', metric: '405K views', alt: 'Reddit post statistics showing 405,000 views, 518 upvotes and 217 comments', caption: 'One organic Reddit post: **405,000 views, 518 upvotes and 217 comments.**', source: 'Organic post, no paid promotion.' },
  r12: { src: '/images/proof-reddit-12k.jpg', w: 830, h: 130, label: 'Client Reddit post', metric: '12K views', alt: 'Reddit post insights showing 12,000 views', caption: 'A client post written with the same method reached **12,000 views.**', source: 'Reddit post insights for a client post.' },
};

export const Q = {
  sean: { text: 'Where do I even begin. Zechariah was one of the best people I had ever contracted out. He was able to help us yield nearly 7 figures in revenue. His out of the box thinking and attention for detail really helped.', name: 'Sean Littman', role: 'Founder, GiveSuite.com' },
  yonatan: { text: 'Within one week, our business was showing #1 on Google Maps for every target search term we cared about. I was honestly blown away by how fast and effective the results were. He truly understands SEO and local search.', name: 'Yonatan Vinnik, LSW', role: 'Child & Family Therapist' },
  brett: { text: 'Within a couple of months, I was ranking at the top for my key searches, which honestly shocked me. I have saved a ridiculous amount of money, easily thousands of dollars! Talk to Zechariah.', name: 'Brett Sheldon, LCSW', role: 'CEO of Launch Point Network' },
  yehudah: { text: 'Extremely talented, sharp, and genuinely passionate. He is both creative and analytical, a rare combination, and quickly understands how to deliver real results.', name: 'Yehudah Kreitenberg', role: 'CBDO @ PayIP' },
  rivka: { text: "He doesn't just tick boxes, he cares. Deeply. SEO isn't about doing all the right things, it's about bringing the right people to your site. That's exactly what he does.", name: 'Rivka Neumann', role: 'Founder @ Flyhost.me' },
  menachem: { text: 'I really appreciated how clear and thoughtful he was. He took the time to understand my business and explained strategy in a way that was practical and easy to follow. Very knowledgeable and honest.', name: 'Menachem Encaoua', role: 'Turning ideas into businesses' },
};

const STRIPE = {
  target: 'https://buy.stripe.com/6oUdR25vn32v00r7Eb6c00T',
  blueprint: 'https://buy.stripe.com/8x2aEQ1f7auX00rcYv6c00S',
  system: 'https://buy.stripe.com/00wbIU4rjfPh3cD3nV6c00U',
};

// How the work gets done. Said once per page, next to his photo.
export const SYSTEM: Block = { kind: 'about', id: 'how-it-works', h2: 'How does it work?', answer: 'I built an AI system that runs SEO for my clients.', lines: [
  'It writes the pages, sets up the backlinks and drafts the Reddit posts. I check everything before it goes live.',
  'All I need is access to your website, your Search Console and your Google Business Profile.',
  'You stop thinking about SEO. I handle it.',
] };

/* ------------------------------------------------------------------ AI SEO services */
const ai: Block[] = [
  { kind: 'results', id: 'results', h2: 'Does AI SEO work? Here are my clients.', items: [RES.yonatan, RES.zstander, RES.brett, RES.sean, RES.behfar] },
  { kind: 'text', id: 'included', h2: 'What do AI SEO services include?', answer: 'Everything it takes to get you named. Pages, links, Reddit, your Google profile and a monthly check of what AI says about you.', list: [
    'A map of the searches your buyers type, with a page matched to each one',
    'New pages built to win those searches and get cited in AI answers',
    'Fixes to your existing pages: titles, internal links, speed, technical SEO',
    'Backlinks, local citations and a filled-out Google Business Profile',
    'Reddit and PR posts that put your name where your buyers hang out',
    'Tracking what ChatGPT and Google AI Overviews say about you, and fixing what’s off',
    'A plain-English report on what moved',
  ], after: 'Only need one part? [ChatGPT SEO](/chatgpt-seo-services), [page rewrites for AI answers](/geo-content-optimization), [AI visibility tracking](/ai-visibility-tracking-services) or [ChatGPT ads setup](/chatgpt-ads-management).' },
  { kind: 'table', id: 'plans', h2: 'How much does AI SEO cost?', answer: 'It depends on what you need. Four ways to work with me.', head: ['Option', 'What you get', 'Price'], rows: [
    ['[Monthly AI SEO plan](/ai-seo-monthly)', 'My AI system runs your SEO every month: pages, links, Reddit, your Google profile and AI answer checks.', MONTHLY],
    ['[AI visibility audit](/ai-visibility-audit)', 'One time. Where AI names you, where it skips you, and the fix list.', 'Priced after I look at your site'],
    ['Consultation', 'A call about your site and your plan. Good for teams that do the work themselves.', '[Book a call](/book)'],
    ['Custom plan', 'Bigger sites, more locations, tougher markets.', 'Priced after I look at your site'],
  ] },
  SYSTEM,
  { kind: 'text', id: 'fit', h2: 'Who is AI SEO for?', answer: 'Local businesses and Shopify stores. That’s where it works best.', lines: [
    'You have a good service. You want more customers at a fair price.',
    'Not a fit: bulk AI content, or a report nobody acts on.',
  ] },
  { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
    { q: 'How long does AI SEO take?', a: 'One client was #1 on Google Maps in a week. Another took 3.5 months. No guarantees. SEO is not day trading.' },
    { q: 'How do you measure AI visibility?', a: 'Every month I ask ChatGPT and Google’s AI your buyers’ questions and write down who they name. You see it next to your ranking in search results and your leads.' },
    { id: 'answer-engine-optimization', q: 'Is AI SEO different from traditional SEO?', a: 'Same base. AI search and a regular search engine pull from the same places: pages that rank, Reddit threads and reviews. Answer engine optimization (AEO) and generative engine optimization (GEO) are names for the same job.' },
    { q: 'Can ChatGPT do my SEO?', a: 'AI tools can write. They can’t tell you what’s working. I’ve seen owners burn down their site with AI slop and get 0 leads.' },
    { q: 'Can you guarantee ChatGPT will name my business?', a: 'No. Nobody controls an AI answer. I fix your pages and what the web says about you, then check every month if it’s working.' },
    { id: 'consultant', q: 'Can I hire you as an AI SEO consultant only?', a: 'Yes. Book a call. I look at your site, tell you what to fix first, and your team does the work.' },
  ] },
];

/* ------------------------------------------------------------------ Reddit marketing services */
const reddit: Block[] = [
  { kind: 'results', id: 'results', h2: 'Does Reddit marketing work? Here are real posts.', items: [RES.reddit405, RES.reddit12] },
  { kind: 'text', id: 'included', h2: 'What do Reddit marketing services include?', answer: 'Research first. Then only the posts that fit your brand and the subreddit.', list: [
    'Subreddit and thread research: where your buyers compare options and what they distrust',
    'Organic posts and comments that read like a member wrote them, not an ad',
    'A risk check before anything goes public: subreddit rules, karma and account age, moderator habits',
    'Reddit Ads advice when paid reach is the cleaner test',
    'Landing page fixes so the click turns into a lead',
    'A monthly review: replies, visits, branded searches and leads',
  ], after: 'Want posts written and checked one at a time? Start with the [Reddit posting service](/reddit-posting-service).' },
  { kind: 'steps', id: 'how-it-works', h2: 'How does it work?', answer: 'Slow on purpose. A removed account is worth nothing.', steps: [
    { h: 'Read the subreddit', p: 'The words people use, what comes up, and what moderators remove.' },
    { h: 'Earn trust first', p: 'Helpful comments, so people see a real person and not a new account with a link.' },
    { h: 'Answer real requests', p: 'A recommendation only where someone asked for one, with honest trade-offs.' },
    { h: 'Fix the landing page', p: 'The page people click to answers the same worry the thread raised.' },
  ] },
  { kind: 'text', id: 'no-bans', h2: 'How do you avoid Reddit bans?', answer: 'No fake accounts. No bought upvotes. No link drops.', lines: [
    'Karma and account age help. Neither one saves a weak post.',
    'Sometimes I’ll tell you to stay quiet in a subreddit and fix your website first.',
  ] },
  { kind: 'text', id: 'fit', h2: 'Who is Reddit marketing for?', answer: 'Brands whose buyers already ask Reddit which option to choose.', lines: [
    'SaaS, ecommerce and service businesses with something useful to add.',
    'Not a fit: fake reviews, bulk posting or a promised number of upvotes.',
  ] },
  { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
    { q: 'How much do Reddit marketing services cost?', a: 'It depends on how many subreddits and posts. Send me your brand and the topic and I’ll price it.' },
    { q: 'Why does Reddit matter for Google and AI answers?', a: 'Reddit threads rank in Google and feed ChatGPT, Perplexity and Google AI Overviews. One honest recommendation keeps working long after the thread goes quiet.' },
    { q: 'Organic posts or Reddit Ads?', a: 'Ads are fast and labeled as ads. Organic posts earn trust slowly and keep ranking. I’ll tell you which one fits.' },
    { q: 'How do you measure it?', a: 'Views and upvotes show attention. Replies, visits, branded searches and leads show if it paid off.' },
    { id: 'risk-review', q: 'Can you review my Reddit plan before I post?', a: 'Yes. I read the subreddits, the old threads and the search results. Then I tell you where to post, where to stay quiet and what to fix on your site first.' },
  ] },
];

/* ------------------------------------------------------------------ Local SEO services */
const local: Block[] = [
  { kind: 'results', id: 'results', h2: 'Does local SEO work? Here are my clients.', items: [RES.yonatan, RES.brettMap, RES.behfarLocal, RES.therapy] },
  { kind: 'table', id: 'prices', h2: 'How much does local SEO cost?', answer: 'Three fixed prices. Start at any step.', head: ['Offer', 'What you get', 'Price'], rows: [
    ['[Target Finder](/find-my-target)', 'The one local search worth owning first, found and checked', '$20'],
    ['[Local Demand Capture Blueprint](/local-demand-capture-blueprint)', 'The full plan: pages, profile changes and links to rank for it', '$250'],
    ['[Local Authority System](/local-authority-system)', 'I build the whole thing: money pages, supporting content, reputation and AI search setup', '$2,000'],
  ], buy: [
    { label: 'Buy Target Finder $20', href: STRIPE.target },
    { label: 'Buy Blueprint $250', href: STRIPE.blueprint },
    { label: 'Buy System $2,000', href: STRIPE.system },
  ], after: 'More locations? Bigger builds are quoted from $2,000. After you pay, a short form collects your business details.' },
  { kind: 'text', id: 'included', h2: 'What do local SEO services include?', answer: 'The map pack, your website and the places Google and AI check you against.', list: [
    'A page for each search ready-to-buy customers type. One page, one job.',
    'Supporting content and internal links that push those pages up',
    'Your [Google Business Profile](/google-business-profile-seo) and Maps listing filled out and kept current',
    'Citations: the same name, address and phone on the directories that matter',
    'Reddit and YouTube, so your brand looks alive wherever buyers check',
    'Clear proof on your site, so ChatGPT and Google’s AI can name you',
  ] },
  { kind: 'steps', id: 'how-it-works', h2: 'How does it work?', answer: 'Pick one search. Win it. Then the next.', steps: [
    { h: 'Pick the search', p: 'The one local search where buyers are ready to call.' },
    { h: 'Plan the pages', p: 'What your page, your profile and your citations need to win it.' },
    { h: 'Build it', p: 'I build it for you, or your team builds from the plan.' },
  ] },
  { kind: 'text', id: 'fit', h2: 'Who is local SEO for?', answer: 'Businesses that want more calls from nearby buyers.', lines: [
    'Clinics, therapy practices, real estate teams and home service companies.',
    'Not a fit: no local search demand, or you only sell online.',
  ] },
  { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
    { q: 'How long does local SEO take?', a: 'One client was #1 on Google Maps in a week. Most take a few months. No guarantees. Nobody controls Google.' },
    { q: 'Do I need a website for local SEO?', a: 'A Google Business Profile can rank alone. A page for each main service usually makes it stronger.' },
    { q: 'Does local SEO help with ChatGPT?', a: 'Yes. ChatGPT and Google AI Overviews now answer “who should I call near me”. They read the same profile, reviews and pages.' },
  ] },
];

/* ------------------------------------------------------------------ SEO freelancer (seo-services-israel) */
const seo: Block[] = [
  { kind: 'results', id: 'results', h2: 'Is hiring an SEO freelancer worth it? Ask my clients.', items: [RES.zstanderSales, RES.sean, RES.brettSaved, RES.rivka] },
  { kind: 'text', id: 'included', h2: 'What does an SEO freelancer do?', answer: 'I fix the pages closest to revenue first. Then I build the next ones that deserve to rank.', list: [
    '[Technical SEO audit](/technical-seo-audit): crawling, indexing, speed and schema problems, fixed in order of impact',
    '[SEO content writing](/content-marketing-for-seo): service, product and comparison pages written for buyers',
    '[B2B SEO](/b2b-seo-israel), [SaaS SEO](/saas-seo) and [cybersecurity SEO](/cybersecurity-seo): pages for buyers comparing vendors',
    '[Ecommerce SEO](/ecommerce-seo-services), [Shopify SEO](/shopify-seo) and [Google Merchant Center](/google-merchant-center-seo) for online stores',
    '[WordPress SEO](/wordpress-seo-services): the audit and the fixes, made inside your site',
    '[YouTube SEO](/youtube-seo): videos that rank in YouTube and Google',
    '[Programmatic SEO](/programmatic-seo): many useful pages from one template and real data',
  ] },
  { kind: 'steps', id: 'how-hiring-works', h2: 'How does hiring work?', answer: 'Send me your site first. I’ll tell you what to fix and if we’re a fit.', steps: [
    { h: 'Send your site', p: 'With the one thing you want SEO to fix first.' },
    { h: 'Get the first fixes', p: 'A short list of the changes closest to revenue.' },
    { h: 'Agree the scope', p: 'A one-time project or monthly work. Priced after the review.' },
    { h: 'Ship and measure', p: 'Changes go live. You get a plain-English report on what moved.' },
  ] },
  SYSTEM,
  { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
    { q: 'How much does an SEO freelancer cost?', a: 'It depends on your site and how much you want handled. Send me the site and I’ll price it. Local SEO has fixed prices on the [local SEO page](/local-seo-services).' },
    { q: 'Do you only work with Israeli companies?', a: 'No. I’m based in Israel. Most clients sell in the US, UK, Canada and Australia, and I write in native US English. I don’t do Hebrew SEO.' },
    { id: 'consulting', q: 'Do you offer SEO consulting?', a: 'Yes. For teams with their own writers or developers. I review the plan, the pages and the priorities. Your team does the work.' },
    { id: 'link-building', q: 'Do you build links?', a: 'Yes. Relevant links, mentions and citations for pages that already deserve to rank. No bulk link packages.' },
    { id: 'press-releases', q: 'Do press releases help SEO?', a: 'When there’s real news. I check the angle, the wording and where it goes out first.' },
    { q: 'Can you guarantee rankings?', a: 'No. Nobody controls Google. I work on what moves rankings and leads, and I show you the result.' },
  ] },
];

export const CLAIM_PAGES: Record<string, ClaimContent> = {
  ai: {
    claim: 'ai', path: '/ai-seo-services',
    title: 'AI SEO Services | Get Named in ChatGPT & Google AI',
    description: 'AI SEO services for local businesses and Shopify stores. I get your business named in ChatGPT and Google AI Overviews. Monthly plan, audits and consulting.',
    h1: 'AI SEO services',
    photo: SHARE,
    glance: [
      ['Covers', 'ChatGPT, Google AI Overviews, Google search'],
      ['Best for', 'Local businesses and Shopify stores'],
      ['Monthly plan', MONTHLY],
      ['Also', 'Audits, consulting, custom plans'],
    ],
    serviceType: 'AI search optimization',
    formSubject: 'New Inquiry: AI SEO services', formService: 'AI SEO services',
    formTitle: 'Send me your site. I’ll look at it first.',
    formBody: 'You get a reply with where you stand in AI answers and the first fix.',
    pick: 'A',
    versions: one({ answer: 'I get your business named when buyers ask ChatGPT who to hire.', blocks: ai }),
  },
  reddit: {
    claim: 'reddit', path: '/reddit-marketing-services',
    title: 'Reddit Marketing Services | Real Recommendations, No Bans',
    description: 'Reddit marketing services: subreddit research, organic posts and comments that don’t get removed, and Reddit Ads advice. The method behind my 405,000-view post.',
    h1: 'Reddit marketing services',
    photo: SHARE,
    glance: [
      ['My own post', '405,000 views'],
      ['You get', 'Research, posts, comments, page fixes'],
      ['Never', 'Fake accounts, bought upvotes, link drops'],
      ['Price', 'Priced after I look at your brand'],
    ],
    serviceType: 'Reddit marketing',
    formSubject: 'New Inquiry: Reddit marketing services', formService: 'Reddit marketing services',
    formTitle: 'Send me your brand and the Reddit topic you want to test.',
    formBody: 'You get a reply on where your brand can take part and where it should stay quiet.',
    pick: 'A',
    versions: one({ answer: 'I get real people recommending your brand on Reddit. No bans.', blocks: reddit }),
  },
  local: {
    claim: 'local', path: '/local-seo-services',
    title: 'Local SEO Services | Fixed Prices From $20 | Map Pack and AI Answers',
    description: 'Local SEO services at fixed prices: $20 Target Finder, $250 Blueprint, $2,000 done-for-you system. Google Business Profile, map pack and citations for small businesses.',
    h1: 'Local SEO services',
    photo: SHARE,
    glance: [
      ['Prices', '$20, $250 or $2,000'],
      ['Covers', 'Google Maps, your website, citations, AI answers'],
      ['Best for', 'Clinics, therapy practices, home services'],
      ['Start', 'At any step. Each one builds on the last.'],
    ],
    serviceType: 'Local SEO',
    primary: { label: 'See the prices', href: '#prices' },
    formSubject: 'New Inquiry: Local SEO services', formService: 'Local SEO services',
    formTitle: 'Not sure which step fits? Send me your business.',
    formBody: 'You get a reply with the step that fits and the first search worth owning.',
    pick: 'A',
    versions: one({ answer: 'I get local businesses to the top of Google Maps. Fixed prices from $20.', blocks: local }),
  },
  seo: {
    claim: 'seo', path: '/seo-services-israel',
    title: 'SEO Freelancer for US Companies | More Leads From Google',
    description: 'SEO freelancer for companies selling in the US: technical audits, content, B2B, SaaS, Shopify and WordPress SEO. ZStander grew Google sales 300%.',
    h1: 'SEO freelancer',
    photo: SHARE,
    glance: [
      ['Services', 'Audits, content, B2B, SaaS, Shopify, WordPress'],
      ['Result', 'ZStander: Google sales up 300%'],
      ['Based', 'Israel. I write in native US English.'],
      ['Price', 'Priced after I look at your site'],
    ],
    serviceType: 'SEO consulting',
    formSubject: 'New SEO Audit Request: SEO freelancer', formService: 'SEO freelancer',
    formTitle: 'Send me your site and the one thing you want SEO to fix first.',
    formBody: 'You get a reply with the practical next step.',
    pick: 'A',
    versions: one({ answer: 'I get companies selling in the US more leads and sales from Google.', blocks: seo }),
  },
};
