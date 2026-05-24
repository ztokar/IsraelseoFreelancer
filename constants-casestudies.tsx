export interface CaseStudyPageData {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  client: string;
  metric: string;
  metricLabel: string;
  h1: string;
  intro: string;
  situation: string;
  tactics: string[];
  result: string;
  proofImg?: string;
  proofAlt?: string;
  proofCaption?: string;
  relatedLabel: string;
  relatedPath: string;
  faqs: { q: string; a: string }[];
}

export const CASE_STUDY_PAGES: CaseStudyPageData[] = [
  {
    slug: 'zstander-shopify-seo',
    seoTitle: 'ZStander Shopify SEO Case Study: +300% Google Sales for a Judaica Store | Zechariah Tokar',
    metaDescription: 'How Zechariah Tokar grew ZStander, a lucite Judaica store, to a 300% increase in Google sales by fixing collection pages, internal links, and Google Shopping.',
    eyebrow: 'Ecommerce · Shopify',
    client: 'ZStander',
    metric: '+300%',
    metricLabel: 'Google sales',
    h1: 'How ZStander grew Google sales 300% with Shopify SEO.',
    intro: 'ZStander sells lucite Judaica online. It was getting found thousands of times a month, but almost nobody clicked. The fix was giving Google a reason to rank the pages, and shoppers a reason to buy.',
    situation: 'The store had strong products but the classic Shopify gap. Most collection pages had nothing on them for Google to rank, just a title and a grid of products. Huge search demand was landing on pages that could not rank or convert.',
    tactics: [
      'Added real, search-matched content to every important collection page.',
      'Wired the catalog together with internal links so related collections supported each other.',
      'Built buyer-intent guides around the best-selling products.',
      'Cleaned up Google Shopping so the store showed up during the Purim and Pesach demand spikes.',
    ],
    result: 'A 300% increase in sales from Google. Same products, same store. The difference was structure: pages Google could finally read, and a catalog that worked together instead of in pieces.',
    relatedLabel: 'Shopify SEO',
    relatedPath: '/shopify-seo',
    faqs: [
      { q: 'Why was a store with lots of impressions getting so few clicks?', a: 'Because the pages getting found had no real content. Google showed them, but they did not answer the search or give shoppers a reason to click, so the clicks went to competitors with fuller pages.' },
      { q: 'Does this work for any Shopify store?', a: 'It works best for stores with real products people search for and collection pages that are mostly empty. That is the most common Shopify SEO gap, and the fastest one to fix.' },
    ],
  },
  {
    slug: 'behfar-team-real-estate-seo',
    seoTitle: 'Behfar Team Real Estate SEO Case Study: #1 for Midwood Brooklyn | Zechariah Tokar',
    metaDescription: 'How Zechariah Tokar got The Behfar Team to #1 for Midwood Brooklyn real estate by cleaning up technical debt, adding schema, and building local content.',
    eyebrow: 'Real Estate · Local SEO',
    client: 'The Behfar Team',
    metric: '#1',
    metricLabel: 'Midwood Brooklyn real estate',
    h1: 'How The Behfar Team reached #1 for Midwood Brooklyn real estate.',
    intro: 'The Behfar Team is a Brooklyn real estate brokerage. Their site carried years of buildup that held it back. Cleaning it up and rebuilding around how local sellers decide put them on top.',
    situation: 'The site had dozens of empty auto-generated pages, no structured data on key pages, and a flagship "best agents" article that had slipped down the rankings.',
    tactics: [
      'Cleaned out the dead pages and set up proper redirects so no authority leaked.',
      'Rebuilt the main page with real local market data and the structured data it never had.',
      'Built neighborhood content around how local sellers actually decide.',
      'Added the community details bigger national sites ignore.',
    ],
    result: '#1 for Midwood Brooklyn real estate, outranking national portals on their own turf. The team also holds a 4.9 rating across 133 Google reviews, which keeps the local results strong.',
    relatedLabel: 'Google Business Profile SEO',
    relatedPath: '/google-business-profile-seo',
    faqs: [
      { q: 'Can a local business outrank big national real estate portals?', a: 'Yes. National portals are broad. A local brokerage can win on neighborhood-specific pages, real market data, and community detail that the big sites do not bother to cover.' },
      { q: 'Why remove old pages instead of keeping them?', a: 'Empty, auto-generated pages dilute a site and waste crawl attention. Removing them with proper redirects concentrates authority on the pages that should actually rank.' },
    ],
  },
  {
    slug: 'north-star-ranch-micro-wedding-seo',
    seoTitle: 'North Star Ranch Case Study: Ranking a Micro-Wedding Venue in AI Search | Zechariah Tokar',
    metaDescription: 'How Zechariah Tokar built a micro-wedding venue site near Glacier National Park to be the answer in Google and AI search like ChatGPT and Perplexity.',
    eyebrow: 'Hospitality · AI Search',
    client: 'North Star Ranch',
    metric: 'AI-first',
    metricLabel: 'built to be the answer',
    h1: 'How North Star Ranch was built to win AI search for micro weddings.',
    intro: 'North Star Ranch is a private micro-wedding venue near Glacier National Park. It was brand new online, in a market owned by photographer blogs and "best venues" lists. The site was built to be the answer AI assistants give.',
    situation: 'The venue had almost no search footprint. The competition was a wall of photographer blogs and generic listicles, none of them built for how couples now search.',
    tactics: [
      'Built a focused site on an exact-match domain aimed at the real question couples ask.',
      'Led every page with the answer, the way AI assistants prefer to quote.',
      'Added venue structured data so search engines understand the place.',
      'Opened the door to the AI crawlers that most venue sites still block.',
    ],
    result: 'A site engineered for how people search now: Google, plus ChatGPT, Perplexity, and Google’s AI answers. It targets the exact questions couples ask when they are ready to book, not generic wedding traffic.',
    relatedLabel: 'AI Search Visibility',
    relatedPath: '/ai-seo-consultant-israel',
    faqs: [
      { q: 'Why optimize a venue site for AI assistants?', a: 'Because couples increasingly ask ChatGPT, Perplexity, and Google’s AI answers for venue recommendations. If your site is built to be quoted, you show up at the exact moment someone is deciding.' },
      { q: 'Why use an exact-match domain?', a: 'For a single, specific service in one place, an exact-match domain makes the site’s purpose obvious to both people and search engines, and it is easy to point a brand toward.' },
    ],
  },
  {
    slug: 'achieving-stars-aba-therapy-seo',
    seoTitle: 'Achieving Stars Case Study: Winning AI Recommendations for ABA Therapy | Zechariah Tokar',
    metaDescription: 'How Zechariah Tokar built an ABA therapy provider a local page structure written for the phrasing AI assistants use to recommend a provider.',
    eyebrow: 'Healthcare · AI Recommendation',
    client: 'Achieving Stars',
    metric: 'AI-rec',
    metricLabel: 'built for "who should I choose"',
    h1: 'How Achieving Stars built local pages to win AI recommendations.',
    intro: 'Achieving Stars is an in-home ABA therapy provider. It was already showing up in Google’s AI answers, but losing the clicks to bigger chains. The fix was pages built for how parents actually search.',
    situation: 'The provider’s location pages were stuck below the fold. Bigger chains were capturing the clicks, even on searches where Achieving Stars already appeared in AI answers.',
    tactics: [
      'Built a state-and-city page structure written for the exact phrasing AI assistants use to recommend a provider.',
      'Made each page answer the real question a parent asks, with the brand named clearly.',
      'Covered the local details that matter, like coverage and what to expect.',
      'Solved the publishing bottleneck so new local pages ship in minutes.',
    ],
    result: 'A local footprint built for AI recommendation, not just blue links. The pages target the "who should I choose" searches in each city, which is where ready-to-act parents land.',
    proofImg: '/images/proof-google-lead.jpg',
    proofAlt: 'Inbound ABA therapy lead message that found the provider on Google',
    proofCaption: 'A real inbound lead: a parent who found the provider on Google.',
    relatedLabel: 'AI Search Visibility',
    relatedPath: '/ai-seo-consultant-israel',
    faqs: [
      { q: 'What does it mean to optimize for AI recommendations?', a: 'It means writing pages around the exact way someone asks an AI assistant to recommend a provider, naming the brand clearly, and answering the real question, so the assistant can quote and recommend you.' },
      { q: 'Does local SEO still matter for therapy providers?', a: 'Yes. Parents search by city and ask "who is best near me." Pages built for those local, decision-stage searches reach families who are ready to start, not just browsing.' },
    ],
  },
  {
    slug: 'reddit-405k-views',
    seoTitle: 'Reddit Marketing Case Study: One Post to 405K Views | Zechariah Tokar',
    metaDescription: 'How Zechariah Tokar reached 405,000 views with a single Reddit post by matching the community instead of marketing at it, then turned it into a repeatable method.',
    eyebrow: 'Reddit · AI Search',
    client: 'The Reddit Method',
    metric: '405K',
    metricLabel: 'views on one Reddit post',
    h1: 'How one Reddit post reached 405,000 views.',
    intro: 'Brands worry about what Reddit says about them, and miss the traffic Reddit threads pull in Google and AI answers. Most who try get banned, because they post like marketers. This is how to do it the right way.',
    situation: 'Reddit threads rank in Google and feed AI answers, but brands that post like advertisers get removed or banned. The opportunity is real, and so is the risk.',
    tactics: [
      'Studied what each community actually wants by reading top and low-performing posts.',
      'Posted genuinely helpful content that fit the culture, not an ad.',
      'Followed each subreddit’s rules and stayed transparent.',
      'Balanced real engagement with positive, honest brand mentions.',
    ],
    result: 'One Reddit post reached 405,000 views and real brand traffic. A client post hit 12,000 views in its first days. Owners now ask weekly to be recommended by real people, and the method is now a repeatable system.',
    proofImg: '/images/proof-reddit-405k.jpg',
    proofAlt: 'Reddit post stats showing 405,000 views',
    proofCaption: 'The post: 518 upvotes, 217 comments, 405K views.',
    relatedLabel: 'Reddit Marketing',
    relatedPath: '/reddit-marketing-services',
    faqs: [
      { q: 'Will posting for my brand on Reddit get me banned?', a: 'It can, if you post like an advertiser. The method here is to follow each subreddit’s rules, stay transparent, and post content that genuinely helps the community, with honest brand mentions, not spam.' },
      { q: 'Why does Reddit matter for SEO and AI search?', a: 'Reddit threads rank in Google’s discussions results and are a common source for AI answers. Being present and recommended there shapes what both Google and AI tools say about your brand.' },
    ],
  },
];
