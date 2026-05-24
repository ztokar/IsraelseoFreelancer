import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { REVIEWS } from '../constants';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ProfileAvatar } from './ProfileAvatar';
import { SocialIconLinks } from './SocialIconLinks';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'About Zechariah Tokar | SEO Freelancer Israel',
      description:
        'About Zechariah Tokar, a freelance SEO consultant in Israel helping companies with SEO strategy, content, technical SEO, local SEO, ecommerce SEO, and AI search visibility.',
      path: '/about',
    });
  }, []);

  return (
    <>
      <HeadSEO
        title="About Zechariah Tokar | SEO Freelancer Israel"
        description="About Zechariah Tokar, a freelance SEO consultant in Israel helping companies with SEO strategy, content, technical SEO, local SEO, ecommerce SEO, and AI search visibility."
        path="/about"
      />

      <div className="bg-[#f6f7f2]">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">About</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
                I'm Zechariah Tokar, a freelance SEO consultant in Israel.
              </h1>
              <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-slate-600">
                <p>
                  I help companies that want practical SEO work without an agency layer. Most of my work is hands-on:
                  service pages, SEO writing, technical audits, local SEO, Shopify and ecommerce SEO, B2B SEO, AI search
                  visibility, Reddit, YouTube, and authority work.
                </p>
                <p>
                  My approach is simple. Look at the site, find the pages closest to leads or sales, fix what is unclear,
                  and build from there. If a task should be done now, I will say that. If it is a distraction, I will say
                  that too.
                </p>
                <p>
                  The simplest way to start is a quick consultation. Send the site, tell me what you
                  need help with, and I will reply with the likely scope and a clear first step.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#hire"
                  className="inline-flex items-center justify-center rounded-lg bg-[#108a00] px-7 py-4 text-base font-bold text-white shadow-[0_16px_34px_rgba(16,138,0,0.18)] hover:bg-[#0b6f00]"
                >
                  Request SEO quote
                </a>
                <NavLink
                  to="/seo-services-israel"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 hover:border-[#108a00] hover:text-[#108a00]"
                >
                  Browse services
                </NavLink>
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-[#fbfbf8] p-6">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
                <ProfileAvatar size="lg" />
                <div>
                  <p className="text-2xl font-bold text-slate-950">Zechariah Tokar</p>
                  <p className="text-sm font-semibold text-slate-500">Freelance SEO consultant</p>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#108a00]">Find me online</p>
                <div className="mt-4">
                  <SocialIconLinks />
                </div>
              </div>
              <blockquote className="mt-6 rounded-xl border border-emerald-100 bg-white p-4">
                <p className="text-sm leading-6 text-slate-700">"{REVIEWS[0].quote}"</p>
                <footer className="mt-3 text-sm font-bold text-slate-950">{REVIEWS[0].name}</footer>
              </blockquote>
            </aside>
          </div>
        </header>

        <section className="bg-[#f6f7f2] py-12">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              ['What I usually fix', 'Unclear service pages, weak titles, technical SEO issues, content gaps, local visibility, and pages that do not bring enough inquiries.'],
              ['Who it fits', 'B2B companies, local businesses, ecommerce stores, agencies that need senior SEO help, and teams that want clear execution.'],
              ['How to start', 'Send the site and the problem. I will look at the likely work and quote the hours before anything starts.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-bold text-slate-950">{title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
