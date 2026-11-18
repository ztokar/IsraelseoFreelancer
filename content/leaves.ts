import type { Block, ClaimContent } from '../components/lean/ClaimPage';
import { MONTHLY, RES, SHARE, SYSTEM, one } from './claims';

// Same copy rule as claims.ts: first person, his LinkedIn voice, very short.
const STRIPE_SYSTEM = 'https://buy.stripe.com/00wbIU4rjfPh3cD3nV6c00U';
const QUOTED = 'Priced after I look at your site';

/* ------------------------------------------------------------------ AI visibility audit */
const audit: ClaimContent = {
  claim: 'ai', path: '/ai-visibility-audit',
  title: 'AI Visibility Audit | Why ChatGPT Names Your Competitors, Not You',
  description: 'An AI visibility audit: where ChatGPT, Gemini, Perplexity and Google AI Overviews name your business, where they skip it, and the first fixes.',
  h1: 'AI visibility audit',
  photo: SHARE,
  glance: [
    ['You get', 'Your buyer questions checked, the sources behind each answer, a short fix list'],
    ['AI checked', 'ChatGPT, Gemini, Perplexity, Google AI Overviews'],
    ['Type', 'One time. No monthly plan needed.'],
    ['Price', QUOTED],
  ],
  serviceType: 'AI visibility audit',
  formSubject: 'New Inquiry: AI visibility audit', formService: 'AI visibility audit',
  formTitle: 'Send me your site and the question you want AI to name you for.', formBody: 'You get a reply with a price and the first thing the audit will check.',
  pick: 'A',
  versions: one({
    answer: 'I show you where AI names your business, where it skips you, and what to fix first.',
    blocks: [
      { kind: 'results', id: 'results', h2: 'Is an AI visibility audit worth it?', items: [RES.founder, RES.zstander, RES.behfar] },
      { kind: 'text', id: 'included', h2: 'What does the audit include?', answer: 'Your buyers’ questions come first. A score with no explanation is not the deliverable.', list: [
        'The questions your buyers ask before they hire, run in each AI tool',
        'The sites, reviews and threads each answer is built from',
        'Your pages: are the offer, the fit and the proof clear enough to quote?',
        'AI crawler access, robots.txt and indexing for the pages that matter',
        'A competitor check you can run again later',
        'A short fix list, most important first',
      ] },
      { kind: 'table', id: 'findings', h2: 'What does the audit usually find?', answer: 'Each reason you’re missing needs different work. So I name the reason first.', head: ['What AI does', 'What I check', 'The next step'], rows: [
        ['Names a different business with your name', 'Your brand details and the sources behind the answer', 'Fix the mix-up before writing more pages'],
        ['Cites your guide but recommends a competitor', 'Whether your offer, fit and proof are clear', 'Fix the service page and its proof'],
        ['Never finds your service page', 'Indexing, access and the links to that page', 'Fix discovery before buying content'],
      ] },
      { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
        { q: 'What do you need for a price?', a: 'Your website, your main competitors, the services that matter most, and two or three questions you want AI to name you for.' },
        { q: 'How is it different from a technical SEO audit?', a: 'A technical audit asks if Google can crawl and index your site. This one asks why AI recommends someone else. The fixes often overlap, so I scope both together when you need both.' },
        { q: 'What happens after the audit?', a: 'You can fix it yourself, or I do it on the [monthly AI SEO plan](/ai-seo-monthly). Either way you can [track it](/how-to-track-ai-search-visibility) with the same questions. More in the [AI answers guides](/ai-answers).' },
      ] },
    ],
  }),
};

