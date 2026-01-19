import { ServiceContent, NavItem, CaseStudy } from './types';
import React from 'react';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/zechariah-tokar-167b7672/",
  twitter: "https://x.com/ZackTokar",
  calendly: "https://calendly.com/zack-tokar/consultation",
  email: "zechariah@israelseofreelancer.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Freelance SEO', path: '/freelance-seo-israel' },
  { label: 'Consulting', path: '/seoconsulting' },
  { label: 'B2B SEO', path: '/b2b-seo-company' },
  { label: 'Content Marketing', path: '/content-marketing-for-seo' },
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
    description: "This campaign targeted competitive US eCommerce search terms. I optimized collection pages for Lucite shtenders and ran targeted Google Shopping campaigns during Purim and Pesach. The result? A 3x jump in revenue from organic search alone.",
    icon: "trending_up",
    graphData: DATA_ECOMMERCE
  },
  {
    client: "The Behfar Team",
    metric: "#1 Rank",
    context: "Midwood Brooklyn Real Estate",
    industry: "REAL ESTATE",
    market: "United States",
    description: "This campaign targeted competitive US real estate search terms. Outranked Zillow and Compass for 'Midwood real estate agents' through hyper-local content silos and strategic entity stacking. They now own the local pack.",
    icon: "emoji_events",
    graphData: DATA_LOCAL
  },
  {
    client: "North Star Ranch",
    metric: "10+ Leads/Mo",
    context: "Micro Weddings Montana",
    industry: "HOSPITALITY",
    market: "United States",
    description: "This campaign demonstrates bottom-of-funnel SEO for high-intent lead generation. Found the 'micro wedding' keyword gap everyone else missed. Zero ad spend required. The site now generates consistent monthly bookings purely from organic search.",
    icon: "groups",
    graphData: DATA_B2B
  },
  {
    client: "Jluxury",
    metric: "+25% CTR",
    context: "Luxury E-commerce",
    industry: "LUXURY",
    market: "United States",
    description: "This campaign targeted competitive US luxury eCommerce terms. Applied advanced schema markup and 'People Also Ask' optimization to capture rich snippets, resulting in immediate visibility jumps for competitive luxury terms.",
    icon: "diamond",
    graphData: DATA_ECOMMERCE
  },
  {
    client: "Embracing Uncertainty",
    metric: "Top 3",
    context: "Eating Disorder Therapy NJ",
    industry: "HEALTHCARE",
    market: "United States",
    description: "This campaign targeted competitive US healthcare search terms. Built content around specific search intents: therapy specializations, insurance questions, first session fears. Result: Top 3 in local map pack, fully booked practice.",
    icon: "psychology",
    graphData: DATA_LOCAL
  }
];

