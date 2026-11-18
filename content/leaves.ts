import type { Block, ClaimContent } from '../components/lean/ClaimPage';
import { RES, SHARE, SYSTEM, one } from './claims';

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
  formTitle: 'Send me your site and the question you want AI to name you for.', formBody: 'You get a reply with the first thing the audit will check.',
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
        { q: 'How much does an AI visibility audit cost?', a: 'It’s a one-time fee. Send me your site and I’ll price it. To start I need your website, your main competitors, the services that matter most, and two or three questions you want AI to name you for.' },
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
    ['Monthly plan', 'Month to month'],
    ['One time', 'An [audit](/ai-visibility-audit)'],
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

/* ================================================================== Second batch (2026-11-18): pages that used the older templates.
   Facts come from the old page records in constants.tsx (SERVICE_SPOKES, SERVICE_DATA), rewritten short and first person. */

const leaf = (p: {
  claim: ClaimContent['claim']; path: string; title: string; description: string; h1: string; serviceType: string;
  glance: [string, string][]; answer: string; formTitle: string; formBody?: string; blocks: Block[];
}): ClaimContent => ({
  claim: p.claim, path: p.path, title: p.title, description: p.description, h1: p.h1, photo: SHARE, glance: p.glance,
  serviceType: p.serviceType, formSubject: `New Inquiry: ${p.serviceType}`, formService: p.serviceType,
  formTitle: p.formTitle, formBody: p.formBody || 'You get a reply with the practical next step.', pick: 'A',
  versions: one({ answer: p.answer, blocks: p.blocks }),
});

const saas = leaf({
  claim: 'seo', path: '/saas-seo', h1: 'SaaS SEO', serviceType: 'SaaS SEO',
  title: 'SaaS SEO | Turn Software Searches Into Demos',
  description: 'SaaS SEO that turns search into demos and signups: comparison, alternatives, pricing and use-case pages, plus AI search visibility, for software sold in the US.',
  glance: [['For', 'B2B SaaS that wants demos and signups from search'], ['I build', 'Comparison, alternatives, pricing and use-case pages'], ['Also', 'ChatGPT and Google AI naming your tool'], ['Price', QUOTED]],
  answer: 'I build the pages where software buyers decide. Then I turn that traffic into demos.',
  formTitle: 'Send me your SaaS site and the buyer search you most want to win.',
  blocks: [
    { kind: 'results', id: 'results', h2: 'What do clients say?', items: [RES.sean, RES.rivka, RES.yehudah] },
    { kind: 'text', id: 'included', h2: 'What does SaaS SEO include?', answer: 'The searches closest to a signup or a demo. Then the content that wins them.', list: [
      'Buyer-intent pages: comparisons, alternatives, pricing and use cases',
      'Keyword research mapped to your real buyer, not vanity volume',
      'Technical SEO, so Google can crawl and trust a fast-moving app',
      'AI search visibility, so ChatGPT and Google AI answers name your tool',
      'Internal links that move readers from blog to product',
      'A Search Console review to find pages one fix away from ranking',
    ] },
    { kind: 'text', id: 'fit', h2: 'Who is SaaS SEO for?', answer: 'Founders and marketers who want pipeline from search. Not a traffic chart.', lines: [
      'Most SaaS sites rank for soft blog terms and miss the pages where buyers decide.',
      'Not included: mass blog posts no buyer reads, or thin auto-generated pages.',
    ] },
    { kind: 'faq', id: 'faq', h2: 'More questions SaaS teams ask', items: [
      { q: 'How is SaaS SEO different from regular SEO?', a: 'It targets the searches buyers run right before they pick a tool: comparisons, alternatives and pricing. The goal is demos and signups, not blog traffic.' },
      { q: 'How long until SaaS SEO drives pipeline?', a: 'Buyer-intent pages can move within a few months, because the searches are less crowded. Broader terms take longer. I start with the pages closest to a signup.' },
      { q: 'Do you work with SaaS companies selling into the US from abroad?', a: 'Yes. Many of my clients are based outside the US and sell into it. I write in native US English.' },
      { q: 'Can SaaS SEO help us show up in AI answers?', a: 'Yes. When buyers ask ChatGPT which tool to use, the answer pulls from clear pages and real discussions. I build both. See [B2B SEO](/b2b-seo-israel) and [cybersecurity SEO](/cybersecurity-seo).' },
    ] },
  ],
});

