import { ServiceContent, NavItem, NavGroup, CaseStudy } from './types';
import React from 'react';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/zechariah-tokar-167b7672/",
  twitter: "https://x.com/ZackTokar",
  youtube: "https://www.youtube.com/@Zechariah_T",
  reddit: "https://www.reddit.com/r/SEO_Israel/",
  calendly: "https://calendly.com/zack-tokar/consultation",
  email: "zechariah@israelseofreelancer.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Freelance SEO', path: '/freelance-seo-israel' },
  { label: 'Consulting', path: '/seoconsulting' },
  { label: 'B2B SEO', path: '/b2b-seo-israel' },
  { label: 'Content Marketing', path: '/content-marketing-for-seo' },
  { label: 'SEO for Lawyers', path: '/seo-for-lawyers' },
  { label: 'Israel SEO Specialist', path: '/israel-seo-specialist' },
  { label: 'Blog', path: '/blog' },
];

// Grouped nav for the redesigned header. Every link points to an existing page.
export const NAV_MENU: NavGroup[] = [
  {
    label: 'SEO Services',
    children: [
      { label: 'Freelance SEO', desc: 'Hands-on SEO, senior level', path: '/freelance-seo-israel' },
      { label: 'SEO Consulting', desc: 'Strategy and a clear roadmap', path: '/seoconsulting' },
      { label: 'SEO Content Writing', desc: 'Pages that rank and convert', path: '/content-marketing-for-seo' },
    ],
  },
  {
    label: 'B2B & Industries',
    children: [
      { label: 'B2B SEO', desc: 'Reach decision-makers', path: '/b2b-seo-israel' },
      { label: 'SEO for Lawyers', desc: 'More qualified case leads', path: '/seo-for-lawyers' },
    ],
  },
  {
    label: 'Markets',
    children: [
      { label: 'Israel SEO Specialist', desc: 'Ranking in English-speaking markets', path: '/israel-seo-specialist' },
      { label: 'Freelancer vs Agency', desc: 'Which is right for you', path: '/seo-freelancer-vs-agency' },
    ],
  },
  { label: 'Blog', path: '/blog' },
];

// Real screenshots posted publicly (sourced from LinkedIn). Used in the homepage proof strip.
export const PROOF_ITEMS = [
  { img: '/images/proof-reddit-405k.jpg', alt: 'Reddit post stats showing 405,000 views', caption_pre: 'A single Reddit post to ', caption_b: '405K views', caption_post: ' and real brand traffic.' },
  { img: '/images/proof-reddit-12k.jpg', alt: 'Reach dashboard showing 12,000 views', caption_pre: 'A client Reddit post hitting ', caption_b: '12K views', caption_post: ' in its first days.' },
  { img: '/images/proof-google-lead.jpg', alt: 'Inbound lead message that found the client on Google', caption_pre: 'An inbound lead that ', caption_b: 'found the client on Google', caption_post: '.' },
  { img: '/images/proof-client-praise.jpg', alt: 'Client message praising an SEO deliverable', caption_pre: 'A client reaction to a recent ', caption_b: 'SEO deliverable', caption_post: '.' },
];

// Metric-forward testimonials for the homepage (verbatim, from /reviews-results).
export const HOME_TESTIMONIALS = [
  { result: 'Nearly 7 figures in revenue', quote: 'Zechariah was one of the best people I ever contracted. His out of the box thinking and attention to detail really helped.', name: 'Sean Littman', title: 'Founder, GiveSuite' },
  { result: '#1 on Google Maps in one week', quote: 'Within one week, our business was showing #1 on Google Maps for every target search term we cared about. I was blown away.', name: 'Yonatan Vinnik, LSW', title: 'Child & Family Therapist' },
  { result: 'Saved thousands, ranked fast', quote: 'Within a couple of months I was ranking at the top for my key searches, which honestly shocked me. Talk to Zechariah.', name: 'Brett Sheldon, LCSW', title: 'CEO, Launch Point Network' },
];

export const TOOLS_LIST = [
  "Keywords Everywhere",
  "Moz",
  "Google Ads",
  "Reddit (Research)",
  "Featured.com"
];