export const SERVICE_DATA: Record<string, ServiceContent> = {
  freelance: {
    id: 'freelance-seo',
    slug: 'freelance-seo-israel',
    title: 'Dominate Search with Freelance SEO. Crushing Results in the Era of AI.',
    subtitle: 'Freelance SEO Consultant',
    heroColor: 'primary',
    description: "Freelance SEO is a hands-on search engine optimization service for US and international companies, delivered directly by an English-native consultant based in Israel. Strategy, execution, and accountability are handled by a senior SEO consultant, not a rotating agency team.",
    entityDefinition: "As a freelance SEO consultant, I personally execute every aspect of your campaign. No outsourcing, no junior team members, no account manager telephone games. You get direct access to senior-level strategy and execution.",
    marketFit: "I work with US and international companies in local services, B2B, SaaS, and eCommerce that need SEO strategy tied directly to revenue.",
    industries: ["Local Services", "B2B", "SaaS", "eCommerce"],
    ugcIntro: {
      what: "Freelance SEO means hands-on search engine optimization focused on rankings, traffic, and conversions. Executed directly by a senior SEO consultant instead of an agency team. I fix your site so Google actually likes it.",
      why: "If you aren't on page 1 for what you sell, you basically don't exist. Paid ads get expensive fast. SEO is an asset that pays you back forever.",
      how: "I analyze what your top competitors are doing, find the gaps they missed (specific product collections, local intent angles, question-based content), and build pages that fill those gaps better than anyone else."
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
    cta: 'If you want your website to start driving real leads from the US market instead of sitting there invisible, let\'s see if we\'re a fit.'
  },
  consultant: {
    id: 'consultant-seo',
    slug: 'seoconsulting',
    title: 'Crush Competitors. Dominate Search.',
    subtitle: 'SEO Consulting Services',
    heroColor: 'secondary',
    description: "SEO consulting is expert-level strategy and direction for US and international companies, delivered by an English-native consultant based in Israel. I help in-house teams and founders understand exactly what to do, and in what order, to grow organic traffic. You keep full control while getting senior-level guidance.",
    entityDefinition: "SEO consulting differs from full-service SEO: I provide the strategy, audits, and roadmap while you or your team handles execution. Ideal for businesses with some marketing capacity who need expert direction, not another agency retainer.",
    marketFit: "I work primarily with US and international companies that want senior-level SEO strategy without agency overhead.",
    industries: ["In-house Teams", "Startups", "Founders", "Marketing Agencies"],
    ugcIntro: {
      what: "SEO consulting means expert-level strategy and audits without the overhead of full execution. I tell you exactly what to do to grow organically, without you needing to hire a full-time SEO person or pay agency retainers. You leave with a clear execution plan, prioritized keyword targets, and a roadmap your team can actually implement.",
      why: "Most marketing teams are just guessing. You need a strategy based on competitor data and search behavior, not gut feelings or whatever worked in 2019.",
      how: "We jump on a call. I tear apart your current strategy (nicely). Then I deliver a 90-day roadmap using Moz, manual competitor research, and GSC data to find your quickest wins and biggest opportunities."
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
      'Complete audit of your site\'s market relevance',
      '90-day roadmap focused on high-intent traffic',
      'Keyword strategy built for Google + AI search',
      'Content outlines and upload instructions',
      'Monthly calls to track progress and adapt'
    ],
    whyMe: [
      'Expert direction without agency overhead: You get senior-level strategy, not junior execution',
      'You keep full control: Of content, pacing, and budget',
      'Strategies tested on real businesses: Retail, therapy practices, real estate teams',
      'Avoid expensive mistakes: That slow growth or get you penalized'
    ],
    cta: 'If you want an SEO strategist who explains the "why" behind every action and gives you a clear plan you can actually follow, I can help.'
  },
  b2b: {
    id: 'b2b-seo',
    slug: 'b2b-seo-company',
    title: 'Dominating Google. Crushing Expectations.',
    subtitle: 'B2B SEO Services',
    heroColor: 'primary',
    description: "B2B SEO services for US and international companies, delivered by an English-native consultant based in Israel. I help B2B companies generate qualified inbound leads through search, not traffic vanity metrics. Longer sales cycles and high-value contracts mean every ranking matters.",
    entityDefinition: "B2B SEO targets the keywords decision-makers search when they're actively evaluating solutions. This means pricing pages, comparison content, use case pages, and industry-specific landing pages. Not fluffy thought leadership that never converts.",
    marketFit: "I work with US and international B2B companies, SaaS platforms, and professional services firms that need qualified leads, not just traffic.",
    industries: ["SaaS", "Professional Services", "Manufacturing", "B2B Tech"],
    ugcIntro: {
      what: "B2B SEO means getting you in front of decision makers when they're actually looking for a solution. Not when they're scrolling LinkedIn half-asleep. I focus on bottom-of-funnel content: landing pages, solution pages, and comparison content.",
      why: "B2B buyers research heavily before reaching out. If you aren't the authority they find during that research phase, your competitor is. And they'll get the meeting, not you.",
      how: "I create content that answers the hard questions: pricing pages, comparison articles, 'vs' posts, detailed use cases. Internal linking and page hierarchy funnel authority toward revenue-driving pages. Then I use Featured.com and targeted PR to build backlinks that signal authority to Google."
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
      'In-depth keyword research for decision-makers',
      'Content that speaks to problems, use cases, and ROI',
      'Authority-driven link building + PR placements',
      'On-page optimization for E-E-A-T signals',
      'Landing pages built to convert',
      'Analytics tracking that reflects lead quality'
    ],
    whyMe: [
      'Clear reporting on revenue: Not just traffic and impressions',
      'Fast execution: Strategy, content, publishing in weeks not months',
      'Experience with complex B2B verticals: SaaS, professional services, manufacturing',
      'Optimized for Google AND AI search: Future-proofing your visibility'
    ],
    cta: 'If your B2B site isn\'t generating qualified leads, the problem isn\'t your industry. It\'s your SEO strategy. Let\'s fix that.'
  },
  content: {
    id: 'content-marketing',
    slug: 'content-marketing-for-seo',
    title: 'Crushing Google\'s Algorithm',
    subtitle: 'Content Marketing for SEO',
    heroColor: 'ice',
    description: "Content marketing for SEO services for US and international businesses competing in English-language search markets. Delivered by an English-native consultant based in Israel. This isn't blogging. It's building the information architecture that establishes your authority and converts visitors into qualified leads.",
    entityDefinition: "SEO content includes landing pages, guides, comparison content, and topical clusters designed to rank, earn links, and convert. Not blog posts written for volume. Content marketing for SEO means creating content as infrastructure: service pages, location pages, comparison content, FAQ resources, and strategic blog posts that support your core offerings.",
    marketFit: "I work with US and international companies that need content-driven organic growth. Not content calendars filled with fluff that never ranks or converts.",
    industries: ["eCommerce", "Local Services", "SaaS", "Professional Services"],
    ugcIntro: {
      what: "SEO content means strategic pages targeting specific queries with conversion intent. Writing stuff that actually ranks and sells. Not content for content's sake.",
      why: "AI content is flooding the web. Every competitor can pump out 50 blog posts a week now. The only way to stand out is human expertise, original insights, and content that genuinely helps searchers. Google rewards helpfulness.",
      how: "I use Reddit, Quora, and industry forums to see what people actually ask. Not what keyword tools say they ask. Then I write the best answer on the internet for that question. First-hand experience, specific examples, actionable advice."
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
      'Keyword-driven content strategy',
      'AI-assisted outlines for faster, smarter production',
      'Blog posts written for search intent, not word count',
      'Service pages that convert visitors into leads',
      'Internal linking + on-page optimization',
      'Uploading and formatting done for you'
    ],
    whyMe: [
      'Content built for Google AND AI search engines: ChatGPT, Perplexity, Gemini',
      'Structured for featured snippets: Grabbing position zero',
      'Focused on questions US customers actually ask: Real research, not assumptions',
      'Designed to build authority and trust: E-E-A-T optimization built in'
    ],
    cta: 'If you want content that ranks and brings in leads (not filler articles that collect dust), this is exactly what I build.'
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
