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
  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg relative overflow-hidden group">
    {/* Fake Browser Top Bar */}
    <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
      <div className="w-3 h-3 rounded-full bg-red-400" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-400" />
      <div className="ml-4 text-xs text-slate-400 font-mono">
        search.google.com/search-console
      </div>
    </div>

    <div className="flex justify-between items-center mb-4">
      <div>
        <div className="text-xs text-slate-500">Performance on Search results</div>
        <div className="text-sm font-bold text-slate-900">{clientName}</div>
      </div>
      <div className="text-primary text-xs font-mono flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        Live Data
      </div>
    </div>

    {/* GSC Metric Boxes */}
    <div className="flex gap-4 mb-6">
      <div className="bg-slate-50 p-3 rounded-lg w-1/2 border-l-4 border-secondary">
        <div className="text-[10px] text-slate-500 uppercase tracking-wide">
          Total Clicks
        </div>
        <div className="text-xl font-bold text-slate-900">2.45K</div>
      </div>
      <div className="bg-slate-50 p-3 rounded-lg w-1/2 border-l-4 border-primary">
        <div className="text-[10px] text-slate-500 uppercase tracking-wide">
          Total Impressions
        </div>
        <div className="text-xl font-bold text-slate-900">85.2K</div>
      </div>
    </div>

    {/* Chart */}
    <div className="h-40 w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#059669" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#059669" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0891B2" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#0891B2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e2e8f0"
            vertical={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              borderColor: '#e2e8f0',
              color: '#1e293b',
              borderRadius: '8px',
            }}
            itemStyle={{ fontSize: '12px' }}
          />
          <Area
            type="monotone"
            dataKey="clicks"
            stroke="#0891B2"
            strokeWidth={2}
            fill="url(#colorClicks)"
          />
          <Area
            type="monotone"
            dataKey="impressions"
            stroke="#059669"
            strokeWidth={2}
            fill="url(#colorImpressions)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// Helper function to convert service mentions to links
