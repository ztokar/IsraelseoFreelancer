export interface ServiceOffer {
  slug: string;
  label: string;
  title: string;
  seoTitle: string;
  description: string;
  answer: string;
  intro: string;
  photo: string;
  photoAlt: string;
  takeaway: string;
  sampleTitle: string;
  sampleNote: string;
  columns: [string, string, string];
  rows: [string, string, string][];
  sections: { title: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
  proof: { image: string; alt: string; caption: string; path: string; link: string };
  resources: { label: string; path: string }[];
  cta: string;
}

export const SERVICE_OFFERS: ServiceOffer[] = [
  {
    slug: 'ai-visibility-audit',
    label: 'AI visibility audit',
    title: 'AI Visibility Audit for ChatGPT and AI Search',
    seoTitle: 'AI Visibility Audit | ChatGPT and AI Search Visibility | Find Why Buyers See Competitors and What to Fix | Zechariah Tokar',
    description: 'AI visibility audit for ChatGPT and AI search. Zechariah Tokar checks competitors, citations and your search presence, then prioritizes the fixes.',
    answer: 'An AI visibility audit shows where AI answers mention your business, where they miss it, and what to fix first.',
    intro: 'You asked ChatGPT who to hire. It named your competitors. Before you pay for a new content plan, I’ll check the questions that matter to your buyers and trace what those answers are using. You get the evidence and a short list of useful next steps.',
    photo: '/images/service-audit-zechariah.webp',
    photoAlt: 'Zechariah Tokar working at his laptop with a headset',
    takeaway: 'Start with the reason you are missing. A page problem, a name mix-up and a weak reputation need different work.',
    sampleTitle: 'What an audit finding should help you decide',
    sampleNote: 'Illustrative decision sheet, not a client result or a test of your website.',
    columns: ['What the answer does', 'What I check', 'The useful next step'],
    rows: [
      ['Names a different business with your name', 'Brand details and the sources behind the answer', 'Correct the identity problem before writing more pages'],
      ['Cites your guide but recommends a competitor', 'Whether your offer, fit and proof are clear', 'Improve the commercial page and its supporting evidence'],
      ['Never finds the relevant service page', 'Indexing, access and the links leading to that page', 'Fix discovery before buying a content package'],
    ],
    sections: [
      { title: 'What you get from my AI search audit', paragraphs: [
        'The deliverable is a written report you can use. It includes the questions tested, the assistants checked, dated answers, source links where available, competitor observations and the recommended work in order. You can see what each recommendation is based on.',
        'I separate a verified problem from a possible explanation. If an answer mentions another company, that is an observation. Saying exactly why it chose that company needs more evidence. A report should make that distinction easy to see.',
        'We agree on the scope before I start: the product or service, audience, market, competitors and platforms. A local provider and a software company need different questions. Testing every topic your company could possibly touch is rarely a sensible first job.',
      ] },
      { title: 'Buyer questions come before a visibility score', paragraphs: [
        'I start with the decisions your customers make before buying. Who can solve this problem? Which provider fits this situation? What is the difference between the options? Those questions tell us more than asking an assistant whether it has heard of your company.',
        'Branded questions help find factual mistakes. Unbranded questions show whether the business appears when the buyer has not chosen a name yet. I keep the two groups separate so a strong result on your own name does not hide a weak result on service searches.',
        'Some questions will not be worth tracking. If the answer would attract the wrong customer, it does not belong at the center of the work. My focus is the search that could lead to a useful enquiry, not the biggest collection of screenshots.',
      ] },
      { title: 'ChatGPT, Perplexity, Gemini and Google need separate evidence', paragraphs: [
        'An answer from ChatGPT does not establish what Perplexity, Gemini or Google AI Overviews will show. Within the agreed scope, I record the assistant and the conditions of each observation. I also note when the product does not search the web or does not provide a source.',
        'Answers can vary between runs. The report keeps the question wording, date and available context alongside the result. Repeat checks help distinguish a recurring issue from one unusual answer, without pretending the sample represents every buyer.',
        'A mention, a linked citation and an explicit recommendation are different findings. A page can be used as a source while the business is absent from the recommendation. I make that visible because it changes what we should fix.',
      ] },
      { title: 'I check your website and the sources around it', paragraphs: [
        'The website review looks at access, indexing signals, page structure and the information a buyer needs to judge the offer. I check whether the right page is easy to find and whether its service details agree with the rest of the site.',
        'Then I review the sources linked in the sampled answers. A third-party article might describe an old offer. A directory may use a different business name. A forum discussion may explain the competitor’s fit more clearly than your own website explains yours.',
        'That does not mean every missing mention needs a backlink campaign. Sometimes the immediate job is correcting a misleading description or strengthening an existing page. The audit should help you choose the smallest useful intervention.',
      ] },
      { title: 'An AI visibility audit is different from a technical SEO audit', paragraphs: [
        'A [technical SEO audit](/technical-seo-audit) concentrates on how a website can be crawled, indexed and used. This audit also checks what sampled AI answers say about the business, which competitors appear, and which sources support those answers.',
        'The work overlaps when a blocked or poorly linked page is part of the problem. I explain the overlap before quoting. You should not pay twice for the same crawl review because one report says SEO and another says GEO.',
        'If the main problem is already clear, you may be ready for [GEO content optimization](/geo-content-optimization). If you need repeat observations after changes, [AI visibility tracking services](/ai-visibility-tracking-services) cover that ongoing job.',
      ] },
      { title: 'AI crawler access, robots.txt and a sensible technical check', paragraphs: [
        'Search visibility depends in part on which pages a crawler can reach. I inspect the relevant robots.txt rules, page directives, canonical URLs and response codes. A blocked page is a specific finding we can act on; a generic “AI readiness” badge is not.',
        'Different AI systems use different access methods. A training crawler and a search crawler can have different purposes. I check the current documentation before recommending a change, and I do not remove your access controls just to make an automated score look better.',
        'You may have been offered an llms.txt file as a quick fix. It cannot replace an accessible, informative website. Google says its AI features do not require special AI text files. Any technical recommendation in my audit needs an explanation of the actual problem it addresses.',
      ] },
      { title: 'Prompt selection and a repeatable competitor benchmark', paragraphs: [
        'A prompt is the question sent to the assistant. Small wording changes can alter the response, so I keep a record of the query used. If we test across multiple AI platforms, the visibility report identifies each one rather than blending the answers together.',
        'A benchmark is useful only when the sample is described. If a report uses share of voice, it should state which brands and answers were counted. A change in that group can change the percentage without a meaningful improvement in brand visibility.',
        'The same care applies to sentiment. A neutral description, a negative claim and a recommendation are different observations. I check what the AI response actually says before treating the tone as a reputation problem.',
      ] },
      { title: 'Do you need an audit if you already use an AI SEO tool?', paragraphs: [
        'You may already use Semrush, Ahrefs or another AI visibility tool. Their data can be useful input. The audit adds the judgement: whether the tracked questions matter, where your brand appears, whether the sources are accurate and which fix deserves the budget.',
        'A software report cannot confirm every fact about your business. We still need the correct service details and permission to use the proof. I check the evidence against those facts before turning a tool recommendation into work on the site.',
        'You can also start without a subscription. A smaller, documented sample may answer the immediate question. The scope should fit the decision, whether the label on the proposal is AI SEO, AEO or an AI search visibility audit.',
      ] },
      { title: 'Direct work with Zechariah Tokar', paragraphs: [
        'I handle the research and the recommendations myself. The existing audit feedback below describes work on brand-name confusion, category wording and missing evidence. It is relevant to this service because those are concrete problems an audit can uncover.',
        'I work with businesses selling into US and English-speaking markets. Your actual customers, offer and sales process shape the audit. Being based in Israel does not mean the work is limited to Israeli searches.',
        'After the report, you can ask me to quote implementation, use your own team or stop with the findings. A useful diagnosis should stand on its own. Broader work is available through my [answer engine optimization services](/answer-engine-optimization-services).',
      ] },
      { title: 'What I need to quote the audit', paragraphs: [
        'Send your website, the service or product you want buyers to find, the market you sell into and a few competitors you hear about on sales calls. If you have an example of an inaccurate AI answer, include the question and screenshot.',
        'Existing Search Console and analytics data can help connect the findings to the business. Public information is enough to discuss a starting scope. I will explain any account access needed before work begins.',
        'Fees depend on the agreed question set, markets and platforms. There is no promised citation count or guaranteed ranking attached to the report. The promise is clear evidence, honest limits and a practical recommendation.',
      ] },
    ],
    faqs: [
      { question: 'Can you audit a small business or a local service?', answer: 'Yes. I can scope the audit around one service and the area you actually serve. The questions should reflect a customer choosing a provider, rather than broad national searches that would never become a useful lead.' },
      { question: 'Will the audit get my brand recommended by ChatGPT?', answer: 'The audit diagnoses gaps and recommends work. It does not control the answer ChatGPT gives. Implementation and follow-up measurement are separate scopes, and nobody can guarantee every assistant will recommend a brand.' },
      { question: 'Can you work with our existing SEO team?', answer: 'Yes. The report can go to your team, with the evidence and the order of fixes. We can agree on who handles the page changes, source corrections and measurement so the same job is not bought twice.' },
      { question: 'What happens after the audit?', answer: 'We review the findings and choose the next step. That might be a page rewrite, a technical fix, correcting business information or repeat tracking. If the evidence does not justify more work, I will say so.' },
    ],
    proof: { image: '/images/proof-linkedin-ai-audit.jpg', alt: 'Published client feedback about Zechariah’s AI SEO audit', caption: 'Existing audit feedback: identifying brand confusion, unclear category language and gaps in the site. This is feedback on the deliverable, not a promise of future results.', path: '/ai-seo-consultant-israel', link: 'Read about my AI search work' },
    resources: [{ label: 'Why ChatGPT does not mention your brand', path: '/why-chatgpt-doesnt-mention-your-brand' }, { label: 'My broader AEO service', path: '/answer-engine-optimization-services' }],
    cta: 'Find out what is keeping your business out of the answer.',
  },
  {
    slug: 'geo-content-optimization', label: 'GEO content optimization', title: 'GEO Content Optimization',
    seoTitle: 'GEO Content Optimization | Generative Engine Optimization for Your Existing Pages | Clear Answers, Proof and SEO | Zechariah Tokar',
    description: 'GEO content optimization for service and product pages. Zechariah Tokar combines clear answers, verified proof and SEO to improve content for AI search and buyers.',
    answer: 'GEO content optimization improves your existing pages so buyers and AI search tools can understand what you offer and why it fits.',
    intro: 'Your best material may already exist in client work, LinkedIn posts and sales conversations. I turn it into useful service, product and comparison pages. The work starts with the buyer’s decision and the proof you can actually show.',
    photo: '/images/service-content-zechariah.webp', photoAlt: 'Zechariah Tokar at his desk beside his laptop',
    takeaway: 'Keep the useful page. Fix the missing answer, unclear offer or buried proof before commissioning another article.',
    sampleTitle: 'From a vague promise to a useful answer',
    sampleNote: 'Illustrative editing example. Bracketed details must come from your business before publication.',
    columns: ['The weak copy', 'What the buyer still needs', 'What the rewrite should include'],
    rows: [
      ['“We offer complete marketing solutions.”', 'What do you actually do?', 'Name the service, the customer and the work included'],
      ['“Trusted by leading companies.”', 'Why should I believe that?', 'Use a named, approved testimonial or a documented example'],
      ['“Contact us to learn more.”', 'What happens after I enquire?', 'Explain the first step and what to send'],
    ],
    sections: [
      { title: 'GEO content optimization services for pages that already matter', paragraphs: [
        'I work on pages that help someone choose: service pages, product explanations, comparisons and useful answers close to that decision. If a page already ranks or earns enquiries, I preserve its useful content and history while fixing what is missing.',
        'This is a scoped editing and implementation service. We agree on the pages, the business facts and the changes before I start. You get revised copy and, where included, the work to put it on the website.',
        'A rewrite cannot make a weak or unproven offer trustworthy by itself. If the page lacks a real example, a clear service description or permission to use a result, that is an input we need to fix. I will not fill the space with a made-up claim.',
      ] },
      { title: 'First, choose which content deserves the work', paragraphs: [
        'A page is worth improving when it matches a real buyer question and your business can give a better answer. I look at the current page, the search results and the next step you want the visitor to take. More words are not automatically the missing piece.',
        'A service page with traffic but few enquiries may need clearer scope or a better form. A comparison page may omit the difference customers actually ask about. A detailed guide may answer the question well but give the reader no route to your service.',
        'I also check for competing pages on your own site. If two URLs do the same job, the right answer may be a combined page and clearer links. Creating a new version of the same article would make that problem worse.',
      ] },
      { title: 'The rewrite starts with your offer and your proof', paragraphs: [
        'I use your existing material to find the details only your business can provide. That might be a customer question from a sales call, a public LinkedIn post, an approved testimonial, original photos or a documented piece of work.',
        'Then I write the answer plainly. What do you do? Who is it for? What happens first? What should a buyer compare? The page should answer those questions before asking someone to book a call.',
        'You review the claims and the wording before the page goes live. I keep an eye on what cannot be said as well: private client information, unsupported results and expertise the business has not established. Search-friendly copy still has to be true.',
      ] },
      { title: 'Clear answers that can stand on their own', paragraphs: [
        'AI search tools may use a passage rather than an entire page. I make important answers understandable without relying on a distant heading or an unexplained “we.” A short paragraph should identify the subject and explain the useful detail.',
        'For a service page, that means saying what the service includes and when it makes sense. For a comparison, it means explaining the tradeoff. For a product page, it means making specifications, fit and limitations easy to find.',
        'I use headings, tables and FAQs where they help a reader scan. I do not turn every sentence into a bullet or repeat a phrase just to make the page look optimized. Your voice and the customer’s question set the structure.',
      ] },
      { title: 'Content, technical SEO and structured data work together', paragraphs: [
        'Once the human draft works, I check the search coverage. The title, main heading, description and supporting sections should make the subject clear. Missing concepts belong in useful explanations, not a block of keywords at the bottom.',
        'Where the agreed scope includes site changes, I check the rendered page, links, images, mobile layout and relevant structured data. Markup should describe the visible content. It is not a substitute for proof and it does not guarantee an AI citation.',
        'Google’s [guidance on AI features and websites](https://developers.google.com/search/docs/appearance/ai-features) is a useful reference: the established search foundations still matter. I keep the page accessible and useful rather than sell a secret AI-only file as the whole solution.',
      ] },
      { title: 'What generative engine optimization means for your content', paragraphs: [
        'Generative engine optimization is the industry term for improving how a business can be understood and represented in AI-generated answers. GEO content work is the page part of that job. It deals with the offer, the facts and how clearly they are explained.',
        'Traditional SEO often starts with a list of search engine results and the page a person clicks. Generative engines can compose an answer using several sources. Your content may inform the answer without becoming the recommended provider, so a citation and a sale remain different outcomes.',
        'There is overlap between SEO and GEO. Both depend on content quality, factual accuracy and pages that can be found. I optimize content for the human decision first, then check whether the relevant search systems can access and understand it.',
      ] },
      { title: 'How to structure your content without flattening your voice', paragraphs: [
        'Start with the question the page is meant to answer. Put the answer near the top, then explain the details that would change a buyer’s decision. A service page needs a clear offer. A comparison needs genuine differences. The structure follows the job.',
        'A useful FAQ covers the questions people still have after reading. I avoid adding a long set of near-identical questions just to repeat the service name. Tables are helpful when a reader needs to compare scope, fit or the next step.',
        'When I structure content for AI search, I preserve names, qualifications and sources that make the answer specific. Shortening a paragraph should not remove the condition that makes a claim true. That is especially important with client results.',
      ] },
      { title: 'Google AI Overviews, AI Mode and other AI tools', paragraphs: [
        'Google AI Overviews and AI Mode are part of Google Search. Google says the usual SEO best practices remain relevant and that no special schema is required for those features. I use that guidance when deciding which technical additions are worth doing.',
        'Tools like ChatGPT and Perplexity have their own products and source-selection behaviour. I do not assume an edit that helps one AI answer will produce the same answer everywhere. We agree on which observations will be used to review the work.',
        'Generative AI models can also misread or repeat old information. Clear dates, named sources and accurate service descriptions help the reader verify the page. They do not give us control over an outside AI system.',
      ] },
      { title: 'Update content when the business facts change', paragraphs: [
        'Content freshness should reflect a real change. A new offer, a retired service, updated specifications or an approved case study gives you a reason to update content. Changing a date without changing anything useful does not help a customer.',
        'I check related pages when a core fact changes. If the service page says one thing and an older guide says another, the rewrite has left a trust problem behind. Links, captions and relevant structured data should agree with the updated copy.',
        'Your content strategy should also decide what to stop publishing. High-quality content is not a quota. When an existing page already answers the question, improving it may be a better use of the budget than creating a second article.',
      ] },
      { title: 'Original evidence beats generic content for AI', paragraphs: [
        'A public LinkedIn post can contain a useful lesson from real work. A client screenshot can show what changed. Original photos can show who does the job. I use these only when they belong to the business and can be published with the right context.',
        'User-generated content can reveal questions and objections that a polished competitor page misses. It is useful research material, not automatic proof that the claim in a forum post is true. Technical claims still need an authoritative source.',
        'I do not create content by copying a competitor’s outline and swapping the name. The page should contain something a buyer could not get from every other result, such as a worked example, an honest comparison or a detail from your actual service.',
      ] },
      { title: 'What this service does not include by default', paragraphs: [
        'Writing and implementing agreed pages is different from ongoing promotion, paid advertising or a broad technical rebuild. If the page needs those things, I explain the extra scope. You should know which part of the job you are buying.',
        'A missing mention can come from the sources outside your website. If your pages are already clear, more editing may not be the priority. An [AI visibility audit](/ai-visibility-audit) can help separate a page problem from a wider reputation or discovery problem.',
        'For a combined program, see my [answer engine optimization services](/answer-engine-optimization-services). For repeat measurement after a rewrite, choose [AI visibility tracking services](/ai-visibility-tracking-services). Each has a different purpose.',
      ] },
      { title: 'Why work directly with Zechariah Tokar?', paragraphs: [
        'I do the research and the page work myself. My published ZStander example shows work across indexing, page clarity and supporting search foundations. It is an organic search example, not proof that a particular rewrite guarantees a citation.',
        'I care about what a visitor does after reading. A paragraph can cover every search term and still leave the buyer wondering whether the business is right for them. I want the page to make that decision easier.',
        'Send the URL you want improved, the offer it should sell and any proof you are allowed to publish. I will review whether an edit, a fuller rewrite or a different page is the sensible starting point. Fees and responsibilities are agreed before work begins.',
      ] },
    ],
    faqs: [
      { question: 'Is GEO content optimization different from SEO writing?', answer: 'They overlap. Both need useful answers, clear page structure and a site that search engines can access. This service focuses on improving existing commercial pages for buyers and AI-assisted research. I do not charge for two identical rewrites under different names.' },
      { question: 'Can you use my LinkedIn posts and existing content?', answer: 'Yes. Your public posts, approved client examples and other owned material can make the page more specific. I check the source and adapt it for the website reader. I do not treat every post as permission to publish private client details.' },
      { question: 'Will you publish the changes on my site?', answer: 'Implementation can be included in the agreed scope, depending on your platform and access. We confirm which pages change, who approves the copy and what gets checked before publication.' },
      { question: 'Do we need to replace all our content?', answer: 'Usually the starting point is a focused group of pages. Keep what is useful, preserve working URLs and fix the part that prevents a buyer from understanding or trusting the offer. A site-wide rewrite needs a reason.' },
    ],
    proof: { image: '/images/proof-linkedin-chatgpt.jpg', alt: 'Published ZStander example about a ChatGPT product recommendation', caption: 'The ZStander example combines page clarity with indexing and supporting search work. It is one documented observation, not a guarantee of repeated recommendations.', path: '/case-studies/zstander-shopify-seo', link: 'Read the ZStander case study' },
    resources: [{ label: 'How to get cited by ChatGPT', path: '/how-to-get-cited-by-chatgpt' }, { label: 'SEO writing services', path: '/content-marketing-for-seo' }],
    cta: 'Send a page that should be doing more for your business.',
  },
  {
    slug: 'ai-visibility-tracking-services', label: 'AI visibility tracking', title: 'AI Visibility Tracking Services for AI Search',
    seoTitle: 'AI Visibility Tracking Services | Know What Changed and What to Fix | Brand Mentions, Citations, Competitors and Reporting | Zechariah Tokar',
    description: 'AI visibility tracking services with Zechariah Tokar. See where your brand appears in AI search, review visibility data and decide what to fix.',
    answer: 'My AI visibility tracking service checks how your brand appears in AI answers and explains which changes deserve action.',
    intro: 'You do not need another score with no explanation. I track an agreed set of buyer questions, keep the evidence and tell you what changed. The report separates a passing mention from a recommendation, a linked source and an actual enquiry.',
    photo: '/images/service-tracking-zechariah.webp', photoAlt: 'Zechariah Tokar, independent search visibility consultant',
    takeaway: 'Keep the question set consistent. If the sample changes, the report should say so before claiming growth.',
    sampleTitle: 'Four observations that should never become one vague score',
    sampleNote: 'Example reporting definitions. These are not measured results for a client.',
    columns: ['Observation', 'What it establishes', 'What it does not establish'],
    rows: [
      ['Brand mention', 'The sampled answer named the business', 'That it recommended the business'],
      ['Linked citation', 'The answer linked to a source', 'That the buyer clicked or bought'],
      ['Recommendation', 'The business was offered as an option', 'That every buyer sees the same answer'],
      ['Tracked enquiry', 'A form or other lead action was recorded', 'That an untagged AI answer caused it'],
    ],
    sections: [
      { title: 'Managed AI visibility monitoring, with someone reading the results', paragraphs: [
        'The work includes setting up the question set, recording the agreed platforms, checking repeat observations and interpreting the changes. You get the evidence behind the report and the next actions I recommend. The cadence and scope are agreed before the work starts.',
        'I keep the original baseline so we can compare later checks against it. When questions, markets, tools or models change, those changes belong in the report. They can affect the result even when your website has not changed.',
        'I set this up and read the results myself. If you already pay for a tracker, send me a sample export. We may be able to use what you have. A new subscription is not the starting requirement.',
      ] },
      { title: 'Build a question set around the buying decision', paragraphs: [
        'We start with your offer and the questions a customer asks while choosing. That includes problem searches, provider comparisons and questions about fit. I group the questions so the report does not hide weak commercial visibility behind broad informational mentions.',
        'Branded checks belong in their own group. They are helpful for incorrect descriptions, old service information and confusion with another business. They should not be presented as evidence that new customers are discovering you.',
        'For a local service, the market and location matter. For a software company, the use case and alternatives may matter more. We choose the scope together and preserve the wording so a later comparison means something.',
      ] },
      { title: 'What gets recorded in the observation ledger', paragraphs: [
        'Each observation keeps the question, date, assistant, available market context, brand mention, recommendation and cited sources. I note which competitor appeared and whether the description of your business was accurate. Where available, the saved answer lets you inspect the finding.',
        'You should be able to open the page behind a citation. I keep that link in the report. We can then check whether the assistant used your current service page, an old article or a third-party source, and deal with that specific page.',
        'I mark missing data clearly. If an assistant gives an answer without sources, the report should not quietly infer the source. If a platform check fails, that is a failed check, not evidence that the brand disappeared.',
      ] },
      { title: 'Competitor tracking should explain a change', paragraphs: [
        'Suppose a rival starts appearing for a question you both care about. I open the cited pages and check what changed. Did they publish a useful comparison? Does the answer rely on an old article about your business? The source review comes before a recommendation to write anything.',
        'Different assistants can use different sources for the same question. I report those patterns separately. A gain in Perplexity should not be used to imply that ChatGPT now recommends you too.',
        'The comparison group stays fixed. Adding another rival changes the calculation, so I mark the report when that happens. You should not be told visibility improved when the only change was who got counted.',
      ] },
      { title: 'A report should end with a decision', paragraphs: [
        'If the assistant keeps naming a service you do not sell, I put that mistake near the top of the report. One missing mention on a broad question may just need another check. Those findings should not come back as equally urgent jobs.',
        'The recommended action names the page or source involved. It might be correcting a business detail, strengthening a comparison, checking access or improving the proof next to a service claim. I explain what we expect that change to help.',
        'Implementation is separately agreed. Tracking is not a hidden promise to rewrite the whole site every month. If you need page work, [GEO content optimization](/geo-content-optimization) covers that. A wider program sits under [answer engine optimization](/answer-engine-optimization-services).',
      ] },
      { title: 'AI referral traffic and visibility are different measurements', paragraphs: [
        'Your company can appear in an answer without getting a visit. And a visit from an assistant does not usually tell us which question the person asked. I keep those two records separate unless a tracked link gives us a reason to join them.',
        'Referral traffic, tagged links and form attribution can help show what happened after a visit. They do not capture every path. A buyer may read the answer, search for the brand later or arrive through a different device.',
        'The same care applies to leads. A form submission is an event. A qualified enquiry is a business judgement. We agree on what counts as a good lead so the report stays connected to the work you want.',
      ] },
      { title: 'DIY software, a one-off audit or managed tracking?', paragraphs: [
        'A self-serve tool can fit a team that has time to review the results and decide what to do. My [AI search visibility tools guide](/ai-search-visibility-tools) explains that route. You do not need managed reporting just to collect a screenshot.',
        'A one-off [AI visibility audit](/ai-visibility-audit) is a better first step when you do not know why the business is missing. Managed tracking makes more sense when you have a baseline, work underway and decisions that repeat observations could change.',
        'I recommend starting with a useful scope rather than every possible question. Expanding the sample costs time and may cost tool credits. It should add information you can use, not make the dashboard look busier.',
      ] },
      { title: 'Choosing an AI visibility tracking tool', paragraphs: [
        'Before buying an AI visibility tracking tool, try to open an old answer in its demo. Can you see the question and follow its cited links? Then check the markets and assistants it covers. These checks tell us whether we can use it for the report you need.',
        'Two options you may already know are [Ahrefs Brand Radar](https://help.ahrefs.com/en/articles/15501968-ai-visibility-metrics) and the [Semrush AI Visibility Toolkit](https://www.semrush.com/kb/1496-getting-started-with-ai-visibility-toolkit). Read how each defines a mention and a citation before comparing the scores. I link to their own explanations here because the definitions matter.',
        'If your existing SEO tool exports the answers we need, we can start there. If it cannot cover the chosen questions, we look at a dedicated AI visibility platform. I show you what extra access would cost before adding a subscription.',
      ] },
      { title: 'AI search visibility versus a traditional rank tracker', paragraphs: [
        'A rank tracker records positions in search results for a defined query. AI search visibility tracking records what an assistant says, which brands appear and which sources it cites. Those are related measurements, but one does not replace the other.',
        'Your Google Search Console data can show search performance for the website. It does not give a complete prompt-by-prompt account of every AI assistant. Website analytics, an AI visibility report and a search report each answer a different question.',
        'Sometimes the reports point in different directions. Your service page could gain Google visits while appearing less often in our AI sample. I would check both records before recommending an edit. The actual visits still matter.',
      ] },
      { title: 'Compare AI platforms without pretending they are the same', paragraphs: [
        'Which assistants do your customers use? That is the starting question for coverage. We might include ChatGPT, Gemini, Perplexity, Claude or Microsoft Copilot, alongside Google AI Overviews and AI Mode. The report names the AI platforms checked so you know which ones the findings describe.',
        'A manual check in the app can disagree with the AI monitoring tool. When that happens, I keep both results and check the question wording and settings. Picking the nicer screenshot would leave you with the wrong picture.',
        'When people ask AI a follow-up question, the conversation can change the answer. Our repeat sample keeps the agreed starting conditions. It cannot reproduce every conversation a buyer has, and the report should be clear about that limit.',
      ] },
      { title: 'What share of voice and sentiment actually tell you', paragraphs: [
        'Share of voice compares the brands counted in our sample. For competitor analysis, I keep that group and the question set consistent between reports. The figure describes those observations, not every conversation in the market.',
        'I also read answers flagged for sentiment. For example, an assistant might accurately say your service is unsuitable for a particular buyer. That needs different handling from an answer that gets your offer wrong. The label alone does not tell us which happened.',
        'If a few answers can move the score, you need to know that before acting on it. I show what changed in the sample. Spending on AI search optimization only makes sense when we can point to a problem the work could address.',
      ] },
      { title: 'When an AI visibility report should trigger page work', paragraphs: [
        'Repeatedly missing a buying question can be useful evidence if the business really fits that question. We inspect the sources before writing. The gap might be an unclear service description, an outdated comparison or a lack of public evidence.',
        'A high score can still hide the wrong description. If an AI assistant says you serve a market you do not serve, the next enquiry could waste everyone’s time. I check the facts in the answer as well as the mention.',
        'I will also tell you when I would leave a page alone. An isolated missing answer is a weak reason to rewrite a working page. We can keep the observation and check again before buying more work.',
      ] },
      { title: 'AI brand visibility and the limits of visibility data', paragraphs: [
        'When you track AI visibility, the inputs need to stay visible too. Which AI models were checked? Was the question run with fresh context? Did the tool change its method? Visibility data without those details is hard to use for a spending decision.',
        'I compare visibility across the agreed assistants, but keep the results for each AI engine separate. A brand appears across different products under different conditions. One platform showing a gain does not establish a gain across AI search as a whole.',
        'With prompt tracking, you keep the wording of the question. A broad keyword label loses that detail. If a model update changes the AI response, the saved question gives us something concrete to recheck.',
      ] },
      { title: 'Brand monitoring for marketing teams and agencies', paragraphs: [
        'Monitoring brand descriptions can uncover a problem that rank tracking misses. An assistant may give a wrong service area or confuse two businesses. The practical job is to find the source of the error and decide whether a correction is possible.',
        'For marketing teams and agencies, I can scope the report around the brands and responsibilities you need. Multiple brands should have separate definitions and comparison groups. Combining them can hide which offer needs attention.',
        'An AI visibility score summarizes a particular test. If you have run a free AI visibility check, send the questions and answers with the score. I can review what it found and whether a repeat check would help before proposing more work.',
      ] },
      { title: 'What you keep and how to get started', paragraphs: [
        'Before starting, we agree on which reports you keep and how you receive the observation records. We also settle the coverage and frequency. Tool subscriptions appear separately in the scope, so you can see what you are paying me to do.',
        'Send your website, priority offer, target market and any current tracking setup. Tell me what you would do differently if the report showed a real change. That answer helps decide whether ongoing measurement is worth buying.',
        'Want to try it yourself first? My [guide to tracking ChatGPT mentions](/track-brand-mentions-in-chatgpt) walks through the manual approach. Hire me when you want to hand over the setup and the job of reading the results.',
      ] },
    ],
    faqs: [
      { question: 'Which AI platforms can you track?', answer: 'We agree on coverage before starting. The question set can include ChatGPT, Perplexity, Gemini and Google AI answers where available. I record the platform and conditions separately, and explain any limits imposed by the selected tools.' },
      { question: 'How often will you check our visibility?', answer: 'The reporting cadence is part of the scope. It should match the decisions you need to make and the work underway. A larger or more frequent sample is not automatically more useful.' },
      { question: 'Can you prove that an AI mention caused a sale?', answer: 'A mention on its own cannot tell us that. If a tracked visit leads to a recorded purchase, we can discuss that path. Where the connection is missing, I leave it missing in the report rather than attribute the sale to AI.' },
      { question: 'Will you fix every issue found in the report?', answer: 'We agree on who does the fixes before work starts. I can quote page changes alongside the reporting, or you can pass the findings to your own team. The report should make that handoff possible.' },
    ],
    proof: { image: '/images/proof-linkedin-chatgpt.jpg', alt: 'Published example of ZStander appearing in a ChatGPT recommendation', caption: 'This screenshot records one ChatGPT recommendation for ZStander. I would keep it in the observation log and repeat the question before describing it as an ongoing result.', path: '/case-studies/zstander-shopify-seo', link: 'Read the context behind this example' },
    resources: [{ label: 'Track brand mentions in ChatGPT', path: '/track-brand-mentions-in-chatgpt' }, { label: 'Compare AI visibility tools', path: '/ai-search-visibility-tools' }], cta: 'Send your site and the questions you want to track.',
  },
  {
    slug: 'chatgpt-ads-management', label: 'ChatGPT ads / PPC', title: 'ChatGPT Ads Management and OpenAI Ads Manager Support',
    seoTitle: 'ChatGPT Ads Management | OpenAI Ads Manager Setup, PPC and CPM Planning | Tracking, Landing Pages and Reporting | Zechariah Tokar',
    description: 'ChatGPT ads management and OpenAI Ads Manager support. Zechariah Tokar helps with PPC, CPM planning, ad copy, tracking and pages, subject to eligibility.',
    answer: 'I help eligible businesses set up, measure and manage paid ChatGPT advertising campaigns.',
    intro: 'Before spending, we check whether your account can advertise, whether the offer fits and whether the landing page can turn a visit into a useful lead. Then we agree on the budget, tracking and campaign work. You work with me directly.',
    photo: '/images/service-chatgpt-ads.webp', photoAlt: 'Search growth illustration used on Zechariah Tokar’s website',
    takeaway: 'Agree on a test budget and the decision it should answer before the campaign goes live.',
    sampleTitle: 'Is the campaign ready to spend?',
    sampleNote: 'My launch decision sheet. Account settings and policies must be checked for your business.',
    columns: ['Check', 'Ready means', 'If it is missing'],
    rows: [
      ['Advertiser access', 'Your account and category can run the planned campaign', 'Confirm eligibility before promising a launch'],
      ['Landing page', 'The offer is clear and the form or purchase path works', 'Repair the page before buying traffic'],
      ['Measurement', 'The intended action can be tested and recorded', 'Fix tracking before judging performance'],
      ['Budget and approval', 'You have approved the spend limit, ads and destination', 'Keep the campaign paused'],
    ],
    sections: [
      { title: 'ChatGPT advertising services with a defined scope', paragraphs: [
        'I can help with campaign planning, account setup, ad copy, destination pages, tracking and ongoing management. We agree on what is included after reviewing your account, offer and market. A readiness review can come before a launch commitment.',
        'This is paid advertising in ChatGPT. It is separate from getting the brand mentioned in an organic AI answer. Buying an ad does not buy editorial trust or a guaranteed recommendation in the assistant’s response.',
        'If you want organic work, start with my [AI visibility audit](/ai-visibility-audit) or [answer engine optimization services](/answer-engine-optimization-services). If you want paid traffic, this page explains how I approach the campaign and the conversion path.',
      ] },
      { title: 'Check account access and advertising eligibility first', paragraphs: [
        'Availability depends on the advertiser account, market, category and campaign features. I check the options actually available to your business before recommending a plan. I do not promise access based on a competitor’s country list or an old launch announcement.',
        'Your business keeps its advertiser account. We agree on the access needed for the work, the approval process and who handles billing. Advertising spend is separate from my management fee and is approved before a campaign is enabled.',
        'If access is unavailable, we can discuss preparation such as the offer, creative and landing page. That scope must be useful on its own. It should not be sold as a live campaign when the account cannot yet serve ads.',
      ] },
      { title: 'PPC, CPC and CPM: choose the objective before the bid', paragraphs: [
        'OpenAI’s [bidding and budgets documentation](https://learn.chatgpt.com/ads/bidding-and-budgets) describes objectives and bidding options. The right setup depends on what the campaign should achieve and what the account supports. A click campaign and an impression campaign answer different questions.',
        'PPC means pay per click. CPC is the cost of a click. CPM describes the cost of a thousand impressions. Those are different ways to buy or assess delivery, so a low CPM does not tell us whether the campaign produced a qualified enquiry.',
        'I agree on the test budget and spending limits with you. There is no fixed CPC promise on this page. Auction conditions, the offer, available inventory and campaign settings can affect the cost and the volume of delivery.',
      ] },
      { title: 'Campaign planning starts with the customer and the offer', paragraphs: [
        'I want to know what you sell, who buys it and what makes a lead worth following up. Then we choose the offer and destination. A campaign for a consultation should not be assessed as if every click were an immediate online sale.',
        'I prepare the campaign structure and messaging around the available targeting controls. I check the current account settings rather than assume ChatGPT works like Google keyword bidding. The ad and landing page need to make the same promise.',
        'You review the creative, destination and budget before launch. OpenAI’s [campaign management guide](https://learn.chatgpt.com/ads/campaign-management) describes campaigns, ad groups, ads and status controls. Setup is not the same as permission to turn on spending.',
      ] },
      { title: 'The landing page is part of the advertising job', paragraphs: [
        'A person who clicks should see the offer they expected. I check the page’s first answer, supporting proof, mobile layout and next step. If the visitor has to guess what the business does, buying more visits will not solve that confusion.',
        'Forms need a practical test. Required fields should make sense, errors should explain what to fix and a successful submission should be clear. For a purchase path, the relevant checkout and confirmation need their own agreed checks.',
        'Page editing or rebuilding can be included in the scope. I explain what needs to change before quoting it. If the current destination is already good, there is no reason to buy a replacement just because the traffic source is new.',
      ] },
      { title: 'Conversion tracking before performance claims', paragraphs: [
        'We define the action first: an enquiry, signup, purchase or another event that matters to your business. Then I review campaign parameters, analytics and the conversion measurement available to the account. The setup depends on your platform and consent requirements.',
        'OpenAI provides measurement tools alongside the advertiser platform. Where the agreed work includes a pixel or server-side conversion connection, I test the implementation and document what it records. I do not assume every lead is attributable just because a script was installed.',
        'A report should separate clicks from leads and qualified opportunities. If your sales cycle continues in a CRM or over the phone, we agree on how to feed that judgement back into the review. Otherwise the campaign can look successful while sending the wrong people.',
      ] },
      { title: 'Ongoing ChatGPT ads optimization and reporting', paragraphs: [
        'Management includes reviewing delivery and costs, checking lead quality and deciding what to test next. That could mean different copy, a more useful offer, an account setting or a landing-page change. The work should follow the evidence rather than a fixed quota of changes.',
        'OpenAI’s [reporting documentation](https://developers.openai.com/ads/reporting) distinguishes delivery, cost and conversion metrics. Recent figures can be at different processing stages. I avoid judging a campaign from incomplete data or treating a short run as a settled result.',
        'We agree on the reporting cadence and the conditions for continuing, changing or stopping the test. You should know what was spent, what was measured and what I recommend next. A new channel still has to earn its place in the marketing budget.',
      ] },
      { title: 'ChatGPT Ads Manager support for your marketing team', paragraphs: [
        'The ChatGPT Ads Manager account is where the available campaign controls and reporting need to be checked. I can help your marketer organize the setup and document the decisions. If you use a self-serve account, you should still know which settings have been chosen and why.',
        'A campaign name, an ad group and a creative variation should be easy to tell apart in the dashboard. That makes the review useful when more than one person works on the account. It also helps avoid confusing a paused draft with a campaign that is spending.',
        'The advertising platform is changing. I check the current OpenAI guidance and the options visible in your ads account at the time of setup. I do not sell a fixed playbook based on an early version of the ad platform.',
      ] },
      { title: 'How ChatGPT ad campaigns fit alongside other channels', paragraphs: [
        'Search ads, Meta ads and ChatGPT advertising reach people in different contexts. A Google query, a social feed and a conversational prompt are different situations. I review the product or service and the next step rather than copy the same creative everywhere.',
        'If you already advertise on Google, Meta or TikTok, that data can help describe your audience and offer. It does not prove the same cost or conversion rate will carry over inside ChatGPT. A new advertising channel needs its own measured test.',
        'The useful comparison is the cost of a qualified outcome, with the limits of attribution made clear. Moving budget away from a working channel needs evidence. Adding AI advertising should not become a reason to stop checking whether the existing campaign pays.',
      ] },
      { title: 'Ad spend, minimum spend and post-click checks', paragraphs: [
        'I check any minimum spend or other account requirements before we agree on the test. The number shown in your account matters more than an old article. You approve the media budget separately from the fee for my work.',
        'The post-click experience includes speed, the offer and a working next step. I test ads and destination changes within the agreed scope, then check that campaign parameters survive the journey. Broken measurement should not be treated as proof that the channel failed.',
        'Reporting is used to optimize the campaign after enough relevant evidence is available. A cheap click from the wrong audience is still wasted spend. I would rather explain that than report a low CPC as if it were the business goal.',
      ] },
      { title: 'Why hire Zechariah Tokar for this work?', paragraphs: [
        'I work directly on the offer, page and measurement instead of treating the ad account as a separate world. My background in search visibility helps connect what the customer asks with the page they reach. You deal with the person doing the work.',
        'The results elsewhere on this site relate to their named channels. I do not present organic ChatGPT recommendations or Google search results as paid ChatGPT campaign results. I am an independent freelancer, not an OpenAI-endorsed agency.',
        'Send your website, target customer, market and current advertiser access. If you already run paid campaigns, tell me what a good lead looks like and which landing page you use. We can then decide whether setup, a readiness review or ongoing management is the right scope.',
      ] },
    ],
    faqs: [
      { question: 'Can you run ChatGPT ads for my business now?', answer: 'First I check your advertiser access, market, category and the campaign features available to your account. If the business is eligible, we can scope setup and management. I cannot guarantee account approval or bypass OpenAI’s review.' },
      { question: 'Does ChatGPT PPC make my brand appear in organic answers?', answer: 'Paid advertising and organic recommendations are separate. An ad campaign buys eligible sponsored delivery. It does not guarantee that ChatGPT will independently recommend the brand in an answer.' },
      { question: 'How much do ChatGPT ads cost?', answer: 'Your media spend depends on the campaign, bidding and delivery. My fee is quoted separately after we agree on the work. We confirm a test budget and spend limits before launch, rather than promise a universal cost per click.' },
      { question: 'Do you handle the landing page and tracking?', answer: 'Both can be included in the agreed scope. I review the destination and measurement before recommending spend, then explain any editing, development or tracking work needed. You approve that scope before it starts.' },
      { question: 'Can this run alongside Google Ads and SEO?', answer: 'Yes, when the offer, budget and measurement justify a separate test. I keep the channels distinguishable in reporting. ChatGPT advertising should be judged on its own useful outcomes, not assumed to replace a working campaign.' },
    ],
    proof: { image: '/images/proof-linkedin-ai-audit.jpg', alt: 'Client feedback about Zechariah’s search audit work', caption: 'Background in search diagnosis and page work. This feedback concerns an AI SEO audit and is not a paid ChatGPT advertising case study.', path: '/reviews-results', link: 'See my published client feedback' },
    resources: [{ label: 'Organic AI search services', path: '/answer-engine-optimization-services' }, { label: 'My approach and background', path: '/about' }], cta: 'Check whether ChatGPT ads fit your offer and budget.',
  },
];