/* ------------------------------------------------------------------ Generative engine optimization */
const geo: ClaimContent = {
  claim: 'ai', path: '/geo-content-optimization',
  title: 'Generative Engine Optimization Services | Rewrite the Pages You Have',
  description: 'Generative engine optimization services: I rewrite your service, product and comparison pages so ChatGPT and Google AI Overviews can quote them.',
  h1: 'Generative engine optimization services',
  photo: SHARE,
  glance: [
    ['You get', 'Your key pages rewritten so AI can quote them'],
    ['Built from', 'Your offer, your proof, your buyer’s decision'],
    ['Also', 'Schema and internal links on every rewritten page'],
    ['Price', 'Priced per set of pages'],
  ],
  serviceType: 'Generative engine optimization',
  formSubject: 'New Inquiry: Generative engine optimization', formService: 'Generative engine optimization',
  formTitle: 'Send me the pages that matter most.', formBody: 'You get a reply with which pages to rewrite first and a price.',
  pick: 'A',
  versions: one({
    answer: 'I rewrite the pages you already have so ChatGPT and Google’s AI can quote them.',
    blocks: [
      { kind: 'results', id: 'results', h2: 'Does generative engine optimization work?', items: [RES.zstander, RES.behfar, RES.northstar] },
      { kind: 'table', id: 'rewrites', h2: 'What does a rewrite fix?', answer: 'Vague copy gives AI nothing to quote. Specific copy does.', head: ['The weak copy', 'What the buyer still needs', 'What I write instead'], rows: [
        ['“We offer complete marketing solutions.”', 'What do you actually do?', 'The service, the customer and the work included'],
        ['“Trusted by leading companies.”', 'Why should I believe that?', 'A named testimonial or a real example'],
        ['“Contact us to learn more.”', 'What happens after I ask?', 'The first step and what to send'],
      ] },
      { kind: 'text', id: 'included', h2: 'What do GEO services include?', answer: 'Your best material usually exists already, in client work and sales calls.', list: [
        'Picking which pages deserve the work first',
        'The answer in the first sentence of each section, so it can be quoted alone',
        'Your proof placed next to each claim',
        'Schema and internal links checked on every rewritten page',
        'Updates when your business facts change',
      ] },
      { kind: 'text', id: 'not-included', h2: 'What is not included?', answer: 'No filler.', lines: [
        'No blog posts written to look busy. No bulk AI content. No claims your business can’t back up.',
        'New to the term? Read [what is generative engine optimization](/what-is-generative-engine-optimization) or the [AI answers guides](/ai-answers).',
      ] },
    ],
  }),
};

/* ------------------------------------------------------------------ AI visibility tracking */
const tracking: ClaimContent = {
  claim: 'ai', path: '/ai-visibility-tracking-services',
  title: 'AI Visibility Tracking Services | Someone Reads the Results',
  description: 'AI visibility tracking: a set of buyer questions checked in ChatGPT, Gemini, Perplexity and AI Overviews, with what changed and what to do about it.',
  h1: 'AI visibility tracking',
  photo: SHARE,
  glance: [
    ['You get', 'Your buyer questions re-checked on a schedule'],
    ['AI checked', 'ChatGPT, Gemini, Perplexity, Google AI Overviews'],
    ['Each report', 'Ends with a decision: keep, fix a page, or stop'],
    ['Price', QUOTED],
  ],
  serviceType: 'AI visibility tracking',
  formSubject: 'New Inquiry: AI visibility tracking', formService: 'AI visibility tracking',
  formTitle: 'Send me your site and the questions your buyers ask.', formBody: 'You get a reply with a starting question set and a price.',
  pick: 'A',
  versions: one({
    answer: 'I check what ChatGPT and Google’s AI say about you every month, and tell you what to change.',
    blocks: [
      { kind: 'results', id: 'results', h2: 'What does tracking catch?', items: [RES.zstander, RES.behfar] },
      { kind: 'text', id: 'included', h2: 'What does AI visibility tracking include?', answer: 'Numbers with someone reading them.', list: [
        'A question set built around the buying decision, kept the same between checks',
        'Every answer saved as evidence',
        'Competitor changes explained, not just counted',
        'Visits from AI tools read separately from mentions',
        'A decision at the end of each report: keep, fix a page, or stop',
      ] },
      { kind: 'table', id: 'what-counts', h2: 'What does each result prove?', answer: 'A passing mention is not a recommendation. The report keeps them apart.', head: ['Result', 'What it shows', 'What it does not show'], rows: [
        ['Brand mention', 'The answer named your business', 'That it recommended you'],
        ['Linked citation', 'The answer linked to a source', 'That the buyer clicked or bought'],
        ['Recommendation', 'You were offered as an option', 'That every buyer sees the same answer'],
        ['Tracked enquiry', 'A form or lead action was recorded', 'That an untagged AI answer caused it'],
      ] },
      { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
        { id: 'tools', q: 'Software, an audit, or managed tracking?', a: 'Software gives you numbers. An [audit](/ai-visibility-audit) gives you one diagnosis. Managed tracking gives you both, with someone reading them.' },
        { q: 'Can I track it myself?', a: 'Yes. Here is [how to track AI search visibility](/how-to-track-ai-search-visibility). More in the [AI answers guides](/ai-answers).' },
      ] },
    ],
  }),
};

