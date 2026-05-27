import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { YOUTUBE_VIDEOS } from '../constants-videos';
import { VideoGrid } from './YouTubeEmbed';
import { SOCIAL_LINKS } from '../constants';
import { ContactCTA } from './ContactCTA';
import { RelatedPages } from './ConversionSections';

export const VideosPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'SEO Videos | Zechariah Tokar',
      description: 'Watch Zechariah Tokar SEO videos about AI SEO, B2B SEO, SaaS SEO, Google AI Overviews, and search visibility.',
      path: '/videos',
    });
  }, []);

  return (
    <>
      <HeadSEO
        title="SEO Videos | Zechariah Tokar"
        description="Watch Zechariah Tokar SEO videos about AI SEO, B2B SEO, SaaS SEO, Google AI Overviews, and search visibility."
        path="/videos"
      />

      <div className="gp">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>Videos
        </div>

        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">SEO videos</span>
            <h1>Watch the SEO thinking before you hire me.</h1>
            <p className="answer">
              These videos give buyers a faster way to see how I think about AI SEO, B2B search, SaaS visibility, Reddit, and Google AI Overviews.
            </p>
            <div className="shero-actions">
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open YouTube channel <span className="arrow">↗</span></a>
              <a href="#contact" className="btn btn-ghost">Send your site</a>
            </div>
          </div>
        </section>

        <section className="divider">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Featured topics</span>
              <h2>Practical search visibility ideas.</h2>
              <p className="lede">Use the videos to vet how I think. Use the form if you want the work applied to your own site.</p>
            </div>
            <VideoGrid
              videos={YOUTUBE_VIDEOS.map((video) => ({
                ...video,
                thumbnail: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
              }))}
              columns={3}
            />
          </div>
        </section>

        <RelatedPages
          title="Related pages after watching."
          lede="These pages connect the video topics to the services and proof."
          links={[
            { label: 'AI Search Visibility', path: '/ai-seo-consultant-israel', type: 'Service', body: 'For brands that need to show up in AI answers.' },
            { label: 'B2B SEO', path: '/b2b-seo-israel', type: 'Service', body: 'For companies that need buyer-intent pages, not just content volume.' },
            { label: 'Reviews and results', path: '/reviews-results', type: 'Proof', body: 'Recommendations and public results to vet the work.' },
          ]}
        />

        <ContactCTA
          subject="New Inquiry from Videos Page"
          title="Want this thinking applied to your site?"
          body="Send the site, I review the issue, then I reply with the practical first step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
