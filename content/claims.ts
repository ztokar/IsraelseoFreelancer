import type { Block, ClaimContent } from '../components/lean/ClaimPage';
import type { Receipt } from '../components/lean/Blocks';

// Verified proof, used word for word from the site and the positioning notes.
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

const DEMAND_SOURCE = 'Monthly US searches from Google Ads data (DataForSEO), measured 2 November 2026 for this site.';

/* ------------------------------------------------------------------ AI SEO services */
const ai = {
  included: { kind: 'text', id: 'included', h2: 'What AI SEO services include', answer: 'Every engagement covers your own pages, the outside sources AI answers quote, and a record of where you stand.', check: true, list: [
    '**Baseline:** the questions your buyers ask, run in ChatGPT, Gemini, Perplexity and Google AI Overviews, and logged.',
    '**Source check:** which sites, reviews and Reddit threads the current answers are built from.',
    '**Page work:** the answer in the first sentence, clear service facts, structured data (schema markup) and clean crawling. The page-rewrite part is sold alone as [generative engine optimization services](/geo-content-optimization).',
    '**Mentions:** getting the brand honestly named in the sources those answers use, Reddit included.',
    '**Brand clarity:** fixing it when an assistant mixes you up with a similar name.',
    '**Tracking:** the same questions re-run every month, with what changed and why. Also sold alone as [AI visibility tracking](/ai-visibility-tracking-services).',
  ] },
  proof: { kind: 'receipts', id: 'proof', h2: 'Proof: brands named in AI answers', answer: 'ZStander is the clearest case: indexing fixes, foundational links, schema and clearer pages, then ChatGPT named the store first.', items: [R.chatgpt, R.aiAudit], after: 'North Star Ranch, a micro-wedding venue, got a site built to be the answer for its searches and reports 10+ leads a month (client figure). More named results are on the [results page](/case-studies).' },
  plans: { kind: 'table', id: 'plans', h2: 'Ways to start and what they cost', answer: 'Start with a diagnosis or go straight to the monthly plan. The only fixed price is the monthly plan.', head: ['Option', 'What you get', 'Price'], rows: [
    ['[AI visibility audit](/ai-visibility-audit)', 'Where AI answers name you, where they skip you, and why', 'Quoted after a look at your site'],
    ['[Monthly AI SEO plan](/ai-seo-monthly)', 'Pages, links, Reddit, press releases, your Google profile and AI answer checks, with a monthly report', '$750 a month for the first 5 businesses'],
    ['[ChatGPT SEO](/chatgpt-seo-services)', 'The ChatGPT part alone: buyer prompts, sources, page fixes and a monthly re-check', 'Quoted after a look at your site'],
    ['[Generative engine optimization](/geo-content-optimization)', 'Your key pages rewritten to be quoted', 'Quoted per page set'],
    ['[AI visibility tracking](/ai-visibility-tracking-services)', 'Monthly re-runs of your buyer questions', 'Quoted after a look at your site'],
    ['[ChatGPT ads setup](/chatgpt-ads-management)', 'A setup service for paid placements in ChatGPT. No client result for ChatGPT ads yet.', 'Quoted per campaign'],
  ] },
  cards: { kind: 'cards', id: 'questions', h2: 'Answer engine optimization or an AI SEO consultant?', answer: 'Both names describe the same work here, done by one person.', cards: [
    { id: 'answer-engine-optimization', h: 'Answer engine optimization services', p: ['Buyers searching for answer engine optimization (AEO) services want the same result: to be the answer an assistant gives. The work above covers it, priced once. You are not billed separately for AEO, AI SEO and classic SEO when the work overlaps.'] },
    { id: 'consultant', h: 'Hiring an AI SEO consultant instead of an agency', p: ['You talk to the person who does the work. Zechariah Tokar runs the audit, writes the page changes and reports the results himself. Based in Israel, he writes in native US English for companies selling into the US, UK, Canada and Australia.'] },
  ] },
  measure: { kind: 'text', id: 'measure', h2: 'How progress is measured', answer: 'The same buyer questions are asked again each month, and the share of answers that name you is counted.', list: [
    'Nobody can promise an AI answer will name you. Organic mentions cannot be bought, so none are guaranteed.',
    'Page fixes and new mentions show up first in the sources, then in the answers.',
    'Google rankings still matter: AI Overviews and ChatGPT search lean on pages that already rank.',
  ] },
  fit: { kind: 'text', id: 'fit', h2: 'Who this fits', answer: 'Companies that rank on Google but are never named when a buyer asks an AI assistant who to use.', list: [
    'Fits: SaaS, ecommerce, B2B and local service companies selling into English-speaking markets.',
    'Not a fit: bulk AI content, or a report with no one to act on it.',
  ] },
  demand: { kind: 'demand', id: 'demand', h2: 'Buyers already search for this', title: 'US searches a month for AI search services', rows: [['AI SEO services', 1000], ['Generative engine optimization services', 720], ['Answer engine optimization services', 590], ['AI visibility tracking', 320], ['AI SEO consultant', 210], ['AI visibility audit', 210]], source: DEMAND_SOURCE },
  faq: { kind: 'faq', id: 'faq', h2: 'Questions buyers ask', items: [
    { q: 'Can you guarantee ChatGPT will mention my brand?', a: 'No. Nobody controls an AI answer. The work improves your pages and the evidence about your brand, and the monthly re-runs show whether it is working.' },
    { q: 'Do I need this if I already rank on Google?', a: 'Often yes. AI answers lean on what other sites say about you, not only on your homepage, so a brand can rank and still be left out.' },
    { q: 'Do you work with companies outside Israel?', a: 'Yes. Most clients sell into the US and other English-speaking markets.' },
  ] },
} satisfies Record<string, Block>;

