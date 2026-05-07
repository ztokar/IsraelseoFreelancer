import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CASE_STUDIES, CLIENT_LOGOS, MARKETPLACE_SERVICES, PRICING_SUMMARY, REVIEWS, SOCIAL_LINKS } from '../constants';
import { ProtectedForm } from './ProtectedForm';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ProfileAvatar } from './ProfileAvatar';
import { SocialIconLinks } from './SocialIconLinks';
import { ServiceThumbnail } from './ServiceThumbnail';
import { FEATURED_VIDEO } from '../constants-videos';
import { YouTubeEmbed } from './YouTubeEmbed';

const groupedServices = MARKETPLACE_SERVICES.reduce<Record<string, typeof MARKETPLACE_SERVICES>>((groups, service) => {
  const category = service.category || 'SEO services';
  groups[category] = groups[category] || [];
  groups[category].push(service);
  return groups;
}, {});

export const HomePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'SEO Freelancer Israel | Hire Direct SEO Help for More Rankings, Leads, Local Visibility, AI Search, Shopify SEO and B2B Growth | Zechariah Tokar',
      description:
        'Hire Zechariah Tokar for freelance SEO in Israel. SEO consults, writing, audits, local SEO, Shopify SEO, AI SEO, backlinks, Reddit, YouTube, and monthly SEO.',
      path: '/',
    });
  }, []);

  return (
    <>
      <HeadSEO
        title="SEO Freelancer Israel | Hire Direct SEO Help for More Rankings, Leads, Local Visibility, AI Search, Shopify SEO and B2B Growth | Zechariah Tokar"
        description="Hire Zechariah Tokar for freelance SEO in Israel. SEO consults, writing, audits, local SEO, Shopify SEO, AI SEO, backlinks, Reddit, YouTube, and monthly SEO."
        path="/"
      />

      <div className="bg-[#f6f7f2] text-slate-900">
        <header className="border-b border-slate-200 bg-[#f6f7f2]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_400px] lg:px-8 lg:py-14">
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700">
                  Available for SEO work
                </span>
                <span className="text-sm font-medium text-slate-500">Israel based. English-speaking markets.</span>
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Get more qualified SEO traffic without hiring a full agency.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                I help companies turn underperforming pages into clearer rankings, leads, local visibility, ecommerce traffic, AI search visibility, and buyer-ready content. Send the site and I will quote the likely hours.
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

              <div className="mt-7 flex flex-wrap gap-2">
                {['Technical SEO', 'Local SEO', 'Shopify SEO', 'AI SEO', 'Backlinks', 'Reddit SEO', 'YouTube SEO'].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <ProfileAvatar size="lg" />
                <div>
                  <p className="text-2xl font-bold text-slate-950">Zechariah Tokar</p>
                  <p className="text-sm font-medium text-slate-500">Freelance SEO consultant</p>
                  <div className="mt-2 flex items-center gap-1 text-sm font-semibold text-[#108a00]">
                    <span className="material-symbols-outlined text-base">verified</span>
                    Direct senior SEO work
                  </div>
                </div>
              </div>

              <div className="py-5">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs font-semibold text-slate-500">Rate</p>
                  <p className="mt-1 text-lg font-bold text-slate-950">{PRICING_SUMMARY.hourly}</p>
                </div>
              </div>

              <blockquote className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                <p className="text-base leading-7 text-slate-800">"{REVIEWS[0].quote}"</p>
                <footer className="mt-3 text-sm font-semibold text-slate-700">{REVIEWS[0].name}</footer>
              </blockquote>

              <div className="mt-5">
                <SocialIconLinks />
              </div>
            </aside>
          </div>
        </header>

        <section id="services" className="border-b border-slate-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">Services</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Browse the SEO work I can help with.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                Most SEO work is quoted by expected hours at {PRICING_SUMMARY.hourly}. You send the site, I review the likely scope, then I reply with a practical quote.
              </p>
            </div>

            <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
              {Object.keys(groupedServices).map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="shrink-0 rounded-full border border-slate-200 bg-[#fbfbf8] px-4 py-2 text-sm font-bold text-slate-700 hover:border-[#108a00] hover:text-[#108a00]"
                >
                  {category}
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-10">
              {Object.entries(groupedServices).map(([category, services]) => (
                <div key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-slate-950">{category}</h3>
                    <span className="hidden text-sm font-semibold text-slate-500 sm:inline">{services.length} services</span>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => (
                      <NavLink
                        key={`${service.title}-${service.path}`}
                        to={service.path}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#108a00] hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]"
                      >
                        <div className="p-3">
                          <ServiceThumbnail visual={service.visual} title={service.title} />
                        </div>
                        <div className="px-5 pb-5">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#108a00]">{service.tag}</p>
                          </div>
                          <h4 className="mt-3 text-xl font-bold leading-6 text-slate-950">{service.title}</h4>
                          <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">{service.description}</p>
                          <div className="mt-5 flex items-center justify-end border-t border-slate-100 pt-4">
                            <span className="text-sm font-bold text-[#108a00]">View service</span>
                          </div>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f7f2] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">Results</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Real people, real outcomes.
                </h2>
              </div>
              <NavLink to="/reviews-results" className="font-bold text-[#108a00] hover:text-[#0b6f00]">
                See reviews and results
              </NavLink>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-500 sm:grid-cols-3 lg:grid-cols-5">
              {CLIENT_LOGOS.map((logo) => (
                <div key={logo.name} className="flex min-h-[72px] items-center justify-center rounded-xl bg-[#fbfbf8] px-3 text-center">
                  <span className={logo.style}>{logo.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {REVIEWS.slice(0, 4).map((review) => (
                <article key={review.name} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                      {review.initial}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-slate-950">{review.name}</h3>
                        {review.linkedinVerified && <span className="material-symbols-outlined text-base text-[#0A66C2]">verified</span>}
                      </div>
                      <p className="text-xs font-semibold text-slate-500">{review.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-700">"{review.quote}"</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {CASE_STUDIES.map((study) => (
                <article key={study.client} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="h-2 bg-[#108a00]" />
                  <div className="p-5">
                  <p className="text-sm font-semibold text-slate-500">{study.industry}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">{study.client}</h3>
                  <p className="mt-4 text-3xl font-semibold text-[#108a00]">{study.metric}</p>
                  <p className="text-sm font-semibold text-slate-500">{study.context}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{study.description}</p>
                  <div className="mt-5 flex h-16 items-end gap-1">
                    {(study.graphData || []).map((point, index) => (
                      <span
                        key={`${study.client}-${index}`}
                        className="flex-1 rounded-t bg-emerald-500/75"
                        style={{ height: `${Math.max(18, Math.min(64, point.clicks / 20))}px` }}
                      />
                    ))}
                  </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[1.1fr_1fr] md:p-6">
              <div>
                <YouTubeEmbed videoId={FEATURED_VIDEO.videoId} title={FEATURED_VIDEO.title} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#108a00]">SEO videos</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{FEATURED_VIDEO.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{FEATURED_VIDEO.description}</p>
                <div className="mt-5">
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:border-[#108a00] hover:text-[#108a00]"
                  >
                    Watch SEO videos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hire" className="bg-slate-950 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Hire Zechariah</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Send the site and what you want help with.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                You can ask about a consult, hourly help, or a scoped SEO project.
              </p>
            </div>

            <div className="mt-9 rounded-2xl bg-white p-6 shadow-2xl md:p-8">
              <ProtectedForm
                formspreeEndpoint="https://formspree.io/f/mpwvyzbr"
                subject="New Hire Zechariah Request"
                submitButtonText="Request SEO quote"
                showMessage={true}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
