import React, { useEffect } from 'react';
import { SERVICES_LIST, CASE_STUDIES, CLIENT_LOGOS } from '../constants';
import { NavLink } from 'react-router-dom';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title =
      'Israel SEO Freelancer | AI-Driven Rankings & Revenue | Zechariah Tokar';
  }, []);

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden perspective-container">
        {/* Animated Chess Floor Grid */}
        <div className="chess-floor opacity-30" />

        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none z-0" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />

        {/* Floating Chess Pieces */}
        <div className="absolute top-[15%] left-[5%] animate-float-slow z-0 opacity-20 hidden lg:block">
          <div className="chess-piece ice transform rotate-[-15deg] scale-75">♘</div>
        </div>
        <div className="absolute bottom-[20%] right-[5%] animate-float z-0 opacity-30 hidden lg:block">
          <div className="chess-piece green transform rotate-[10deg] scale-90">♔</div>
        </div>
        <div className="absolute top-[40%] right-[15%] animate-float-fast z-0 opacity-15 hidden lg:block">
          <div className="chess-piece transform scale-50">♖</div>
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/20 bg-white shadow-sm mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-primary">
              AI-Powered SEO for US & International Markets
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-8 animate-fade-in-up text-slate-900"
            style={{ animationDelay: '0.2s' }}
          >
            Dominate{' '}
            <span className="text-primary">Google.</span>
            <br />
            <span className="gradient-text-ice">
              Drive Revenue.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="text-slate-900 font-semibold">Israel SEO Freelancer</span> helping US and international businesses rank higher and convert better. Direct access to senior-level strategy.
          </p>

          {/* CTAs */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#audit"
              className="group bg-primary text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-primary-dark"
            >
              <span className="flex items-center gap-2 text-lg">
                Get Free SEO Audit
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </a>
            <a
              href="#results"
              className="text-slate-600 hover:text-primary font-semibold px-8 py-4 flex items-center gap-2 transition-colors"
            >
              <span className="material-symbols-outlined text-primary">
                monitoring
              </span>
              See Client Results
            </a>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="border-y border-slate-200 bg-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '+300%', label: 'Organic Growth', sublabel: 'Average Client Gain', icon: 'trending_up' },
              { value: '10x', label: 'Client ROI', sublabel: 'Return on Investment', icon: 'monetization_on' },
              { value: '500+', label: 'Rank 1 Keywords', sublabel: 'Secured This Quarter', icon: 'workspace_premium' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="scroll-trigger group flex flex-col gap-3 rounded-2xl p-8 border border-slate-200 bg-slate-50 hover:border-primary/50 hover:bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-500 text-base font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">
                    {stat.icon}
                  </span>
                </div>
                <p className="text-slate-900 tracking-tight text-5xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {stat.value}
                </p>
                <p className="text-primary text-base font-medium leading-normal flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">arrow_upward</span>
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-trigger">
            <span className="text-primary font-bold tracking-wide uppercase text-sm mb-4 block">
              Who I Work With
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Is This <span className="text-primary">You?</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 scroll-trigger">
            {[
              { icon: 'public', label: 'US & International Companies', desc: 'English-speaking markets' },
              { icon: 'store', label: 'Local Service Businesses', desc: 'Dentists, lawyers, contractors' },
              { icon: 'business', label: 'B2B & SaaS Companies', desc: 'High-value leads' },
              { icon: 'shopping_cart', label: 'E-commerce Brands', desc: 'Product page SEO' },
              { icon: 'rocket_launch', label: 'Growth-Focused Founders', desc: 'Strategy-first approach' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="material-symbols-outlined text-3xl text-primary mb-3 block group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <p className="text-slate-900 font-bold text-base mb-2">{item.label}</p>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-trigger">
            <span className="text-secondary font-bold tracking-wide uppercase text-sm mb-4 block">
              My Process
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              The SEO{' '}
              <span className="text-primary">Strategy</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">
              A data-driven, three-phase approach to rank higher and convert better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'search',
                title: 'Technical Foundation',
                description:
                  'Fix site structure, speed, and schema markup. Ensure Google can crawl and index your pages properly.',
                color: 'primary',
              },
              {
                icon: 'edit_note',
                title: 'Content Strategy',
                description:
                  'Identify keyword gaps your competitors missed. Create content that ranks and converts.',
                color: 'secondary',
              },
              {
                icon: 'rocket_launch',
                title: 'Conversion Focus',
                description:
                  'Turn traffic into qualified leads. Optimize for revenue, not vanity metrics.',
                color: 'primary',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="scroll-trigger group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-${pillar.color}/10 flex items-center justify-center group-hover:bg-${pillar.color} transition-all duration-300`}
                >
                  <span
                    className={`material-symbols-outlined text-${pillar.color} text-3xl group-hover:text-white transition-colors`}
                  >
                    {pillar.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-slate-900 text-xl font-bold leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="results" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 scroll-trigger">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wide mb-3 block">
                Client Results
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                Proven Results
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-lg leading-relaxed md:text-right">
              Real results from SEO campaigns for US clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.slice(0, 3).map((study, idx) => (
              <div
                key={idx}
                className="scroll-trigger group bg-white border border-slate-200 p-8 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <span className="material-symbols-outlined text-primary text-2xl">
                        {study.icon}
                      </span>
                    </div>
                    <span className="text-4xl font-display font-bold text-primary">
                      {study.metric}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-slate-900">
                    {study.client}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.industry && (
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wide bg-secondary/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    )}
                    {study.market && (
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide bg-slate-100 px-3 py-1 rounded-full">
                        {study.market}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-primary mb-4">
                    {study.context}
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Problem Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Quote */}
            <div className="w-full lg:w-1/2 scroll-trigger">
              <div className="relative bg-slate-50 border border-slate-200 p-10 md:p-12 rounded-2xl shadow-sm">
                <span className="material-symbols-outlined text-6xl text-slate-200 absolute top-6 right-8">
                  format_quote
                </span>
                <p className="font-display italic text-2xl md:text-3xl text-slate-700 leading-relaxed mb-10 relative z-10">
                  "Your site went from invisible to front page. That's what{' '}
                  <span className="text-primary font-bold">strategic SEO</span>{' '}
                  does."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      person
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">
                      Zechariah Tokar
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      Israel SEO Freelancer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem */}
            <div
              className="w-full lg:w-1/2 space-y-6 scroll-trigger"
              style={{ transitionDelay: '200ms' }}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                  The "Invisible Site"
                  <br />
                  <span className="text-slate-400">Problem</span>
                </h2>
                <div className="h-1.5 w-24 bg-primary mt-6 rounded-full" />
              </div>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Beautiful website. Zero traffic. Sound familiar?
                </p>
                <p>
                  Without SEO, your site is invisible to the people searching for what you offer.
                </p>
              </div>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-slate-800 text-lg font-medium">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                  </span>
                  <span>
                    <strong className="text-primary">Relevance</strong>: Content matching search intent
                  </span>
                </li>
                <li className="flex items-center gap-4 text-slate-800 text-lg font-medium">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary">
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                  </span>
                  <span>
                    <strong className="text-secondary">Authority</strong>: Trust signals Google values
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-trigger">
            <span className="text-primary font-bold text-sm uppercase tracking-wide mb-3 block">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              SEO Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">
              Tailored solutions for businesses that demand results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_LIST.map((service, idx) => (
              <NavLink
                key={service.key}
                to={`/${service.slug}`}
                className="scroll-trigger group relative bg-white border border-slate-200 p-10 rounded-xl h-full flex flex-col hover:border-primary/50 transition-all duration-500 hover:shadow-xl"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    {service.key === 'freelance'
                      ? 'person_search'
                      : service.key === 'consultant'
                      ? 'business_center'
                      : service.key === 'b2b'
                      ? 'trending_up'
                      : 'description'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">
                  {service.key === 'freelance'
                    ? 'Freelance SEO'
                    : service.key === 'consultant'
                    ? 'SEO Consulting'
                    : service.key === 'b2b'
                    ? 'B2B SEO'
                    : 'Content Marketing'}
                </h3>
                <p className="text-sm font-semibold text-primary mb-4">
                  {service.subtitle}
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-grow">
                  {service.description.slice(0, 120)}...
                </p>
                <div className="flex items-center text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors mt-auto border-t border-slate-100 pt-6">
                  Learn More
                  <span className="material-symbols-outlined text-sm ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    arrow_forward
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500 mb-10">
            Trusted by Growing Brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="flex justify-center group opacity-50 hover:opacity-100 transition-all duration-500"
              >
                <span
                  className={`${logo.style} text-slate-600 group-hover:text-primary transition-colors cursor-default`}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I'm Different */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-trigger">
              <span className="text-primary font-bold tracking-wide uppercase text-sm mb-4 block">
                Why Work With Me
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                How I'm <span className="text-primary">Different</span>
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed">
                Direct access to senior SEO expertise. No agency overhead.
              </p>
            </div>
            <div className="scroll-trigger space-y-5" style={{ transitionDelay: '200ms' }}>
              {[
                {
                  icon: 'person',
                  title: 'Direct Senior Access',
                  desc: 'Work directly with me on every decision.',
                },
                {
                  icon: 'public',
                  title: 'Israel-Based, US-Focused',
                  desc: 'Native English speaker serving international markets.',
                },
                {
                  icon: 'psychology',
                  title: 'Strategy Over Busywork',
                  desc: 'Focus on rankings and revenue, not vanity metrics.',
                },
                {
                  icon: 'handshake',
                  title: 'Transparent Partnership',
                  desc: 'No lock-in contracts. You own all the work.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex gap-5 p-5 rounded-xl border border-slate-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="audit" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-trigger">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Get Your Free{' '}
              <span className="text-primary">SEO Audit</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-xl mx-auto">
              See exactly how to improve your rankings. No commitment required.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                  Request Your Free Analysis
                </p>
                <div className="h-px w-20 bg-slate-200 mx-auto" />
              </div>

              <form
                action="https://formspree.io/f/mpwvyzbr"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New SEO Audit Request from Homepage"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      className="block text-sm font-semibold text-slate-700 mb-2"
                      htmlFor="url"
                    >
                      Website URL
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400 text-base"
                      id="url"
                      name="website"
                      placeholder="mysite.com"
                      type="url"
                      required
                    />
                  </div>
                  <div className="group">
                    <label
                      className="block text-sm font-semibold text-slate-700 mb-2"
                      htmlFor="email"
                    >
                      Business Email
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder-slate-400 text-base"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <button
                  className="w-full bg-primary text-white font-bold text-lg py-5 rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  type="submit"
                >
                  Get My Free SEO Audit
                </button>
                <p className="text-center text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Free strategy session. No commitment.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
