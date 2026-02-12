import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { VideoGrid } from './YouTubeEmbed';
import { YOUTUBE_VIDEOS } from '../constants-videos';

export const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'B2B SEO Insights | Israel SEO Freelancer Blog';
  }, []);

  const blogPosts = [
    {
      slug: 'israel-b2b-seo-pipeline',
      title: 'Israel B2B SEO Services: How to Choose a Partner That Drives Pipeline (Not Just Traffic)',
      excerpt: 'Most Israeli B2B companies targeting English markets run into the same problem—lots of content, decent traffic, zero pipeline contribution. Here\'s how to fix that.',
      date: 'February 2026',
      readTime: '12 min read',
      category: 'B2B SEO Strategy',
      image: '/images/blog-b2b-seo-pipeline.jpg',
    },
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <header className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-primary/5">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">SEO Insights & Strategy</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              B2B SEO
              <br />
              <span className="text-primary">Insights</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Strategic insights on B2B SEO, demand capture, and pipeline generation for companies targeting English-speaking markets.
            </p>
          </div>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <NavLink
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="scroll-trigger group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-tight line-clamp-3">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm font-semibold text-primary mt-2">
                    Read Article
                    <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm mb-6">
              <span className="material-symbols-outlined text-sm text-primary">play_circle</span>
              <span className="text-sm font-medium text-primary">Video Tutorials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Learn from My Videos
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Practical SEO strategies and tactics you can implement right away
            </p>
          </div>

          <VideoGrid
            videos={YOUTUBE_VIDEOS.map(video => ({
              ...video,
              thumbnail: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
            }))}
            columns={3}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialsCarousel />
        </div>
      </section>
    </div>
  );
};
