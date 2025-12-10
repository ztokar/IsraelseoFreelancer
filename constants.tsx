import { ServiceContent, NavItem, CaseStudy } from './types';
import React from 'react';
import { TrendingUp, Users, Briefcase, FileText, DollarSign, Search, MapPin } from 'lucide-react';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/zechariah-tokar-167b7672/",
  twitter: "https://x.com/ZackTokar",
  calendly: "https://calendly.com/zack-tokar/consultation?month=2024-09",
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
    description: "Optimized collection pages for Lucite shtenders and ran targeted Google Shopping ads for Purim/Pesach gifts.",
    icon: <DollarSign className="w-6 h-6 text-brand-green" />,
    graphData: DATA_ECOMMERCE
  },
  {
    client: "The Behfar Team",
    metric: "#1 Rank",
    context: "Midwood Brooklyn Real Estate",
    description: "Dominated local search for 'Midwood real estate agents', outranking major aggregators like Zillow and Compass.",
    icon: <MapPin className="w-6 h-6 text-brand-green" />,
    graphData: DATA_LOCAL
  },
  {
    client: "North Star Ranch",
    metric: "10+ Leads/Mo",
    context: "Micro Weddings Montana",
    description: "Found the 'micro wedding' niche angle. Site ranks at the top with zero ad spend required for organic traffic.",
    icon: <Users className="w-6 h-6 text-brand-green" />,
    graphData: DATA_B2B
  },
  {
    client: "Jluxury",
    metric: "+25%",
    context: "Clicks & Visibility",
    description: "Significant increase in organic visibility and click-through rates within competitive luxury markets.",
    icon: <Search className="w-6 h-6 text-brand-green" />,
    graphData: DATA_ECOMMERCE
  },
  {
    client: "Embracing Uncertainty",
    metric: "Top Rank",
    context: "Eating Disorder Therapy NJ",
    description: "Achieved dominant local pack placement for 'Eating disorder treatment in Morristown NJ'.",
    icon: <TrendingUp className="w-6 h-6 text-brand-green" />,
    graphData: DATA_LOCAL
  }
];