// Simulated GSC Data for Visuals
const DATA_ECOMMERCE = [
  { date: '1', clicks: 120, impressions: 4000 },
  { date: '2', clicks: 180, impressions: 5500 },
  { date: '3', clicks: 250, impressions: 8000 },
  { date: '4', clicks: 400, impressions: 12000 },
  { date: '5', clicks: 800, impressions: 25000 },
  { date: '6', clicks: 1200, impressions: 45000 },
];

const DATA_LOCAL = [
  { date: '1', clicks: 20, impressions: 500 },
  { date: '2', clicks: 45, impressions: 1200 },
  { date: '3', clicks: 90, impressions: 2800 },
  { date: '4', clicks: 150, impressions: 4000 },
  { date: '5', clicks: 210, impressions: 5500 },
  { date: '6', clicks: 300, impressions: 8000 },
];

const DATA_B2B = [
  { date: '1', clicks: 10, impressions: 1000 },
  { date: '2', clicks: 25, impressions: 2500 },
  { date: '3', clicks: 40, impressions: 3800 },
  { date: '4', clicks: 85, impressions: 6000 },
  { date: '5', clicks: 140, impressions: 9000 },
  { date: '6', clicks: 220, impressions: 15000 },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "ZStander",
    metric: "+300%",
    context: "Increase in Google Sales",
    industry: "E-COMMERCE",
    market: "United States",
    description: "Optimized collection pages for Lucite shtenders + targeted Google Shopping during Purim and Pesach. Result: 3x revenue from organic search alone.",
    icon: "trending_up",
    graphData: DATA_ECOMMERCE
  },
  {
    client: "The Behfar Team",
    metric: "#1 Rank",
    context: "Midwood Brooklyn Real Estate",
    industry: "REAL ESTATE",
    market: "United States",
    description: "Outranked Zillow and Compass for 'Midwood real estate agents' using hyper-local content silos. They now own the local pack.",
    icon: "emoji_events",
    graphData: DATA_LOCAL
  },
  {
    client: "North Star Ranch",
    metric: "10+ Leads/Mo",
    context: "Micro Weddings Montana",
    industry: "HOSPITALITY",
    market: "United States",
    description: "Found the 'micro wedding' keyword gap competitors missed. Zero ad spend. Consistent monthly bookings from organic search.",
    icon: "groups",
    graphData: DATA_B2B
  },
  {
    client: "Jluxury",
    metric: "+25% CTR",
    context: "Luxury E-commerce",
    industry: "LUXURY",
    market: "United States",
    description: "Advanced schema markup + 'People Also Ask' optimization. Captured rich snippets for competitive luxury terms.",
    icon: "diamond",
    graphData: DATA_ECOMMERCE
  },
  {
    client: "Embracing Uncertainty",
    metric: "Top 3",
    context: "Eating Disorder Therapy NJ",
    industry: "HEALTHCARE",
    market: "United States",
    description: "Built content around therapy specializations, insurance questions, first session fears. Top 3 in local map pack, fully booked.",
    icon: "psychology",
    graphData: DATA_LOCAL
  }
];