/* ------------------------------------------------------------------ Reddit marketing services */
const reddit = {
  how: { kind: 'steps', id: 'how-it-works', h2: 'How it works', answer: 'The method is slow on purpose: brands that skip the waiting get removed, and a removed account is worth nothing.', steps: [
    { h: 'Read the subreddit', p: 'The words people use, the topics that come up, and what moderators remove.' },
    { h: 'Earn trust first', p: 'Helpful comments, so the community sees a real person, not a new account with a link.' },
    { h: 'Answer real requests', p: 'A recommendation only where someone asked for one, with honest trade-offs.' },
    { h: 'Fix the landing page', p: 'The page people click to answers the same worry the thread raised.' },
  ] },
  proof: { kind: 'receipts', id: 'proof', h2: 'Proof from real Reddit posts', answer: 'The method behind these posts is the same one used for client work.', items: [R.r405, R.r12] },
  included: { kind: 'text', id: 'included', h2: 'What Reddit marketing services include', answer: 'Research first, then only the pieces that fit your brand and the community.', check: true, list: [
    'Subreddit and thread research: where buyers compare options and what they distrust.',
    'Organic posts and comments, written to read like a member, not an ad.',
    'A risk review before anything goes public: subreddit rules, karma and account-age limits, moderator habits.',
    'Reddit Ads advice when paid reach is the cleaner test.',
    'Landing-page fixes so the click turns into a lead.',
    'Monthly review: replies, referral visits, branded searches and leads.',
  ], after: 'Need posts written and checked one at a time? The [Reddit posting service](/reddit-posting-service) is the smaller start.' },
  rules: { kind: 'text', id: 'no-bans', h2: 'How bans are avoided', answer: 'No fake accounts, no bought upvotes, no link drops.', list: [
    'Buying upvotes exists. It is not done here, and accounts that lean on it get caught.',
    'Karma and account age help, but neither rescues a weak post.',
    'Sometimes the right advice is to stay quiet in a subreddit and fix the website first.',
  ] },
  organic: { kind: 'table', id: 'organic-vs-ads', h2: 'Organic Reddit marketing or Reddit Ads?', answer: 'Ads buy attention fast and clearly labeled; organic posts earn trust slowly and keep ranking.', head: ['', 'Organic posts and comments', 'Reddit Ads'], rows: [
    ['Best for', 'Brands with something useful to add to real questions', 'Testing an offer fast with clear targeting'],
    ['Trust', 'High when the help is real', 'Labeled as an ad'],
    ['Lasts', 'Threads keep showing in Google and AI answers', 'Stops when the budget stops'],
  ] },
  search: { kind: 'text', id: 'search', h2: 'Why Reddit threads matter for Google and AI answers', answer: 'Reddit threads rank in Google and feed ChatGPT, Perplexity and Google AI Overviews, so one honest recommendation keeps working after the conversation ends.', list: [
    'The page people land on after a thread gets checked too, so the click is not wasted.',
    'Brand mentions on Reddit are tracked alongside your Google results.',
  ] },
  cards: { kind: 'cards', id: 'expert', h2: 'Need a second opinion before you post?', cards: [
    { id: 'risk-review', h: 'Reddit marketing expert review', p: ['Before a campaign goes public, Zechariah Tokar reviews the communities, the old threads and the search results, then says where the brand can take part, where it should stay quiet, and what to fix on the site first.'] },
  ] },
  fit: { kind: 'text', id: 'fit', h2: 'Who this fits', answer: 'B2B SaaS, ecommerce and service brands whose buyers already ask Reddit which option to choose.', list: [
    'Not a fit: anyone who wants fake reviews, bulk posting or a guaranteed number of upvotes.',
  ] },
  faq: { kind: 'faq', id: 'faq', h2: 'Questions buyers ask', items: [
    { q: 'Do you buy upvotes or use fake accounts?', a: 'No. Both get brands and domains banned. Every post is written to help the people in the thread.' },
    { q: 'How is success measured?', a: 'Views and upvotes show attention. Replies, referral visits, branded searches and leads show whether it paid off.' },
    { q: 'What does it cost?', a: 'It depends on how many communities and posts are involved. Send the brand and the topic for a quote.' },
  ] },
} satisfies Record<string, Block>;

