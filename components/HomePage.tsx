import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CASE_STUDIES, CLIENT_LOGOS, SOCIAL_LINKS } from '../constants';
import { TestimonialsCarouselCompact } from './TestimonialsCarouselCompact';
import { ProtectedForm } from './ProtectedForm';
import { HeadSEO, updatePageSEO } from '../utils/seo';

const servicePaths = [
  {
    title: 'B2B SEO',
    path: '/b2b-seo-israel',
    icon: 'conversion_path',
    label: 'Best current fit',
    description: 'For SaaS, service, and B2B companies that need pipeline, not random traffic.',
  },
  {
    title: 'SEO consulting',
    path: '/seoconsulting',
    icon: 'strategy',
    label: 'Senior guidance',
    description: 'For teams that want a sharper plan, tighter priorities, and direct feedback from me.',
  },
  {
    title: 'Content marketing for SEO',
    path: '/content-marketing-for-seo',
    icon: 'edit_square',
    label: 'Content that converts',
    description: 'For companies that already have traffic goals but need pages that can actually rank and sell.',
  },
  {
    title: 'Freelance SEO Israel',
    path: '/freelance-seo-israel',
    icon: 'person_check',
    label: 'Direct execution',
    description: 'For companies that want one accountable operator instead of an agency relay race.',
  },
];

const credibilitySurfaces = [
  {
    title: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: 'work',
    description: 'Reviews, work history, and how I talk to actual business owners.',
  },
  {
    title: 'YouTube',
    href: SOCIAL_LINKS.youtube,
    icon: 'play_circle',
    description: 'Breakdowns of AI search, Reddit visibility, and practical SEO decisions.',
  },
  {
    title: 'Reddit',
    href: SOCIAL_LINKS.reddit,
    icon: 'forum',
    description: 'A better place to judge whether my thinking is useful or just polished.',
  },
];

const workStyle = [
  {
    title: 'Direct work, not account management',
    description: 'You work with me. Strategy, prioritization, and execution direction stay in the same hands.',
  },
  {
    title: 'Money pages before content volume',
    description: 'I would rather fix the pages closest to revenue than publish filler just to look busy.',
  },
  {
    title: 'Built for Google and AI search',
    description: 'Search is no longer just ten blue links. I look at Google, AI answers, and forum visibility together.',
  },
];