const cyber = leaf({
  claim: 'seo', path: '/cybersecurity-seo', h1: 'Cybersecurity SEO', serviceType: 'Cybersecurity SEO',
  title: 'Cybersecurity SEO | Reach Security Buyers and CISOs',
  description: 'Cybersecurity SEO that reaches security buyers and CISOs: comparison, category and use-case pages, plus AI search visibility, for security companies selling into the US.',
  glance: [['For', 'Security companies selling into the US'], ['I build', 'Comparison, category and use-case pages'], ['Also', 'AI answers naming your product'], ['Price', QUOTED]],
  answer: 'Security buyers research hard and trust slowly. I build the pages that answer them.',
  formTitle: 'Send me your security site and the buyer search you want to win.',
  blocks: [
    { kind: 'results', id: 'results', h2: 'What do clients say?', items: [RES.yehudah, RES.sean, RES.rivka] },
    { kind: 'text', id: 'included', h2: 'What does cybersecurity SEO include?', answer: 'The searches a security buyer runs before a shortlist.', list: [
      'Buyer-intent pages: vendor comparisons, alternatives and category explainers',
      'Content that speaks to CISOs and security teams in their language',
      'Technical SEO and schema, so Google trusts a complex security site',
      'AI search visibility, so AI answers name your product as a safe option',
      'Links earned from real security sources',
      'A Search Console review to find security terms within reach',
    ] },
    { kind: 'text', id: 'fit', h2: 'Who is cybersecurity SEO for?', answer: 'Security founders and marketers who lose deals to bigger names in search.', lines: [
      'Most security sites publish only news and threat blogs. The comparisons and clear category answers are missing.',
      'Not included: fear-based fluff, or thin pages that cost you trust.',
    ] },
    { kind: 'faq', id: 'faq', h2: 'More questions security teams ask', items: [
      { q: 'Can SEO reach CISOs?', a: 'Yes. CISOs and their teams search for comparisons, categories and proof before they shortlist. Pages that answer those questions put you in front of them at the right moment.' },
      { q: 'Can we rank against bigger vendors?', a: 'You won’t outspend the giants. You can win the buyer searches they cover poorly: niche use cases, honest comparisons and clear category answers.' },
      { q: 'Will this help us appear in AI answers?', a: 'Yes. When buyers ask AI which security tool fits, the answer pulls from clear pages and trusted discussions. I build both. See [B2B SEO](/b2b-seo-israel) and [SaaS SEO](/saas-seo).' },
    ] },
  ],
});

