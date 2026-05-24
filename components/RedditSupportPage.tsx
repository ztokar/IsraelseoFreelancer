import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquareText } from 'lucide-react';
import { SupportPage } from '../types';
import { HeadSEO, updatePageSEO } from '../utils/seo';
import { ProtectedForm } from './ProtectedForm';

interface RedditSupportPageProps {
  content: SupportPage;
}

const relatedPathByLabel: Record<string, string> = {
  'Reddit marketing services': '/reddit-marketing-services',
  'Reddit marketing expert': '/reddit-marketing-expert',
  'Reddit posting service': '/reddit-posting-service',
  'How to market on Reddit without getting banned': '/how-to-market-on-reddit-without-getting-banned',
  'How to find subreddits for marketing': '/how-to-find-subreddits-for-marketing',
  'Why Reddit posts get removed': '/why-reddit-posts-get-removed',
};

const linkify = (text: string) => {
  const labels = Object.keys(relatedPathByLabel).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${labels.map((label) => label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');

  return text.split(pattern).map((part, index) => {
    const path = relatedPathByLabel[part];
    if (!path) return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;

    return (
      <NavLink key={`${part}-${index}`} to={path} className="font-bold text-[#108a00] underline decoration-emerald-200 underline-offset-4 hover:text-[#0b6f00]">
        {part}
      </NavLink>
    );
  });
};

export const RedditSupportPage: React.FC<RedditSupportPageProps> = ({ content }) => {
  useEffect(() => {
    updatePageSEO({
      title: content.seoTitle,
      description: content.metaDescription,
      path: `/${content.slug}`,
    });
  }, [content]);

  return (
    <>
      <HeadSEO title={content.seoTitle} description={content.metaDescription} path={`/${content.slug}`} />

      <main className="bg-[#f6f7f2] text-slate-900">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-14">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-[#108a00]">
                  {content.eyebrow}
                </span>
                <NavLink
                  to={content.parentPath}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:border-[#108a00] hover:text-[#108a00]"
                >
                  {content.parentLabel}
                </NavLink>
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{linkify(content.intro)}</p>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-[#fbfbf8] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#108a00] text-white">
                <MessageSquareText className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">Before you post</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A short guide for a specific Reddit problem, with a clear path if you want help before posting.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4">
                <p className="text-sm font-semibold text-slate-500">Want help before you post?</p>
                <p className="mt-1 text-base font-semibold text-slate-950">Book a consultation and I will map the play.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              {content.sections.map((section) => (
                <section key={section.heading} className="border-b border-slate-200 py-7 first:pt-0 last:border-0 last:pb-0">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{linkify(paragraph)}</p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3 rounded-xl bg-[#f6f7f2] p-4">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#108a00]" />
                          <span className="text-sm font-semibold leading-6 text-slate-800">{linkify(bullet)}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </article>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Related Reddit pages</p>
              <div className="mt-5 grid gap-3">
                {content.related.map((item) => (
                  <NavLink
                    key={item}
                    to={relatedPathByLabel[item] || content.parentPath}
                    className="group flex items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white hover:border-emerald-300 hover:text-emerald-200"
                  >
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </NavLink>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="hire" className="bg-slate-950 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Request a review</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{content.cta}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Send the site, subreddit, or post idea. I will reply with the practical next step and likely hours.
              </p>
            </div>
            <div className="mt-9 rounded-2xl bg-white p-6 shadow-2xl md:p-8">
              <ProtectedForm
                formspreeEndpoint="https://formspree.io/f/mpwvyzbr"
                subject={`New Reddit Support Request: ${content.title}`}
                submitButtonText="Request Reddit review"
                showMessage={true}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
