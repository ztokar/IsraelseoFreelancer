import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Arrow } from './Arrow';

export interface Photo { src: string; alt: string; w: number; h: number; caption?: string; pos?: string }

// Inline links inside copy: [label](/path) becomes a router link, **x** becomes bold.
export const rich = (text: string): React.ReactNode[] => {
  const out: React.ReactNode[] = [];
  const rx = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0; let m: RegExpExecArray | null; let i = 0;
  while ((m = rx.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      out.push(href.startsWith('/') ? <NavLink key={i++} to={href}>{m[1]}</NavLink> : <a key={i++} href={href} target={href.startsWith('#') ? undefined : '_blank'} rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}>{m[1]}</a>);
    } else out.push(<strong key={i++}>{m[3]}</strong>);
    last = rx.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
};

export const Btn: React.FC<{ href: string; children: React.ReactNode; ghost?: boolean; external?: boolean }> = ({ href, children, ghost, external }) => {
  const cls = `lbtn ${ghost ? 'lbtn-ghost' : 'lbtn-primary'}`;
  if (href.startsWith('/') && !href.includes('#')) return <NavLink className={cls} to={href}>{children} <Arrow /></NavLink>;
  return <a className={cls} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children} <Arrow /></a>;
};

// Page opening: H1 (the search), one answer line, the at-a-glance table, the page's own photo.
// Text comes first in the source so the H1 and answer sit high in the raw HTML.
export const LeanHero: React.FC<{
  h1: string; answer: string; sub?: string; photo: Photo; glance?: [string, string][];
  primary?: { label: string; href: string; external?: boolean }; secondary?: { label: string; href: string };
  crumb?: { label: string; path: string };
}> = ({ h1, answer, sub, photo, glance, primary = { label: 'Send your site', href: '#contact' }, secondary, crumb }) => (
  <section className="lh">
    <div className="lwrap lh-grid">
      <div className="lh-copy">
        {crumb && <nav className="lcrumb" aria-label="Breadcrumb"><NavLink to="/">Home</NavLink><span aria-hidden="true">/</span><NavLink to={crumb.path}>{crumb.label}</NavLink></nav>}
        <h1>{h1}</h1>
        <p className="lh-answer">{rich(answer)}</p>
        {sub && <p className="lh-sub">{rich(sub)}</p>}
        <div className="lh-actions">
          <Btn href={primary.href} external={primary.external}>{primary.label}</Btn>
          {secondary && <Btn href={secondary.href} ghost>{secondary.label}</Btn>}
        </div>
      </div>
      <figure className="lh-photo">
        <img src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} style={photo.pos ? { objectPosition: photo.pos } : undefined} {...{ fetchpriority: 'high' }} decoding="async" />
        {photo.caption && <figcaption>{photo.caption}</figcaption>}
      </figure>
    </div>
    {glance && (
      <div className="lwrap">
        <table className="glance">
          <caption>At a glance</caption>
          <tbody>
            {glance.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{rich(v)}</td></tr>)}
          </tbody>
        </table>
      </div>
    )}
  </section>
);

// Moving photo hero (home): first frame server-rendered, the rest cut in after load,
// a different wipe and camera move per shot, a pause button, a still frame for reduced motion.
export const MovingHero: React.FC<{ shots: Photo[] }> = ({ shots }) => {
  const [i, setI] = useState(0);
  const [live, setLive] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t0 = window.setTimeout(() => setLive(true), 900);
    return () => window.clearTimeout(t0);
  }, []);
  useEffect(() => {
    if (!live || paused) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % shots.length), 2400);
    return () => window.clearInterval(t);
  }, [live, paused, shots.length]);
  return (
    <div className="mh" aria-roledescription="slideshow" aria-label="Zechariah Tokar and his work">
      {shots.map((s, n) => (
        (n === 0 || live) && (
          <figure key={s.src} className={`mh-shot mh-fx${n % 6} ${n === i ? 'on' : ''}`} aria-hidden={n !== i}>
            <img src={s.src} alt={s.alt} width={s.w} height={s.h} style={s.pos ? { objectPosition: s.pos } : undefined} {...(n === 0 ? { fetchpriority: 'high' } : { loading: 'lazy' })} decoding="async" />
            {s.caption && <figcaption>{s.caption}</figcaption>}
          </figure>
        )
      ))}
      {live && (
        <button type="button" className="mh-pause" onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>
          {paused
            ? <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 3l9 5-9 5z" fill="currentColor" /></svg>
            : <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 3h3v10H4zM9 3h3v10H9z" fill="currentColor" /></svg>}
        </button>
      )}
    </div>
  );
};

export const Section: React.FC<{ id?: string; h2: string; answer?: string; children?: React.ReactNode; tone?: 'plain' | 'tint' }> = ({ id, h2, answer, children, tone = 'plain' }) => (
  <section className={`lsec ${tone === 'tint' ? 'lsec-tint' : ''}`} id={id}>
    <div className="lwrap lsec-in">
      <h2>{h2}</h2>
      {answer && <p className="lsec-answer">{rich(answer)}</p>}
      {children}
    </div>
  </section>
);

