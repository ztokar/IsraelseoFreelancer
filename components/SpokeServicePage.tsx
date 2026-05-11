import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle, Clock3, XCircle } from 'lucide-react';
import { PRICING_SUMMARY } from '../constants';
import { SpokeService } from '../types';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ProtectedForm } from './ProtectedForm';
import { ProfileAvatar } from './ProfileAvatar';
import { ServiceThumbnail } from './ServiceThumbnail';
import { SocialIconLinks } from './SocialIconLinks';

interface SpokeServicePageProps {
  content: SpokeService;
}

export const SpokeServicePage: React.FC<SpokeServicePageProps> = ({ content }) => {
  const relatedPathByLabel: Record<string, string> = {
    'AI SEO / GEO': '/ai-seo-consultant-israel',
    'SEO social posting': '/content-marketing-for-seo',
    'Content marketing for SEO': '/content-marketing-for-seo',
    'Reddit SEO': '/reddit-seo',
    'Reddit marketing services': '/reddit-marketing-services',
    'Reddit marketing expert': '/reddit-marketing-expert',
    'Reddit posting service': '/reddit-posting-service',
    'SEO services': '/seo-services-israel',
    'SEO consulting': '/seoconsulting',
    'B2B SEO': '/b2b-seo-israel',
    'SEO writing': '/blog-content-seo',
    'Technical SEO audit': '/technical-seo-audit',
    'Backlinks': '/link-building-services',
    'Google Business Profile SEO': '/google-business-profile-seo',
    'Local citations / directories': '/local-citations-directories',
  };

  useEffect(() => {
    updatePageSEO({
      title: content.seoTitle,
      description: content.metaDescription,
      path: `/${content.slug}`,
    });
  }, [content]);

  return (
    <>
      <HeadSEO
        title={content.seoTitle}
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
              {content.fit && (
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{content.fit}</p>
              )}
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
              <ServiceThumbnail visual={content.visual || 'reddit'} title={content.eyebrow} />
              <div className="mt-5 flex items-center gap-3 border-b border-slate-200 pb-5">
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
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                {content.handleTitle || 'Clear scope before work starts.'}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {content.handleIntro || 'Use this page to see whether the service fits what you need, then send the site for a practical quote.'}
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

        {(content.avoids?.length || content.related.length) && (
          <section className="border-b border-slate-200 bg-white py-12">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
              {content.avoids?.length ? (
                <div className="rounded-2xl border border-slate-200 bg-[#fbfbf8] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">What I avoid</p>
                  <div className="mt-5 grid gap-3">
                    {content.avoids.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4">
                        <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                        <span className="font-semibold leading-6 text-slate-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Connected pages</p>
                <p className="mt-4 text-base leading-7 text-slate-300">{content.proof}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {content.related.map((item) => (
                    <NavLink
                      key={item}
                      to={relatedPathByLabel[item] || content.parentPath}
                      className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white hover:border-emerald-300 hover:text-emerald-200"
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
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