export const SERVICE_DATA: Record<string, ServiceContent> = {
  freelance: {
    id: 'freelance-seo',
    slug: 'freelance-seo-israel',
    title: 'Hands-On SEO Without the Agency Markup.',
    subtitle: 'Freelance SEO Consultant',
    heroColor: 'primary',
    description: "Zechariah Tokar provides hands-on SEO for US and international companies. Strategy and execution by a senior consultant, not a rotating agency team.",
    entityDefinition: "Zechariah Tokar personally executes every aspect of your SEO campaign. No outsourcing, no junior team members. Direct access to senior-level strategy and a Wharton MBA.",
    marketFit: "US and international companies in local services, B2B, SaaS, and eCommerce that need SEO tied to revenue.",
    industries: ["Local Services", "B2B", "SaaS", "eCommerce"],
    ugcIntro: {
      what: "Hands-on SEO focused on rankings, traffic, and conversions. Executed by a senior consultant, not an agency team. I fix your site so Google actually likes it.",
      why: "Not on page 1? You don't exist. Paid ads get expensive. SEO pays you back forever.",
      how: "I find gaps your competitors missed—product collections, local intent, question-based content—and build pages that fill them better."
    },
    results: [
      { label: 'Ecommerce Revenue (30 Days)', value: '+$9,000' },
      { label: 'New Customers (30 Days)', value: '45+' },
      { label: 'SaaS Google Sales', value: '+300%' },
      { label: 'Real Estate Leads', value: 'Page 1' },
    ],
    caseStudyHighlight: CASE_STUDIES[0],
    process: {
      title: "My Workflow",
      steps: [
        "Competitor Deep Dive: I literally read their sitemaps",
        "Keyword Gap Analysis: Finding money terms they missed",
        "Content Optimization: NLP & entity injection for semantic relevance",
        "Technical Fixes: Speed, schema, indexing, crawl optimization",
        "Google Ads Support: Optional, for faster data collection"
      ]
    },
    tools: ["Keywords Everywhere", "Moz", "Google Ads", "Reddit (Research)", "Featured.com"],
    pricing: {
      audit: "$250",
      management: "$1,500 - $3,500"
    },
    features: [
      'Deep competitor analysis of US markets',
      'AI-enabled keyword research for high-intent queries',
      'SEO-friendly content written and uploaded for you',
      'On-page optimization + technical fixes',
      'Link building through legit PR and authority profiles'
    ],
    whyMe: [
      'Native US English speaker: Copy that sounds natural to American ears',
      'Direct communication: No account managers or agency telephone games',
      'Proven US market results: NY real estate, Montana hospitality, nationwide e-commerce',
      'You pay for results: Not hours, not "strategy sessions," actual ranking improvements'
    ],
    cta: 'Ready to stop being invisible and start driving real leads? Let\'s see if we\'re a fit.',
    faqs: [
      { question: 'How long does it take to see SEO results?', answer: 'Most clients see measurable ranking improvements within 60-90 days. Zechariah Tokar prioritizes quick wins first, targeting keywords where small optimizations produce fast gains, then builds toward competitive terms over 3-6 months.' },
      { question: 'What does a freelance SEO consultant do differently than an agency?', answer: 'Zechariah Tokar personally handles strategy and execution. No account managers, no junior team members rotating through your project. You get direct access to 10+ years of senior SEO experience on every decision.' },
      { question: 'How does pricing work?', answer: 'It depends on your site, your goals, and how much you want handled for you. The simplest way to find out is a quick consultation. You bring your site and main problem, and you leave with a clear plan and a scope that fits. Book a consultation or send your site for a free quick-wins audit and we will take it from there.' },
      { question: 'Do you work with international companies?', answer: 'Yes. Zechariah Tokar works with US companies, Israeli startups, European businesses, and international brands targeting English-speaking markets. He specializes in US market SEO strategy.' },
    ]
  },
  consultant: {
    id: 'consultant-seo',
    slug: 'seoconsulting',
    title: 'SEO Consultant Israel. International Strategy for US Markets.',
    seoTitle: 'SEO Consultant Israel | International SEO Strategy for US & Global Brands',
    subtitle: 'SEO Consulting',
    heroColor: 'secondary',
    description: "Zechariah Tokar provides expert SEO consulting for startups and B2B companies expanding to US markets. Know exactly what to do and in what order to grow organic traffic. Full control, senior guidance.",
    entityDefinition: "Zechariah Tokar provides strategy, audits, and a 90-day roadmap. You handle execution. Expert direction without agency retainers.",
    marketFit: "US and international companies that want senior SEO strategy without agency overhead.",
    industries: ["In-house Teams", "Startups", "Founders", "Marketing Agencies"],
    ugcIntro: {
      what: "Expert strategy without full execution overhead. Clear plan, prioritized keywords, actionable roadmap your team can implement. Need full execution? Check B2B SEO services.",
      why: "Most Israeli startups are guessing on US market SEO. You need strategy based on competitor data, not gut feelings or 2019 tactics.",
      how: "Call → I tear apart your current strategy → 90-day roadmap with quickest wins. Complement with content marketing for ongoing growth."
    },
    results: [
      { label: 'Real Estate Visibility', value: 'Top Rank' },
      { label: 'Ecommerce Growth', value: '+25%' },
      { label: 'Local Rankings (90 Days)', value: 'Page 1' },
    ],
    caseStudyHighlight: CASE_STUDIES[1],
    process: {
      title: "Consulting Roadmap",
      steps: [
        "Audit Current Performance: Where you rank, what's broken, what's missing",
        "Identify 'Low Hanging Fruit': Keywords you can win in 30-60 days",
        "Technical Health Check: Speed, mobile, schema, indexing issues",
        "Content Strategy Development: What to write, in what order, targeting what",
        "Monthly Progress & Pivot Calls: Adjust strategy based on real data"
      ]
    },
    tools: ["Moz", "Keywords Everywhere", "Google Search Console", "Excel/Sheets"],
    pricing: {
      audit: "$250",
      management: "Custom Retainers"
    },
    features: [
      'Complete audit of your site\'s US market relevance',
      '90-day roadmap focused on high-intent B2B traffic for Israeli companies',
      'Keyword strategy built for Google + AI search (ChatGPT, Perplexity)',
      'Content marketing outlines and upload instructions for your team',
      'Monthly calls to track progress and adapt strategy'
    ],
    whyMe: [
      'Expert direction without agency overhead: You get senior-level strategy, not junior execution. Need full implementation? Check our B2B SEO services.',
      'You keep full control: Of content, pacing, and budget. Your team executes while I guide every decision.',
      'Strategies tested on Israeli and US businesses: SaaS startups, professional services, and tech companies',
      'Avoid expensive mistakes: That slow growth or get you penalized. Strategic consulting prevents costly trial-and-error.'
    ],
    cta: 'Want clear SEO strategy your team can actually execute? Let\'s talk.',
    faqs: [
      { question: 'What is SEO consulting vs full SEO management?', answer: 'SEO consulting means Zechariah Tokar provides strategy, audits, and a prioritized roadmap. Your team handles execution. Full management means he handles everything. Consulting works best for companies with in-house marketing teams.' },
      { question: 'How does an SEO consultant help Israeli companies rank in the US?', answer: 'Zechariah Tokar researches US competitor landscapes, identifies keyword gaps, and builds content strategies around how American buyers actually search. He bridges the gap between Israeli product expertise and US market search behavior.' },
      { question: 'What does the first 90 days look like?', answer: 'Month 1: Full audit and competitor analysis. Month 2: Quick win implementation and content strategy. Month 3: Execution begins on high-priority keywords. You get a clear roadmap from day one.' },
    ]
  },
  b2b: {
    id: 'b2b-seo',
    slug: 'b2b-seo-israel',
    title: 'B2B SEO Services in Israel. SaaS & Tech Lead Generation.',
    seoTitle: 'B2B SEO Services Israel | SaaS & Tech SEO Agency',
    metaDescription: 'B2B SEO services in Israel for SaaS, tech, and B2B companies. Proven SEO strategies that generate qualified leads in the US and globally.',
    subtitle: 'B2B SEO Services',
    heroColor: 'primary',
    description: "Zechariah Tokar delivers B2B SEO for companies targeting US markets. Qualified inbound leads, not vanity metrics. Every ranking matters when contracts are high-value.",
    entityDefinition: "Zechariah Tokar targets keywords decision-makers search when evaluating solutions. Pricing pages, comparisons, use cases. Not fluffy thought leadership.",
    marketFit: "US and international B2B companies, SaaS, and professional services that need qualified leads.",
    industries: ["SaaS", "Professional Services", "Manufacturing", "B2B Tech"],
    ugcIntro: {
      what: "Get in front of decision makers when they're looking for solutions. Bottom-of-funnel content: landing pages, solution pages, comparison content. Pair with content marketing for long-term authority.",
      why: "B2B buyers research before reaching out. If you aren't the authority they find, your competitor gets the meeting. Israeli tech companies need US market visibility.",
      how: "Pricing pages, comparison articles, 'vs' posts, use cases. Start with SEO consulting to map your strategy, then execute B2B content that converts."
    },
    results: [
      { label: 'SaaS Google Sales', value: '+300%' },
      { label: 'Film Production', value: 'Inbound Leads' },
      { label: 'Keyword Visibility', value: 'Major Jump' },
    ],
    caseStudyHighlight: CASE_STUDIES[2],
    process: {
      title: "B2B Lead Gen Process",
      steps: [
        "Buyer Persona Keyword Mapping: What do your actual buyers search?",
        "Bottom-of-Funnel Content Creation: Pricing, comparisons, use cases",
        "Authority Link Building: Digital PR and expert quotes",
        "Conversion Rate Optimization: Landing pages that actually convert",
        "Lead Tracking Setup: Attribution that connects SEO to revenue"
      ]
    },
    tools: ["Featured.com", "LinkedIn", "Google Analytics 4", "Moz"],
    pricing: {
      audit: "$250",
      management: "$2,000 - $3,500"
    },
    features: [
      'In-depth keyword research for US B2B decision-makers',
      'Content marketing that speaks to problems, use cases, and ROI',
      'Authority-driven link building + PR placements for Israeli tech companies',
      'On-page optimization for E-E-A-T signals and Google rankings',
      'Landing pages built to convert US enterprise buyers',
      'Analytics tracking that reflects lead quality, not vanity metrics'
    ],
    whyMe: [
      'Clear reporting on revenue: Not just traffic and impressions. B2B SEO for Israeli companies targeting US markets.',
      'Fast execution: Strategy through our SEO consulting, then content marketing for long-term growth.',
      'Experience with complex B2B verticals: SaaS, professional services, manufacturing—especially Israeli tech companies.',
      'Optimized for Google AND AI search: Future-proofing your visibility as ChatGPT and Perplexity change the game.'
    ],
    cta: 'Not getting qualified B2B leads? It\'s not your industry, it\'s your SEO. Let\'s fix that.',
    faqs: [
      { question: 'What is B2B SEO and how is it different from regular SEO?', answer: 'B2B SEO targets keywords that decision-makers search when evaluating solutions. Zechariah Tokar focuses on bottom-of-funnel content like pricing pages, comparison articles, and use cases that generate qualified leads, not generic traffic.' },
      { question: 'How does Zechariah Tokar generate B2B leads through SEO?', answer: 'By creating content around buyer-intent keywords: "best [solution] for [use case]", comparison pages, pricing breakdowns, and case studies. This content ranks for searches from people ready to buy, not people doing casual research.' },
      { question: 'Can SEO work for complex B2B products?', answer: 'Yes. Zechariah Tokar has experience with SaaS, professional services, and manufacturing. Complex products benefit most from SEO because buyers do extensive research before contacting sales. The company that owns that research wins the deal.' },
      { question: 'How do you measure B2B SEO success?', answer: 'Qualified leads, pipeline contribution, and revenue attribution. Not traffic or impressions. Zechariah Tokar sets up lead tracking that connects organic search to actual business outcomes.' },
    ]
  },
  content: {
    id: 'content-marketing',
    slug: 'content-marketing-for-seo',
    title: 'SEO Content Marketing in Israel. Content That Converts.',
    seoTitle: 'SEO Content Marketing in Israel | Strategic Content That Ranks & Converts',
    subtitle: 'Content Marketing for SEO',
    heroColor: 'ice',
    description: "Zechariah Tokar builds content marketing that ranks and converts. Not blogging. Information architecture that establishes authority and drives qualified leads.",
    entityDefinition: "Zechariah Tokar creates landing pages, guides, comparisons, and topical clusters designed to rank, earn links, and convert. Content as infrastructure.",
    marketFit: "US and international companies that need content-driven organic growth, not fluff that never ranks.",
    industries: ["eCommerce", "Local Services", "SaaS", "Professional Services"],
    ugcIntro: {
      what: "Strategic pages targeting queries with conversion intent. Content that ranks and sells. Works best with B2B SEO for maximum visibility.",
      why: "AI content is flooding the web. Israeli companies need authentic US-market content that stands out with human expertise and original insights.",
      how: "Reddit, Quora, forums → find real questions US customers ask → write the best answer. Guided by strategic consulting to stay on track."
    },
    results: [
      { label: 'Impressions to Clicks', value: '+244 Clicks' },
      { label: 'Traffic Lift', value: '+25%' },
      { label: 'Local Service Rankings', value: 'Multiple Pg 1' },
    ],
    caseStudyHighlight: CASE_STUDIES[4],
    process: {
      title: "Content Engine Process",
      steps: [
        "Topic Cluster Research: Mapping semantic relationships",
        "Brief Creation: Structure, headlines, target queries",
        "Writing & Editing: Human touch, expert voice",
        "On-Page SEO: Meta tags, headers, image optimization",
        "Publishing & Indexing: Technical submission and monitoring"
      ]
    },
    tools: ["Reddit", "Google Trends", "SurferSEO", "Google Search Console"],
    pricing: {
      audit: "$250",
      management: "$1,500+"
    },
    features: [
      'Keyword-driven content strategy from SEO consulting foundations',
      'AI-assisted outlines for faster, smarter production—human-written execution',
      'Blog posts written for US market search intent, not word count',
      'Service pages that convert B2B visitors into qualified leads',
      'Internal linking + on-page optimization for maximum visibility',
      'Uploading and formatting done for you—zero technical lift'
    ],
    whyMe: [
      'Content built for Google AND AI search engines: ChatGPT, Perplexity, Gemini. Pair with B2B SEO for maximum impact.',
      'Structured for featured snippets: Grabbing position zero with strategic content architecture.',
      'Focused on questions US customers actually ask: Real research, not assumptions. Israeli companies need US-focused content.',
      'Designed to build authority and trust: E-E-A-T optimization built in. Strategic consulting ensures your content roadmap is solid.'
    ],
    cta: 'Want content that ranks and converts, not filler that collects dust? This is what I build.',
    faqs: [
      { question: 'What is SEO content marketing?', answer: 'SEO content marketing is creating pages specifically designed to rank in Google and AI search engines for keywords your buyers search. Zechariah Tokar builds landing pages, guides, comparisons, and topical clusters, not random blog posts.' },
      { question: 'How is this different from regular content marketing?', answer: 'Regular content marketing often produces blog posts that never rank. Zechariah Tokar starts with keyword research and search intent, then creates content engineered to capture that traffic. Every piece targets a specific query with conversion potential.' },
      { question: 'How do you create content that AI search engines cite?', answer: 'Zechariah Tokar structures content with definitive statements, question-based headings, specific entity mentions, and front-loaded insights. This format matches how ChatGPT, Perplexity, and Google AI Overviews select sources to cite.' },
    ]
  },
  israelSpecialist: {
    id: 'israel-seo-specialist',
    slug: 'israel-seo-specialist',
    title: 'Israel SEO Specialist. Rankings in the US, UK, and Beyond.',
    seoTitle: 'Israel SEO Specialist | Ranking International Companies in English-Speaking Markets',
    metaDescription: 'SEO specialist based in Israel helping international companies rank in the US, UK, and English-speaking markets worldwide. Senior strategy, no agency markup.',
    subtitle: 'Israel SEO Specialist',
    heroColor: 'primary',
    description: "Zechariah Tokar is an SEO consultant based in Israel, focused entirely on English-speaking markets. He works with Israeli startups, European companies, and international brands that need to rank in the US, UK, and beyond.",
    entityDefinition: "Being based in Israel doesn't limit who I work with—it means I work across time zones and serve companies globally. My specialty is English-speaking markets: US, UK, Canada, Australia.",
    marketFit: "Israeli startups, European companies, and international businesses that need senior SEO execution in English-speaking markets without paying agency rates.",
    industries: ["Israeli Startups", "International B2B", "SaaS & Tech", "US & UK Market Entry"],
    ugcIntro: {
      what: "Senior SEO strategy and execution for companies targeting English-speaking markets. Whether you're an Israeli startup going after the US or a UK company entering new markets, I handle the research, content, and technical work. Pairs well with B2B SEO services for full-funnel lead generation.",
      why: "Most agencies serving international companies apply the same generic playbook regardless of market. English-speaking markets—especially the US—are competitive and specific. You need someone who actually knows how US and UK buyers search, not someone adapting a template.",
      how: "Competitor research in your target English-speaking market. Keyword strategy built on what real buyers search. Content written, optimized, and published. Start with SEO consulting to map the opportunity, then execute through B2B SEO services."
    },
    results: [
      { label: 'US Organic Visibility', value: 'Page 1' },
      { label: 'International B2B Leads', value: '+200%' },
      { label: 'Ecommerce Revenue (30 Days)', value: '+$9,000' },
    ],
    caseStudyHighlight: CASE_STUDIES[0],
    process: {
      title: "How I Get You Ranked",
      steps: [
        "Market Competitor Research: Who ranks in your target English-speaking market and exactly what it takes to beat them",
        "Keyword Strategy: High-intent keywords US and UK buyers use when evaluating solutions like yours",
        "Content Creation: Service pages, comparison content, and guides written for English-speaking buyers",
        "On-Page & Technical SEO: Site structure, schema, speed, and indexing built for competitive markets",
        "Authority Building: PR placements and link building that earn credibility in English-speaking markets"
      ]
    },
    tools: ["Google Search Console", "Keywords Everywhere", "Moz", "Reddit (Research)", "Featured.com"],
    pricing: {
      audit: "$250",
      management: "$1,800 - $3,500"
    },
    features: [
      'Competitor research in your specific English-speaking target market',
      'Keyword strategy built around how US and UK buyers actually search',
      'Content written, optimized, and published—no technical lift on your side',
      'On-page SEO and technical fixes for competitive English markets',
      'B2B SEO execution for Israeli and international companies targeting the US',
      'Direct senior access—no account managers, no junior execution teams'
    ],
    whyMe: [
      'English-market focus, global client base: I work with companies from Israel, Europe, and beyond—all targeting the US and UK. That\'s my lane. I don\'t dilute it.',
      'Proven results in competitive English markets: NY real estate, US ecommerce, US B2B SaaS. Page 1 rankings in markets where it\'s actually hard to rank.',
      'Senior execution, not oversight: You get me doing the work—not a team lead who reviews what a junior wrote. Consistent quality, direct communication.',
      'Built for B2B: Israeli and international companies with complex products need content that speaks to US and UK decision-makers. Our B2B SEO services handle the full funnel.'
    ],
    cta: 'Based anywhere. Targeting the US, UK, or English-speaking markets? That\'s exactly what I do. Let\'s talk.',
    faqs: [
      { question: 'Can an SEO consultant based in Israel rank websites in the US?', answer: 'Yes. Zechariah Tokar is a native English speaker based in Israel who specializes in US and UK market SEO. He has ranked clients on page 1 for competitive US keywords in real estate, ecommerce, hospitality, and B2B SaaS.' },
      { question: 'What markets does Zechariah Tokar serve?', answer: 'Zechariah Tokar serves companies targeting English-speaking markets: US, UK, Canada, and Australia. His clients include Israeli startups, European companies, and international brands entering the US market.' },
      { question: 'Do you work across time zones?', answer: 'Yes. Zechariah Tokar works with clients across US, European, and Israeli time zones. Communication is async-friendly with regular progress calls scheduled at convenient times.' },
    ]
  },
  lawyers: {
    id: 'seo-lawyers',
    slug: 'seo-for-lawyers',
    title: 'SEO for Lawyers: Get More Clients from Google',
    seoTitle: 'SEO for Lawyers | Get More Clients from Google | Zechariah Tokar',
    subtitle: 'SEO for Lawyers',
    heroColor: 'secondary',
    description: "Zechariah Tokar provides SEO for lawyers that gets you on page 1 when potential clients search for legal help. He works with law firms and solo practitioners who need qualified leads from Google, not just website traffic.",
    entityDefinition: "Legal SEO focuses on local search visibility: showing up in Google's local pack, ranking for 'lawyer near me' searches, and capturing clients actively looking for representation. Not vanity traffic, actual cases.",
    marketFit: "Law firms, solo practitioners, and legal professionals who need client-generating SEO, not generic agency packages.",
    industries: ["Personal Injury", "Family Law", "Criminal Defense", "Estate Planning"],
    ugcIntro: {
      what: "SEO for lawyers means showing up when someone in your city searches for legal help. It's about local pack rankings, Google Business Profile optimization, and content that answers the exact questions potential clients type into Google at 2am.",
      why: "Your competitors are on page 1. If you're not, you're invisible. Most people don't scroll past the first few results. They call the first lawyer they find who looks credible. That needs to be you.",
      how: "I optimize your Google Business Profile, build location-specific content, earn citations from legal directories, and create service pages that rank for '[practice area] lawyer [city]' searches. Then I make sure your site converts visitors into consultations."
    },
    results: [
      { label: 'Local Pack Rankings', value: 'Top 3' },
      { label: 'Consultation Requests', value: '+40%' },
      { label: 'Organic Visibility', value: 'Page 1' },
    ],
    process: {
      title: "How I Get You Ranked",
      steps: [
        "Google Business Profile Optimization: Photos, categories, service areas, Q&A",
        "Local Citation Building: Avvo, Justia, FindLaw, Martindale-Hubbell",
        "Service Page Creation: [Practice Area] + [City] landing pages",
        "Content Strategy: Answering questions potential clients actually search",
        "Review Management: Getting more 5-star reviews that help rankings"
      ]
    },
    tools: ["Google Business Profile", "BrightLocal", "Avvo", "Legal Directories"],
    pricing: {
      audit: "$250",
      management: "$1,500 - $2,500"
    },
    features: [
      'Google Business Profile optimization for local pack visibility',
      'Location-specific landing pages for each practice area',
      'Legal directory citations (Avvo, Justia, FindLaw)',
      'FAQ content targeting common client questions',
      'Review generation strategy for credibility',
      'Consultation-focused conversion optimization'
    ],
    whyMe: [
      'Experience with legal SEO and compliance requirements',
      'Focus on consultation generation, not vanity metrics',
      'Direct communication—no account manager middleman',
      'Strategies proven on competitive local legal markets'
    ],
    cta: 'If potential clients can\'t find you on Google, they\'re calling someone else. Let\'s fix that and get you consistent leads from local search.',
    faqs: [
      { question: 'How does SEO for lawyers work?', answer: 'SEO for lawyers focuses on local search visibility. Zechariah Tokar optimizes your Google Business Profile, builds location-specific landing pages, earns citations from legal directories like Avvo and Justia, and creates content answering questions potential clients search.' },
      { question: 'How long does it take for a law firm to rank on Google?', answer: 'Most law firms see local pack improvements within 60-90 days. Competitive practice areas in major cities take 3-6 months for page 1 organic rankings. Zechariah Tokar prioritizes Google Business Profile and local pack first for faster results.' },
      { question: 'What is the ROI of SEO for lawyers?', answer: 'A single personal injury case can be worth $10,000-$100,000+. If SEO generates even 2-3 additional consultations per month, the return far exceeds the investment. Zechariah Tokar tracks consultation requests as the primary metric.' },
    ]
  }
};

export const SERVICES_LIST = Object.entries(SERVICE_DATA).map(([key, data]) => ({
  key,
  ...data
}));

export const CLIENT_LOGOS = [
  { name: 'JLUXURY', style: 'font-display font-bold text-2xl tracking-widest' },
  { name: 'Whitsunday', style: 'font-display italic text-2xl' },
  { name: 'ADORNA', style: 'font-sans font-bold text-xl tracking-[0.3em] border-2 border-current px-2 py-1' },
  { name: 'Pink Orchid', style: 'font-display italic text-2xl' },
  { name: 'NORTH STAR RANCH', style: 'font-sans font-bold text-sm tracking-widest leading-tight text-center' },
];
