import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CASE_STUDIES, REVIEWS, SOCIAL_LINKS } from '../constants';
import { ProtectedForm } from './ProtectedForm';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ProfileAvatar } from './ProfileAvatar';
import { SocialIconLinks } from './SocialIconLinks';

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

      <main className="bg-[#f6f7f2] text-slate-900">
        <section className="border-b border-slate-200 bg-[#f6f7f2]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8 lg:py-14">
            <div>
              <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700">
                SEO freelancer proof hub
              </span>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Reviews, selected results, and public places to vet my SEO work.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                SEO is easy to oversell. This page keeps the proof simple: client review snippets, a few selected outcomes, and links where you can judge my thinking before you hire me.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#hire"
                  className="inline-flex items-center justify-center rounded-lg bg-[#108a00] px-7 py-4 text-base font-bold text-white shadow-[0_16px_34px_rgba(16,138,0,0.18)] hover:bg-[#0b6f00]"
                >
                  Request SEO quote
                </a>
                <a
                  href={SOCIAL_LINKS.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 hover:border-[#108a00] hover:text-[#108a00]"
                >
                  Book a call
                </a>
              </div>
            </div>

            <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-4">
                <ProfileAvatar size="md" />
                <div>
                  <p className="text-lg font-bold text-slate-950">Zechariah Tokar</p>
                  <p className="text-sm text-slate-500">Freelance SEO consultant</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">How to start</p>
                  <p className="font-bold text-slate-950">Book a consultation</p>
                </div>
              </div>
              <p className="mt-5 rounded-lg bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                Best fit: founders, marketers, local businesses, ecommerce stores, and B2B teams that want direct SEO help without an agency layer.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Client reviews</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">What people say after working with me</h2>
            </div>
            <NavLink className="text-sm font-bold text-[#108a00] hover:text-[#0b6f00]" to="/seo-services-israel">
              View SEO services
            </NavLink>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <article key={review.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-base font-bold text-white">
                    {review.initial}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-slate-950">{review.name}</h3>
                      {review.linkedinVerified && (
                        <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">LinkedIn proof</span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-500">{review.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-700">"{review.quote}"</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Selected results</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Selected SEO results</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {CASE_STUDIES.map((study) => (
                <article key={study.client} className="rounded-xl bg-[#f6f7f2] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">{study.client}</p>
                      <p className="mt-2 text-4xl font-bold tracking-tight text-slate-950">{study.metric}</p>
                    </div>
                    <span className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                      {study.industry}
                    </span>
                  </div>
                  <p className="mt-3 font-semibold text-slate-800">{study.context}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{study.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Find me online</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Check my public profiles</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                You can see my LinkedIn, YouTube, Reddit, X, and email before you decide whether to reach out.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <SocialIconLinks />
            </div>
          </div>
        </section>

        <section id="hire" className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Hire Zechariah</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Send the site and what you want SEO to fix first.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                You do not need a long brief. Send the URL, choose the service area, and I will quote the likely hours.
              </p>
              <div className="mt-6 text-sm text-slate-700">
                <div className="rounded-lg bg-slate-50 p-4">
                  <span className="block font-bold text-slate-950">Book a consultation or send your site</span>
                  Tell me what you want SEO to fix first and I will reply with a clear scope.
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f6f7f2] p-5 sm:p-6">
              <ProtectedForm
                formspreeEndpoint="https://formspree.io/f/mpwvyzbr"
                subject="New Hire Request: Reviews Results Page"
                submitButtonText="Request SEO quote"
                showMessage={true}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