export const SERVICE_DATA: Record<string, ServiceContent> = {
  freelance: {
    id: 'freelance-seo',
    slug: 'freelance-seo-israel',
    title: 'Freelance SEO Services in Israel',
    subtitle: 'US Market Focus',
    description: "Helping American businesses get more calls, leads, and sales using AI-optimized SEO systems. I offer premium US-standard work without the agency bloat.",
    ugcIntro: {
      what: "It's simple: I fix your site so Google actually likes it.",
      why: "Because if you aren't on page 1 for what you sell, you don't exist. Ads get expensive. SEO is an asset that pays you back forever.",
      how: "I ignore the 'hacks'. I look at what your competitors are doing, find the gaps they missed (like specific product collections or local intent), and build content that fills those gaps."
    },
    results: [
      { label: 'Ecommerce Revenue (30 Days)', value: '+$9,000' },
      { label: 'New Customers (30 Days)', value: '45+' },
      { label: 'SaaS Google Sales', value: '+300%' },
      { label: 'Real Estate Leads', value: 'Page 1' },
    ],
    caseStudyHighlight: CASE_STUDIES[0], // ZStander
    process: {
      title: "My Workflow",
      steps: [
        "Competitor Deep Dive (I read their sitemaps)",
        "Keyword Gap Analysis (finding money terms they missed)",
        "Content Optimization (NLP & Entity injection)",
        "Technical Fixes (Speed, Schema, Indexing)",
        "Google Ads Support (Optional - for faster data)"
      ]
    },
    tools: TOOLS_LIST,
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
      'Native US English speaker',
      'Direct communication — no agency account managers',
      'Proven results in competitive US niches (NY Real Estate, Montana Weddings)',
      'You only pay for work that moves the needle'
    ],
    cta: 'If you want your website to start driving real leads from the US market instead of sitting there invisible, let’s see if we’re a fit.'
  },
  consultant: {
    id: 'consultant-seo',
    slug: 'seoconsulting',
    title: 'SEO Consulting in Israel',
    subtitle: 'Strategic Planning',
    description: "High-level SEO consulting for businesses that need a roadmap, not just busy work.",
    ugcIntro: {
      what: "I tell you exactly what to do to grow, without you needing to hire a full-time expert.",
      why: "Most teams are just guessing. You need a strategy based on data, not feelings.",
      how: "We jump on a call. I tear apart your current strategy (nicely). I give you a 90-day roadmap using tools like Moz and manual research to find your quickest wins."
    },
    results: [
      { label: 'Real Estate Visibility', value: 'Top Rank' },
      { label: 'Ecommerce Growth', value: '+25%' },
      { label: 'Local Rankings (90 Days)', value: 'Page 1' },
    ],
    caseStudyHighlight: CASE_STUDIES[1], // Behfar Team
    process: {
      title: "Consulting Roadmap",
      steps: [
        "Audit Current Performance",
        "Identify 'Low Hanging Fruit' Keywords",
        "Technical Health Check",
        "Content Strategy Development",
        "Monthly Progress & Pivot Calls"
      ]
    },
    tools: ["Moz", "Keywords Everywhere", "GSC", "Excel"],
    pricing: {
      audit: "$250",
      management: "Custom Retainers"
    },
    features: [
      'Complete audit of your site’s market relevance',
      '90-day roadmap focused on high-intent traffic',
      'Keyword strategy built for Google + AI search',
      'Content outlines and upload instructions',
      'Monthly calls to track progress and adapt'
    ],
    whyMe: [
      'Expert direction without the agency overhead',
      'You keep full control of content, pacing, and budget',
      'Strategies tested on real businesses (Retail, Therapy, Real Estate)',
      'Avoid expensive mistakes that slow growth'
    ],
    cta: 'If you want an SEO strategist who explains the “why” behind every action and gives you a clear plan you can follow, I can help.'
  },
  b2b: {
    id: 'b2b-seo',
    slug: 'b2b-seo-company',
    title: 'B2B SEO Company Israel',
    subtitle: 'Authority & Trust',
    description: "Helping B2B companies generate qualified leads through SEO, content, and digital PR.",
    ugcIntro: {
      what: "Getting you in front of decision makers when they are actually looking for a solution.",
      why: "B2B buyers research heavily. If you aren't the authority they find, your competitor is.",
      how: "We create content that answers the hard questions—pricing, comparisons, 'vs' articles. We use Featured.com and PR to get you trusted backlinks."
    },
    results: [
      { label: 'SaaS Google Sales', value: '+300%' },
      { label: 'Film Production', value: 'Inbound Leads' },
      { label: 'Keyword Visibility', value: 'Major Jump' },
    ],
    caseStudyHighlight: CASE_STUDIES[2], // North Star Ranch
    process: {
      title: "B2B Lead Gen",
      steps: [
        "Buyer Persona Keyword Mapping",
        "Bottom-of-Funnel Content Creation",
        "Authority Link Building (Digital PR)",
        "Conversion Rate Optimization",
        "Lead Tracking Setup"
      ]
    },
    tools: ["Featured.com", "LinkedIn", "Google Analytics", "Moz"],
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
      'Clear reporting on revenue, not just traffic',
      'Fast execution—strategy, content, publishing',
      'Experience with complex B2B verticals',
      'Optimized for Google and emerging AI search engines'
    ],
    cta: 'If your B2B site isn’t generating leads, it’s not your industry — it’s your SEO strategy. Let’s fix that.'
  },
  content: {
    id: 'content-marketing',
    slug: 'content-marketing-for-seo',
    title: 'Content Marketing for SEO in Israel',
    subtitle: 'Revenue-Driven Content',
    description: "Content that helps businesses get found by Google, ChatGPT, and high-intent customers.",
    ugcIntro: {
      what: "Writing stuff that actually ranks and sells.",
      why: "AI content is flooding the web. You need human, expert-led content to stand out and build trust.",
      how: "I use Reddit and Forums to see what people really ask. Then I write the best answer on the internet for that question. Google rewards helpfulness."
    },
    results: [
      { label: 'Impressions to Clicks', value: '+244 Clicks' },
      { label: 'Traffic Lift', value: '+25%' },
      { label: 'Local Service Rankings', value: 'Multiple Pg 1' },
    ],
    caseStudyHighlight: CASE_STUDIES[4], // Embracing Uncertainty
    process: {
      title: "Content Engine",
      steps: [
        "Topic Cluster Research",
        "Brief Creation (Structure & Headlines)",
        "Writing & Editing (Human Touch)",
        "On-Page SEO (Meta, Headers, Images)",
        "Publishing & Indexing"
      ]
    },
    tools: ["Reddit", "Google Trends", "SurferSEO (or similar)", "GSC"],
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
      'Content built for Google and AI search engines',
      'Structured for featured snippets',
      'Focused on real questions US customers ask',
      'Designed to grow authority and trust'
    ],
    cta: 'If you want content that ranks and brings in leads — not filler articles — this is exactly what I build.'
  }
};

export const SERVICES_LIST = [
  {
    key: 'freelance',
    icon: <Users className="w-6 h-6" />,
    ...SERVICE_DATA.freelance
  },
  {
    key: 'consultant',
    icon: <Briefcase className="w-6 h-6" />,
    ...SERVICE_DATA.consultant
  },
  {
    key: 'b2b',
    icon: <TrendingUp className="w-6 h-6" />,
    ...SERVICE_DATA.b2b
  },
  {
    key: 'content',
    icon: <FileText className="w-6 h-6" />,
    ...SERVICE_DATA.content
  },
];