/* ------------------------------------------------------------------ Local SEO services */
const local = {
  ladder: { kind: 'table', id: 'prices', h2: 'Local SEO prices', answer: 'Three fixed prices. Each step builds on the one before, and you can start at any of them.', head: ['Offer', 'What you get', 'Price'], rows: [
    ['[Target Finder](/find-my-target)', 'The one local search worth owning first, found and checked', '$20'],
    ['[Local Demand Capture Blueprint](/local-demand-capture-blueprint)', 'The full plan of pages, profile changes and links to rank for it', '$250'],
    ['[Local Authority System](/local-authority-system)', 'The whole system built for you: money pages, supporting content, reputation and AI search setup', '$2,000'],
  ], buy: [
    { label: 'Buy Target Finder $20', href: STRIPE.target },
    { label: 'Buy Blueprint $250', href: STRIPE.blueprint },
    { label: 'Buy System $2,000', href: STRIPE.system },
  ], after: 'Larger multi-location builds are quoted up from $2,000. After paying, a short form collects your business details.' },
  included: { kind: 'text', id: 'included', h2: 'What local SEO services include', answer: 'The work covers the map pack, your website and the places Google and AI answers check you against.', check: true, list: [
    'Pages for the exact searches ready-to-buy customers use. One page, one job.',
    'Supporting content and internal links that push authority to those pages.',
    'Your [Google Business Profile](/google-business-profile-seo) and Maps listing filled out and kept current.',
    'Citations: your name, address and phone (NAP) consistent on the directories that matter.',
    'Reddit and YouTube activity so the brand looks active wherever buyers check.',
    'Clear public proof so ChatGPT, Gemini and Perplexity can recommend you by name.',
  ] },
  proof: { kind: 'receipts', id: 'proof', h2: 'Proof from local clients', answer: 'Real map-pack results and real leads, shown as screenshots.', items: [R.morristown, R.lead], after: 'The Behfar Team ranks #1 for Midwood Brooklyn real estate searches (client figure). More on the [results page](/case-studies).' },
  quote: { kind: 'quotes', id: 'reviews', h2: 'What local clients say', items: [Q.yonatan, Q.brett] },
  how: { kind: 'steps', id: 'how-it-works', h2: 'How it works', steps: [
    { h: 'Pick the search', p: 'The one local search where buyers are ready to call.' },
    { h: 'Plan the pages', p: 'What the page, the profile and the citations need to win it.' },
    { h: 'Build it', p: 'Done for you, or by your team from the plan.' },
  ] },
  ai: { kind: 'text', id: 'ai-answers', h2: 'Local results in AI answers too', answer: 'ChatGPT and Google AI Overviews now answer "who should I call near me" questions, and they draw on the same profile, reviews and pages.', list: [
    'Clear service and location facts on your site make you easier to quote.',
    'Consistent details across directories keep the answer from mixing you up with another business.',
  ] },
  fit: { kind: 'text', id: 'fit', h2: 'Who this fits', answer: 'Small businesses, clinics, therapy practices and home service companies that want more calls from nearby buyers.', list: [
    'Not a fit: businesses with no local search demand, or that only sell online.',
  ] },
  demand: { kind: 'demand', id: 'demand', h2: 'How many people search for local SEO help', title: 'US searches a month for local SEO help', rows: [['Local SEO services', 6600], ['Local SEO for small business', 1300], ['Local SEO consultant', 880], ['Google Business Profile optimization service', 260]], source: DEMAND_SOURCE },
  faq: { kind: 'faq', id: 'faq', h2: 'Questions buyers ask', items: [
    { q: 'How much do local SEO services cost?', a: 'Here: $20 for the Target Finder, $250 for the Blueprint, and $2,000 for the done-for-you Local Authority System. Larger multi-location builds are quoted up from $2,000.' },
    { q: 'Do you guarantee the top spot in Google Maps?', a: 'No. Nobody controls Google\'s ranking. The work targets the pages, profile and proof Google ranks on, aimed at real leads.' },
    { q: 'Do I need a website for local SEO?', a: 'A Google Business Profile can rank alone, but a page for each main service usually makes it stronger.' },
  ] },
} satisfies Record<string, Block>;

