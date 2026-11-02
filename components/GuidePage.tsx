import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GuidePageData } from '../constants-guides';
import { updatePageSEO, HeadSEO } from '../utils/seo';
import { parentOf } from '../site-map';
import { imageFor } from './lean/HubPage';
import { fit } from './lean/Blocks';
import { ContactCTA } from './ContactCTA';
import { ProofWall, RelatedPages, ResultsGrid, topicFromSlug } from './ConversionSections';

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

  const topic = topicFromSlug(content.slug);
  const relatedLinks = [
    { label: content.moneyLabel, path: content.moneyPath, type: 'Service', body: 'Use this if you want the work handled for your own brand.' },
    ...content.related.map((r) => ({ label: r.label, path: r.path, type: r.path.includes('reddit') ? 'Reddit guide' : 'AI guide' })),
  ];

  return (
    <>
      <HeadSEO title={content.seoTitle} description={content.metaDescription} path={`/${content.slug}`} />
      <div className="gp gp-guide">
        <div className="wrap crumb">
          <NavLink to="/">Home</NavLink><span>/</span>
          {parentOf(`/${content.slug}`) && <><NavLink to={parentOf(`/${content.slug}`)!.path}>{parentOf(`/${content.slug}`)!.label}</NavLink><span>/</span></>}{content.h1}
        </div>

        {/* Hero / quick answer */}
        <section className="shero">
          <div className="wrap shero-grid">
            <div>
            <h1>{content.h1}</h1>
            <p className="answer">{renderText(content.quickAnswer)}</p>
            <div className="shero-actions">
              <a className="btn btn-primary" href="#contact">Send your site</a>
            </div>
            </div>
            <figure className="guide-photo">
              <img src={imageFor(`/${content.slug}`).src} alt={imageFor(`/${content.slug}`).alt} width={imageFor(`/${content.slug}`).w} height={imageFor(`/${content.slug}`).h} style={fit(imageFor(`/${content.slug}`))} {...{ fetchpriority: 'high' }} decoding="async" />
            </figure>
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

          </div>
        </section>

        <ProofWall topic={topic} limit={4} title="Proof behind the search visibility work." />
        <ResultsGrid topic={topic} title="Selected results connected to this topic." />

        <RelatedPages
          links={relatedLinks}
        />

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
          title="Want this handled for your brand?"
          body="Send the site, I review the issue, then I reply with the practical first step."
          submitButtonText="Send my site"
        />
      </div>
    </>
  );
};
