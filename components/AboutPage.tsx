import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';
import { ProofWall, RelatedPages } from './ConversionSections';
import { LeanHero } from './lean/Blocks';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'About Zechariah Tokar | Search Visibility Consultant',
      description:
        'Zechariah Tokar is a search visibility consultant who gets companies in the US and English-speaking markets found in Google, AI answers and Reddit. Results for named clients.',
      path: '/about',
    });
  }, []);

  return (
    <>
      <HeadSEO
        title="About Zechariah Tokar | Search Visibility Consultant"
        description="Zechariah Tokar is a search visibility consultant who gets companies in the US and English-speaking markets found in Google, AI answers and Reddit. Results for named clients."
        path="/about"
      />

      <div className="gp">
      </div>
      <div className="lp">
        <LeanHero
          h1="About Zechariah Tokar"
          answer="Zechariah Tokar is a search visibility consultant who gets companies in the US and other English-speaking markets found in Google, AI answers and Reddit. He is based in Israel, writes in native US English, and does the strategy and the work himself."
          photo={{ src: '/images/zechariah-tokar-hat-suit.webp', w: 600, h: 876, alt: 'Zechariah Tokar in a black hat and suit, outdoors', pos: 'center 20%', caption: 'Zechariah Tokar' }}
          glance={[
            ['Works on', '[AI SEO](/ai-seo-services), [Reddit marketing](/reddit-marketing-services), [local SEO](/local-seo-services) and [SEO consulting](/seo-services-israel)'],
            ['Results', 'ZStander named first in ChatGPT and +300% Google sales; a 405,000-view Reddit post; a client at the top of the Morristown, NJ map pack'],
            ['Trusted by', '40+ growth-focused companies; reviews from named clients on [the reviews page](/reviews-results)'],
            ['Find him on', '[LinkedIn](https://www.linkedin.com/in/zechariah-tokar-167b7672/), [YouTube](https://www.youtube.com/@Zechariah_T) and [X](https://x.com/ZackTokar)'],
          ]}
          secondary={{ label: 'See the results', href: '/case-studies' }}
        />
      </div>
      <div className="gp">

        <section className="authority">
          <div className="wrap">
            <div><span className="eyebrow">Point of view</span></div>
            <p className="big">
              My approach is simple. Look at the site, find the pages closest to leads or sales, fix what is unclear, and build from there. If a task should be done now, I will say that. If it is a distraction, I will say that too.
            </p>
          </div>
        </section>

        <section className="divider">
          <div className="wrap">
            <div className="svc-grid">
              {[
                ['What I usually fix', 'Unclear service pages, weak titles, technical SEO issues, content gaps, local visibility, and pages that do not bring enough inquiries.'],
                ['Who it fits', 'B2B companies, local businesses, ecommerce stores, agencies that need senior SEO help, and teams that want clear execution.'],
                ['How to start', 'Send the site and the problem. I will look at the likely work and quote the hours before anything starts.'],
              ].map(([title, body]) => (
                <article className="svc" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProofWall topic="general" limit={6} />

        <RelatedPages
          title="Useful pages before you reach out."
          lede="If you want to vet the work first, these pages give the clearest picture."
          links={[
            { label: 'Reviews and results', path: '/reviews-results', type: 'Proof', body: 'Recommendations, selected results, and places to vet my work.' },
            { label: 'Case studies', path: '/case-studies', type: 'Case studies', body: 'Specific examples across ecommerce, local, AI search, and Reddit.' },
            { label: 'SEO services', path: '/seo-services-israel', type: 'Services', body: 'The full menu of SEO services and starting points.' },
          ]}
        />

        <ContactCTA
          subject="New Inquiry from About Page"
          title="Send the site and what you want SEO to fix first."
          body="Send the site, I review the issue, then I reply with the practical first step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