/* ------------------------------------------------------------------ ChatGPT ads (setup service) */
const ads: ClaimContent = {
  claim: 'ai', path: '/chatgpt-ads-management',
  title: 'ChatGPT Ads Management | Setup, Tracking and First Campaign',
  description: 'ChatGPT ads setup: eligibility check, landing page, tracking and the first paid campaign in ChatGPT. A setup service. No client result yet.',
  h1: 'ChatGPT ads management',
  photo: SHARE,
  glance: [
    ['What it is', 'Setup for paid placements in ChatGPT'],
    ['You get', 'Eligibility check, landing page review, tracking, first campaign'],
    ['Proof', 'No client result for ChatGPT ads yet'],
    ['Price', 'Priced per campaign. Ad spend goes to the platform.'],
  ],
  serviceType: 'ChatGPT advertising setup',
  formSubject: 'New Inquiry: ChatGPT ads setup', formService: 'ChatGPT ads setup',
  formTitle: 'Send me your site and the offer you want to advertise.', formBody: 'You get a reply on whether the offer fits and what a first test needs.',
  pick: 'A',
  versions: one({
    answer: 'I set up your first paid campaign in ChatGPT. No client result for ChatGPT ads yet, and I’ll say so.',
    blocks: [
      { kind: 'text', id: 'included', h2: 'What does ChatGPT ads setup include?', answer: 'The account check, the landing page, the tracking and the first campaign.', list: [
        'Picking the goal before the bid',
        'Ad copy and a landing page written for the same buyer',
        'Conversion tracking tested before launch',
        'A first report on what the test answered',
      ] },
      { kind: 'table', id: 'checks', h2: 'What do you check before any money is spent?', answer: 'The campaign stays paused until all four are ready.', head: ['Check', 'Ready means', 'If it’s missing'], rows: [
        ['Advertiser access', 'Your account and category can run the campaign', 'I confirm eligibility before promising a launch'],
        ['Landing page', 'The offer is clear and the form or checkout works', 'Fix the page before buying traffic'],
        ['Measurement', 'The action you want is recorded', 'Fix tracking before judging results'],
        ['Budget and approval', 'You approved the spend limit, the ads and the page', 'The campaign stays paused'],
      ] },
      { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
        { q: 'Do you have results from ChatGPT ads?', a: 'Not yet. This is a setup service. The first client result goes on this page.' },
        { q: 'Is this the same as getting mentioned in ChatGPT?', a: 'No. Ads are paid. Organic mentions are a different job: see [ChatGPT brand mentions](/track-brand-mentions-in-chatgpt) and the [AI answers guides](/ai-answers).' },
      ] },
    ],
  }),
};

