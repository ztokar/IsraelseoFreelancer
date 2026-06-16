import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

const TITLE = 'The Web Designer I Recommend for Websites That Support Strong SEO | Zechariah Tokar';
const DESC = 'Zechariah Tokar recommends Rivka Neumann from Web of Creativity for strategic websites, branding, copywriting, and web design that supports SEO.';
const PATH = '/recommendations/web-designer-seo-web-of-creativity';

const fitItems = [
  'Are planning to launch a new website and want it built with SEO in mind',
  'Need a professional, strategic website rather than a basic template',
  'Want branding and web design handled by the same team',
  'Value clear communication and high-quality execution',
];

const standouts = [
  'They design websites with both user experience and search visibility in mind.',
  'They pay close attention to structure, speed, and mobile optimization.',
  'They offer branding and copywriting alongside web design, which helps create consistent messaging across the site.',
  'They work directly with clients and maintain high attention to detail throughout the project.',
];

export const RecommendedWebDesignerPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: TITLE,
      description: DESC,
      path: PATH,
      image: '/images/blog-web-designer-seo-recommendation.jpg',
      type: 'article',
    });
  }, []);

  return (
    <>
      <HeadSEO title={TITLE} description={DESC} path={PATH} image="/images/blog-web-designer-seo-recommendation.jpg" type="article" />
      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to="/recommendations">Recommendations</NavLink><span>/</span>Web of Creativity
        </div>

        <section className="shero">
          <div className="wrap shero-grid">
            <div>
              <span className="eyebrow">Website design recommendation</span>
              <h1 style={{ maxWidth: '19ch' }}>The Web Designer I Recommend for Websites That Support Strong SEO</h1>
              <p className="answer">
                When clients need a new website or redesign that will actually work well with SEO, the web designer I recommend is Rivka Neumann from Web of Creativity.
              </p>
              <div className="shero-actions">
                <a className="btn btn-primary" href="https://webofcreativity.com/" target="_blank" rel="noopener noreferrer">
                  Visit Web of Creativity <ExternalLink size={17} />
                </a>
                <NavLink className="btn btn-ghost" to="/recommendations">More recommendations</NavLink>
              </div>
            </div>
            <div className="service-card" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src="/images/blog-web-designer-seo-recommendation.jpg"
                alt="Illustration showing clear page hierarchy, mobile speed, brand design, and search visibility"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="narrow guide-body">
            <div className="guide-block">
              <h2 className="block">The Web Designer I Recommend</h2>
              <p>
                I have seen many websites over the years. Some look beautiful but make SEO unnecessarily difficult. Others are built with search visibility in mind from the start. Rivka consistently builds websites that fall into the second category.
              </p>
            </div>

            <div className="guide-block">
              <span className="eyebrow">Why it matters</span>
              <h2 className="block">Why Website Design Matters for SEO</h2>
              <p>
                Even the best SEO work can be limited by poor website structure, slow loading times, bad mobile experience, or unclear page hierarchy. A well-designed website makes technical SEO easier, improves user experience, and helps search engines understand your content better.
              </p>
              <p>
                This is especially important if you are building a new site or doing a major redesign. Getting the foundation right from the beginning saves time and delivers better long-term results.
              </p>
            </div>

            <div className="guide-block">
              <span className="eyebrow">Why Web of Creativity</span>
              <h2 className="block">Why I Recommend Web of Creativity</h2>
              <p>
                Rivka and her team at Web of Creativity focus on creating strategic, professional websites that are built to perform, not just look good. Here is what stands out about their work:
              </p>
              <ul className="guide-list">
                {standouts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Many of my clients who have worked with them ended up with websites that were much easier to optimize and performed better from the start.
              </p>
            </div>

            <div className="guide-block">
              <span className="eyebrow">Good fit</span>
              <h2 className="block">Who This Recommendation Is For</h2>
              <p>I typically recommend Web of Creativity to clients who:</p>
              <ul className="guide-list">
                {fitItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="guide-block">
              <span className="eyebrow">Design plus SEO</span>
              <h2 className="block">Why Good Design and Good SEO Work Better Together</h2>
              <p>
                The strongest results usually come when website design and SEO work together. A well-structured, fast-loading, and clearly organized website gives SEO a much better foundation to build on.
              </p>
              <p>
                When clients come to me with a poorly built site, we often spend extra time fixing structural issues before we can focus on content and visibility. Working with a designer who understands these needs from the beginning helps avoid that.
              </p>
            </div>

            <div className="guide-block">
              <span className="eyebrow">Next step</span>
              <h2 className="block">Talk to Web of Creativity</h2>
              <p>
                If you are planning to build a new website or redesign your current one and want it done properly from the start, I recommend reaching out to Rivka at Web of Creativity.
              </p>
              <p>
                <a href="https://webofcreativity.com/" target="_blank" rel="noopener noreferrer">
                  Visit their website here <ExternalLink size={15} style={{ display: 'inline', verticalAlign: '-2px', marginLeft: '4px' }} />
                </a>
              </p>
              <p>
                They can walk you through the process and help create a website that supports your SEO goals.
              </p>
            </div>
          </div>
        </section>
      </div>

      <ContactCTA
        subject="New Inquiry from Web Designer Recommendation Page"
        title="Need SEO before or after a redesign?"
        body="Send the site and what you are planning. I will tell you what should be handled before design, during the build, or after launch."
      />
    </>
  );
};
