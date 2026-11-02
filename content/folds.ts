// Pages that were merged into a better home. Each one left its answer behind as a card on the receiving page
// (anchored, so links can point at it), then its address redirects there in one hop (public/_redirects).

export interface FoldCard { id: string; h: string; p: string[]; from: string[]; dated?: string }

export const FOLD_CARDS: Record<string, FoldCard[]> = {
  '/what-is-generative-engine-optimization': [
    { id: 'geo-vs-seo', from: ['/blog/geo-ai-generative-engine-optimization'], h: 'Ranking versus being cited', p: [
      'Classic SEO works to put a page in Google\'s top results. Generative engine optimization works to get the page pulled into ChatGPT, Perplexity or Google AI Overviews as a cited source.',
      'The methods overlap. Rankings lean on keywords and links; citations lean on clear, structured answers and a brand other sites already name.',
    ] },
  ],
  '/how-to-get-cited-by-chatgpt': [
    { id: 'recommend', from: ['/how-to-get-chatgpt-to-recommend-your-brand'], h: 'Getting recommended, not only cited', p: [
      'When someone asks ChatGPT who to hire, it often searches in the background for related phrases: best providers, top rated, reviews. Those searches change between runs, so test a prompt several times and look for the pattern.',
      'Then make sure your brand shows up in those searches, and give the answer clear proof: named results, reviews and a plain description of who you serve.',
    ] },
    { id: 'get-mentioned', from: ['/how-to-get-your-brand-mentioned-in-chatgpt'], h: 'How to get your brand mentioned in ChatGPT', p: [
      'Your own page tells ChatGPT what you claim. Mentions on other sites tell it what is true. Brands that get named have a consistent story across roundups, reviews and Reddit threads.',
      'Build presence where AI tools look, then make your own pages the clean, quotable source.',
    ] },
  ],
  '/track-brand-mentions-in-chatgpt': [
    { id: 'get-mentioned', from: ['/how-to-get-your-brand-mentioned-in-chatgpt'], h: 'How to get mentioned more often', p: [
      'Once you can see where you stand, the fix is off your site as much as on it: mentions in "best" roundups for your category, honest discussion on Reddit, reviews and named results, and one consistent description of what you do and who you serve.',
    ] },
  ],
  '/aeo-vs-geo-vs-seo': [
    { id: 'new-seo', from: ['/is-geo-the-new-seo'], h: 'Is GEO the new SEO?', p: [
      'No. The work that ranks a page (clear, trusted, relevant pages) also gets it quoted by ChatGPT, Perplexity and Google AI Overviews. Google has said normal SEO is how pages get into AI Overviews.',
      'What really changed is smaller: answers need to be more direct and quotable, and brand mentions across the web, including Reddit and roundups, count for more.',
    ] },
  ],
  '/about': [
    { id: 'videos', from: ['/videos'], h: 'Videos', p: [
      'Zechariah Tokar explains how he thinks about AI SEO, B2B search, Reddit and Google AI Overviews on [his YouTube channel](https://www.youtube.com/@Zechariah_T). Watch a few before you hire.',
    ] },
    { id: 'recommendations', from: ['/recommendations', '/recommendations/web-designer-seo-web-of-creativity'], h: 'People Zechariah recommends', p: [
      'SEO often depends on the work around it. When a client needs a new website or a redesign that supports SEO from the start, Zechariah recommends Rivka Neumann of [Web of Creativity](https://webofcreativity.com/).',
      'A partner gets recommended only when their work makes the SEO job stronger, cleaner or easier to build on.',
    ] },
  ],
  '/google-business-profile-seo': [
    { id: 'citations', from: ['/local-citations-directories'], h: 'Citations and directories', p: [
      'Messy listings confuse local search. The goal is not to submit to every directory; it is to clean the important ones so your name, address and phone match everywhere.',
      'The work: a NAP consistency review, picking the directories that matter, cleaning profiles, and filling citation gaps.',
    ] },
  ],
  '/how-to-market-on-reddit': [
    { id: 'without-getting-banned', from: ['/how-to-promote-on-reddit-without-getting-banned', '/how-to-market-on-reddit-without-getting-banned'], h: 'How to market on Reddit without getting banned', p: [
      'Help first and sell almost never. What gets accounts banned: links or pitches before giving any value, the same post across many subreddits, ignoring self-promotion rules, and new accounts that only talk about themselves.',
      'Before writing, read the rules, the pinned posts, flair requirements and recent top posts. Answer questions, share real experience, and mention your brand only when it helps the person.',
    ] },
    { id: 'find-subreddits', from: ['/how-to-find-subreddits-for-marketing'], h: 'How to find subreddits for marketing', p: [
      'The best subreddit is not always the biggest one. Look for active problem threads, clear rules, fresh comments, and people describing the problem in your buyers\' words.',
      'Use Google and Reddit together: search site:reddit.com plus the problem, the category or a competitor to find threads that already rank, then check on Reddit whether the topic is still active.',
    ] },
  ],
  '/reddit-seo': [
    { id: 'use-reddit-for-seo', from: ['/how-to-use-reddit-for-seo'], h: 'How to use Reddit for SEO', p: [
      'Reddit helps mainly by ranking in Google and feeding AI answers, not by passing link authority: Reddit links are nofollow. The value is being present, helpfully, in threads that already rank for your buyers\' searches.',
      'Find those threads, add a useful answer with an honest brand mention only if it fits, and follow each subreddit\'s rules.',
    ] },
    { id: 'ai-citations', from: ['/reddit-ai-citations'], h: 'How Reddit gets brands cited by ChatGPT and AI Overviews', p: [
      'When people ask ChatGPT or Google AI Overviews for the best tool or service, the answer often pulls from Reddit threads. Real users discussing your brand helpfully on Reddit makes you more likely to be named.',
    ] },
  ],
  '/why-does-reddit-rank-so-high-on-google': [
    { id: 'google-deal', from: ['/reddit-google-deal-seo'], h: 'The Google and Reddit data deal', p: [
      'Google pays Reddit for access to its content. That deal is a big reason Reddit threads rank so often and feed AI answers, which makes what people say about you on Reddit part of your search results.',
    ] },
  ],
  '/content-marketing-for-seo': [
    { id: 'blog-content', from: ['/blog-content-seo'], h: 'Blog content that supports a service page', p: [
      'A useful article answers a real search problem, supports a service page and gives buyers a reason to trust you. The work: a refresh review of existing posts, buyer-focused article plans, internal links, and title and description cleanup.',
    ] },
  ],
  '/cybersecurity-seo': [
    { id: 'israeli-cybersecurity', from: ['/blog/seo-israeli-cybersecurity-companies'], h: 'Israeli cybersecurity companies selling to US buyers', p: [
      'The goal is not to outrank the analyst firms. It is to own the high-intent searches where technical buyers research a specific capability, compare alternatives and check vendor credibility before they talk to sales.',
    ] },
  ],
  '/saas-seo': [
    { id: 'israeli-saas', from: ['/blog/seo-israeli-saas-companies-us-markets'], h: 'Israeli SaaS companies targeting the US', p: [
      'Weekly trend posts rarely bring trials. US buyers search for alternatives, pricing, integrations and features right before a trial or demo, so those comparison and feature pages come first.',
    ] },
  ],
  '/ai-answers': [
    { id: 'ai-search-changes', from: ['/blog/ai-search-2026-updates'], dated: 'February 2026', h: 'Six AI search changes to prepare for (February 2026)', p: [
      'Google AI Overviews sit above the organic results for many searches.', 'ChatGPT search is changing how B2B buyers discover vendors.', 'Perplexity is taking high-intent searches.', 'Generative engine optimization: more than a new name for SEO.', 'Voice search is turning into AI search.', 'Brand authority matters more than ever.',
    ] },
  ],
  '/seo-guides': [
    { id: 'reputation', from: ['/blog/seo-reputation-management'], h: 'SEO reputation management', p: [
      'Buyers search your company and your executives before they call. Reputation work makes sure accurate, relevant pages (credentials, case studies, reviews) show on page one, ahead of an outdated or out-of-context result. It does not hide legitimate criticism.',
    ] },
  ],
};

