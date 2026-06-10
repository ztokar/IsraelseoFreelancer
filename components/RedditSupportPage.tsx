import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SupportPage } from '../types';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';
import { ProofWall, RelatedPages, ResultsGrid, cleanPublicCopy } from './ConversionSections';

interface RedditSupportPageProps {
  content: SupportPage;
}

const Check = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);

const Arrow = () => (
  <svg fill="none" strokeWidth={2} viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" /></svg>
);

const relatedPathByLabel: Record<string, string> = {
  'Reddit marketing services': '/reddit-marketing-services',
  'Reddit marketing expert': '/reddit-marketing-expert',
  'Reddit posting service': '/reddit-posting-service',
  'How to market on Reddit without getting banned': '/how-to-market-on-reddit-without-getting-banned',
  'How to find subreddits for marketing': '/how-to-find-subreddits-for-marketing',
  'Why Reddit posts get removed': '/why-reddit-posts-get-removed',
  'Reddit SEO': '/reddit-seo',
  'How to use Reddit for SEO': '/how-to-use-reddit-for-seo',
  'Why does Reddit rank so high on Google': '/why-does-reddit-rank-so-high-on-google',
  'How Reddit gets cited by AI': '/reddit-ai-citations',
  'Reddit for B2B SaaS lead generation': '/reddit-b2b-saas-lead-generation',
  'Reddit vs LinkedIn for B2B leads': '/reddit-vs-linkedin-b2b-leads',
  'Reddit karma and account age': '/reddit-karma-account-age',
  "How Reddit's Google deal changed SEO": '/reddit-google-deal-seo',
  'Monitor brand mentions on Reddit': '/monitor-brand-mentions-on-reddit',
  'Reddit ads vs organic': '/reddit-ads-vs-organic',
  'B2B SEO': '/b2b-seo-israel',
};

const linkify = (text: string) => {
  const labels = Object.keys(relatedPathByLabel).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${labels.map((label) => label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');

  return text.split(pattern).map((part, index) => {
    const path = relatedPathByLabel[part];
    if (!path) return <React.Fragment key={`${part}-${index}`}>{cleanPublicCopy(part)}</React.Fragment>;

    return <NavLink key={`${part}-${index}`} to={path}>{part}</NavLink>;
  });
};

export const RedditSupportPage: React.FC<RedditSupportPageProps> = ({ content }) => {
  useEffect(() => {
    updatePageSEO({
      title: content.seoTitle,
      description: content.metaDescription,
      path: `/${content.slug}`,
    });
  }, [content]);

  const relatedLinks = content.related.map((item) => ({
    label: item,
    path: relatedPathByLabel[item] || content.parentPath,
    type: item.includes('How') || item.includes('Why') ? 'Reddit guide' : 'Reddit service',
    body: 'A connected page if you want the safer path before posting or using Reddit for search visibility.',
  }));

  return (
    <>
      <HeadSEO title={content.seoTitle} description={content.metaDescription} path={`/${content.slug}`} />

      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to={content.parentPath}>{content.parentLabel}</NavLink><span>/</span>{content.eyebrow}
        </div>

        <section className="shero">
          <div className="wrap shero-grid">
            <div>
              <span className="eyebrow">{content.eyebrow}</span>
              <h1>{content.title}</h1>
              <p className="answer">{linkify(content.intro)}</p>
              <div className="shero-actions">
                <a className="btn btn-primary" href="#contact">Send your site <span className="arrow-icon"><Arrow /></span></a>
                <NavLink className="btn btn-ghost" to={content.parentPath}>View {content.parentLabel}</NavLink>
              </div>
            </div>
            <aside className="service-card">
              <div className="service-card-top">
                <span>Before you post</span>
                <b>Check the fit</b>
              </div>
              <div className="zt-mini">
                <div className="zt-mark">R</div>
                <div>
                  <strong>Reddit is unforgiving</strong>
                  <span>Community fit comes first</span>
                </div>
              </div>
              <p>A useful Reddit plan starts with the subreddit, the buyer objection, and whether posting is even the right move.</p>
              <div className="service-card-links">
                <span>Subreddit fit</span>
                <span>Post risk</span>
                <span>Buyer language</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="divider">
          <div className="narrow guide-body">
            {content.sections.map((section, index) => (
              <div key={section.heading} className="guide-block">
                <span className="eyebrow">0{index + 1}</span>
                <h2 className="block">{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{linkify(paragraph)}</p>)}
                {section.bullets?.length ? (
                  <ul className="guide-list">
                    {section.bullets.map((bullet) => <li key={bullet}>{linkify(bullet)}</li>)}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="service-approach">
          <div className="wrap">
            <div className="approach-head">
              <span className="eyebrow">Safe path</span>
              <h2>Reddit works when the post fits the community before it tries to help the brand.</h2>
            </div>
            <div className="approach-grid">
              {['Read the community first', 'Use real buyer language', 'Post only when the answer is useful'].map((item) => (
                <article key={item}>
                  <div className="approach-dot full" />
                  <h3>{item}</h3>
                  <p>{item === 'Read the community first' ? 'Rules, moderator patterns, and past removals decide the plan.' : item === 'Use real buyer language' ? 'The best posts come from objections and questions already visible in the subreddit.' : 'Sometimes the right move is a page fix or comment strategy before a post.'}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProofWall topic="reddit" limit={4} title="Proof that community visibility can turn into real reach." />
        <ResultsGrid topic="reddit" title="Selected Reddit and community-search results." />

        <RelatedPages
          title="Related Reddit pages."
          lede="These pages help you move from one Reddit problem to the next practical decision."
          links={relatedLinks}
        />

        <ContactCTA
          subject={`New Reddit Support Request: ${content.title}`}
          title={content.cta}
          body="Send the site, subreddit, or post idea. I will review the risk and reply with the practical first step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