const shopify = leaf({
  claim: 'seo', path: '/shopify-seo', h1: 'Shopify SEO', serviceType: 'Shopify SEO',
  title: 'Shopify SEO Consultant | Collections and Products That Rank',
  description: 'Shopify SEO: collection pages, product pages, technical cleanup and Google Shopping, so your store sells more from Google. ZStander: Google sales up 300%.',
  glance: [['For', 'Shopify stores with products that should already show up in Google'], ['I fix', 'Collections, products, links, schema'], ['Result', 'ZStander: Google sales up 300%'], ['Price', 'Priced after I look at your store']],
  answer: 'I get your Shopify collections and products found in Google.',
  formTitle: 'Send me your Shopify store and the product category you care about most.',
  formBody: 'You get a reply with the first pages to fix.',
  blocks: [
    { kind: 'results', id: 'results', h2: 'Does Shopify SEO work? Here are my clients.', items: [RES.zstanderSales, RES.zstander, RES.sean], after: 'The full story: [ZStander case study](/case-studies/zstander-shopify-seo).' },
    { kind: 'text', id: 'included', h2: 'What does Shopify SEO include?', answer: 'Shopify SEO usually fails in the small places. I fix those first.', list: [
      'Collection pages: real copy on pages that had only a title and a product grid',
      'Product titles and metadata that match how buyers shop',
      'Indexing and canonical checks, so duplicate product URLs stop competing',
      'Internal links between products and collections',
      'A Search Console review to find the searches you almost rank for',
    ], after: 'Product feed problems? See [Google Merchant Center](/google-merchant-center-seo). Not on Shopify? See [ecommerce SEO](/ecommerce-seo-services).' },
    { kind: 'faq', id: 'faq', h2: 'More questions store owners ask', items: [
      { q: 'How much does Shopify SEO cost?', a: 'It depends on how many collections and products need work. Send me the store and I’ll price it.' },
      { q: 'Why isn’t my Shopify store showing up in Google?', a: 'Usually thin collection pages, duplicate product signals, weak internal links, missing schema, or page words that don’t match how buyers search.' },
      { q: 'Can you guarantee rankings or sales?', a: 'No. Nobody controls Google. I work on the pages that sell and show you the sales from Google.' },
    ] },
  ],
});

const gmc = leaf({
  claim: 'seo', path: '/google-merchant-center-seo', h1: 'Google Merchant Center help', serviceType: 'Google Merchant Center',
  title: 'Google Merchant Center SEO | Fix the Shopping Feed',
  description: 'Google Merchant Center and product feed cleanup for stores that depend on Google Shopping: feed fields, product titles, disapproved products and landing pages.',
  glance: [['For', 'Stores with feed errors or products missing from Google Shopping'], ['I fix', 'Feed fields, titles, landing pages, policy issues'], ['Result', 'One client fix: under 10 hours'], ['Price', 'Priced after I look at your store']],
  answer: 'I fix the Merchant Center issues that keep your products out of Google.',
  formTitle: 'Send me your store and the Merchant Center issue that matters most.',
  blocks: [
    { kind: 'results', id: 'results', h2: 'Does it work? Here are my clients.', items: [RES.sean, RES.zstanderSales] },
    { kind: 'text', id: 'included', h2: 'What does Merchant Center help include?', answer: 'It’s not only ads. Your product data decides how you show up across Google.', list: [
      'A review of your feed fields',
      'Product title cleanup',
      'Landing page checks, so the page matches the feed',
      'Shopping and organic product visibility, looked at together',
      'Merchant Center issues sorted by what to fix first',
    ], after: 'Store pages need work too? See [Shopify SEO](/shopify-seo) and [ecommerce SEO](/ecommerce-seo-services).' },
    { kind: 'faq', id: 'faq', h2: 'More questions store owners ask', items: [
      { q: 'Why are my products disapproved in Merchant Center?', a: 'Common reasons: the landing page doesn’t match the feed, missing or wrong feed fields, or a policy issue. I find which one and fix it.' },
      { q: 'How much does it cost?', a: 'It depends on the feed and the number of products. Send me the store and I’ll price it.' },
    ] },
  ],
});

