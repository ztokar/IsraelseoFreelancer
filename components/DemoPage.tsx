import React, { useEffect } from 'react';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { YouTubeEmbed, VideoCard, VideoGrid } from './YouTubeEmbed';

export const DemoPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Component Demo | Israel SEO Freelancer';
  }, []);

  // Example videos from Israel B2B SEO channel
  const exampleVideos = [
    {
      videoId: 'dQw4w9WgXcQ', // Placeholder - replace with real video IDs
      title: 'B2B SEO Strategy for Israeli Companies',
      description: 'Learn how to target US markets with strategic SEO planning and execution.',
      duration: '15:42',
      publishDate: 'February 2026',
    },
    {
      videoId: 'dQw4w9WgXcQ', // Placeholder
      title: 'Technical SEO Fundamentals',
      description: 'Core technical optimizations every B2B website needs for better rankings.',
      duration: '12:18',
      publishDate: 'January 2026',
    },
    {
      videoId: 'dQw4w9WgXcQ', // Placeholder
      title: 'Content Marketing That Converts',
      description: 'Create content that drives qualified leads and builds authority in your niche.',
      duration: '18:33',
      publishDate: 'January 2026',
    },
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <header className="relative min-h-[40vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-white to-slate-50">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Component <span className="text-primary">Demo</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Preview of the new testimonials carousel and YouTube video integration
          </p>
        </div>
      </header>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsCarousel autoPlayInterval={5000} />
        </div>
      </section>

      {/* YouTube Components Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: Basic Embed */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Basic YouTube Embed
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Simple, responsive video player with loading states
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed
                videoId="dQw4w9WgXcQ"
                title="SEO Tutorial Example"
              />
              <p className="text-sm text-slate-500 mt-4 text-center italic">
                Replace "dQw4w9WgXcQ" with your actual YouTube video ID
              </p>
            </div>
          </div>

          {/* Section 2: Video Card */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Video Card with Thumbnail
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Shows thumbnail first, loads video on click (better performance)
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <VideoCard
                videoId="dQw4w9WgXcQ"
                title="How to Build a B2B SEO Pipeline"
                description="Complete walkthrough of building an SEO strategy that drives qualified leads for B2B companies targeting US markets."
                duration="15:42"
                publishDate="February 2026"
              />
            </div>
          </div>

          {/* Section 3: Video Grid */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Video Grid
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Display multiple videos in a responsive grid layout
              </p>
            </div>

            <VideoGrid videos={exampleVideos} columns={3} />
          </div>

        </div>
      </section>

      {/* Implementation Notes */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Implementation Notes
          </h3>

          <div className="space-y-4 text-slate-700">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                Getting YouTube Video IDs
              </h4>
              <p className="text-sm">
                From URL: <code className="px-2 py-0.5 bg-white rounded text-primary font-mono text-xs">
                  https://www.youtube.com/watch?v=<strong>VIDEO_ID</strong>
                </code>
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  integration_instructions
                </span>
                How to Use
              </h4>
              <p className="text-sm mb-2">See INTEGRATION_GUIDE.md for complete examples of:</p>
              <ul className="text-sm space-y-1 ml-4 list-disc list-inside">
                <li>Adding testimonials to any page</li>
                <li>Embedding videos in blog posts</li>
                <li>Creating video grids</li>
                <li>Customization options</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">speed</span>
                Performance
              </h4>
              <p className="text-sm">
                VideoCard components only load the YouTube iframe when clicked, saving bandwidth and improving page load speed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
