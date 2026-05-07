import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle, Clock3 } from 'lucide-react';
import { PRICING_SUMMARY, REVIEWS, SERVICE_SPOKES, SOCIAL_LINKS } from '../constants';
import { SpokeService } from '../types';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ProtectedForm } from './ProtectedForm';
import { ProfileAvatar } from './ProfileAvatar';
import { SocialIconLinks } from './SocialIconLinks';

interface SpokeServicePageProps {
  content: SpokeService;
}

export const SpokeServicePage: React.FC<SpokeServicePageProps> = ({ content }) => {
  useEffect(() => {
    updatePageSEO({
      title: `${content.seoTitle} | Zechariah Tokar`,
      description: content.metaDescription,
      path: `/${content.slug}`,
    });
  }, [content]);

  const relatedCards = SERVICE_SPOKES.filter((service) =>
    content.related.some((label) => service.title.toLowerCase().includes(label.toLowerCase().split(' ')[0]))
  ).filter((service) => service.slug !== content.slug).slice(0, 3);

  return (
    <>
      <HeadSEO
        title={`${content.seoTitle} | Zechariah Tokar`}
        description={content.metaDescription}
        path={`/${content.slug}`}
      />

      <main className="bg-[#f6f7f2] text-slate-900">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8 lg:py-14">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-[#108a00]">
                  {content.eyebrow}
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600">
                  Quoted by hours
                </span>
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{content.intro}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#hire"
                  className="inline-flex items-center justify-center rounded-lg bg-[#108a00] px-7 py-4 text-base font-bold text-white shadow-[0_16px_34px_rgba(16,138,0,0.18)] hover:bg-[#0b6f00]"
                >
                  Request SEO quote
                </a>
                <NavLink
                  to={content.parentPath}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 hover:border-[#108a00] hover:text-[#108a00]"
                >
                  View {content.parentLabel}
                </NavLink>
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-[#fbfbf8] p-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                <ProfileAvatar size="md" />
                <div>
                  <p className="text-lg font-bold text-slate-950">Zechariah Tokar</p>
                  <p className="text-sm font-semibold text-slate-500">Freelance SEO consultant</p>
                </div>
              </div>
              <div className="mt-5 rounded-xl bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Clock3 className="h-4 w-4 text-[#108a00]" />
                  Hourly range
                </div>
                <p className="mt-1 text-2xl font-bold text-slate-950">{PRICING_SUMMARY.hourly}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Send the site and I will quote the likely hours.</p>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">{content.bestFor}</p>
              <div className="mt-5">
                <SocialIconLinks compact />
              </div>
            </aside>
          </div>
        </section>

        <section className="border-b border-slate-200 py-12">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">What I handle</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">A small scope before a bigger commitment.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Use this page to see whether the service fits what you need, then send the site for a practical quote.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.handles.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#108a00]" />
                  <span className="font-semibold leading-6 text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-12">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <article className="rounded-2xl bg-[#f6f7f2] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">Relevant result</p>
              <p className="mt-4 text-xl font-semibold leading-8 text-slate-900">{content.proof}</p>
            </article>
            <aside className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                  {REVIEWS[0].initial}
                </div>
                <div>
                  <p className="font-bold text-slate-950">{REVIEWS[0].name}</p>
                  <p className="text-xs font-semibold text-slate-500">{REVIEWS[0].role}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-base leading-7 text-slate-700">"{REVIEWS[0].quote}"</blockquote>
            </aside>
          </div>
        </section>

        {relatedCards.length > 0 && (
          <section className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Related service pages</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedCards.map((service) => (
                  <NavLink key={service.slug} to={`/${service.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#108a00]">
                    <p className="text-sm font-semibold text-[#108a00]">{service.eyebrow}</p>
                    <h3 className="mt-2 text-xl font-bold text-slate-950">{service.title}</h3>
                  </NavLink>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="hire" className="bg-slate-950 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Request a quote</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{content.cta}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                I quote SEO work by expected hours at {PRICING_SUMMARY.hourly}. Send the site and I will reply with a practical next step.
              </p>
            </div>
            <div className="mt-9 rounded-2xl bg-white p-6 shadow-2xl md:p-8">
              <ProtectedForm
                formspreeEndpoint="https://formspree.io/f/mpwvyzbr"
                subject={`New SEO Quote Request: ${content.title}`}
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
