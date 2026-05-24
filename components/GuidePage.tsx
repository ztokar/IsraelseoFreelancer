import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GuidePageData } from '../constants-guides';
import { SOCIAL_LINKS } from '../constants';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ProtectedForm } from './ProtectedForm';

// Render text with [label](/path) internal links and [label](https://..) external links.
const renderText = (text: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, url] = m;
    if (url.startsWith('http')) {
      parts.push(<a key={i++} href={url} target="_blank" rel="noopener noreferrer">{label}</a>);
    } else {
      parts.push(<NavLink key={i++} to={url}>{label}</NavLink>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
};

export const GuidePage: React.FC<{ content: GuidePageData }> = ({ content }) => {
  useEffect(() => {
    updatePageSEO({ title: content.seoTitle, description: content.metaDescription, path: `/${content.slug}` });
  }, [content]);

  return (
    <>
      <HeadSEO title={content.seoTitle} description={content.metaDescription} path={`/${content.slug}`} />
      <div className="gp gp-guide">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          <NavLink to={content.moneyPath}>{content.moneyLabel}</NavLink><span>/</span>{content.h1}
        </div>

        {/* Hero / quick answer */}
        <section className="shero">
          <div className="wrap">
            <span className="eyebrow">{content.eyebrow}</span>
            <h1>{content.h1}</h1>
            <p className="answer">{renderText(content.quickAnswer)}</p>
            <div className="shero-actions">
              <NavLink className="btn btn-primary" to={content.moneyPath}>{content.moneyLabel} <span className="arrow">↗</span></NavLink>
              <a className="btn btn-ghost" href="#contact">Get a free audit</a>
            </div>
          </div>
        </section>

        {/* Body */}
        <section>
          <div className="narrow">
            {content.toc && content.toc.length > 0 && (
              <nav className="toc">
                <p className="toc-label">On this page</p>
                <ul>
                  {content.toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>)}
                </ul>
              </nav>
            )}

            {content.sections.map((s, idx) => (
              <div key={idx} id={s.id}>
                {s.h2 && <h2 className="block" style={{ marginTop: idx === 0 ? 0 : '38px' }}>{s.h2}</h2>}
                {s.h3 && <h3 style={{ fontSize: '19px', marginTop: '26px' }}>{s.h3}</h3>}
                {s.body?.map((p, k) => <p key={k} style={{ marginTop: '12px' }}>{renderText(p)}</p>)}
                {s.bullets && (
                  <ul className="guide-list">
                    {s.bullets.map((b, k) => <li key={k}>{renderText(b)}</li>)}
                  </ul>
                )}
                {s.table && (
                  <div className="tbl-wrap">
                    <table className="gtbl">
                      <thead><tr>{s.table.head.map((h, k) => <th key={k}>{h}</th>)}</tr></thead>
                      <tbody>
                        {s.table.rows.map((row, r) => <tr key={r}>{row.map((cell, c) => <td key={c}>{renderText(cell)}</td>)}</tr>)}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}

            {content.related && content.related.length > 0 && (
              <div className="guide-related">
                <p className="toc-label">Related</p>
                <div className="pills">
                  {content.related.map((r) => <NavLink key={r.path} to={r.path}>{r.label}</NavLink>)}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        {content.faqs.length > 0 && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: content.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
                }),
              }}
            />
            <section className="divider">
              <div className="narrow">
                <span className="eyebrow">More questions</span>
                <h2 className="block" style={{ marginTop: '12px' }}>FAQs</h2>
                <div style={{ marginTop: '24px' }}>
                  {content.faqs.map((f) => <div className="faq" key={f.q}><h3>{f.q}</h3><p>{renderText(f.a)}</p></div>)}
                </div>
              </div>
            </section>
          </>
        )}

        {/* CTA */}
        <section className="gp-cta" id="contact">
          <div className="wrap">
            <span className="eyebrow">Let's talk</span>
            <h2 style={{ marginTop: '12px' }}>Want this done for your brand?</h2>
            <p>Book a consultation and leave with a plan today, or send your site for a free quick-wins audit. You hear from me directly either way.</p>
            <div className="cta-cols">
              <div className="cta-card book">
                <h3>Book a consultation</h3>
                <p>A focused session on your site, your competitors, and the fastest path to rankings, leads, and AI visibility. You leave with a plan you can act on right away.</p>
                <div className="price-note">Paid session · booked instantly</div>
                <a className="btn" href={SOCIAL_LINKS.calendly} target="_blank" rel="noopener noreferrer">Book your consultation <span className="arrow">↗</span></a>
              </div>
              <div className="cta-card">
                <span className="tag2">Or get a free audit</span>
                <h3 style={{ marginTop: '8px', marginBottom: '6px' }}>Send me your site</h3>
                <ProtectedForm
                  formspreeEndpoint="https://formspree.io/f/mpwvyzbr"
                  subject={`New Inquiry from guide: ${content.h1}`}
                  submitButtonText="Get my quick-wins audit"
                  showMessage={true}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
