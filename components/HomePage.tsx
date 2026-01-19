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
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-secondary/20 bg-surface-dark/50 backdrop-blur-md mb-10 animate-fade-in-up shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">
              AI-Powered Search Domination
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Crush the{' '}
            <span className="text-primary text-glow">Algorithm.</span>
            <br />
            <span className="gradient-text-ice text-ice-glow">
              Own the Results.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed font-light animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="text-white font-medium">English-native SEO consultant based in Israel</span>, specializing in SEO for US and international businesses. I turn invisible websites into lead-generating machines.
          </p>

          {/* CTAs */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#audit"
              className="relative group bg-white text-bg-dark font-bold py-4 px-10 rounded-lg overflow-hidden transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,224,114,0.4)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg">
                Start Crushing It
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  bolt
                </span>
              </span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
            <a
              href="#results"
              className="text-gray-400 hover:text-secondary font-medium px-8 py-4 flex items-center gap-2 transition-colors border-b border-transparent hover:border-secondary/30"
            >
              <span className="material-symbols-outlined text-secondary">
                monitoring
              </span>
              View Live Results
            </a>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-surface-dark/50 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '+300%', label: 'Organic Growth', sublabel: 'Average Client Gain', icon: 'trending_up' },
              { value: '10x', label: 'Client ROI', sublabel: 'Return on Investment', icon: 'monetization_on' },
              { value: '500+', label: 'Rank 1 Keywords', sublabel: 'Secured This Quarter', icon: 'workspace_premium' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="scroll-trigger group flex flex-col gap-3 rounded-2xl p-8 border border-white/5 bg-bg-dark/80 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">
                    {stat.icon}
                  </span>
                </div>
                <p className="text-white tracking-tight text-5xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {stat.value}
                </p>
                <p className="text-primary text-sm font-medium leading-normal flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">arrow_upward</span>
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-trigger">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Who I Work With
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Is This <span className="text-primary">You?</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 scroll-trigger">
            {[
              { icon: 'public', label: 'US & International Companies', desc: 'Targeting English-speaking markets' },
              { icon: 'store', label: 'Local Service Businesses', desc: 'Dentists, lawyers, contractors' },
              { icon: 'business', label: 'B2B & SaaS Companies', desc: 'Long sales cycles, high-value leads' },
              { icon: 'shopping_cart', label: 'E-commerce Brands', desc: 'Product & collection page SEO' },
              { icon: 'rocket_launch', label: 'Founders Who Want Strategy', desc: 'Not execution bloat' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-surface-card border border-white/5 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-3xl text-primary mb-3 block group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 scroll-trigger">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              The Methodology
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              The Grandmaster{' '}
              <span className="text-primary">Strategy</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I don't guess. I calculate. My AI-powered approach uses a
              three-phase attack pattern designed for total market dominance.
            </p>
            <p className="text-gray-500 max-w-3xl mx-auto text-base mt-6">
              This SEO methodology combines technical SEO, content architecture, internal linking, and conversion optimization to improve rankings, organic traffic, and qualified leads for US and international businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'chess_pawn',
                title: 'Opening Theory',
                description:
                  'Technical on-page optimization to secure the board center. I fix structure, speed, and schema to give Google no choice but to rank you.',
                color: 'primary',
              },
              {
                icon: 'psychology',
                title: 'Mid-Game Tactics',
                description:
                  'AI-driven content generation to outmaneuver competitors. I identify content gaps and fill them with high-authority semantic clusters.',
                color: 'secondary',
              },
              {
                icon: 'chess_queen',
                title: 'Endgame Strategy',
                description:
                  'Conversion rate optimization to capture the king. Traffic is vanity; revenue is sanity. I turn visitors into high-value leads.',
                color: 'primary',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="scroll-trigger group flex flex-col gap-6 rounded-3xl border border-white/5 bg-surface-card p-8 hover:bg-surface-elevated transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,224,114,0.1)] relative overflow-hidden"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${pillar.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div
                  className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-${pillar.color} group-hover:rotate-6 transition-all duration-300 shadow-inner`}
                >
                  <span
                    className={`material-symbols-outlined text-${pillar.color} text-4xl group-hover:text-bg-dark transition-colors`}
                  >
                    {pillar.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className={`text-white text-xl font-bold leading-tight group-hover:text-${pillar.color} transition-colors`}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-base font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="results" className="py-32 bg-surface-dark/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 scroll-trigger">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-3 block">
                Grandmaster Moves
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Proven Results
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed md:text-right border-l-2 md:border-l-0 md:border-r-2 border-primary/20 pl-6 md:pl-0 md:pr-6">
              Real results from AI-enhanced SEO campaigns targeting
              high-competition keywords in the US market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.slice(0, 3).map((study, idx) => (
              <div
                key={idx}
                className="scroll-trigger group bg-surface-card border border-white/5 p-10 rounded-2xl hover:border-primary/50 transition-all duration-500 relative overflow-hidden hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(0,224,114,0.1)]"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                      <span className="material-symbols-outlined text-primary text-2xl">
                        {study.icon}
                      </span>
                    </div>
                    <span className="text-5xl font-display font-bold text-white group-hover:text-glow transition-all">
                      {study.metric}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white">
                    {study.client}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.industry && (
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-wide bg-secondary/10 px-2 py-1 rounded">
                        {study.industry}
                      </span>
                    )}
                    {study.market && (
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide bg-white/5 px-2 py-1 rounded">
                        {study.market}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-4">
                    {study.context}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4 group-hover:border-white/10 transition-colors">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Problem Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(#222 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full transform -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Quote */}
            <div className="w-full lg:w-1/2 scroll-trigger">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl rounded-3xl animate-pulse-glow" />
                <div className="relative bg-surface-card border border-white/10 p-10 md:p-12 rounded-2xl shadow-2xl backdrop-blur-sm">
                  <span className="material-symbols-outlined text-6xl text-white/5 absolute top-6 right-8">
                    format_quote
                  </span>
                  <p className="font-display italic text-2xl md:text-3xl text-gray-200 leading-relaxed mb-10 relative z-10">
                    "Last week your site was a ghost town. This week it's the
                    one everyone bumps into. Wild what a little{' '}
                    <span className="text-secondary font-bold">actual SEO</span>{' '}
                    can do."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center border border-white/20 shadow-lg">
                      <span className="material-symbols-outlined text-secondary text-2xl">
                        person
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">
                        Zechariah Tokar
                      </p>
                      <p className="text-xs text-secondary font-bold uppercase tracking-wider mt-1">
                        SEO Strategist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem */}
            <div
              className="w-full lg:w-1/2 space-y-8 scroll-trigger"
              style={{ transitionDelay: '200ms' }}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  The "Invisible Site"
                  <br />
                  <span className="text-gray-500">Problem</span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-secondary to-transparent mt-6 rounded-full" />
              </div>
              <div className="space-y-5 text-lg text-gray-400 leading-relaxed font-light">
                <p>
                  I keep seeing the same pattern play out with founders in
                  Israel and the US: They pour serious money into gorgeous
                  branding and a shiny website... then it just sits there.
                  Invisible.
                </p>
                <p>
                  No one finds it. No one lands on it. No one buys from it.
                </p>
              </div>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-white text-lg font-medium">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                  </span>
                  <span>
                    <strong className="text-primary">Relevance</strong>: Content
                    matching what customers search for
                  </span>
                </li>
                <li className="flex items-center gap-4 text-white text-lg font-medium">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/20 text-secondary">
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                  </span>
                  <span>
                    <strong className="text-secondary">Reputation</strong>:
                    Digital authority Google trusts
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-trigger">
            <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em] mb-3 block">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Select Your Opening Strategy
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Tailored SEO solutions for businesses that demand high ROI. No
              cookie-cutter packages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_LIST.map((service, idx) => (
              <NavLink
                key={service.key}
                to={`/${service.slug}`}
                className="scroll-trigger group relative bg-surface-card border border-white/5 p-10 md:p-12 rounded-xl h-full flex flex-col hover:border-primary/50 transition-all duration-500 overflow-hidden hover:bg-white/[0.02]"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-all duration-500" />
                <div className="w-14 h-14 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl flex items-center justify-center mb-8 text-gray-400 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 shadow-inner">
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
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {service.key === 'freelance'
                    ? 'Freelance SEO Services'
                    : service.key === 'consultant'
                    ? 'SEO Consulting'
                    : service.key === 'b2b'
                    ? 'B2B SEO Services'
                    : 'Content Marketing for SEO'}
                </h3>
                <p className="text-sm font-bold text-primary uppercase tracking-wide mb-6">
                  {service.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {service.description.slice(0, 150)}...
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors mt-auto border-t border-white/5 pt-6 group-hover:border-primary/20">
                  Explore Strategy
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
      <section className="py-16 border-y border-white/5 bg-surface-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-10">
            Trusted by Rapidly Growing Brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="flex justify-center group opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <span
                  className={`${logo.style} text-white group-hover:text-primary transition-colors cursor-default`}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I'm Different */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-trigger">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                Why Work With Me
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                How I'm <span className="text-primary">Different</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm not an agency. I'm not a faceless team. I'm a senior SEO consultant who works directly with you on strategy and execution.
              </p>
            </div>
            <div className="scroll-trigger space-y-5" style={{ transitionDelay: '200ms' }}>
              {[
                {
                  icon: 'person',
                  title: 'Direct Access to Senior Expertise',
                  desc: 'No account managers or junior staff. You work directly with me on every call and every decision.',
                },
                {
                  icon: 'public',
                  title: 'Israel-Based, US-Focused',
                  desc: 'English-native consultant based in Israel, specializing in SEO for US and international markets.',
                },
                {
                  icon: 'psychology',
                  title: 'Strategy Over Busywork',
                  desc: 'I focus on moves that actually impact rankings and revenue. No fluff reports or vanity metrics.',
                },
                {
                  icon: 'handshake',
                  title: 'Transparent Partnership',
                  desc: 'You own all the work. No lock-in contracts. Clear communication on what we do and why.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex gap-5 p-5 rounded-xl border border-white/5 bg-surface-card hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="audit" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
        </div>

        {/* Floating Chess Piece */}
        <div className="absolute top-[10%] right-[10%] opacity-20 pointer-events-none animate-float-slow hidden md:block">
          <div className="chess-piece ice transform rotate-[10deg] scale-50">♕</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-trigger">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              It's Your{' '}
              <span className="gradient-text-emerald">Move.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-xl mx-auto">
              Don't let competitors own your keywords. Claim your free audit and
              see the board clearly for the first time.
            </p>
          </div>

          <div className="bg-surface-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <div className="relative z-10">
              <div className="text-center mb-10">
                <p className="text-secondary font-bold text-xs tracking-[0.25em] uppercase mb-4">
                  Request Your Analysis
                </p>
                <div className="h-px w-20 bg-white/20 mx-auto" />
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
                      className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors"
                      htmlFor="url"
                    >
                      Website URL
                    </label>
                    <input
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-700"
                      id="url"
                      name="website"
                      placeholder="mysite.com"
                      type="url"
                      required
                    />
                  </div>
                  <div className="group">
                    <label
                      className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-primary transition-colors"
                      htmlFor="email"
                    >
                      Business Email
                    </label>
                    <input
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder-gray-700"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <button
                  className="w-full bg-white text-bg-dark font-bold text-lg py-5 rounded-xl hover:bg-primary transition-all border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,224,114,0.4)] transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group"
                  type="submit"
                >
                  <span className="relative z-10">Start Winning Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
                <p className="text-center text-xs text-gray-500 mt-6 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  No commitment required. 100% free strategy session.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
