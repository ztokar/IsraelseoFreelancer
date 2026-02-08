import { ServiceContent, NavItem, CaseStudy } from './types';
import React from 'react';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/zechariah-tokar-167b7672/",
  twitter: "https://x.com/ZackTokar",
  youtube: "https://www.youtube.com/@IsraelB2BSEO",
  calendly: "https://calendly.com/zack-tokar/consultation",
  email: "zechariah@israelseofreelancer.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Freelance SEO', path: '/freelance-seo-israel' },
  { label: 'Consulting', path: '/seoconsulting' },
  { label: 'B2B SEO', path: '/b2b-seo-company' },
  { label: 'Content Marketing', path: '/content-marketing-for-seo' },
  { label: 'Blog', path: '/blog' },
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
    description: "Hands-on SEO for US and international companies. Strategy and execution by a senior consultant, not a rotating agency team.",
    entityDefinition: "I personally execute every aspect of your campaign. No outsourcing, no junior team members. Direct access to senior-level strategy.",
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
    cta: 'Ready to stop being invisible and start driving real leads? Let\'s see if we\'re a fit.'
  },
  consultant: {
    id: 'consultant-seo',
    slug: 'seoconsulting',
    title: 'SEO Consultant Israel. International Strategy for US Markets.',
    seoTitle: 'SEO Consultant Israel | International SEO Strategy for US & Global Brands',
    subtitle: 'SEO Consulting',
    heroColor: 'secondary',
    description: "Expert SEO consulting for Israeli startups and B2B companies expanding to US markets. Know exactly what to do and in what order to grow organic traffic. Full control, senior guidance.",
    entityDefinition: "I provide strategy, audits, and roadmap—you handle execution. Expert direction without agency retainers.",
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
    cta: 'Want clear SEO strategy your team can actually execute? Let\'s talk.'
  },
  b2b: {
    id: 'b2b-seo',
    slug: 'b2b-seo-company',
    title: 'B2B SEO Services in Israel. SaaS & Tech Lead Generation.',
    seoTitle: 'B2B SEO Services in Israel | SaaS, Tech & B2B SEO Agency',
    subtitle: 'B2B SEO Services',
    heroColor: 'primary',
    description: "B2B SEO for Israeli companies targeting US markets. Qualified inbound leads, not vanity metrics. Every ranking matters when contracts are high-value.",
    entityDefinition: "Target keywords decision-makers search when evaluating solutions. Pricing pages, comparisons, use cases—not fluffy thought leadership.",
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
    cta: 'Not getting qualified B2B leads? It\'s not your industry—it\'s your SEO. Let\'s fix that.'
  },
  content: {
    id: 'content-marketing',
    slug: 'content-marketing-for-seo',
    title: 'SEO Content Marketing in Israel. Content That Converts.',
    seoTitle: 'SEO Content Marketing in Israel | Strategic Content That Ranks & Converts',
    subtitle: 'Content Marketing for SEO',
    heroColor: 'ice',
    description: "Content marketing that ranks and converts for Israeli companies. Not blogging—information architecture that establishes authority and drives qualified leads.",
    entityDefinition: "Landing pages, guides, comparisons, topical clusters designed to rank, earn links, and convert. Content as infrastructure.",
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
    cta: 'Want content that ranks and converts—not filler that collects dust? This is what I build.'
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
