// One registry for every public page: its type, its claim, its hub and its label.
// Layout (breadcrumbs, author lines, closing lines), the hubs, the footer and the sitemaps all read from here,
// so a page is placed once and every link rule follows from that.

export type PageType = 'home' | 'claim' | 'leaf' | 'guide' | 'term' | 'hub' | 'proof' | 'entity' | 'legal' | 'noindex';
export type ClaimKey = 'ai' | 'reddit' | 'local' | 'seo';

export interface SitePage {
  path: string;
  label: string;
  type: PageType;
  claim?: ClaimKey;
  hub?: string;
  updated: string; // real last change, shown on guides and terms and used as the sitemap lastmod
  summary?: string; // hub card text, 40 to 60 words
  image?: string;
}

export const CLAIMS: Record<ClaimKey, { path: string; label: string; short: string; line: string }> = {
  ai: { path: '/ai-seo-services', label: 'AI SEO services', short: 'AI Search', line: 'Get your company named in ChatGPT and Google AI answers.' },
  reddit: { path: '/reddit-marketing-services', label: 'Reddit marketing services', short: 'Reddit', line: 'Get real people on Reddit recommending your brand, without bans.' },
  local: { path: '/local-seo-services', label: 'Local SEO services', short: 'Local SEO', line: 'Get your business into the map pack and the AI answer, at a fixed price.' },
  seo: { path: '/seo-services-israel', label: 'SEO freelancer services', short: 'SEO Services', line: 'Hire one senior person for Google SEO instead of an agency.' },
};

export const HUBS: Record<string, { label: string; line: string }> = {
  '/ai-answers': { label: 'AI answers', line: 'How ChatGPT, Gemini and Google AI Overviews pick the brands they name.' },
  '/reddit-guides': { label: 'Reddit guides', line: 'How to market on Reddit without bans, and how Reddit threads reach Google.' },
  '/seo-guides': { label: 'SEO guides', line: 'Hiring, content and reputation questions for companies doing Google SEO.' },
  '/case-studies': { label: 'Results', line: 'Named clients, what was done, and what happened.' },
};

const D = '2026-11-02';

