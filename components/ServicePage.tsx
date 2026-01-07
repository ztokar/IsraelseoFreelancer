import React, { useEffect } from 'react';
import { ServiceContent, CaseStudy } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { Check, ArrowRight, TrendingUp, BarChart3, Target, HelpCircle, AlertCircle, Wrench, DollarSign } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface ServicePageProps {
  content: ServiceContent;
}

const GSCVisual: React.FC<{ data: any[], clientName: string }> = ({ data, clientName }) => (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 shadow-2xl relative overflow-hidden group">
        {/* Fake Browser Top Bar */}
        <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <div className="ml-4 text-xs text-zinc-500 font-mono">search.google.com/search-console</div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
            <div>
                <div className="text-xs text-zinc-400">Performance on Search results</div>
                <div className="text-sm font-bold text-white">{clientName}</div>
            </div>
            <div className="text-brand-green text-xs font-mono animate-pulse">● Live Data</div>
        </div>

        {/* GSC Metric Boxes */}
        <div className="flex gap-4 mb-6">
            <div className="bg-zinc-800/50 p-3 rounded w-1/2 border-l-4 border-indigo-500">
                <div className="text-[10px] text-zinc-400 uppercase tracking-wide">Total Clicks</div>
                <div className="text-xl font-bold text-white">2.45K</div>
            </div>
            <div className="bg-zinc-800/50 p-3 rounded w-1/2 border-l-4 border-brand-green">
                <div className="text-[10px] text-zinc-400 uppercase tracking-wide">Total Impressions</div>
                <div className="text-xl font-bold text-white">85.2K</div>
            </div>
        </div>

        {/* Chart */}
        <div className="h-40 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', color: '#fff' }}
                      itemStyle={{ fontSize: '12px' }}
                    />
                    <Area type="monotone" dataKey="clicks" stroke="#6366f1" strokeWidth={2} fill="url(#colorClicks)" />
                    <Area type="monotone" dataKey="impressions" stroke="#10b981" strokeWidth={2} fill="url(#colorImpressions)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export const ServicePage: React.FC<ServicePageProps> = ({ content }) => {
  useEffect(() => {
    document.title = `${content.title} | Zechariah Tokar`;
  }, [content]);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-8 border border-zinc-700 rounded-full bg-zinc-900/80 backdrop-blur-md">
            <span className="text-xs uppercase tracking-widest text-brand-green font-bold">
              {content.subtitle}
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tighter leading-[1.1]">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={SOCIAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-8 py-4 text-base font-bold flex items-center justify-center gap-2 hover:bg-brand-green hover:text-white transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Book Audit ($250)
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* UGC Intro Section (What / Why / How) */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div>
                <div className="flex items-center gap-2 mb-4 text-brand-green">
                    <HelpCircle className="w-5 h-5" />
                    <h3 className="font-bold text-white">What is it?</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">{content.ugcIntro.what}</p>
            </div>
            <div>
                 <div className="flex items-center gap-2 mb-4 text-brand-green">
                    <AlertCircle className="w-5 h-5" />
                    <h3 className="font-bold text-white">Why it matters?</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">{content.ugcIntro.why}</p>
            </div>
            <div>
                 <div className="flex items-center gap-2 mb-4 text-brand-green">
                    <Wrench className="w-5 h-5" />
                    <h3 className="font-bold text-white">How I do it?</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">{content.ugcIntro.how}</p>
            </div>
        </div>
      </section>

      {/* Social Proof & GSC Visuals */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
            <div>
                <h2 className="text-2xl font-serif font-bold text-white tracking-tight flex items-center gap-3 mb-2">
                <TrendingUp className="text-brand-green" />
                Proof of Work
                </h2>
                <p className="text-zinc-400 text-sm">Real clients, real graphs. No photoshop.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text & Metrics */}
            <div>
                <div className="inline-block bg-brand-green/10 text-brand-green px-3 py-1 rounded text-xs font-bold uppercase mb-6">
                    Case Study: {content.caseStudyHighlight.client}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{content.caseStudyHighlight.metric} {content.caseStudyHighlight.context}</h3>
                <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                    {content.caseStudyHighlight.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {content.results.slice(0, 2).map((r, i) => (
                        <div key={i} className="bg-black/40 p-4 border border-zinc-800 rounded">
                            <div className="text-zinc-500 text-xs font-bold uppercase mb-1">{r.label}</div>
                            <div className="text-xl font-bold text-white">{r.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: GSC Simulator */}
            <div>
                <GSCVisual 
                    data={content.caseStudyHighlight.graphData || []} 
                    clientName={content.caseStudyHighlight.client} 
                />
            </div>
          </div>
        </div>
      </section>

      {/* Process & Tools */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24">
            
            {/* Process Timeline */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <Target className="text-brand-green" /> {content.process.title}
                </h3>
                <div className="space-y-8 relative pl-2">
                    {/* Line */}
                    <div className="absolute left-2 top-2 bottom-2 w-[1px] bg-zinc-800"></div>

                    {content.process.steps.map((step, i) => (
                        <div key={i} className="relative pl-8">
                            <div className="absolute left-0 top-1.5 w-4 h-4 bg-zinc-900 border border-brand-green rounded-full z-10"></div>
                            <p className="text-zinc-300 text-lg">{step}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools & Pricing */}
            <div className="space-y-12">
                 {/* Tools */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Wrench className="w-5 h-5 text-zinc-500" /> My Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {content.tools.map((tool, i) => (
                            <span key={i} className="bg-zinc-900 border border-zinc-800 px-3 py-1 text-sm text-zinc-400 rounded-full">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Pricing Card */}
                <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                        <DollarSign className="w-24 h-24 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Investment</h3>
                    
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-800/50">
                        <span className="text-zinc-400">Deep Dive Audit</span>
                        <span className="text-brand-green font-bold text-xl">{content.pricing.audit}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Monthly Management</span>
                        <span className="text-white font-bold text-lg">{content.pricing.management}</span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-4 italic">
                        *Pricing depends on site size & competition.
                    </p>
                </div>
            </div>
        </div>
      </section>


      {/* CTA Section - Chess Theme */}
      <section id="contact" className="py-24 px-6 bg-zinc-950 border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 chess-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Make your next move your best move.
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            {content.cta}
          </p>
          <div className="bg-black/90 backdrop-blur border border-zinc-800 p-8 rounded-2xl max-w-lg mx-auto shadow-2xl">
            <p className="text-brand-green text-sm font-bold uppercase tracking-wider mb-6">
              Request Strategy Call
            </p>
            <form 
              action="https://formspree.io/f/mpwvyzbr" 
              method="POST"
              className="space-y-4"
            >
               <input type="hidden" name="_subject" value={`New Inquiry: ${content.title}`} />

               <div>
                 <input 
                  type="text" 
                  name="website"
                  placeholder="Website URL" 
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-brand-green transition-colors"
                />
               </div>
               <div>
                 <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-brand-green transition-colors"
                />
               </div>
               <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-brand-green hover:text-white transition-all duration-300 shadow-lg">
                 Submit Request
               </button>
               <p className="text-xs text-zinc-500 mt-4">
                 Or <a href={SOCIAL_LINKS.calendly} className="text-brand-green underline">book directly via Calendly</a>.
               </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};