/* ------------------------------------------------------------------ SEO freelancer (seo-services-israel) */
const seo = {
  included: { kind: 'text', id: 'included', h2: 'What an SEO freelancer does for you', answer: 'The pages closest to revenue get fixed first, then the next pages that deserve to rank get built.', check: true, list: [
    '[Technical SEO audit](/technical-seo-audit): crawling, indexing, speed and structured data problems, fixed in order of impact.',
    '[SEO content writing](/content-marketing-for-seo): service, product and comparison pages written for buyers.',
    '[B2B SEO](/b2b-seo-israel), [SaaS SEO](/saas-seo) and [cybersecurity SEO](/cybersecurity-seo): pages for buyers comparing vendors.',
    '[YouTube SEO](/youtube-seo): videos that rank in YouTube and Google search.',
    '[Ecommerce SEO](/ecommerce-seo-services), [Shopify SEO](/shopify-seo) and [Google Merchant Center](/google-merchant-center-seo) for online stores.',
    '[WordPress SEO](/wordpress-seo-services): the audit and the fixes made inside your WordPress site.',
    '[Programmatic SEO](/programmatic-seo): many useful pages built from one template and real data.',
  ] },
  proof: { kind: 'quotes', id: 'proof', h2: 'Proof from named clients', answer: 'ZStander grew Google sales 300% after collection-page and Google Shopping work (client figure). Zechariah Tokar is trusted by 40+ growth-focused companies.', items: [Q.sean, Q.rivka] },
  vs: { kind: 'table', id: 'freelancer-vs-agency', h2: 'SEO freelancer or SEO agency?', answer: 'A senior freelancer does the strategy and the work; an agency splits them across a team.', head: ['', 'Zechariah Tokar (freelancer)', 'Typical agency'], rows: [
    ['Who does the work', 'The same senior person you talk to', 'Often a junior team behind an account manager'],
    ['Reporting', 'What changed, why, and what is next', 'Monthly reports and dashboards'],
    ['Best when', 'You want direct senior work on the pages that sell', 'You need many people at once across many channels'],
  ] },
  hiring: { kind: 'steps', id: 'how-hiring-works', h2: 'How hiring works', answer: 'Send the site first. The reply says what to fix first and whether it is a fit.', steps: [
    { h: 'Send your site', p: 'With the issue you want SEO to fix first.' },
    { h: 'Get the first fixes', p: 'A short list of the changes closest to revenue.' },
    { h: 'Agree the scope', p: 'A one-time project or monthly work, priced after the review.' },
    { h: 'Ship and measure', p: 'Changes go live and the results are reported in plain words.' },
  ] },
  cards: { kind: 'cards', id: 'more-services', h2: 'Other SEO work people ask about', cards: [
    { id: 'consulting', h: 'SEO consulting', p: ['For teams with their own writers or developers: a senior review of the plan, the pages and the next priorities, then your team does the work.'] },
    { id: 'link-building', h: 'Link building', p: ['Relevant links, mentions, profiles and citations for pages that already deserve to rank, chosen for quality over volume. No bulk link packages.'] },
    { id: 'press-releases', h: 'Press releases for SEO', p: ['A press release backs a real news angle: who you are, what you do, and where buyers and AI answers can check the brand. The angle, wording and distribution are reviewed for fit first.'] },
  ] },
  where: { kind: 'text', id: 'where', h2: 'Based in Israel, writing for US buyers', answer: 'Zechariah Tokar works from Israel for companies in the US, UK, Canada and Australia.', list: [
    'Copy is written in native US English.',
    'This is not Hebrew SEO or local Israeli consumer marketing.',
  ] },
  demand: { kind: 'demand', id: 'demand', h2: 'What companies search for', title: 'US searches a month for SEO help from one person', rows: [['SEO freelancer', 1600], ['Technical SEO audit', 1000], ['Freelance SEO consultant', 390], ['Shopify SEO expert', 390], ['SaaS SEO consultant', 260]], source: DEMAND_SOURCE },
  faq: { kind: 'faq', id: 'faq', h2: 'Questions buyers ask', items: [
    { q: 'How much does an SEO freelancer cost?', a: 'The price depends on the site and how much you want handled. Send the site for a scope. The local SEO offers have fixed prices on the [local SEO page](/local-seo-services).' },
    { q: 'Do you only work with Israeli companies?', a: 'No. Most clients sell into the US and other English-speaking markets.' },
    { q: 'Can you guarantee rankings?', a: 'No. Nobody controls Google\'s ranking. The work targets what moves rankings and leads, and reports the result.' },
  ] },
} satisfies Record<string, Block>;

