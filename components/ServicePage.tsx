import React, { useEffect } from 'react';
import { ServiceContent } from '../types';
import { SOCIAL_LINKS } from '../constants';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
} from 'recharts';

interface ServicePageProps {
  content: ServiceContent;
}

const GSCVisual: React.FC<{ data: any[]; clientName: string }> = ({
  data,
  clientName,
}) => (
  <div className="bg-surface-card border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
    {/* Fake Browser Top Bar */}
    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
      <div className="w-3 h-3 rounded-full bg-red-500/50" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
      <div className="w-3 h-3 rounded-full bg-green-500/50" />
      <div className="ml-4 text-xs text-gray-500 font-mono">
        search.google.com/search-console
      </div>
    </div>

    <div className="flex justify-between items-center mb-4">
      <div>
        <div className="text-xs text-gray-400">Performance on Search results</div>
        <div className="text-sm font-bold text-white">{clientName}</div>
      </div>
      <div className="text-primary text-xs font-mono animate-pulse flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-primary" />
        Live Data
      </div>
    </div>

    {/* GSC Metric Boxes */}
    <div className="flex gap-4 mb-6">
      <div className="bg-bg-dark/50 p-3 rounded-lg w-1/2 border-l-4 border-secondary">
        <div className="text-[10px] text-gray-400 uppercase tracking-wide">
          Total Clicks
        </div>
        <div className="text-xl font-bold text-white">2.45K</div>
      </div>
      <div className="bg-bg-dark/50 p-3 rounded-lg w-1/2 border-l-4 border-primary">
        <div className="text-[10px] text-gray-400 uppercase tracking-wide">
          Total Impressions
        </div>
        <div className="text-xl font-bold text-white">85.2K</div>
      </div>
    </div>

    {/* Chart */}
    <div className="h-40 w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00E072" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#00E072" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#22D3EE" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1a1a1a"
            vertical={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#010804',
              borderColor: '#1a1a1a',
              color: '#fff',
              borderRadius: '8px',
            }}
            itemStyle={{ fontSize: '12px' }}
          />
          <Area
            type="monotone"
            dataKey="clicks"
            stroke="#22D3EE"
            strokeWidth={2}
            fill="url(#colorClicks)"
          />
          <Area
            type="monotone"
            dataKey="impressions"
            stroke="#00E072"
            strokeWidth={2}
            fill="url(#colorImpressions)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const ServicePage: React.FC<ServicePageProps> = ({ content }) => {
  useEffect(() => {
    document.title = `${content.title} | Zechariah Tokar`;
  }, [content]);

  const colorClass =
    content.heroColor === 'secondary'
      ? 'secondary'
      : content.heroColor === 'ice'
      ? 'ice'
      : 'primary';

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <header className="relative py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden perspective-container">
        {/* Chess Floor */}
        <div className="chess-floor opacity-20" />

        {/* Ambient Glows */}
        <div
          className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-${colorClass}/10 rounded-full blur-[120px] animate-pulse`}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

        {/* Floating Chess Pieces */}
        <div className="absolute top-[20%] left-[5%] animate-float-slow z-0 opacity-15 hidden lg:block">
          <div className="chess-piece transform rotate-[-10deg] scale-50">♗</div>
        </div>
        <div className="absolute bottom-[25%] right-[5%] animate-float z-0 opacity-20 hidden lg:block">
          <div className="chess-piece green transform rotate-[5deg] scale-60">♖</div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-6 py-2 mb-10 rounded-full border border-${colorClass}/20 bg-surface-dark/50 backdrop-blur-md shadow-[0_0_20px_rgba(0,224,114,0.1)]`}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${colorClass} opacity-75`}
              />
              <span
                className={`relative inline-flex rounded-full h-2 w-2 bg-${colorClass}`}
              />
            </span>
            <span
              className={`text-xs font-bold uppercase tracking-[0.2em] text-${colorClass}`}
            >
              {content.subtitle}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]">
            {content.title.split('.').map((part, idx) => (
              <span key={idx}>
                {idx === 0 ? (
                  <span className={`text-${colorClass} text-glow`}>{part}.</span>
                ) : (
                  <span className="block mt-2 text-white">{part}</span>
                )}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            {content.description}
          </p>

          {/* Industries Served */}
          {content.industries && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {content.industries.map((industry, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-full border border-${colorClass}/20 bg-surface-dark/50 text-sm text-gray-300 font-medium`}
                >
                  {industry}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#audit"
              className="group bg-white text-bg-dark px-10 py-4 font-bold flex items-center justify-center gap-2 hover:bg-primary transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,224,114,0.4)] hover:-translate-y-1"
            >
              Get Free Audit
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href={SOCIAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-10 py-4 font-medium border border-${colorClass}/30 text-white rounded-lg hover:bg-${colorClass}/10 transition-all`}
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </header>

      {/* What/Why/How Section */}
      <section className="py-24 bg-surface-dark/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
          {[
            {
              icon: 'help_outline',
              title: 'What is it?',
              text: content.ugcIntro.what,
            },
            {
              icon: 'priority_high',
              title: 'Why it matters',
              text: content.ugcIntro.why,
            },
            {
              icon: 'build',
              title: 'How I do it',
              text: content.ugcIntro.how,
            },
          ].map((item, idx) => (
            <div key={idx} className="scroll-trigger" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className={`flex items-center gap-2 mb-4 text-${colorClass}`}>
                <span className="material-symbols-outlined">{item.icon}</span>
                <h3 className="font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof & GSC Visuals */}
      <section className="py-24 bg-bg-dark relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 scroll-trigger">
            <span className={`text-${colorClass} font-bold text-sm uppercase tracking-widest mb-3 block`}>
              Proof of Work
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Real clients, real graphs. No photoshop.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text & Metrics */}
            <div className="scroll-trigger">
              <div
                className={`inline-block bg-${colorClass}/10 text-${colorClass} px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6`}
              >
                Case Study: {content.caseStudyHighlight.client}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {content.caseStudyHighlight.metric}{' '}
                <span className="text-gray-400 font-normal text-2xl">
                  {content.caseStudyHighlight.context}
                </span>
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                {content.caseStudyHighlight.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {content.results.slice(0, 2).map((r, i) => (
                  <div
                    key={i}
                    className="bg-surface-card/50 p-5 border border-white/5 rounded-xl"
                  >
                    <div className="text-gray-500 text-xs font-bold uppercase mb-1">
                      {r.label}
                    </div>
                    <div className="text-2xl font-bold text-white">{r.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: GSC Simulator */}
            <div className="scroll-trigger" style={{ transitionDelay: '200ms' }}>
              <GSCVisual
                data={content.caseStudyHighlight.graphData || []}
                clientName={content.caseStudyHighlight.client}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process & Tools */}
      <section className="py-24 bg-surface-dark/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Process Timeline */}
            <div className="scroll-trigger">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className={`material-symbols-outlined text-${colorClass}`}>
                  flag
                </span>
                {content.process.title}
              </h3>
              <div className="space-y-6 relative pl-2">
                {/* Line */}
                <div className="absolute left-2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                {content.process.steps.map((step, i) => (
                  <div key={i} className="relative pl-8 group">
                    <div
                      className={`absolute left-0 top-1.5 w-4 h-4 bg-surface-dark border-2 border-${colorClass} rounded-full z-10 group-hover:bg-${colorClass} transition-colors`}
                    />
                    <p className="text-gray-300 text-base group-hover:text-white transition-colors">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Pricing */}
            <div className="space-y-10">
              {/* Tools */}
              <div className="scroll-trigger" style={{ transitionDelay: '100ms' }}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-500">
                    build
                  </span>
                  My Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {content.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-surface-card border border-white/5 px-4 py-2 text-sm text-gray-400 rounded-full hover:border-primary/30 hover:text-white transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing Card */}
              <div
                className="scroll-trigger bg-gradient-to-br from-surface-card to-bg-dark border border-white/10 p-8 rounded-2xl relative overflow-hidden"
                style={{ transitionDelay: '200ms' }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl text-primary">
                    payments
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-6">Investment</h3>

                <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                  <span className="text-gray-400">Deep Dive Audit</span>
                  <span className="text-primary font-bold text-xl">
                    {content.pricing.audit}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Monthly Management</span>
                  <span className="text-white font-bold text-lg">
                    {content.pricing.management}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-6 italic">
                  *Pricing depends on site size & competition level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-24 bg-bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-trigger">
            <span className={`text-${colorClass} font-bold text-sm uppercase tracking-widest mb-3 block`}>
              Why Work With Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              No agency bloat. Just results.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.whyMe.map((reason, idx) => (
              <div
                key={idx}
                className="scroll-trigger flex items-start gap-4 bg-surface-card/50 border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-colors group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full bg-${colorClass}/20 text-${colorClass} flex-shrink-0`}
                >
                  <span className="material-symbols-outlined text-lg">check</span>
                </span>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="audit"
        className="py-32 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
        </div>

        {/* Floating Chess Piece */}
        <div className="absolute top-[10%] right-[10%] opacity-15 pointer-events-none animate-float-slow hidden md:block">
          <div className="chess-piece ice transform rotate-[15deg] scale-50">♕</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-trigger">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Ready to{' '}
              <span className="gradient-text-emerald">checkmate?</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-xl mx-auto">
              {content.cta}
            </p>
          </div>

          <div className="bg-surface-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${colorClass} to-transparent opacity-50`} />
            <div className="relative z-10">
              <div className="text-center mb-10">
                <p className={`text-${colorClass} font-bold text-xs tracking-[0.25em] uppercase mb-4`}>
                  Request Strategy Call
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
                  value={`New Inquiry: ${content.title}`}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      className={`block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-${colorClass} transition-colors`}
                      htmlFor="url"
                    >
                      Website URL
                    </label>
                    <input
                      className={`w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-1 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-gray-700`}
                      id="url"
                      name="website"
                      placeholder="mysite.com"
                      type="url"
                      required
                    />
                  </div>
                  <div className="group">
                    <label
                      className={`block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-${colorClass} transition-colors`}
                      htmlFor="email"
                    >
                      Business Email
                    </label>
                    <input
                      className={`w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-1 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-gray-700`}
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <label
                    className={`block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 group-focus-within:text-${colorClass} transition-colors`}
                    htmlFor="message"
                  >
                    Biggest Challenge
                  </label>
                  <textarea
                    className={`w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-1 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-gray-700 h-28 resize-none`}
                    id="message"
                    name="message"
                    placeholder="What's your biggest SEO challenge right now?"
                  />
                </div>
                <button
                  className="w-full bg-white text-bg-dark font-bold text-lg py-5 rounded-xl hover:bg-primary transition-all border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,224,114,0.4)] transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group"
                  type="submit"
                >
                  <span className="relative z-10">Get Free Audit & Consult</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
                <p className="text-center text-xs text-gray-500 mt-6">
                  Or{' '}
                  <a
                    href={SOCIAL_LINKS.calendly}
                    className={`text-${colorClass} underline hover:no-underline`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    book directly via Calendly
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