// One-hop redirects: old address -> receiving page (with the card anchor where there is one).
export const REDIRECTS: [string, string][] = [
  ['/ai-seo-consultant-israel', '/ai-seo-services#consultant'],
  ['/answer-engine-optimization-services', '/ai-seo-services#answer-engine-optimization'],
  ['/blog/ai-search-2026-updates', '/ai-answers#ai-search-changes'],
  ['/blog/geo-ai-generative-engine-optimization', '/what-is-generative-engine-optimization'],
  ['/how-to-get-chatgpt-to-recommend-your-brand', '/how-to-get-cited-by-chatgpt#recommend'],
  ['/how-to-get-your-brand-mentioned-in-chatgpt', '/track-brand-mentions-in-chatgpt'],
  ['/is-geo-the-new-seo', '/aeo-vs-geo-vs-seo#new-seo'],
  ['/recommendations', '/about#recommendations'],
  ['/recommendations/web-designer-seo-web-of-creativity', '/about#recommendations'],
  ['/videos', '/about#videos'],
  ['/local-citations-directories', '/google-business-profile-seo#citations'],
  ['/blog/seo-reputation-management', '/seo-guides#reputation'],
  ['/how-to-find-subreddits-for-marketing', '/how-to-market-on-reddit#find-subreddits'],
  ['/how-to-market-on-reddit-without-getting-banned', '/how-to-market-on-reddit#without-getting-banned'],
  ['/how-to-promote-on-reddit-without-getting-banned', '/how-to-market-on-reddit#without-getting-banned'],
  ['/how-to-use-reddit-for-seo', '/reddit-seo#use-reddit-for-seo'],
  ['/reddit-ai-citations', '/reddit-seo#ai-citations'],
  ['/reddit-google-deal-seo', '/why-does-reddit-rank-so-high-on-google#google-deal'],
  ['/reddit-marketing-expert', '/reddit-marketing-services#risk-review'],
  ['/blog', '/seo-guides'],
  ['/blog-content-seo', '/content-marketing-for-seo#blog-content'],
  ['/blog/israel-b2b-seo-pipeline', '/b2b-seo-israel#pipeline'],
  ['/blog/israeli-tech-seo-gap', '/b2b-seo-israel#us-market'],
  ['/blog/seo-drives-pipeline-b2b', '/b2b-seo-israel#attribution'],
  ['/blog/seo-israeli-cybersecurity-companies', '/cybersecurity-seo#israeli-cybersecurity'],
  ['/blog/seo-israeli-saas-companies-us-markets', '/saas-seo#israeli-saas'],
  ['/blog/why-israeli-b2b-fail-seo', '/b2b-seo-israel#why-b2b-seo-fails'],
  ['/fintech-seo', '/b2b-seo-israel#fintech'],
  ['/freelance-seo-israel', '/seo-services-israel#how-hiring-works'],
  ['/link-building-services', '/seo-services-israel#link-building'],
  ['/press-release-seo', '/seo-services-israel#press-releases'],
  ['/seo-consult', '/seo-services-israel#consulting'],
  ['/seoconsulting', '/seo-services-israel#consulting'],
  // older redirects, repointed so none of them chains through a folded page
  ['/israel-seo-specialist', '/seo-services-israel'],
  ['/b2b-seo-company', '/b2b-seo-israel'],
  ['/seo-for-lawyers', '/seo-services-israel'],
];

// Where an old link should point now (used to repoint links left in older page text).
export const REPOINT: Record<string, string> = Object.fromEntries(REDIRECTS);