const gbp = leaf({
  claim: 'local', path: '/google-business-profile-seo', h1: 'Google Business Profile optimization', serviceType: 'Google Business Profile optimization',
  title: 'Google Business Profile SEO | Win the Local Map Pack',
  description: 'Google Business Profile optimization for local businesses: categories, services, reviews, photos, citations and local pages, so you show up in Google Maps.',
  glance: [['For', 'Local businesses that want to show up in Google Maps'], ['I fix', 'Categories, services, reviews, photos, citations'], ['Result', 'Yonatan Vinnik: #1 on Maps in one week'], ['Price', 'Priced after I look at your profile']],
  answer: 'I set up your Google Business Profile so you show up in Maps for the searches that bring calls.',
  formTitle: 'Send me your business profile and the city or service you want to be found for.',
  blocks: [
    { kind: 'results', id: 'results', h2: 'Does it work? Here are my local clients.', items: [RES.yonatan, RES.brettMap, RES.behfarLocal] },
    { kind: 'text', id: 'included', h2: 'What does Google Business Profile optimization include?', answer: 'Local SEO is a trust problem. Google needs a clean profile and proof.', list: [
      'Your categories and services, checked and filled out',
      'Review and photo priorities',
      'The same name, address and phone everywhere it’s listed',
      'Local page recommendations for your website',
      'A check of the Google Maps searches you want to win',
    ], after: 'This is part of my [local SEO services](/local-seo-services). I build the whole thing in the [Local Authority System](/local-authority-system).' },
    { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
      { q: 'How long does it take to rank in Google Maps?', a: 'One client was #1 on Google Maps in a week. Most take longer. No guarantees. Nobody controls Google.' },
      { q: 'Do I need a website too?', a: 'A profile can rank alone. A page for each main service usually makes it stronger.' },
    ] },
  ],
});

const redditPosting = leaf({
  claim: 'reddit', path: '/reddit-posting-service', h1: 'Reddit posting service', serviceType: 'Reddit posting service',
  title: 'Reddit Posting Service | Posts That Do Not Get Removed',
  description: 'Reddit posting service: I check if the post should go up at all, then write it to fit the subreddit, review it and line up the page it links to.',
  glance: [['You get', 'Posts planned, written and checked one at a time'], ['First step', 'I check if posting is smart at all'], ['Never', 'Bulk posting, fake accounts, link drops'], ['Price', 'Priced after I look at your brand']],
  answer: 'I write Reddit posts that fit the subreddit and don’t get removed.',
  formTitle: 'Send me the draft idea, the subreddit and the page you want the post to support.',
  formBody: 'You get a reply on whether the post should go up, and how.',
  blocks: [
    { kind: 'results', id: 'results', h2: 'Does it work? Here are real posts.', items: [RES.reddit405, RES.reddit12] },
    { kind: 'text', id: 'included', h2: 'What does the Reddit posting service include?', answer: 'Most posting services start with a draft. I start with: should this be posted at all?', list: [
      'Picking the angle of the post',
      'Writing the title and the body',
      'Checking the subreddit: rules, thread history, likely reaction',
      'A review before anything goes public',
      'Making sure the page you link to answers the same question',
    ], after: 'If the idea is too promotional, too thin, or pointed at the wrong page, I’ll say so before it goes live. Want the full plan? See [Reddit marketing services](/reddit-marketing-services).' },
    { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
      { q: 'Why do Reddit posts get removed?', a: 'Usually the post reads like an ad, breaks a subreddit rule, or comes from an account with no history. More in the [Reddit guides](/reddit-guides).' },
      { q: 'Do you post from fake accounts?', a: 'No. No fake accounts, no fake engagement, no bulk posting.' },
    ] },
  ],
});

const youtube = leaf({
  claim: 'seo', path: '/youtube-seo', h1: 'YouTube SEO', serviceType: 'YouTube SEO',
  title: 'YouTube SEO Consultant | Make Your Videos Findable',
  description: 'YouTube SEO: video topics, titles, descriptions, chapters and the pages that support them, so your videos get found in YouTube and Google.',
  glance: [['For', 'Businesses that already make videos'], ['I fix', 'Topics, titles, descriptions, chapters'], ['Shows in', 'YouTube and Google video results'], ['Price', 'Priced after I look at your channel']],
  answer: 'I make the videos you already have findable in YouTube and Google.',
  formTitle: 'Send me your channel and the topic you want to be found for.',
  blocks: [
    { kind: 'text', id: 'included', h2: 'What does YouTube SEO include?', answer: 'YouTube SEO starts before you upload.', list: [
      'Video topic research: what people search and what your video answers',
      'Title and description cleanup',
      'Chapter recommendations',
      'A check of the Google results where videos show',
      'Blog or service page ideas that support each video',
    ] },
    SYSTEM,
    { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
      { q: 'Do you make the videos?', a: 'This service is about getting found: the topic, the title, the description and the chapters. I publish SEO videos myself and use YouTube as part of my own search work.' },
      { q: 'How much does YouTube SEO cost?', a: 'It depends on how many videos. Send me the channel and I’ll price it.' },
    ] },
  ],
});