const parseTextWithLinks = (text: string): React.ReactNode => {
  const serviceLinks: { [key: string]: string } = {
    'B2B SEO services': '/b2b-seo-israel',
    'B2B SEO': '/b2b-seo-israel',
    'B2B content': '/b2b-seo-israel',
    'SEO consulting': '/seoconsulting',
    'strategic consulting': '/seoconsulting',
    'Strategic consulting': '/seoconsulting',
    'content marketing': '/content-marketing-for-seo',
    'Content marketing': '/content-marketing-for-seo',
    'content architecture': '/content-marketing-for-seo',
  };

  let result: React.ReactNode[] = [];
  let lastIndex = 0;

  // Find all service mentions in the text
  const matches: { index: number; length: number; link: string; text: string }[] = [];

  Object.entries(serviceLinks).forEach(([serviceName, link]) => {
    let index = text.indexOf(serviceName);
    while (index !== -1) {
      matches.push({ index, length: serviceName.length, link, text: serviceName });
      index = text.indexOf(serviceName, index + 1);
    }
  });

  // Sort matches by index to process them in order
  matches.sort((a, b) => a.index - b.index);

  // Remove overlapping matches (keep the first match)
  const filteredMatches: typeof matches = [];
  let lastEnd = -1;
  matches.forEach(match => {
    if (match.index >= lastEnd) {
      filteredMatches.push(match);
      lastEnd = match.index + match.length;
    }
  });

  // Build the result with text and links
  filteredMatches.forEach((match, idx) => {
    // Add text before the match
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }

    // Add the link
    result.push(
      <a
        key={idx}
        href={match.link}
        className="text-primary hover:underline font-medium"
      >
        {match.text}
      </a>
    );

    lastIndex = match.index + match.length;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result.length > 0 ? result : text;
};

export const ServicePage: React.FC<ServicePageProps> = ({ content }) => {
  useEffect(() => {
    document.title = `${content.seoTitle || content.title} | Zechariah Tokar`;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && content.metaDescription) {
      metaDescription.setAttribute('content', content.metaDescription);
    }
  }, [content]);

  const colorClass =
    content.heroColor === 'secondary'
      ? 'secondary'
      : content.heroColor === 'ice'
      ? 'secondary'
      : 'primary';

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <header className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-6 py-2.5 mb-10 rounded-full border border-${colorClass}/20 bg-white shadow-sm`}
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
              className={`text-sm font-semibold text-${colorClass}`}
            >
              {content.subtitle}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
            {content.title.split('.').map((part, idx) => (
              <span key={idx}>
                {idx === 0 ? (
                  <span className={`text-${colorClass}`}>{part}.</span>
                ) : (
                  <span className="block mt-2 text-slate-700">{part}</span>
                )}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>

          {/* Industries Served */}
          {content.industries && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {content.industries.map((industry, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-600 font-medium`}
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
              className="group bg-primary text-white px-10 py-4 font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Find Your Quick Wins
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              href={SOCIAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-10 py-4 font-semibold border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-all`}
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </header>

      {/* What/Why/How Section */}
      <section className="py-20 bg-white border-y border-slate-200">
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
                <h3 className="font-bold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">{parseTextWithLinks(item.text)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof & GSC Visuals */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 scroll-trigger">
            <span className={`text-${colorClass} font-bold text-sm uppercase tracking-wide mb-3 block`}>
              Client Results
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Real results. Real data.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text & Metrics */}
            <div className="scroll-trigger">
              <div
                className={`inline-block bg-${colorClass}/10 text-${colorClass} px-4 py-1.5 rounded-full text-sm font-semibold mb-6`}
              >
                Case Study: {content.caseStudyHighlight.client}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {content.caseStudyHighlight.metric}{' '}
                <span className="text-slate-500 font-normal text-2xl">
                  {content.caseStudyHighlight.context}
                </span>
              </h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {content.caseStudyHighlight.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {content.results.slice(0, 2).map((r, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm"
                  >
                    <div className="text-slate-500 text-sm font-semibold uppercase mb-1">
                      {r.label}
                    </div>
                    <div className="text-2xl font-bold text-slate-900">{r.value}</div>
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
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Process Timeline */}
            <div className="scroll-trigger">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
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
                      className={`absolute left-0 top-1.5 w-4 h-4 bg-white border-2 border-${colorClass} rounded-full z-10 group-hover:bg-${colorClass} transition-colors`}
                    />
                    <p className="text-slate-600 text-base group-hover:text-slate-900 transition-colors">
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
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">
                    build
                  </span>
                  My Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {content.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 border border-slate-200 px-4 py-2 text-sm text-slate-600 rounded-full hover:border-primary/50 hover:text-slate-900 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing Card */}
              <div
                className="scroll-trigger bg-white border border-slate-200 p-8 rounded-2xl shadow-sm relative overflow-hidden"
                style={{ transitionDelay: '200ms' }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl text-primary">
                    payments
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Investment</h3>

                <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                  <span className="text-slate-600">Deep Dive Audit</span>
                  <span className="text-primary font-bold text-xl">
                    {content.pricing.audit}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Monthly Management</span>
                  <span className="text-slate-900 font-bold text-lg">
                    {content.pricing.management}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mt-6 italic">
                  *Pricing depends on site size & competition level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-trigger">
            <span className={`text-${colorClass} font-bold text-sm uppercase tracking-wide mb-3 block`}>
              Why Work With Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              No agency bloat. Just results.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.whyMe.map((reason, idx) => (
              <div
                key={idx}
                className="scroll-trigger flex items-start gap-4 bg-white border border-slate-200 p-6 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full bg-${colorClass}/10 text-${colorClass} flex-shrink-0`}
                >
                  <span className="material-symbols-outlined text-lg">check</span>
                </span>
                <p className="text-slate-600 group-hover:text-slate-900 transition-colors text-base">
                  {parseTextWithLinks(reason)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="audit"
        className="py-24 bg-slate-900 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-trigger">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to{' '}
              <span className="text-primary">get started?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-xl mx-auto">
              {content.cta}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <p className={`text-${colorClass} font-semibold text-sm uppercase tracking-wide mb-2`}>
                  Request Strategy Call
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
                  value={`New Inquiry: ${content.title}`}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label
                      className={`block text-sm font-semibold text-slate-700 mb-2`}
                      htmlFor="url"
                    >
                      Website URL
                    </label>
                    <input
                      className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 text-base`}
                      id="url"
                      name="website"
                      placeholder="mysite.com"
                      type="url"
                      required
                    />
                  </div>
                  <div className="group">
                    <label
                      className={`block text-sm font-semibold text-slate-700 mb-2`}
                      htmlFor="email"
                    >
                      Business Email
                    </label>
                    <input
                      className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 text-base`}
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
                    className={`block text-sm font-semibold text-slate-700 mb-2`}
                    htmlFor="message"
                  >
                    Biggest Challenge
                  </label>
                  <textarea
                    className={`w-full bg-slate-50 border border-slate-300 rounded-lg px-5 py-4 text-slate-900 focus:ring-2 focus:ring-${colorClass} focus:border-${colorClass} outline-none transition-all placeholder-slate-400 h-28 resize-none text-base`}
                    id="message"
                    name="message"
                    placeholder="What's your biggest SEO challenge right now?"
                  />
                </div>
                <button
                  className="w-full bg-primary text-white font-bold text-lg py-5 rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  type="submit"
                >
                  Get Quick Wins & Consult
                </button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  Or{' '}
                  <a
                    href={SOCIAL_LINKS.calendly}
                    className={`text-${colorClass} underline hover:no-underline font-medium`}
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