export const SITE_PAGES: SitePage[] = [
  // entity
  { path: '/', label: 'Home', type: 'home', updated: D },
  { path: '/about', label: 'About Zechariah Tokar', type: 'entity', updated: D },
  { path: '/book', label: 'Book a call', type: 'entity', updated: '2026-10-18' },
  { path: '/privacy', label: 'Privacy', type: 'legal', updated: D },

  // claims
  { path: '/ai-seo-services', label: 'AI SEO services', type: 'claim', claim: 'ai', updated: D },
  { path: '/reddit-marketing-services', label: 'Reddit marketing services', type: 'claim', claim: 'reddit', updated: D },
  { path: '/local-seo-services', label: 'Local SEO services', type: 'claim', claim: 'local', updated: D },
  { path: '/seo-services-israel', label: 'SEO freelancer services', type: 'claim', claim: 'seo', updated: D },

  // leaves: AI
  { path: '/ai-visibility-audit', label: 'AI visibility audit', type: 'leaf', claim: 'ai', updated: D },
  { path: '/geo-content-optimization', label: 'Generative engine optimization services', type: 'leaf', claim: 'ai', updated: D },
  { path: '/ai-visibility-tracking-services', label: 'AI visibility tracking', type: 'leaf', claim: 'ai', updated: D },
  { path: '/ai-seo-monthly', label: 'Monthly AI SEO plan', type: 'leaf', claim: 'ai', updated: '2026-10-22' },
  { path: '/chatgpt-ads-management', label: 'ChatGPT ads setup', type: 'leaf', claim: 'ai', updated: D },
  // leaves: Reddit
  { path: '/reddit-posting-service', label: 'Reddit posting service', type: 'leaf', claim: 'reddit', updated: D },
  // leaves: local
  { path: '/find-my-target', label: 'Target Finder ($20)', type: 'leaf', claim: 'local', updated: D },
  { path: '/local-demand-capture-blueprint', label: 'Local Demand Capture Blueprint ($250)', type: 'leaf', claim: 'local', updated: D },
  { path: '/local-authority-system', label: 'Local Authority System ($2,000)', type: 'leaf', claim: 'local', updated: D },
  { path: '/google-business-profile-seo', label: 'Google Business Profile optimization', type: 'leaf', claim: 'local', updated: D },
  // leaves: SEO
  { path: '/b2b-seo-israel', label: 'B2B SEO', type: 'leaf', claim: 'seo', updated: D },
  { path: '/saas-seo', label: 'SaaS SEO', type: 'leaf', claim: 'seo', updated: D },
  { path: '/cybersecurity-seo', label: 'Cybersecurity SEO', type: 'leaf', claim: 'seo', updated: D },
  { path: '/shopify-seo', label: 'Shopify SEO', type: 'leaf', claim: 'seo', updated: D },
  { path: '/google-merchant-center-seo', label: 'Google Merchant Center', type: 'leaf', claim: 'seo', updated: D },
  { path: '/technical-seo-audit', label: 'Technical SEO audit', type: 'leaf', claim: 'seo', updated: D },
  { path: '/content-marketing-for-seo', label: 'SEO content writing', type: 'leaf', claim: 'seo', updated: D },
  { path: '/programmatic-seo', label: 'Programmatic SEO', type: 'leaf', claim: 'seo', updated: D },
  { path: '/youtube-seo', label: 'YouTube SEO', type: 'leaf', claim: 'seo', updated: D },

  // hubs
  { path: '/ai-answers', label: 'AI answers', type: 'hub', claim: 'ai', updated: D },
  { path: '/reddit-guides', label: 'Reddit guides', type: 'hub', claim: 'reddit', updated: D },
  { path: '/seo-guides', label: 'SEO guides', type: 'hub', claim: 'seo', updated: D },
  { path: '/case-studies', label: 'Results', type: 'hub', updated: D },

  // AI answers hub
  { path: '/what-is-answer-engine-optimization', label: 'What is answer engine optimization?', type: 'term', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'Answer engine optimization means shaping your pages so ChatGPT, Perplexity, Gemini and Google AI Overviews quote you when a buyer asks a question. This page defines it, shows how it differs from classic SEO, and lists the signals answer engines read first.' },
  { path: '/what-is-generative-engine-optimization', label: 'What is generative engine optimization?', type: 'term', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'Generative engine optimization is the work of getting a brand cited inside answers written by AI models. The page explains where the name came from, how it overlaps with answer engine optimization, and which page changes tend to move citations.' },
  { path: '/aeo-vs-geo-vs-seo', label: 'AEO vs GEO vs SEO', type: 'guide', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'Three names for overlapping work. This comparison puts answer engine optimization, generative engine optimization and classic SEO side by side: what each one targets, what it measures, and whether a company needs all three or one plan that covers them.' },
  { path: '/how-to-rank-in-google-ai-overviews', label: 'How to rank in Google AI Overviews', type: 'term', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'Google AI Overviews are the AI summaries at the top of many Google results. This guide defines them, shows which pages Google tends to cite in them, and lists the changes that give a page a better chance of being one of the sources.' },
  { path: '/how-to-get-cited-by-chatgpt', label: 'How to get cited by ChatGPT', type: 'guide', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'ChatGPT cites pages it finds through search and pages other sites keep naming. This guide covers how ChatGPT picks its sources, how to get recommended rather than only mentioned, and the page and off-site steps that raise the odds of a citation.' },
  { path: '/track-brand-mentions-in-chatgpt', label: 'Track brand mentions in ChatGPT', type: 'term', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'A ChatGPT brand mention is any answer that names your company. This page defines what counts, how to check mentions by hand and with tools, and how to get mentioned more often once you know where you stand.' },
  { path: '/how-to-track-ai-search-visibility', label: 'How to track AI search visibility', type: 'term', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'AI search visibility is how often AI answers name, cite or recommend your brand for the questions your buyers ask. The page defines the measure, lists the prompts worth tracking, and shows a simple monthly tracking routine.' },
  { path: '/ai-search-visibility-tools', label: 'AI search visibility tools', type: 'guide', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'A buyer\'s list of tools that report how often ChatGPT, Perplexity, Gemini and AI Overviews mention a brand. It covers what each kind of tool measures, where the numbers fall short, and when a manual prompt check is enough.' },
  { path: '/why-chatgpt-doesnt-mention-your-brand', label: 'Why ChatGPT does not mention your brand', type: 'guide', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'A diagnostic for brands ChatGPT leaves out. It walks through the usual causes, from pages AI search cannot read to too few third-party mentions, and gives the fix for each one in the order that usually matters most.' },

  // Reddit guides hub
  { path: '/reddit-seo', label: 'Reddit SEO', type: 'term', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'Reddit SEO is getting Reddit threads that mention your brand to rank in Google and feed AI answers. This guide defines it, explains why Reddit threads rank, and covers how Reddit content ends up cited by ChatGPT and Google AI Overviews.' },
  { path: '/reddit-karma-account-age', label: 'Reddit karma and account age', type: 'term', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'Karma is the score Reddit gives an account from upvotes on its posts and comments. This page explains how karma and account age decide whether a post survives, the thresholds many subreddits use, and how to build both honestly.' },
  { path: '/how-to-market-on-reddit', label: 'How to market on Reddit', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'A step-by-step plan for marketing on Reddit without getting banned: finding the subreddits your buyers read, reading the rules, building an account, and posting things people upvote. Includes the ban rules that catch most brands first.' },
  { path: '/how-to-get-recommended-on-reddit', label: 'How to get recommended on Reddit', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'The method behind a Reddit post that passed 405,000 views: how to earn real recommendations in threads where buyers ask for one, what moderators remove, and why helpful answers outlast promotional posts.' },
  { path: '/how-to-rank-a-reddit-post-on-google', label: 'How to rank a Reddit post on Google', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'Which Reddit posts Google shows in its Discussions and forums results, and how to write one that has a chance: the title, the subreddit, the first comment and the replies that keep a thread alive.' },
  { path: '/why-does-reddit-rank-so-high-on-google', label: 'Why does Reddit rank so high on Google?', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'Reddit ranks because Google rewards first-hand discussion and because of the data deal between Google and Reddit. This page explains both reasons and what they mean for brands that want to show up in those threads.' },
  { path: '/why-reddit-posts-get-removed', label: 'Why Reddit posts get removed', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'The common reasons a Reddit post disappears: subreddit rules, karma and account-age filters, spam filters and moderator calls. Each reason comes with how to spot it and what to change before posting again.' },
  { path: '/monitor-brand-mentions-on-reddit', label: 'Reddit brand monitoring', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'How to watch what Reddit says about your brand and your competitors: the searches to save, the free and paid tools, and how to reply to a thread without making it worse.' },
  { path: '/reddit-ads-vs-organic', label: 'Reddit ads vs organic', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'When paid Reddit ads make sense and when organic posts and comments do more, compared on cost, trust, targeting and how long the results last.' },
  { path: '/reddit-b2b-saas-lead-generation', label: 'Reddit lead generation for B2B SaaS', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'How B2B SaaS companies find buyers on Reddit: the subreddits where software gets compared, the posts that start conversations, and how to move a conversation to a demo without breaking subreddit rules.' },
  { path: '/reddit-vs-linkedin-b2b-leads', label: 'Reddit vs LinkedIn for B2B leads', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'A side-by-side look at Reddit and LinkedIn for B2B lead generation: who reads each one, what kind of post works, how trust is built, and which one to start with.' },
  { path: '/resources/dataisbeautiful-claude-skill', label: 'Data is Beautiful Claude skill', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: '2026-05-25',
    summary: 'A free Claude skill Zechariah Tokar built to turn your own data into a chart that fits the r/dataisbeautiful rules. It explains what the skill does, how to install it, and what makes a data post do well on Reddit.' },

  // SEO guides hub
  { path: '/seo-freelancer-vs-agency', label: 'SEO freelancer vs agency', type: 'guide', claim: 'seo', hub: '/seo-guides', updated: D,
    summary: 'Hiring a freelancer or an agency for SEO, compared on who does the work, how fast things ship, what you pay for, and where each option fits. Written by a freelancer, so it also says when an agency is the better call.' },
  { path: '/blog/claude-code-content-marketing-startups', label: 'Claude Code for startup content marketing', type: 'guide', claim: 'seo', hub: '/seo-guides', updated: D,
    summary: 'How a startup can use Claude Code to research, write and publish content that ranks, with the exact workflow, where the AI helps, and where a person still has to check the work.' },
  { path: '/blog/hebrew-seo-checkers-free-tools', label: 'Hebrew SEO checkers and free tools', type: 'noindex', hub: '/seo-guides', updated: '2026-05-06',
    summary: 'A list of free tools for checking Hebrew-language pages. It stays available for readers who find it, outside the services on this site.' },

  // Results hub
  { path: '/reviews-results', label: 'Reviews and results', type: 'proof', hub: '/case-studies', updated: D },
  { path: '/case-studies/zstander-shopify-seo', label: 'ZStander: Shopify SEO', type: 'proof', claim: 'seo', hub: '/case-studies', updated: D },
  { path: '/case-studies/north-star-ranch-micro-wedding-seo', label: 'North Star Ranch: built for AI answers', type: 'proof', claim: 'ai', hub: '/case-studies', updated: D },
  { path: '/case-studies/achieving-stars-aba-therapy-seo', label: 'Achieving Stars: AI recommendations', type: 'proof', claim: 'ai', hub: '/case-studies', updated: D },
  { path: '/case-studies/behfar-team-real-estate-seo', label: 'The Behfar Team: local SEO', type: 'proof', claim: 'local', hub: '/case-studies', updated: D },
  { path: '/case-studies/reddit-405k-views', label: 'A Reddit post with 405K views', type: 'proof', claim: 'reddit', hub: '/case-studies', updated: D },

  // hidden utility pages (noindex, out of the sitemap, still in the site design)
  { path: '/blueprint-intake', label: 'Blueprint intake', type: 'noindex', updated: '2026-07-01' },
  { path: '/target-intake', label: 'Target Finder intake', type: 'noindex', updated: '2026-07-05' },
  { path: '/system-intake', label: 'Local Authority System intake', type: 'noindex', updated: '2026-07-05' },
];

export const PAGE_BY_PATH: Record<string, SitePage> = Object.fromEntries(SITE_PAGES.map((p) => [p.path, p]));

export const SITE_URL = 'https://israelseofreelancer.com';

// The sentence. Same words in the footer brand line and the Person schema.
export const SENTENCE = 'Zechariah Tokar is a search visibility consultant who gets companies in the US and other English-speaking markets found in Google, AI answers and Reddit.';
export const SENTENCE_2 = 'One senior operator does the work. Results published for named clients.';
