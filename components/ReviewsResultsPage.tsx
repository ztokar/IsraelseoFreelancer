import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LINKEDIN_FEATURED_RESULTS, REVIEWS } from '../constants';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { SocialIconLinks } from './SocialIconLinks';
import { ContactCTA } from './ContactCTA';

export const ReviewsResultsPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'SEO Freelancer Reviews | Zechariah Tokar Results',
      description:
        'Read selected SEO freelancer reviews and results for Zechariah Tokar, including ecommerce, local SEO, and B2B examples.',
      path: '/reviews-results',
    });
  }, []);

  return (
    <>
      <HeadSEO
        title="SEO Freelancer Reviews | Zechariah Tokar Results"
        description="Read selected SEO freelancer reviews and results for Zechariah Tokar, including ecommerce, local SEO, and B2B examples."
        path="/reviews-results"
      />

      <main className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Reviews and results
        </div>

        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">SEO proof</span>
            <h1>Reviews, selected results, and public places to vet my work.</h1>
            <p className="answer">SEO is easy to oversell. This page keeps the proof simple: client recommendations, selected outcomes, and links where you can judge my thinking before you hire me.</p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Request SEO quote <span className="arrow-icon">↗</span></a>
              <NavLink className="btn btn-ghost" to="/seo-services-israel">Browse services</NavLink>
            </div>
          </div>
        </section>

        <section className="proof-cases">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Client recommendations</span>
              <h2>What people say after working with me.</h2>
            </div>
            <div className="review-wall">
              {REVIEWS.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-head">
                    <div className="review-initial">{review.initial}</div>
                    <div>
                      <h3>{review.name}</h3>
                      <p>{review.role}</p>
                    </div>
                  </div>
                  <blockquote>"{review.quote}"</blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="result-strip divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Selected results</span>
              <h2>SEO, local search, ecommerce, and AI visibility wins.</h2>
            </div>
            <div className="featured-result-grid">
              {LINKEDIN_FEATURED_RESULTS.map((item) => (
                <NavLink className="featured-result" to={item.path} key={item.title}>
                  <img src={item.image} alt={item.alt} />
                  <div>
                    <span>{item.title}</span>
                    <strong>{item.metric}</strong>
                    <p>{item.description}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="wrap split-copy">
            <div>
              <span className="eyebrow">Find me online</span>
              <h2>Check my public profiles.</h2>
            </div>
            <div className="copy-stack">
              <p className="lead-copy">You can see LinkedIn, YouTube, Reddit, X, and email before you decide whether to reach out.</p>
              <div className="profile-links-box">
                <SocialIconLinks />
              </div>
            </div>
          </div>
        </section>

        <ContactCTA
          subject="New Hire Request: Reviews Results Page"
          eyebrow="Hire Zechariah"
          title="Send the site and what you want SEO to fix first."
          body="You do not need a long brief. Send the URL and the issue you want solved, and I will reply with a clear next step."
          submitButtonText="Request SEO quote"
        />
      </main>
    </>
  );
};