const programmatic = leaf({
  claim: 'seo', path: '/programmatic-seo', h1: 'Programmatic SEO', serviceType: 'Programmatic SEO',
  title: 'Programmatic SEO | Useful Pages at Scale, Not Doorway Spam',
  description: 'Programmatic SEO: page templates built on real data, with internal links and indexing planned, so many pages rank without becoming thin spam.',
  glance: [['For', 'Companies with real data: locations, categories, products, integrations'], ['I plan', 'Templates, data fields, links, indexing'], ['Start', 'A small pilot batch'], ['Price', QUOTED]],
  answer: 'I build many useful pages from one template and your real data.',
  formTitle: 'Send me the idea, your data source and one example page you want to scale.',
  blocks: [
    { kind: 'text', id: 'included', h2: 'What does programmatic SEO include?', answer: 'It only works when the page type deserves to exist.', list: [
      'The page template strategy',
      'An indexing risk review',
      'Internal link structure',
      'Which data fields each page needs',
      'A pilot batch before the full build',
    ] },
    { kind: 'text', id: 'fit', h2: 'Who is programmatic SEO for?', answer: 'Companies with data that answers the same buyer question many times.', lines: [
      'Locations, categories, products, integrations or use cases.',
      'Thin generated pages create risk. A useful template answers a repeated question with specific data and a clear next step.',
    ] },
    SYSTEM,
    { kind: 'faq', id: 'faq', h2: 'More questions teams ask', items: [
      { q: 'Is programmatic SEO spam?', a: 'It can be. Pages with nothing specific on them are. Pages built on real data that answer a real question are not.' },
      { q: 'How much does it cost?', a: 'It depends on the data and the number of templates. Send me the idea and I’ll price it.' },
    ] },
  ],
});

const technical = leaf({
  claim: 'seo', path: '/technical-seo-audit', h1: 'Technical SEO audit', serviceType: 'Technical SEO audit',
  title: 'Technical SEO Audit | A Short List of What to Fix First',
  description: 'A technical SEO audit covering crawling, indexing, Google Search Console, site structure, metadata, schema and Core Web Vitals, with a fix list in order.',
  glance: [['You get', 'A short fix list, in order'], ['I check', 'Crawling, indexing, structure, metadata, schema, speed'], ['Tools', 'Search Console, Screaming Frog, GA4, PageSpeed Insights'], ['Price', QUOTED]],
  answer: 'I tell you what to fix first. Not a giant PDF.',
  formTitle: 'Send me your site. I’ll check where technical SEO is blocking you.',
  blocks: [
    { kind: 'results', id: 'results', h2: 'Is a technical SEO audit worth it?', items: [RES.behfarLocal, RES.brettSaved, RES.founder] },
    { kind: 'text', id: 'included', h2: 'What does a technical SEO audit include?', answer: 'Can Google reach the pages that matter? Is something keeping them out of search?', list: [
      'A Google Search Console review',
      'A full crawl of the site with Screaming Frog',
      'Indexing: robots.txt, noindex rules, sitemaps, redirects and canonicals',
      'Site structure and internal links',
      'Metadata, schema and Core Web Vitals',
      'A fix list in order of impact, written so a founder or a developer can use it',
    ] },
    { kind: 'steps', id: 'how-it-works', h2: 'How does the audit work?', answer: 'Crawling and indexing problems come first.', steps: [
      { h: 'Review Search Console', p: 'What Google found, and what it left out.' },
      { h: 'Crawl the site', p: 'Then I follow the important page paths myself.' },
      { h: 'Check indexing and templates', p: 'The pages closest to revenue first.' },
      { h: 'Put the fixes in order', p: 'The few that can change results go on top.' },
    ] },
    { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
      { q: 'How much does a technical SEO audit cost?', a: 'It depends on the size of the site. Send me the site and I’ll price it.' },
      { q: 'Can’t a free audit tool do this?', a: 'A tool can scan hundreds of URLs and flag problems. That’s raw data. The hard part is knowing which issues touch rankings and revenue, and which aren’t worth the developer time.' },
      { q: 'When should I run another audit?', a: 'After a migration, a redesign, a big content launch, a traffic drop or a template change.' },
      { q: 'Can you make the fixes too?', a: 'Yes. See [WordPress SEO](/wordpress-seo-services) and [Shopify SEO](/shopify-seo), or the full [SEO freelancer](/seo-services-israel) page.' },
    ] },
  ],
});

