import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ServiceContent } from '../types';
import { MARKETPLACE_SERVICES, PRICING_SUMMARY, REVIEWS, SOCIAL_LINKS } from '../constants';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ProtectedForm } from './ProtectedForm';
import { ProfileAvatar } from './ProfileAvatar';
import { SocialIconLinks } from './SocialIconLinks';
import { ServiceThumbnail } from './ServiceThumbnail';

interface ServicePageProps {
  content: ServiceContent;
}

export const ServicePage: React.FC<ServicePageProps> = ({ content }) => {
  const pageTitle = content.seoTitle || `${content.title} | Zechariah Tokar`;

  useEffect(() => {
    updatePageSEO({
      title: pageTitle,
      description: content.metaDescription || content.description,
      path: window.location.pathname,
    });
  }, [content, pageTitle]);

  const isServicesHub = content.slug === 'seo-services-israel';
  const relatedCards = isServicesHub ? MARKETPLACE_SERVICES : [];

  const visualBySlug: Record<string, string> = {
    'freelance-seo-israel': 'consulting',
    'b2b-seo-israel': 'b2b',
    seoconsulting: 'consulting',
    'content-marketing-for-seo': 'writing',
    'ai-seo-consultant-israel': 'ai',
    'technical-seo-audit': 'audit',
    'link-building-services': 'links',
    'seo-services-israel': 'monthly',
  };

  return (
    <>
      <HeadSEO
        title={pageTitle}
        description={content.metaDescription || content.description}
        path={`/${content.slug}`}
      />

      <div className="bg-[#f6f7f2]">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8 lg:py-14">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-[#108a00]">
                  {content.subtitle}
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600">
                  {content.timeline}
                </span>
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{content.description}</p>

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

            <aside id="pricing" className="rounded-2xl border border-slate-200 bg-[#fbfbf8] p-6">
              <ServiceThumbnail visual={visualBySlug[content.slug]} title={content.subtitle} />
              <div className="mt-5 flex items-center gap-3 border-b border-slate-200 pb-5">
                <ProfileAvatar size="md" />
                <div>
                  <p className="text-lg font-bold text-slate-950">Zechariah Tokar</p>
                  <p className="text-sm font-semibold text-slate-500">Freelance SEO consultant</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="flex items-center justify-between rounded-xl bg-white p-4">
                  <span className="text-sm font-semibold text-slate-500">Hourly rate</span>
                  <span className="text-2xl font-bold text-slate-950">{PRICING_SUMMARY.hourly}</span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600">{content.bestFor} Send the site and I will quote the likely hours.</p>
              <div className="mt-5">
                <SocialIconLinks compact />
              </div>
            </aside>
          </div>
        </header>

        <main>
          <section className="border-b border-slate-200 bg-[#f6f7f2] py-12">
            <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
              {[
                ['What you get', content.ugcIntro.what],
                ['Why it matters', content.ugcIntro.why],
                ['How I work', content.ugcIntro.how],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h2 className="text-xl font-bold text-slate-950">{title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-white py-12">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">What I can handle</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Clear scope before work starts.</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  The first step stays small enough to test quickly, then we expand if the work starts moving rankings, clicks, or leads.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.deliverables?.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#fbfbf8] p-4">
                    <span className="material-symbols-outlined text-[#108a00]">check_circle</span>
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {content.deepDive && (
            <section className="border-y border-slate-200 bg-white py-12">
              <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">How I think about it</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Practical SEO detail without the agency fog.</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    The page stays focused on the questions people usually have before hiring SEO help, with enough detail to decide whether the service fits.
                  </p>
                </div>
                <div className="grid gap-4">
                  {content.deepDive.map((section) => (
                    <article key={section.title} className="rounded-2xl border border-slate-200 bg-[#fbfbf8] p-5">
                      <h3 className="text-xl font-bold text-slate-950">{section.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-700">{section.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="border-y border-slate-200 bg-[#f6f7f2] py-12">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">{content.process.title}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {content.process.steps.map((step, index) => (
                    <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-sm font-bold text-[#108a00]">0{index + 1}</p>
                      <p className="mt-2 font-semibold leading-7 text-slate-800">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                    {REVIEWS[1].initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-slate-950">{REVIEWS[1].name}</p>
                      <span className="material-symbols-outlined text-base text-[#0A66C2]">verified</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500">{REVIEWS[1].role}</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-base leading-7 text-slate-700">"{REVIEWS[1].quote}"</blockquote>
              </aside>
            </div>
          </section>

          {relatedCards.length > 0 && (
            <section className="bg-white py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">
                      Service directory
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                      Choose the SEO service you need.
                    </h2>
                  </div>
                  <p className="max-w-xl text-base leading-7 text-slate-600">
                    Click into a service to see what I handle, what I check, and when it makes sense.
                  </p>
                </div>
                <div className={`mt-6 grid gap-4 ${isServicesHub ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3'}`}>
                  {relatedCards.map((service) => (
                    <NavLink key={`${service.title}-${service.path}`} to={service.path} className="rounded-2xl border border-slate-200 bg-[#fbfbf8] p-5 hover:border-[#108a00] hover:bg-white">
                      <ServiceThumbnail visual={service.visual} title={service.title} />
                      <p className="mt-4 text-sm font-semibold text-slate-500">{service.tag}</p>
                      <h3 className="mt-2 text-xl font-bold text-slate-950">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                    </NavLink>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section id="hire" className="bg-slate-950 py-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Hire Zechariah</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{content.cta}</h2>
              </div>
              <div className="mt-9 rounded-2xl bg-white p-6 shadow-2xl md:p-8">
                <ProtectedForm
                  formspreeEndpoint="https://formspree.io/f/mpwvyzbr"
                  subject={`New Hire Request: ${content.title}`}
                  submitButtonText="Request SEO quote"
                  showMessage={true}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
