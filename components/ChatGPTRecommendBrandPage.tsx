import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ContactCTA } from './ContactCTA';
import { HeadSEO, updatePageSEO } from '../utils/seo';

const pagePath = '/how-to-get-chatgpt-to-recommend-your-brand';
const pageTitle = 'How to Get ChatGPT to Recommend Your Brand | AI Recommendation Pages, Fan-Out Queries and Proof Signals | Zechariah Tokar';
const pageDescription = 'Learn how to get ChatGPT to recommend your brand by finding the searches AI tools run, creating the right pages, and adding proof that supports the recommendation.';

const videoLessons = [
  {
    number: '01',
    title: 'Find the searches AI runs in the background',
    loomId: '35826a5868c3416b845303cd74ba6d99',
    bullets: [
      'When someone asks ChatGPT who to hire, the AI often checks search engines in the background.',
      'It does not only search the exact prompt. It may search several related phrases, such as best providers, highest-rated providers, top rankings, reviews, or sales volume.',
      'Those related searches can change each time, so one test is not enough. Run the prompt several times and look for the repeated pattern.',
      'If your brand or your page is not visible in those searches, ChatGPT has very little reason to include you in the answer.',
    ],
  },
  {
    number: '02',
    title: 'Put the AI recommendation criteria on the page',
    loomId: '1dca44d9269c4baeadbe2b6ffb2e20e1',
    bullets: [
      'After you know the searches AI tools are using, ask what criteria they care about for that recommendation.',
      'The criteria may include reviews, ratings, transaction count, sales volume, local expertise, specialist focus, legal integrity, vendor networks, or another proof signal in your market.',
      'Do not make claims up. If the AI cares about a factor and you have real evidence for it, put that evidence clearly on the page.',
      'Use clear headings, short sections, and proof near the claim. The goal is to make your page easy for people and AI tools to understand.',
    ],
  },
];

const steps = [
  {
    label: 'Step 1',
    title: 'Choose the recommendation you want to win',
    body: 'Start with the buyer question. For example: who is the best real estate agent in NYC, what is the best CRM for small agencies, or which SEO consultant should I hire for AI search visibility. The page should be built around one clear recommendation moment, not every keyword in the category.',
  },
  {
    label: 'Step 2',
    title: 'Find the background searches',
    body: 'Use ChatGPT, Perplexity, Google, and a fan-out tool to see which related searches keep coming up. A free option is QueryFanout.ai. Look for repeated searches, not one random output.',
    link: { href: 'https://queryfanout.ai/', label: 'QueryFanout.ai' },
  },
  {
    label: 'Step 3',
    title: 'Build the page that can show up for those searches',
    body: 'If AI tools are checking best lists, review pages, comparison pages, rankings, or local directories, you need a page or third-party mention that fits those searches. Your own website can help, but outside mentions can matter too.',
  },
  {
    label: 'Step 4',
    title: 'Add the proof ChatGPT is looking for',
    body: 'Ask the AI what it would use to choose a recommendation in that market. Then put the true criteria on the page: reviews, numbers, special focus, location, examples, credentials, client fit, or public proof. Keep the proof close to the claim.',
  },
  {
    label: 'Step 5',
    title: 'Make the page easy to extract',
    body: 'Use one idea per section. Write the answer plainly. Put important criteria in H2s, short paragraphs, and bullets. If someone asks ChatGPT to recommend your business, the model should be able to understand what you do and why your brand deserves to be named.',
  },
];

const criteria = [
  ['Visibility', 'Do you appear in the searches ChatGPT or another AI tool checks before it answers?'],
  ['Fit', 'Does your page clearly say who you help and when you are the right choice?'],
  ['Proof', 'Do you show reviews, rankings, sales volume, case examples, or other evidence the market cares about?'],
  ['Trust', 'Are the claims supported by third-party mentions, customer reviews, directories, Reddit, LinkedIn, or other public places?'],
  ['Clarity', 'Can a non-technical person understand the page fast, without decoding SEO language?'],
];

export const ChatGPTRecommendBrandPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: pageTitle,
      description: pageDescription,
      path: pagePath,
    });
  }, []);

  return (
    <>
      <HeadSEO title={pageTitle} description={pageDescription} path={pagePath} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: 'How to Get ChatGPT to Recommend Your Brand',
            description: pageDescription,
            embedUrl: 'https://www.loom.com/embed/35826a5868c3416b845303cd74ba6d99',
            publisher: {
              '@type': 'Person',
              name: 'Zechariah Tokar',
            },
          }),
        }}
      />

      <div className="gp llm-resource">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to="/ai-seo-consultant-israel">AI Search Visibility</NavLink><span>/</span>
          How to Get ChatGPT to Recommend Your Brand
        </div>

        <section className="shero llm-hero">
          <div className="wrap llm-hero-grid">
            <div>
              <span className="eyebrow">AI recommendation resource</span>
              <h1>How to Get ChatGPT to Recommend Your Brand</h1>
              <p className="answer">
                To get ChatGPT to recommend your brand, you need to show up in the searches it checks and give it clear proof for why your brand belongs in the answer.
              </p>
              <div className="shero-actions">
                <a className="btn btn-primary" href="#watch">Watch the explanation <span className="arrow">↗</span></a>
                <a className="btn btn-ghost" href="#contact">Send your site</a>
              </div>
            </div>
            <aside className="llm-side-note">
              <span className="eyebrow">The simple version</span>
              <ol>
                <li>Find the searches AI tools run.</li>
                <li>Create pages or mentions that can show up there.</li>
                <li>Add the proof the AI uses to recommend a brand.</li>
              </ol>
            </aside>
          </div>
        </section>

        <nav className="section-tabs" aria-label="Page sections">
          <div className="wrap">
            <a href="#watch">Videos</a>
            <a href="#process">Process</a>
            <a href="#criteria">Criteria</a>
            <a href="#links">Next pages</a>
            <a href="#contact">Send your site</a>
          </div>
        </nav>

        <section id="watch">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Watch first</span>
              <h2>The two-part explanation.</h2>
              <p className="lede">
                These videos explain the process in plain English. The summaries below keep the same idea, cleaned up for people who want the steps without the technical details.
              </p>
            </div>

            <div className="llm-video-stack">
              {videoLessons.map((video) => (
                <article className="llm-video-block" key={video.loomId}>
                  <div className="llm-video-copy">
                    <span className="llm-number">{video.number}</span>
                    <h2>{video.title}</h2>
                    <ul>
                      {video.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                  <div className="llm-video-frame">
                    <iframe
                      src={`https://www.loom.com/embed/${video.loomId}`}
                      title={video.title}
                      allowFullScreen
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="divider" id="process">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Practical process</span>
              <h2>How to make your business easier for ChatGPT to recommend.</h2>
              <p className="lede">
                This is not about tricking ChatGPT. It is about making your brand visible, clear, and supported by the same evidence a person would use before recommending you.
              </p>
            </div>

            <div className="llm-step-grid">
              {steps.map((step) => (
                <article className="llm-step" key={step.title}>
                  <span>{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>
                    {step.body}
                    {step.link && (
                      <>
                        {' '}Try{' '}
                        <a href={step.link.href} target="_blank" rel="nofollow noopener noreferrer">
                          {step.link.label}
                        </a>
                        {' '}as a simple starting point.
                      </>
                    )}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="llm-dark" id="criteria">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">What the page needs</span>
              <h2>ChatGPT still needs reasons.</h2>
            </div>
            <div className="copy-stack">
              <p className="lead-copy">
                If you want ChatGPT to recommend your business, your page has to answer the same question a careful buyer would ask: why this brand?
              </p>
              <p>
                In the transcript example, the AI cared about things like reviews, transaction count, sales volume, specialist focus, local knowledge, and legal integrity. Your market may be different. The job is to find the real criteria and make them clear.
              </p>
              <div className="llm-criteria-list">
                {criteria.map(([title, body]) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="narrow">
            <span className="eyebrow">What not to do</span>
            <h2 className="block" style={{ marginTop: '12px' }}>Do not fake the proof.</h2>
            <p>
              If you do not have a certain review count, sales number, ranking, award, directory listing, or specialist claim, do not put it on the page. AI tools and people both compare sources. Fake proof can hurt the brand.
            </p>
            <p>
              The stronger move is to show the real proof you do have, then build the missing public evidence over time. That may mean better service pages, customer reviews, third-party profiles, useful directory mentions, Reddit visibility, or pages that answer the exact questions buyers ask.
            </p>
          </div>
        </section>

        <section className="divider" id="links">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Next pages</span>
              <h2>Keep going from here.</h2>
              <p className="lede">If you want to apply this to your own site, these are the two most relevant next pages.</p>
            </div>
            <div className="resource-grid">
              <NavLink className="resource-card" to="/ai-seo-consultant-israel">
                <span>Service</span>
                <h3>AI Search Visibility</h3>
                <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </NavLink>
              <NavLink className="resource-card" to="/how-to-track-ai-search-visibility">
                <span>Guide</span>
                <h3>Track AI search visibility</h3>
                <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </NavLink>
            </div>
          </div>
        </section>

        <ContactCTA
          subject="New Inquiry: How to Get ChatGPT to Recommend Your Brand"
          title="Want this built for your brand?"
          body="Send the site and the recommendation you want to win. I will review the searches AI tools are likely checking and reply with the practical first step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
