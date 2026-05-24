import React, { useEffect } from 'react';
import { Youtube } from 'lucide-react';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { YOUTUBE_VIDEOS } from '../constants-videos';
import { VideoGrid } from './YouTubeEmbed';
import { SOCIAL_LINKS } from '../constants';

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

      <main className="bg-[#f6f7f2] text-slate-900">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-[#0BA66C]">
                <Youtube className="h-4 w-4" />
                SEO videos
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
                Watch the SEO thinking before you hire me.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                These videos preserve the old site’s tutorial section and give buyers a faster way to see how I think about AI SEO, B2B search, SaaS visibility, Reddit, and Google AI Overviews.
              </p>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#0BA66C] px-7 py-4 text-base font-bold text-white shadow-[0_16px_34px_rgba(11,166,108,0.18)] hover:bg-[#0A7B55]"
              >
                Open YouTube channel
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#fbfbf8] p-5">
              <div className="rounded-xl bg-slate-950 p-5 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Featured topics</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {['AI citations', 'B2B SEO', 'SaaS visibility', 'Reddit signals'].map((topic) => (
                    <div key={topic} className="rounded-lg bg-white/10 px-4 py-3 text-sm font-bold">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <VideoGrid
            videos={YOUTUBE_VIDEOS.map((video) => ({
              ...video,
              thumbnail: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
            }))}
            columns={3}
          />
        </section>
      </main>
    </>
  );
};
