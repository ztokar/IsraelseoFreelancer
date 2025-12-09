import React, { useEffect } from 'react';
import { SERVICES_LIST, CASE_STUDIES, SOCIAL_LINKS } from '../constants';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Star } from 'lucide-react';

export const HomePage: React.FC = () => {
  
  useEffect(() => {
    document.title = "Israel SEO Freelancer | Zechariah Tokar";
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center px-6 relative border-b border-zinc-800 overflow-hidden">
        {/* Hero Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] animate-pulse"></div>

        <div className="relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-xs text-zinc-300 font-medium tracking-wide uppercase">US Market Strategy</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter leading-tight">
            Stop playing checkers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-white to-zinc-500">
              with your SEO.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I help businesses in the US & Israel dominate their niche using relevance, reputation, and AI-driven workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#services" 
              className="bg-white text-black px-10 py-4 font-bold text-lg hover:bg-brand-green hover:text-white transition-all duration-300"
            >
              View Strategies
            </a>
            <a 
              href={SOCIAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 font-bold text-lg border border-zinc-700 text-white hover:border-brand-green hover:text-brand-green transition-all duration-300 bg-black/50 backdrop-blur-sm"
            >
              Book Audit ($250)
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies / Wins Section */}
      <section className="py-32 bg-zinc-950 relative border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Grandmaster Moves</h2>
            <p className="text-zinc-400 max-w-2xl text-lg">
              Real results from US-targeted campaigns. No fluff, just rankings and revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="group p-8 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-brand-green/50 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                  {study.icon}
                </div>
                
                <div className="mb-6">
                   <span className="text-4xl font-bold text-white block mb-2">{study.metric}</span>
                   <span className="text-sm text-brand-green font-bold uppercase tracking-wider">{study.context}</span>
                </div>
                
                <h3 className="text-xl font-bold text-zinc-200 mb-3">{study.client}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {study.description}
                </p>

                <div className="w-full h-[1px] bg-gradient-to-r from-brand-green/50 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-green/20 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-2xl">
              <p className="text-lg md:text-xl text-zinc-300 italic font-serif leading-relaxed mb-6">
                "Last week your site was a ghost town. This week it’s the one everyone bumps into. Wild what a little actual SEO can do."
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
                    <span className="text-xl">♞</span>
                 </div>
                 <div>
                    <p className="text-white font-bold">Zechariah Tokar</p>
                    <p className="text-xs text-brand-green">SEO Strategist</p>
                 </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The "Invisible Site" Problem</h2>
            <div className="space-y-6 text-zinc-400">
              <p>
                I keep seeing the same story play out: Founders pour money into gorgeous branding, a shiny website… and then it sits there. Invisible.
              </p>
              <p>
                No one can find it. No one lands on it. No one converts on it. It’s painful to watch, and even more painful to pay for.
              </p>
              <p>
                After working on 30+ sites, it keeps coming back to two things:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3 text-white">
                  <ShieldCheck className="text-brand-green w-5 h-5" />
                  <span>Make content relevant for what you want to be found for.</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <Star className="text-brand-green w-5 h-5" />
                  <span>Build authority through smart content + brand mentions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Select your strategy</h2>
            <div className="h-1 w-20 bg-brand-green"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => (
            <NavLink 
              key={service.key}
              to={`/${service.key}-seo`}
              className="group relative bg-zinc-900/20 border border-zinc-800 p-10 hover:border-zinc-600 transition-all duration-500 overflow-hidden backdrop-blur-sm"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:border-brand-green group-hover:text-brand-green transition-all duration-300 rounded-lg shadow-xl">
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 mb-8 line-clamp-2">
                  {service.subtitle}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  View Strategy <ArrowUpRight className="w-4 h-4 text-brand-green" />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Contact Section */}
       <section id="contact" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to win?
          </h2>
          <p className="text-zinc-400 mb-12">
            If you need clarity with your Google ads & SEO WITHOUT the insane agency prices, reach out.
          </p>
          <div className="bg-black/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-2xl max-w-lg mx-auto shadow-2xl mt-8">
            <p className="text-brand-green text-sm font-bold uppercase tracking-wider mb-6">
              Request Your Audit
            </p>
            <form 
              action="https://formspree.io/f/mpwvyzbr" 
              method="POST"
              className="space-y-4"
            >
               <input type="hidden" name="_subject" value="New SEO Audit Request from Homepage" />
               
               <div>
                 <input 
                  type="text" 
                  name="website"
                  placeholder="Website URL" 
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-brand-green focus:bg-zinc-900 transition-all"
                />
               </div>
               <div>
                 <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-brand-green focus:bg-zinc-900 transition-all"
                />
               </div>
               <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-brand-green hover:text-white transition-all duration-300 shadow-lg shadow-white/5">
                 Get Free Audit & Consult
               </button>
               <p className="text-xs text-zinc-600 mt-4">
                 100% confidential. No spam.
               </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};