export const HomePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Israel SEO Freelancer | Zechariah Tokar | SEO for US-Facing Companies',
      description:
        'Senior SEO consultant Zechariah Tokar helps B2B companies, service businesses, and selected ecommerce brands turn SEO into pipeline. Based in Israel, working on US and international markets.',
      path: '/',
    });
  }, []);

  return (
    <>
      <HeadSEO
        title="Israel SEO Freelancer | Zechariah Tokar | SEO for US-Facing Companies"
        description="Senior SEO consultant Zechariah Tokar helps B2B companies, service businesses, and selected ecommerce brands turn SEO into pipeline. Based in Israel, working on US and international markets."
        path="/"
      />
      <div className="animate-fade-in-up">
        <header className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(13,150,104,0.08),_transparent_30%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Senior SEO consultant based in Israel, working on US-facing growth
                </div>
                <h1 className="mt-8 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-[-0.03em] leading-[0.95] text-slate-900 text-balance">
                  SEO that feels clear, sounds like you, and brings in the right buyers.
                </h1>
                <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">
                  I&apos;m Zechariah Tokar. I help B2B companies, service businesses, and selected ecommerce brands turn search into pipeline. No junior handoff. No vague monthly deck. No bloated agency layers.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#audit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                  >
                    Get my quick-wins audit
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                  <a
                    href="#proof"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-700 transition-all hover:border-primary/30 hover:text-primary"
                  >
                    See the proof
                    <span className="material-symbols-outlined text-lg">south</span>
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Good fit</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">US-facing B2B, local service, and niche ecommerce offers with real commercial intent.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">What I focus on</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">Money pages, BOFU content, technical cleanup, and AI search visibility.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">How to judge me</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">Look at the proof, the reviews, and how I think in public before you book.</p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-6">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What you actually get</p>
                  <div className="mt-6 space-y-4">
                    {workStyle.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Quick note</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      If you want SEO that is tightly tied to actual offers, comparisons, pricing intent, and pipeline, this is where I do my best work.
                    </p>
                    <a
                      href={SOCIAL_LINKS.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary"
                    >
                      Book a call
                      <span className="material-symbols-outlined text-base">north_east</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="border-b border-slate-200 bg-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">How to vet me quickly</p>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">
                  Don&apos;t rely on homepage claims. Check the reviews, the public thinking, and the pages already pulling impressions around B2B SEO, content marketing, and AI-search topics.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[540px]">
                {credibilitySurfaces.map((surface) => (
                  <a
                    key={surface.title}
                    href={surface.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">{surface.icon}</span>
                      <span className="font-semibold text-slate-900">{surface.title}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{surface.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Start with the right page</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold tracking-tight text-slate-900">
                The site should route people fast, not make them decode what you do.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                These are the strongest entry points if someone is already comparing providers, planning SEO work, or looking for a clear next step.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {servicePaths.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                        <h3 className="mt-1 text-2xl font-semibold text-slate-900">{item.title}</h3>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-primary">
                      arrow_forward
                    </span>
                  </div>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">{item.description}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Selected proof</p>
                <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold tracking-tight text-slate-900">
                  Results matter more than how polished the homepage looks.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  These are the kinds of outcomes that matter to me: better rankings tied to revenue, local visibility that actually produces leads, and faster movement on high-intent searches.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-600">
                Current GSC signal is strongest around B2B SEO, content marketing, and AI-search adjacent topics.
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {CASE_STUDIES.slice(0, 3).map((study) => (
                <article
                  key={study.client}
                  className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{study.industry}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-900">{study.client}</h3>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3 text-right shadow-sm">
                      <p className="text-3xl font-display font-semibold text-primary">{study.metric}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{study.context}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-slate-600">{study.description}</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{study.market}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Some of the brands and businesses I&apos;ve worked with
            </p>
            <div className="mt-10 grid grid-cols-2 items-center gap-6 md:grid-cols-3 lg:grid-cols-5">
              {CLIENT_LOGOS.map((logo) => (
                <div
                  key={logo.name}
                  className="flex min-h-[72px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center transition-colors hover:border-primary/30"
                >
                  <span className={`${logo.style} text-slate-600`}>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">How I work</p>
                <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold tracking-tight text-slate-900">
                  Straight process. Clear priorities. No filler.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                  The job is to find what is closest to revenue, fix what is holding it back, and build the next best pages in order. That is the whole game.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  'Audit the current site and locate the pages closest to money.',
                  'Find the keyword gaps, content gaps, and AI-search gaps competitors left open.',
                  'Fix technical blockers and weak page structure before publishing more.',
                  'Build or rewrite pages that deserve to rank, especially bottom-of-funnel pages.',
                  'Track the signals that matter: impressions, clicks, rankings, leads, and sales context.',
                ].map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-primary shadow-sm">
                      0{index + 1}
                    </div>
                    <p className="text-base leading-relaxed text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TestimonialsCarouselCompact className="max-w-5xl mx-auto" />
          </div>
        </section>

        <section id="audit" className="relative overflow-hidden bg-slate-900 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(13,150,104,0.22),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(14,116,144,0.18),_transparent_30%)]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Free audit</p>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white">
                If you want clarity on what to fix first, start here.
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-300">
                Send me the site, tell me the main problem, and I&apos;ll look for the fastest practical wins. You won&apos;t get a generic report.
              </p>
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-white p-8 shadow-[0_35px_80px_rgba(15,23,42,0.35)]">
              <ProtectedForm
                formspreeEndpoint="https://formspree.io/f/mpwvyzbr"
                subject="New SEO Audit Request from Homepage"
                submitButtonText="Get my quick-wins audit"
                showMessage={true}
              />
              <p className="mt-4 text-center text-sm text-slate-500">
                Or book directly on{' '}
                <a
                  href={SOCIAL_LINKS.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Calendly
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