export const CLAIM_PAGES: Record<string, ClaimContent> = {
  ai: {
    claim: 'ai', path: '/ai-seo-services',
    title: 'AI SEO Services | Get Named in ChatGPT and AI Overviews',
    description: 'AI SEO services for US and English-speaking companies: get named in ChatGPT, Gemini, Perplexity and Google AI Overviews. Audit, page work, tracking, $750 monthly plan.',
    h1: 'AI SEO Services That Get Your Company Named in ChatGPT',
    photo: { src: '/images/service-tracking-zechariah.webp', w: 562, h: 1000, alt: 'Zechariah Tokar at his desk wearing a headset', pos: 'center 25%', caption: 'Zechariah Tokar does the work himself.' },
    glance: [
      ['Who does the work', 'Zechariah Tokar, one senior consultant. No account managers.'],
      ['AI answers covered', 'ChatGPT, Google AI Overviews, Gemini and Perplexity'],
      ['Ways to start', 'An [AI visibility audit](/ai-visibility-audit), or the [monthly plan](/ai-seo-monthly) at $750 a month for the first 5 businesses'],
      ['Proof', 'ZStander named first in ChatGPT; North Star Ranch reports 10+ leads a month'],
      ['Guarantee', 'None. Progress is measured by asking the same buyer questions every month.'],
    ],
    serviceType: 'AI search optimization',
    formSubject: 'New Inquiry: AI SEO services', formService: 'AI SEO services',
    formTitle: 'Send your site and the question you want AI answers to name you for.',
    formBody: 'You will get a reply with where you stand today and the first fix.',
    pick: 'A',
    versions: {
      A: { answer: 'Zechariah Tokar provides AI SEO services that get companies in the US and other English-speaking markets named in ChatGPT, Gemini, Perplexity and Google AI Overviews. For ZStander, ChatGPT named the store first when asked where to buy lucite shtenders in the US.',
        blocks: [ai.included, ai.proof, ai.plans, ai.fit, ai.cards, ai.faq] },
      C: { answer: 'Zechariah Tokar got ZStander named first in ChatGPT for lucite shtenders in the US, and offers the same AI SEO services to companies in the US and other English-speaking markets.',
        blocks: [ai.proof, ai.included, { kind: 'photo', photo: { src: '/images/blog-ai-search-2026.jpg', w: 1600, h: 893, alt: 'Illustration of AI answers shown above classic search results', caption: 'Illustration: AI answers now sit above the classic results.' } }, ai.plans, ai.measure, ai.fit, ai.cards, ai.faq] },
    },
  },
  reddit: {
    claim: 'reddit', path: '/reddit-marketing-services',
    title: 'Reddit Marketing Services | Real Recommendations, No Bans',
    description: 'Reddit marketing services for US and English-speaking brands: subreddit research, organic posts and comments that do not get removed, Reddit Ads advice. Method behind a 405K-view post.',
    h1: 'Reddit Marketing Services That Earn Real Recommendations',
    photo: { src: '/images/service-content-zechariah.webp', w: 562, h: 1000, alt: 'Zechariah Tokar working at his desk', pos: 'center 25%', caption: 'Every post is planned and checked by Zechariah Tokar.' },
    glance: [
      ['Who does the work', 'Zechariah Tokar, who wrote a Reddit post that passed 405,000 views'],
      ['What you get', 'Subreddit research, posts and comments, a risk review, landing-page fixes'],
      ['Never done', 'Fake accounts, bought upvotes, link drops'],
      ['Smaller start', 'The [Reddit posting service](/reddit-posting-service): posts written and checked one at a time'],
      ['Price', 'Quoted after a look at your brand and the communities'],
    ],
    serviceType: 'Reddit marketing',
    formSubject: 'New Inquiry: Reddit marketing services', formService: 'Reddit marketing services',
    formTitle: 'Send the brand and the Reddit topic you want to test first.',
    formBody: 'You will get a reply on where your brand can take part and where it should stay quiet.',
    pick: 'A',
    versions: {
      A: { answer: 'Zechariah Tokar provides Reddit marketing services that get real people recommending brands from the US and other English-speaking markets, without bans. The same method got one post to 405,000 views.',
        blocks: [reddit.included, reddit.proof, reddit.how, reddit.rules, reddit.fit, reddit.cards, reddit.faq] },
      C: { answer: 'Zechariah Tokar wrote a Reddit post that reached 405,000 views and runs Reddit marketing services for companies in the US and other English-speaking markets that want real recommendations without bans.',
        blocks: [reddit.proof, reddit.how, reddit.search, { kind: 'photo', photo: { src: '/images/blog-claude-code-content-marketing.jpg', w: 1600, h: 893, alt: 'Illustration of a marketer working at a desk in a bright office', caption: 'Illustration: every post is read against the subreddit rules before it goes live.' } }, reddit.included, reddit.rules, reddit.organic, reddit.fit, reddit.faq] },
    },
  },
  local: {
    claim: 'local', path: '/local-seo-services',
    title: 'Local SEO Services | Fixed Prices From $20 | Map Pack and AI Answers',
    description: 'Local SEO services at fixed prices: $20 Target Finder, $250 Blueprint, $2,000 done-for-you system. Google Business Profile, map pack, citations, for US small businesses.',
    h1: 'Local SEO Services at a Fixed Price',
    photo: { src: '/images/zechariah-tokar-hat-suit.webp', w: 600, h: 876, alt: 'Zechariah Tokar in a black hat and suit, outdoors', pos: 'center 20%', caption: 'Zechariah Tokar builds every local system himself.' },
    glance: [
      ['Prices', '$20 Target Finder · $250 Blueprint · $2,000 Local Authority System'],
      ['Who does the work', 'Zechariah Tokar, one senior consultant'],
      ['What it covers', 'Google Business Profile, the map pack, local pages, citations, AI answers'],
      ['Proof', 'Top of the Morristown, NJ map pack; #1 for Midwood Brooklyn real estate (client figure)'],
      ['Guarantee', 'None. Nobody controls Google\'s ranking, and that is said up front.'],
    ],
    serviceType: 'Local SEO',
    primary: { label: 'See the prices', href: '#prices' },
    formSubject: 'New Inquiry: Local SEO services', formService: 'Local SEO services',
    formTitle: 'Not sure which step fits? Send your business.',
    formBody: 'You will get a reply with the step that fits and the first search worth owning.',
    pick: 'A',
    versions: {
      A: { answer: 'Zechariah Tokar provides local SEO services for small businesses in the US and other English-speaking markets at three fixed prices, from $20. One client practice sits at the top of the Google map pack in Morristown, NJ.',
        blocks: [local.ladder, local.included, local.proof, local.quote, local.fit, local.faq] },
      C: { answer: 'Zechariah Tokar put a client practice at the top of the Google map pack in Morristown, NJ, and sells the same local SEO services to US small businesses at three fixed prices, from $20.',
        blocks: [local.proof, local.quote, local.ai, { kind: 'photo', photo: { src: '/images/blog-web-designer-seo-recommendation.jpg', w: 1200, h: 669, alt: 'Illustration of site structure, mobile speed, brand and search visibility linked together', caption: 'Illustration: pages, speed and trust signals work as one system.' } }, local.ladder, local.included, local.how, local.fit, local.faq] },
    },
  },
  seo: {
    claim: 'seo', path: '/seo-services-israel',
    title: 'SEO Freelancer for US Companies | One Senior Consultant, No Agency',
    description: 'Hire Zechariah Tokar, a senior SEO freelancer for US and English-speaking companies: technical audits, content, B2B, SaaS and Shopify SEO. ZStander +300% Google sales.',
    h1: 'SEO Freelancer for Companies in the US and English-Speaking Markets',
    photo: { src: '/images/service-audit-zechariah.webp', w: 800, h: 450, alt: 'Zechariah Tokar at his laptop', pos: 'center 30%', caption: 'Zechariah Tokar, SEO freelancer.' },
    glance: [
      ['Who does the work', 'Zechariah Tokar, one senior consultant, strategy and execution'],
      ['Services', 'Technical audits, content, B2B, SaaS, Shopify and programmatic SEO'],
      ['Proof', 'ZStander +300% Google sales (client figure); trusted by 40+ companies'],
      ['Based', 'Israel, writing in native US English for US, UK, Canada and Australia'],
      ['Price', 'Scoped after a review of your site'],
    ],
    serviceType: 'SEO consulting',
    formSubject: 'New SEO Audit Request: SEO freelancer', formService: 'SEO freelancer',
    formTitle: 'Send your site and the issue you want SEO to fix first.',
    formBody: 'You will get a reply with the practical next step.',
    pick: 'A',
    versions: {
      A: { answer: 'Zechariah Tokar is an SEO freelancer who works directly with companies in the US and other English-speaking markets. One senior person does the strategy and the work; ZStander grew Google sales 300% (client figure).',
        blocks: [seo.included, seo.proof, seo.vs, seo.hiring, seo.cards, seo.faq] },
      C: { answer: 'Zechariah Tokar helped ZStander grow Google sales 300% (client figure) and works as a senior SEO freelancer for companies in the US and other English-speaking markets.',
        blocks: [seo.proof, seo.included, { kind: 'photo', photo: { src: '/images/blog-seo-drives-pipeline-b2b.jpg', w: 1600, h: 893, alt: 'Illustration of search traffic flowing through a pipeline into revenue', caption: 'Illustration: the pages closest to revenue come first.' } }, seo.hiring, seo.vs, seo.cards, seo.where, seo.faq] },
    },
  },
};
