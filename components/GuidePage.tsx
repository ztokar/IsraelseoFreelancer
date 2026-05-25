import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GuidePageData } from '../constants-guides';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { ContactCTA } from './ContactCTA';

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

        <ContactCTA
          subject={`New Inquiry from guide: ${content.h1}`}
          title="Want this done for your brand?"
          body="Send the site and the issue you want solved. I will review it and reply with the practical next step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