/* ------------------------------------------------------------------ Local Authority System ($2,000) */
const las: ClaimContent = {
  claim: 'local', path: '/local-authority-system',
  title: 'Done-For-You Local SEO System | $2,000 Flat',
  description: 'The Local Authority System: I build your money pages, supporting content, reputation and AI search setup for $2,000 flat to start.',
  h1: 'Done-for-you local SEO system',
  photo: SHARE,
  glance: [
    ['Price', '$2,000 flat to start'],
    ['I build', 'Money pages, supporting content, Reddit, YouTube, Maps, AI search'],
    ['Your time', 'One short call'],
    ['Bigger builds', 'More locations are quoted from $2,000'],
  ],
  serviceType: 'Local SEO',
  primary: { label: 'Get started: $2,000', href: STRIPE_SYSTEM, external: true },
  formSubject: 'New Inquiry: Local Authority System', formService: 'Local Authority System',
  formTitle: 'Questions first? Send me your business.', formBody: 'You get a reply on whether the system fits.',
  pick: 'A',
  versions: one({
    answer: 'I build your whole local lead system for $2,000. Pages, content, Maps, Reddit, YouTube and AI search.',
    blocks: [
      { kind: 'results', id: 'results', h2: 'Does it work? Here are my local clients.', items: [RES.yonatan, RES.brettMap, RES.behfarLocal, RES.therapy] },
      { kind: 'text', id: 'included', h2: 'What gets built?', answer: 'Everything a local business needs to get found and picked.', list: [
        '**Money pages:** one page for each search ready-to-buy clients type. One page, one job.',
        '**Supporting content:** articles and internal links that push those pages up. No random blog filler.',
        '**Reputation:** Reddit, YouTube, Google and Maps working together, so your brand looks alive everywhere buyers check.',
        '**AI search setup:** clear proof on your site, so ChatGPT, Gemini and Perplexity can name you.',
      ] },
      { kind: 'text', id: 'fit', h2: 'Who is it for?', answer: 'Local businesses that live on referrals and want leads from search too.', list: [
        'Therapy and mental health practices',
        'ABA and behavioral health providers',
        'Real estate teams and property managers',
        'Home care and local healthcare',
      ] },
      { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
        { q: 'Do you guarantee rankings?', a: 'No. Nobody honest can. You get specific work aimed at real leads, and clear proof of what was done and why.' },
        { q: 'Will this create a lot of work for me?', a: 'No. One short call. Then I get it done.' },
        { q: 'What if it’s not a fit?', a: 'I’ll tell you on the call. I turn down work that won’t help.' },
        { q: 'How does my map listing work?', a: 'Start here: [Google Business Profile](/google-business-profile-seo).' },
      ] },
    ],
  }),
};

/* ------------------------------------------------------------------ B2B SEO (receives the Israel B2B blog family) */
const b2b: ClaimContent = {
  claim: 'seo', path: '/b2b-seo-israel',
  title: 'B2B SEO Services in Israel | For Companies Selling to US Buyers',
  description: 'B2B SEO from Israel for SaaS, fintech and tech companies selling into the US: buyer-intent pages that bring pipeline, not traffic.',
  h1: 'B2B SEO services',
  photo: SHARE,
  glance: [
    ['For', 'B2B, SaaS, fintech and cybersecurity companies selling to US buyers'],
    ['I build', 'Service, use-case, comparison and pricing pages'],
    ['Based', 'Israel. I write in native US English.'],
    ['Price', QUOTED],
  ],
  serviceType: 'B2B SEO',
  formSubject: 'New SEO Audit Request: B2B SEO', formService: 'B2B SEO',
  formTitle: 'Send me your site and the buyer search you most want to win.', formBody: 'You get a reply with the first pages to fix.',
  pick: 'A',
  versions: one({
    answer: 'I build the pages US buyers read right before they contact sales.',
    blocks: [
      { kind: 'results', id: 'results', h2: 'What do B2B clients say?', items: [RES.sean, RES.yehudah, RES.rivka] },
      { kind: 'text', id: 'included', h2: 'What do B2B SEO services include?', answer: 'Pipeline, not traffic.', list: [
        'A map of the searches buyers run while comparing vendors',
        'Service and use-case pages with a clear offer and proof',
        'Comparison, alternatives and pricing pages',
        'Refreshes of pages that rank but don’t bring leads',
        'Internal links that push those pages up',
        'Lead tracking, so search ties back to pipeline',
      ] },
      { kind: 'faq', id: 'questions', h2: 'More questions B2B teams ask', items: [
        { id: 'pipeline', q: 'Why is our B2B search volume so low?', a: 'That’s normal. A few buyers searching for your exact service are worth more than thousands of blog readers. So I start with the pages closest to a sales call. Content marketing comes after.' },
        { id: 'why-b2b-seo-fails', q: 'Why does B2B SEO fail?', a: 'Chasing traffic instead of pipeline. Copying US content without the authority to rank it. No clear vertical. Weak pages for buyers who are ready.' },
        { id: 'us-market', q: 'Can a company in Israel win US search results?', a: 'Yes. US results are crowded, so it takes more authority and sharper pages. The copy has to sound like a US buyer describing the problem.' },
        { id: 'attribution', q: 'How do you tie SEO to revenue?', a: 'The pages closest to a sales call come first. I count the leads from them, not only the visits.' },
        { id: 'fintech', q: 'Do you do fintech SEO?', a: 'Yes. Google holds money topics to a higher bar. Fintech pages need accurate claims you can back up, plus the comparison pages buyers read before they choose.' },
        { id: 'evaluate', q: 'How do I judge a B2B SEO provider?', a: 'Ask for a keyword plan built on buyer intent, pages for buyers ready to talk to sales, a plan for AI answers, links that are earned, and a way to report revenue.' },
        { q: 'Where can I read more?', a: 'The [SEO guides](/seo-guides), and how AI picks vendors: [answer engine optimization](/what-is-answer-engine-optimization).' },
      ] },
    ],
  }),
};

