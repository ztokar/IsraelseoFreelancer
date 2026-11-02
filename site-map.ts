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
    summary: 'The definition of answer engine optimization: writing the clearest, most liftable answer to one question, so a featured snippet or an AI answer uses your page instead of only listing it. It covers how the work runs and how it lines up against generative engine optimization and classic SEO.' },
  { path: '/what-is-generative-engine-optimization', label: 'What is generative engine optimization?', type: 'term', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'The definition of generative engine optimization: getting a brand surfaced and cited by ChatGPT, Perplexity and Google AI Overviews, so the AI gives your name instead of ignoring it. A plain-English explanation, how it compares with classic SEO, and how brands actually get surfaced.' },
  { path: '/aeo-vs-geo-vs-seo', label: 'AEO vs GEO vs SEO', type: 'guide', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'Three labels for mostly the same job, side by side. What each name covers, why three names exist, what truly differs (where the answer shows and how much of your reputation lives off your own site), and which one is worth paying for.' },
  { path: '/how-to-rank-in-google-ai-overviews', label: 'How to rank in Google AI Overviews', type: 'term', claim: 'ai', hub: '/ai-answers', updated: '2026-05-24',
    summary: 'How to show up in Google AI Overviews: mostly by winning the normal results for the question and answering it clearly, because Google pulls its sources from pages that already rank. What helps a page get pulled in, and the honest limits most guides skip.' },
  { path: '/how-to-get-cited-by-chatgpt', label: 'How to get cited by ChatGPT', type: 'guide', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'ChatGPT quotes the clearest, most trusted source that answers the question up front, backs it with specifics, and is talked about elsewhere on the web. What ChatGPT actually quotes, why pages get ignored, and how to get recommended rather than only cited.' },
  { path: '/track-brand-mentions-in-chatgpt', label: 'Track brand mentions in ChatGPT', type: 'term', claim: 'ai', hub: '/ai-answers', updated: D,
    summary: 'A free monthly method for tracking when ChatGPT names your brand: the same buyer questions, on the same schedule, written down every time. Why one check proves nothing, what paid tools add, what no tool tells you, and how to get mentioned more often.' },
  { path: '/how-to-track-ai-search-visibility', label: 'How to track AI search visibility', type: 'term', claim: 'ai', hub: '/ai-answers', updated: '2026-05-24',
    summary: 'How to measure how often ChatGPT, Perplexity and Google AI Overviews name your brand: list the 10 to 20 prompts buyers really ask, run each a few times because answers change, and record the result. Plus what the tracking tools miss.' },
  { path: '/ai-search-visibility-tools', label: 'AI search visibility tools', type: 'guide', claim: 'ai', hub: '/ai-answers', updated: '2026-08-20',
    summary: 'What AI search visibility tools measure, which ones people use, and when a free spreadsheet gives the same answer for a short prompt list. The tools are good at measuring whether ChatGPT, Perplexity, Gemini and AI Overviews name you; none of them fix the reason you are missing.' },
  { path: '/why-chatgpt-doesnt-mention-your-brand', label: 'Why ChatGPT does not mention your brand', type: 'guide', claim: 'ai', hub: '/ai-answers', updated: '2026-08-20',
    summary: 'ChatGPT repeats how the web already describes your category, so a brand missing from reviews, roundups, comparisons and forum threads gets skipped. The four reasons brands get left out, why your own site is the floor and not the fix, and what moves the answer.' },

  // Reddit guides hub
  { path: '/reddit-seo', label: 'Reddit SEO', type: 'term', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'The definition of Reddit SEO: getting the Reddit threads that mention your brand to rank in Google and feed AI answers. Why those threads rank, how to use them without getting flagged, and how Reddit content ends up cited by ChatGPT and Google AI Overviews.' },
  { path: '/reddit-karma-account-age', label: 'Reddit karma and account age', type: 'term', claim: 'reddit', hub: '/reddit-guides', updated: '2026-06-11',
    summary: 'Why Reddit trusts older accounts with real karma, and why a brand-new account that drops a link usually gets filtered. The posting history many subreddits expect before any promotion, and how to build karma and account age the safe way.' },
  { path: '/how-to-market-on-reddit', label: 'How to market on Reddit', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'To market on Reddit, earn trust before you promote: pick a few relevant subreddits, learn their rules and culture, and lead with helpful answers. A simple approach, the mistakes that get brands banned, and how to find the subreddits where your buyers already are.' },
  { path: '/how-to-get-recommended-on-reddit', label: 'How to get recommended on Reddit', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: '2026-08-20',
    summary: 'The four-step method behind a Reddit post that passed 405,000 views: be useful in the subreddit first, then answer only threads where someone asked for a recommendation. The rule most brands break, why the link stays out, and why these threads are worth the wait.' },
  { path: '/how-to-rank-a-reddit-post-on-google', label: 'How to rank a Reddit post on Google', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: '2026-05-24',
    summary: 'How to get a Reddit post into Google: match the title to the exact phrase people search, post in an active and relevant subreddit, and earn real upvotes and comments. What helps a thread rank and what gets it buried.' },
  { path: '/why-does-reddit-rank-so-high-on-google', label: 'Why does Reddit rank so high on Google?', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: D,
    summary: 'Reddit ranks high on Google because of a paid content partnership plus strong human signals: real discussion, upvotes and answers that match what searchers want. The main reasons, the data deal behind them, and what it all means for your brand.' },
  { path: '/why-reddit-posts-get-removed', label: 'Why Reddit posts get removed', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: '2026-05-11',
    summary: 'A useful Reddit post can still get removed. The usual causes are the account, the format, subreddit rules, the link pattern or a promotional tone. How filters remove posts first, how to spot the wrong subreddit, and what to review before reposting.' },
  { path: '/monitor-brand-mentions-on-reddit', label: 'Reddit brand monitoring', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: '2026-06-11',
    summary: 'Watch what Reddit says about your brand, because Google and AI tools repeat it. A quick brand search on Reddit plus a couple of alerts surfaces the threads that already rank, so you know what buyers and AI find first.' },
  { path: '/reddit-ads-vs-organic', label: 'Reddit ads vs organic', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: '2026-06-11',
    summary: 'Reddit ads buy fast reach; organic Reddit marketing builds trust and search visibility that lasts. When the budget stops, the ads go quiet, while a strong organic thread can keep ranking in Google and feeding AI answers. Which one fits your goal.' },
  { path: '/reddit-b2b-saas-lead-generation', label: 'Reddit lead generation for B2B SaaS', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: '2026-06-11',
    summary: 'Reddit can bring B2B SaaS leads if you help before you sell. Founders and operators ask real buying questions in subreddits every day, and useful answers that fit the thread can send warm, high-intent visitors to your site. Where those leads come from.' },
  { path: '/reddit-vs-linkedin-b2b-leads', label: 'Reddit vs LinkedIn for B2B leads', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: '2026-06-11',
    summary: 'LinkedIn reaches named decision-makers; Reddit reaches buyers already researching a solution. Most B2B brands need both, and Reddit often brings lower-cost, higher-intent leads because people there are mid-problem, not mid-scroll. How to choose between them for your goal, and how the two can work together in one plan.' },
  { path: '/resources/dataisbeautiful-claude-skill', label: 'Data is Beautiful Claude skill', type: 'guide', claim: 'reddit', hub: '/reddit-guides', updated: '2026-05-25',
    summary: 'A free Claude skill Zechariah Tokar built to plan better Reddit data visualizations. It pushes Claude to find the human angle, pick a simple chart format, write source notes and check the final package before you post to r/dataisbeautiful. What it does, how to install it, and how to use it.' },

  // SEO guides hub
  { path: '/seo-freelancer-vs-agency', label: 'SEO freelancer vs agency', type: 'guide', claim: 'seo', hub: '/seo-guides', updated: '2026-05-06',
    summary: 'Hire a freelancer when you want the person planning the work to also do it; hire an agency when you need several channels running at once and someone inside to steer them. An honest comparison from a freelancer, including where an agency is the better call.' },
  { path: '/blog/claude-code-content-marketing-startups', label: 'Claude Code for startup content marketing', type: 'guide', claim: 'seo', hub: '/seo-guides', updated: D,
    summary: 'How a startup can use Claude Code to build a content system instead of outsourcing posts: what Claude Code is, why startup content usually fails, the four content types worth building with it, the practical workflow, and the SEO checks along the way.' },
  { path: '/blog/hebrew-seo-checkers-free-tools', label: 'Hebrew SEO checkers and free tools', type: 'noindex', hub: '/seo-guides', updated: '2026-05-06',
    summary: 'A tested list of free SEO checkers for Hebrew, right-to-left websites, from Google Search Console and Screaming Frog to browser extensions, with what each one catches. It stays available for readers who find it, but it sits outside the services on this site, which serve English-speaking markets.' },

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

// Where a page sits: its claim (service variants), its hub (guides and terms) or the results hub (proof).
export const parentOf = (path: string): { label: string; path: string } | null => {
  const p = PAGE_BY_PATH[path];
  if (!p) return null;
  if (p.type === 'leaf' && p.claim) return { label: CLAIMS[p.claim].label, path: CLAIMS[p.claim].path };
  if (p.hub && HUBS[p.hub]) return { label: HUBS[p.hub].label, path: p.hub };
  return null;
};
