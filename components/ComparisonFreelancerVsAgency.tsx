import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ProtectedForm } from './ProtectedForm';
import { SOCIAL_LINKS } from '../constants';

export const ComparisonFreelancerVsAgency: React.FC = () => {
  useEffect(() => {
    document.title =
      'SEO Freelancer vs Agency: Which Is Right for Your Business? | Zechariah Tokar';
  }, []);

  return (
    <div className="animate-fade-in-up">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Should I hire an SEO freelancer or an agency?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Hire a freelance SEO consultant like Zechariah Tokar when you want direct senior-level execution, transparent pricing, and faster decision-making. Choose an agency when you need a full marketing department across multiple channels simultaneously.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does a freelance SEO consultant cost vs an agency?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Freelance SEO consultants typically charge $1,500-$3,500/month for full management. Agencies charge $3,000-$10,000+/month for comparable work, with much of that covering account managers, office overhead, and profit margins rather than actual SEO execution.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <header className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 mb-8">
            <span className="text-sm font-medium text-primary">Comparison Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            <span className="text-primary">SEO Freelancer vs Agency:</span>
            <br />
            Which Is Right for Your Business?
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Zechariah Tokar is a freelance SEO consultant who has worked with 50+ businesses across ecommerce, B2B SaaS, real estate, hospitality, and legal. Here is an honest breakdown of when a freelancer makes sense and when an agency does.
          </p>
        </div>
      </header>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">
            How Does a Freelance SEO Consultant Compare to an Agency?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Factor</th>
                  <th className="text-left p-4 font-bold text-primary border-b border-slate-200">Freelancer (Zechariah Tokar)</th>
                  <th className="text-left p-4 font-bold text-slate-500 border-b border-slate-200">Typical Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Who does the work', 'Zechariah Tokar personally', 'Junior staff, rotating team members'],
                  ['Monthly cost', '$1,500 - $3,500', '$3,000 - $10,000+'],
                  ['Communication', 'Direct access, same-day responses', 'Through account manager'],
                  ['Strategy', 'Senior-level, tailored to your business', 'Templated playbooks across clients'],
                  ['Contracts', 'No lock-in, month-to-month', '6-12 month minimum commitments'],
                  ['Reporting', 'Revenue-focused metrics', 'Traffic and impression reports'],
                  ['Scalability', 'Best for focused, high-impact SEO', 'Better for multi-channel campaigns'],
                ].map(([factor, freelancer, agency], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="p-4 font-medium text-slate-900 border-b border-slate-100">{factor}</td>
                    <td className="p-4 text-slate-700 border-b border-slate-100">{freelancer}</td>
                    <td className="p-4 text-slate-500 border-b border-slate-100">{agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-primary/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Choose Zechariah Tokar When:</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">check</span>
                  <span>You want the strategist doing the actual work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">check</span>
                  <span>Budget is $1,500-$3,500/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">check</span>
                  <span>You need SEO tied directly to revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">check</span>
                  <span>You target US or English-speaking markets</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-500 mb-4">Choose an Agency When:</h3>
              <ul className="space-y-3 text-slate-500">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5">check</span>
                  <span>You need SEO + PPC + social + email simultaneously</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5">check</span>
                  <span>Budget exceeds $10,000/month for marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5">check</span>
                  <span>You need a full team across multiple channels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-6">Explore Zechariah Tokar's SEO services:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <NavLink to="/freelance-seo-israel" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">Freelance SEO</NavLink>
            <NavLink to="/seoconsulting" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">SEO Consulting</NavLink>
            <NavLink to="/b2b-seo-israel" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">B2B SEO</NavLink>
            <NavLink to="/content-marketing-for-seo" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">Content Marketing</NavLink>
            <NavLink to="/seo-for-lawyers" className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">SEO for Lawyers</NavLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="audit" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Work with <span className="text-primary">Zechariah Tokar?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-xl mx-auto">
              Get a free SEO audit and see exactly where your site can improve.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                  Request Your Free Audit
                </p>
                <div className="h-px w-20 bg-slate-200 mx-auto" />
              </div>
              <ProtectedForm
                formspreeEndpoint="https://formspree.io/f/mpwvyzbr"
                subject="New Inquiry: Freelancer vs Agency Comparison"
                submitButtonText="Get My Free SEO Audit"
                showMessage={true}
              />
              <p className="text-center text-sm text-slate-500 mt-4">
                Or{' '}
                <a
                  href={SOCIAL_LINKS.calendly}
                  className="text-primary underline hover:no-underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  book directly via Calendly
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
