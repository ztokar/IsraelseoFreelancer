import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

const blogPosts = [
  { slug: 'claude-code-content-marketing-startups', title: 'Using Claude Code For Content Marketing For Startups', excerpt: 'How AI-assisted workflows can turn product knowledge into useful search pages without losing the human point of view.', date: 'February 2026', readTime: '12 min read', category: 'AI Content Strategy', image: '/images/blog-claude-code-content-marketing.jpg' },
  { slug: 'israeli-tech-seo-gap', title: 'The Israeli Tech SEO Gap: Why Startups Struggle to Rank in US Markets', excerpt: 'Why strong products can still be invisible in US search, and what changes when the page is written for the buyer.', date: 'February 2026', readTime: '11 min read', category: 'Israeli Tech Ecosystem', image: '/images/blog-israeli-tech-seo-gap.jpg' },
  { slug: 'seo-drives-pipeline-b2b', title: 'How SEO Drives Pipeline for B2B Companies', excerpt: 'A practical look at SEO that supports sales conversations instead of only reporting traffic.', date: 'February 2026', readTime: '10 min read', category: 'B2B Pipeline Strategy', image: '/images/blog-seo-drives-pipeline-b2b.jpg' },
  { slug: 'why-israeli-b2b-fail-seo', title: 'Why Most Israeli B2B Companies Fail at SEO', excerpt: 'The common mistakes that keep B2B companies from turning search visibility into qualified demand.', date: 'February 2026', readTime: '12 min read', category: 'B2B SEO Strategy', image: '/images/blog-why-israeli-b2b-fail-seo.jpg' },
  { slug: 'seo-israeli-cybersecurity-companies', title: 'SEO for Israeli Cybersecurity Companies Competing Globally', excerpt: 'How cybersecurity companies can use technical searches, integration pages, and trust signals to compete globally.', date: 'February 2026', readTime: '11 min read', category: 'Cybersecurity SEO', image: '/images/blog-cybersecurity-seo.jpg' },
  { slug: 'seo-israeli-saas-companies-us-markets', title: 'SEO for Israeli SaaS Companies Targeting US Markets', excerpt: 'How SaaS companies can reach buyers through comparison, alternative, and use-case searches.', date: 'February 2026', readTime: '10 min read', category: 'SaaS SEO', image: '/images/blog-saas-seo.jpg' },
  { slug: 'israel-b2b-seo-pipeline', title: 'Israel B2B SEO Services: How to Choose a Partner That Drives Pipeline', excerpt: 'What to look for when organic search needs to support real sales opportunities.', date: 'February 2026', readTime: '12 min read', category: 'B2B SEO Strategy', image: '/images/blog-b2b-seo-pipeline.jpg' },
  { slug: 'geo-ai-generative-engine-optimization', title: 'Geo AI: The New SEO Israeli Companies Cannot Ignore', excerpt: 'What AI search changes, what is hype, and how brands can become the answer.', date: 'February 2026', readTime: '2 min read', category: 'AI Search', image: '/images/blog-b2b-seo-pipeline.jpg' },
  { slug: 'seo-reputation-management', title: 'SEO Reputation Management: Control What Google Shows About You', excerpt: 'How to build positive search visibility when brand search is influencing sales calls.', date: 'February 2026', readTime: '8 min read', category: 'Reputation Management', image: '/images/blog-b2b-seo-pipeline.jpg' },
  { slug: 'ai-search-2026-updates', title: 'AI Search 2026: The 6 Updates Israeli Companies Must Prepare For', excerpt: 'How AI answers change visibility, clicks, and the kind of proof a brand needs.', date: 'February 2026', readTime: '7 min read', category: 'AI Search', image: '/images/blog-ai-search-2026.jpg' },
  { slug: 'hebrew-seo-checkers-free-tools', title: 'Best Free SEO Checkers for Hebrew Websites & Israeli Startups in 2026', excerpt: 'A practical look at free SEO tools for Hebrew sites and Israeli startups.', date: 'February 2026', readTime: '8 min read', category: 'Hebrew SEO', image: '/images/blog-hebrew-seo-checkers.jpg' },
];

export const BlogPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'B2B SEO Insights | Israel SEO Freelancer Blog',
      description: 'SEO strategies for B2B companies, Israeli tech startups, and businesses targeting US markets. Practical guides on technical SEO, content marketing, and AI search.',
      path: '/blog',
    });
  }, []);

  return (
    <>
      <HeadSEO title="B2B SEO Insights | Israel SEO Freelancer Blog" description="SEO strategies for B2B companies, Israeli tech startups, and businesses targeting US markets. Practical guides on technical SEO, content marketing, and AI search." path="/blog" />
      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Blog
        </div>

        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">SEO insights</span>
            <h1>Notes on modern search, AI answers, and buyer-intent SEO.</h1>
            <p className="answer">These articles are for founders and marketers trying to understand why organic search is not turning into leads, and what to fix first.</p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Send your site <span className="arrow">↗</span></a>
              <NavLink className="btn btn-ghost" to="/seo-services-israel">Browse services</NavLink>
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Articles</span>
              <h2>Choose the problem you are trying to solve.</h2>
              <p className="lede">The blog is useful for problem-aware buyers. Each article should leave a reader with a clearer path into the matching service or proof page.</p>
            </div>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <NavLink key={post.slug} to={`/blog/${post.slug}`} className="post">
                  <div className="pimg">
                    <img src={post.image} alt={post.title} />
                    <div className="grad" />
                  </div>
                  <div className="pbody">
                    <div className="meta"><span className="cat">{post.category}</span><span>{post.readTime}</span></div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <section className="authority">
          <div className="wrap">
            <div><span className="eyebrow">Reader path</span></div>
            <p className="big">If an article describes the problem you are seeing, the next step is not more reading forever. Send the site, and I will tell you what I would fix first.</p>
          </div>
        </section>

        <ContactCTA
          subject="New Inquiry from Blog"
          title="Want me to look at your site?"
          body="Send the site, I review the issue, then I reply with the practical first step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