/* ------------------------------------------------------------------ ChatGPT SEO services (added 2026-11-12) */
const chatgptSeo: ClaimContent = {
  claim: 'ai', path: '/chatgpt-seo-services',
  title: 'ChatGPT SEO Services | Get Your Brand Named in ChatGPT Answers',
  description: 'ChatGPT SEO services: I get your business named when buyers ask ChatGPT who to hire or where to buy. ZStander was named first for its main product.',
  h1: 'ChatGPT SEO services',
  photo: SHARE,
  glance: [
    ['You get', 'Your brand named when buyers ask ChatGPT'],
    ['The work', 'Clearer pages, the sources ChatGPT reads, a monthly re-check'],
    ['Monthly plan', MONTHLY],
    ['One time', 'An [audit](/ai-visibility-audit), priced after I look'],
  ],
  serviceType: 'ChatGPT search optimization',
  formSubject: 'New Inquiry: ChatGPT SEO services', formService: 'ChatGPT SEO services',
  formTitle: 'Send me your site and the question you want ChatGPT to name you for.', formBody: 'You get a reply with who ChatGPT names today and the first fix.',
  pick: 'A',
  versions: one({
    answer: 'I get your business named when a buyer asks ChatGPT who to hire or where to buy.',
    blocks: [
      { kind: 'results', id: 'results', h2: 'Does ChatGPT SEO work? Here are my clients.', items: [RES.zstander, RES.behfar, RES.founder] },
      { kind: 'text', id: 'included', h2: 'What do ChatGPT SEO services include?', answer: 'Your own pages, plus the outside sources ChatGPT builds its answer from.', list: [
        '**Buyer prompts:** the questions your buyers type into ChatGPT, run and logged, with who gets named',
        '**Sources:** the pages, reviews, directories and Reddit threads each answer cites',
        '**Your pages:** the offer, the fit and the proof in the first lines, with schema markup, so the answer can quote them',
        '**Crawler access:** a check that OpenAI’s search crawler (OAI-SearchBot) is not blocked and your pages are indexed',
        '**Brand mentions:** getting you honestly named on the sites those answers lean on',
        '**Monthly re-check:** the same prompts run again, with what changed and why',
      ] },
      SYSTEM,
      { kind: 'text', id: 'fit', h2: 'Who is ChatGPT SEO for?', answer: 'Businesses whose buyers now ask ChatGPT before they search Google.', lines: [
        'Local businesses, Shopify stores, SaaS and B2B companies selling in English.',
        'Not a fit: bulk AI content, or anyone who needs a guaranteed mention.',
      ] },
      { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
        { id: 'vs-google', q: 'ChatGPT SEO or Google SEO?', a: 'Most of the work overlaps. ChatGPT search leans on pages that already rank in Google. The difference: more of your reputation has to live off your own site, in reviews, listings and threads.' },
        { q: 'Can you guarantee ChatGPT will recommend my business?', a: 'No. Nobody controls a ChatGPT answer. I fix your pages and what the web says about you, and the monthly re-checks show if it’s working.' },
        { q: 'Is ChatGPT SEO the same as GEO, AEO or LLM SEO?', a: 'Mostly yes. They’re names for the same job. This page is the ChatGPT part of it.' },
        { q: 'Does it also help with Gemini, Perplexity and Google AI Overviews?', a: 'Yes. They lean on similar sources. My full [AI SEO services](/ai-seo-services) cover all four.' },
      ] },
    ],
  }),
};

