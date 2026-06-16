import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

const TITLE = 'Recommended SEO Partners | Web Design, Branding and Marketing Referrals | Zechariah Tokar';
const DESC = 'A short list of partners Zechariah Tokar recommends for website design, branding, copywriting, social media, and related work that supports SEO.';

const recommendations = [
  {
    category: 'Website design',
    title: 'Web of Creativity',
    path: '/recommendations/web-designer-seo-web-of-creativity',
    image: '/images/blog-web-designer-seo-recommendation.jpg',
    description: 'The web designer I recommend when a client needs a new website or redesign that can support strong SEO from the start.',
  },
];

export const RecommendationsPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({ title: TITLE, description: DESC, path: '/recommendations' });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path="/recommendations" />
      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Recommendations
        </div>

        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">Recommended partners</span>
            <h1 style={{ maxWidth: '18ch' }}>People I recommend when SEO needs the right support.</h1>
            <p className="answer">
              SEO often depends on the work around it: website design, branding, copywriting, social media, development, and strategy. These are partners I recommend when the project needs help outside my direct SEO work.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Start here</span>
              <h2>The first recommendation.</h2>
              <p className="lede">
                I am starting this section with website design because the site foundation affects how much SEO can do later.
              </p>
            </div>

            <div className="blog-grid">
              {recommendations.map((item) => (
                <NavLink className="post" to={item.path} key={item.path}>
                  <div className="pimg">
                    <img src={item.image} alt="SEO-friendly website design recommendation" />
                    <div className="grad" />
                  </div>
                  <div className="pbody">
                    <div className="meta"><span className="cat">{item.category}</span><span>Partner recommendation</span></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="narrow">
            <h2 className="block">How I use this list</h2>
            <p>
              I do not recommend a partner just because they offer a related service. I recommend people when their work makes the SEO job stronger, cleaner, or easier to build on.
            </p>
            <p>
              If your site needs a service outside SEO and I know someone who fits the project, I will point you in the right direction.
            </p>
            <p>
              <a href="https://webofcreativity.com/" target="_blank" rel="noopener noreferrer">
                Visit Web of Creativity <ExternalLink size={15} style={{ display: 'inline', verticalAlign: '-2px', marginLeft: '4px' }} />
              </a>
            </p>
          </div>
        </section>
      </div>

      <ContactCTA
        subject="New Inquiry from Recommendations Hub"
        title="Need SEO plus the right support around it?"
        body="Send the site and what you are trying to build. I will tell you what should come first and whether SEO, design, or another partner makes the most sense."
      />
    </>
  );
};