const writing = leaf({
  claim: 'seo', path: '/content-marketing-for-seo', h1: 'SEO writing services', serviceType: 'SEO writing services',
  title: 'SEO Writing Services | Pages That Rank and Convert',
  description: 'SEO writing services: service pages, buyer-focused articles, content refreshes and briefs, written around buyer intent, proof and a clear next step.',
  glance: [['You get', 'Service pages, buyer articles, refreshes, briefs'], ['Built on', 'Search intent, your proof, a clear next step'], ['Sold', 'Per page or per batch'], ['Price', QUOTED]],
  answer: 'I write pages that rank, explain and get the buyer to act. Not blog volume.',
  formTitle: 'Send me the page or the keyword you want to improve.',
  blocks: [
    { kind: 'results', id: 'results', h2: 'Does it work? Here are my clients.', items: [RES.therapy, RES.zstanderSales, RES.rivka] },
    { kind: 'text', id: 'included', h2: 'What do SEO writing services include?', answer: 'A page can rank and still fail if the offer is unclear.', list: [
      'Service pages that make the offer and the next step clear',
      'Buyer-focused articles that answer a question before a purchase',
      'Refreshes of pages that already have a head start',
      'SEO briefs for your own writers',
      'Titles, meta descriptions and internal links',
    ] },
    { kind: 'steps', id: 'how-it-works', h2: 'How do you decide what to write?', answer: 'I don’t start with a content calendar. I start with the page that should make money.', steps: [
      { h: 'Check the search', p: 'The results, the pages that rank, and your Search Console.' },
      { h: 'Pick the angle', p: 'What buyers still need that the ranking pages miss.' },
      { h: 'Write for the buyer', p: 'Clear, short and useful. Search terms get added after the draft works.' },
      { h: 'Add title, meta and links', p: 'So the page fits the rest of your site.' },
    ] },
    { kind: 'faq', id: 'faq', h2: 'More questions owners ask', items: [
      { q: 'Do you use AI to write?', a: 'I use AI for research and speed. I don’t publish a first draft because it has the right terms in it. Every page gets verified facts, a real point of view and a quality check.' },
      { q: 'Should I write new pages or fix old ones?', a: 'Often fixing wins. If Google already shows a page and it stopped earning clicks, I check the title, the opening answer, the proof and the path to your service.' },
      { q: 'Do you also do video?', a: 'Yes. See [YouTube SEO](/youtube-seo).' },
    ] },
  ],
});

export const LEAF_PAGES: ClaimContent[] = [audit, geo, tracking, ads, las, b2b, chatgptSeo, ecommerceSeo, wordpressSeo,
  saas, cyber, shopify, gmc, gbp, redditPosting, youtube, programmatic, technical, writing];
export type { Block };