export const List: React.FC<{ items: string[]; check?: boolean }> = ({ items, check }) => (
  <ul className={`llist ${check ? 'llist-check' : ''}`}>
    {items.map((t) => <li key={t}>{check && <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>}<span>{rich(t)}</span></li>)}
  </ul>
);

export const Steps: React.FC<{ items: { h: string; p: string }[] }> = ({ items }) => (
  <ol className="lsteps">
    {items.map((s) => <li key={s.h}><h3>{s.h}</h3><p>{rich(s.p)}</p></li>)}
  </ol>
);

export const Table: React.FC<{ head: string[]; rows: string[][]; caption?: string }> = ({ head, rows, caption }) => (
  <div className="ltable-wrap">
    <table className="ltable">
      {caption && <caption>{caption}</caption>}
      <thead><tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => j === 0 ? <th key={j} scope="row" data-label={head[0]}>{rich(c)}</th> : <td key={j} data-label={head[j]}>{rich(c)}</td>)}</tr>)}</tbody>
    </table>
  </div>
);

// Full-width photo between sections.
export const PhotoBreak: React.FC<{ photo: Photo }> = ({ photo }) => (
  <figure className="pbreak">
    <img src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} loading="lazy" decoding="async" style={photo.pos ? { objectPosition: photo.pos } : undefined} />
    {photo.caption && <figcaption className="lwrap">{photo.caption}</figcaption>}
  </figure>
);

// A real screenshot at its real size, with what it shows and where it came from.
export interface Receipt { src: string; w: number; h: number; alt: string; metric: string; label: string; caption: string; source: string }
export const Receipts: React.FC<{ items: Receipt[] }> = ({ items }) => (
  <div className="receipts">
    {items.map((r) => (
      <figure key={r.src} className="receipt">
        <div className="receipt-top"><span>{r.label}</span><strong>{r.metric}</strong></div>
        <div className="receipt-img"><img src={r.src} alt={r.alt} width={r.w} height={r.h} loading="lazy" decoding="async" /></div>
        <figcaption>{rich(r.caption)} <span className="receipt-src">{r.source}</span></figcaption>
      </figure>
    ))}
  </div>
);

export const Quote: React.FC<{ text: string; name: string; role: string }> = ({ text, name, role }) => (
  <figure className="lquote">
    <blockquote>{text}</blockquote>
    <figcaption><b>{name}</b> <span>{role}</span></figcaption>
  </figure>
);

export const Faq: React.FC<{ items: { q: string; a: string }[] }> = ({ items }) => (
  <div className="lfaq">
    {items.map((f) => (
      <details key={f.q}>
        <summary><h3>{f.q}</h3><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg></summary>
        <p>{rich(f.a)}</p>
      </details>
    ))}
  </div>
);

// Own-data bar chart: monthly US searches, drawn as plain SVG + a text table for screen readers.
export const DemandChart: React.FC<{ title: string; rows: [string, number][]; source: string }> = ({ title, rows, source }) => {
  const max = Math.max(...rows.map((r) => r[1]));
  const rowH = 34; const w = 640; const labelW = 250; const h = rows.length * rowH + 8;
  return (
    <figure className="dchart">
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby={`dc-${title.length}`}>
        <title id={`dc-${title.length}`}>{title}</title>
        {rows.map(([label, v], i) => {
          const bw = Math.max(4, ((w - labelW - 70) * v) / max);
          return (
            <g key={label} transform={`translate(0 ${i * rowH + 4})`}>
              <text x="0" y="19" className="dc-l">{label}</text>
              <rect x={labelW} y="5" width={bw} height="20" rx="4" className="dc-b" />
              <text x={labelW + bw + 8} y="20" className="dc-v">{v.toLocaleString('en-US')}</text>
            </g>
          );
        })}
      </svg>
      <figcaption><b>{title}</b> {source}</figcaption>
    </figure>
  );
};

export interface CardItem { path: string; title: string; text: string; image?: Photo; meta?: string }
export const PhotoCards: React.FC<{ items: CardItem[] }> = ({ items }) => (
  <div className="pcards">
    {items.map((c) => (
      <NavLink key={c.path} to={c.path} className="pcard">
        {c.image && <div className="pcard-img"><img src={c.image.src} alt={c.image.alt} width={c.image.w} height={c.image.h} loading="lazy" decoding="async" style={c.image.pos ? { objectPosition: c.image.pos } : undefined} /></div>}
        <div className="pcard-body">
          {c.meta && <span className="pcard-meta">{c.meta}</span>}
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </div>
      </NavLink>
    ))}
  </div>
);

// Answer card: the home for a question that used to have its own page (kept on the receiving page, anchored).
export const AnswerCard: React.FC<{ id: string; h: string; children: React.ReactNode }> = ({ id, h, children }) => (
  <article className="acard" id={id}>
    <h3>{h}</h3>
    <div className="acard-body">{children}</div>
  </article>
);

export const JsonLd: React.FC<{ data: unknown }> = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
);