/* ------------------------------------------------------------------ Ecommerce SEO services (added 2026-11-12) */
const ecommerceSeo: ClaimContent = {
  claim: 'seo', path: '/ecommerce-seo-services',
  title: 'Ecommerce SEO Services | More Google Sales From the Store You Have',
  description: 'Ecommerce SEO services: category pages, product pages and Google Shopping fixed so your store sells more from Google. ZStander: +300% Google sales.',
  h1: 'Ecommerce SEO services',
  photo: SHARE,
  glance: [
    ['You get', 'Category and product pages that rank and sell, plus Google Shopping fixes'],
    ['Platform', 'Shopify first. Ask me about others.'],
    ['Result', 'ZStander: Google sales up 300%'],
    ['Price', 'Priced after I look at your store'],
  ],
  serviceType: 'Ecommerce SEO',
  formSubject: 'New SEO Audit Request: Ecommerce SEO', formService: 'Ecommerce SEO',
  formTitle: 'Send me your store and the products you most want to sell.', formBody: 'You get a reply with the first pages to fix.',
  pick: 'A',
  versions: one({
    answer: 'I fix the pages closest to a sale, so your store sells more from Google.',
    blocks: [
      { kind: 'results', id: 'results', h2: 'Does ecommerce SEO work? Here are my clients.', items: [RES.zstanderSales, RES.sean, RES.zstander], after: 'The full story: [ZStander case study](/case-studies/zstander-shopify-seo). Shopify setup details: [Shopify SEO](/shopify-seo).' },
      { kind: 'text', id: 'included', h2: 'What do ecommerce SEO services include?', answer: 'Category pages first. Then product pages. Then the product feed.', list: [
        '**Category pages:** real copy, FAQs and internal linking on pages that had only a title and a product grid',
        '**New category pages:** one for each search your products already fit, by use, feature, audience or occasion',
        '**Product pages:** titles, descriptions and product schema, so price, stock and reviews show in search results',
        '**Google Shopping:** product feed fixes and disapproved products in [Google Merchant Center](/google-merchant-center-seo)',
        '**Technical SEO:** an SEO audit first, then duplicate URLs, canonical tags, Core Web Vitals and indexing',
        '**Link building:** relevant links and mentions for the categories that deserve to rank',
        '**AI search:** product facts clear enough for Google AI Overviews and ChatGPT to name your store',
        '**Keyword research and reporting:** the searches shoppers make when ready to buy, and the sales that come from them',
      ] },
      { kind: 'table', id: 'problems', h2: 'What holds an online store back?', answer: 'Most stores have the products. The pages give Google nothing to rank.', head: ['The problem', 'What it costs', 'The fix'], rows: [
        ['Category pages with only a product grid', 'Google has nothing to rank', 'Copy, FAQs and links on each category page'],
        ['One category for many searches', 'Shoppers searching by use or feature never find you', 'A page for each search your products fit'],
        ['Feed errors in Merchant Center', 'Products missing from Google Shopping', 'Feed and product data fixes'],
        ['Duplicate and thin URLs', 'Ranking strength split across copies', 'Canonical tags and cleanup'],
      ] },
      { kind: 'faq', id: 'faq', h2: 'More questions store owners ask', items: [
        { q: 'How much do ecommerce SEO services cost?', a: 'It depends on how many categories and products need work. Send me the store and I’ll price it.' },
        { q: 'Which ecommerce platforms do you work on?', a: 'Mostly Shopify. Ask me about other platforms when you send the store.' },
        { id: 'fit', q: 'Who is it for?', a: 'Stores with real products people search for, and category pages that are mostly empty. Not a fit: bulk AI-written product pages.' },
        { q: 'Can you guarantee rankings or sales?', a: 'No. Nobody controls Google. I work on the pages that sell, and the report shows your sales from Google.' },
      ] },
    ],
  }),
};

/* ------------------------------------------------------------------ WordPress SEO services (added 2026-11-12) */
const wordpressSeo: ClaimContent = {
  claim: 'seo', path: '/wordpress-seo-services',
  title: 'WordPress SEO Services | Audit, Fixes and New Pages, Done in Your Site',
  description: 'WordPress SEO services: a technical audit, the fixes made inside your site, and new pages that bring leads. The Behfar Team reached #1 locally.',
  h1: 'WordPress SEO services',
  photo: SHARE,
  glance: [
    ['You get', 'An audit, the fixes made inside your site, and new pages'],
    ['Works with', 'Your theme and your SEO plugin, like Yoast SEO or Rank Math'],
    ['Result', 'The Behfar Team: #1 for Midwood Brooklyn real estate'],
    ['Price', QUOTED],
  ],
  serviceType: 'WordPress SEO',
  formSubject: 'New SEO Audit Request: WordPress SEO', formService: 'WordPress SEO',
  formTitle: 'Send me your WordPress site and the one thing you want fixed first.', formBody: 'You get a reply with the practical next step.',
  pick: 'A',
  versions: one({
    answer: 'I find what holds your WordPress site back in Google and fix it inside the site.',
    blocks: [
      { kind: 'results', id: 'results', h2: 'Does WordPress SEO work? Here are my clients.', items: [RES.behfarLocal, RES.brett, RES.menachem], after: 'The Behfar Team’s site carried years of buildup. After a technical cleanup, schema and local content, it reached #1 for Midwood Brooklyn real estate (client figure). [Read the case study](/case-studies/behfar-team-real-estate-seo).' },
      { kind: 'text', id: 'included', h2: 'What do WordPress SEO services include?', answer: 'The work is done in your site. Not handed over as a list.', list: [
        '**Technical SEO audit:** indexing, crawl errors, redirects, broken links, page speed and Core Web Vitals',
        '**Cleanup:** thin, duplicate and leftover pages removed or merged, so Google sees the pages that matter',
        '**On-page SEO:** keyword research, title tags, meta descriptions, headings and internal linking on the pages that sell',
        '**Schema markup:** structured data for the business, its services, reviews and FAQs',
        '**Plugin setup:** your SEO plugin, XML sitemap and robots.txt set correctly',
        '**New pages:** service and location pages written for buyers',
        '**Link building:** relevant links and local citations for pages that already deserve to rank',
        '**Reporting:** Google Search Console results and leads, in plain English',
      ] },
      { kind: 'table', id: 'plugin-or-person', h2: 'Isn’t an SEO plugin enough?', answer: 'A plugin gives you fields and warnings. It can’t decide what to fix or write the page.', head: ['', 'SEO plugin alone', 'With me'], rows: [
        ['Picks the searches worth winning', 'No', 'Yes, by buying intent'],
        ['Cleans up old and duplicate pages', 'No', 'Yes'],
        ['Writes titles, pages and schema', 'Gives you the fields', 'I do the writing'],
      ] },
      { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
        { q: 'Do I need a new theme or a rebuild?', a: 'Usually not. Most fixes happen in the site you already have.' },
        { q: 'What access do you need?', a: 'An admin login to WordPress and access to Google Search Console.' },
        { q: 'Do I need a WordPress developer as well?', a: 'Usually not. Most search engine fixes on a WordPress site need no custom code.' },
        { q: 'How much do WordPress SEO services cost?', a: 'It depends on the size of the site and how much you want handled. Send me the site and I’ll price it.' },
      ] },
    ],
  }),
};

export const LEAF_PAGES: ClaimContent[] = [audit, geo, tracking, ads, las, b2b, chatgptSeo, ecommerceSeo, wordpressSeo];
export type { Block };
