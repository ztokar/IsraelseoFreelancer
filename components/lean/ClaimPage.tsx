import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../../utils/seo';
import { FORMSPREE_ENDPOINT } from '../ContactCTA';
import { ProtectedForm } from '../ProtectedForm';
import { CLAIMS, ClaimKey, SITE_URL } from '../../site-map';
import { JsonLd, Photo, rich, trackCheckout } from './Blocks';

// A client result card: who, the result in big type, a line or a quote, and their photo when we have one.
export interface Result { who: string; role: string; win: string; say?: string; img?: string; logo?: string }

// One block of a service page. Headings are the questions buyers ask; `answer` is the one bold line under it.
export type Block =
  | { kind: 'results'; id?: string; h2: string; answer?: string; items: Result[]; after?: string }
  | { kind: 'text'; id?: string; h2: string; answer?: string; list?: string[]; lines?: string[]; after?: string }
  | { kind: 'steps'; id?: string; h2: string; answer?: string; steps: { h: string; p: string }[] }
  | { kind: 'table'; id?: string; h2: string; answer?: string; head: string[]; rows: string[][]; buy?: { label: string; href: string }[]; after?: string }
  | { kind: 'about'; id?: string; h2: string; answer: string; lines: string[] }
  | { kind: 'faq'; id?: string; h2: string; items: { q: string; a: string; id?: string }[] };

export interface PageVersion {
  answer: string; // the one line under the H1, first person
  blocks: Block[];
}

export interface ClaimContent {
  claim: ClaimKey;
  path: string;
  title: string; // keyword | benefit (brand suffix is added centrally)
  description: string;
  h1: string;
  photo: Photo; // share image
  glance: [string, string][]; // four facts under the hero
  serviceType: string;
  primary?: { label: string; href: string; external?: boolean };
  formSubject: string;
  formService: string;
  formTitle: string;
  formBody: string;
  versions: { A: PageVersion; C: PageVersion };
  pick: 'A' | 'C';
}

const FACES = ['yonatan', 'brett', 'sean', 'behfar'];
const ME: Photo = { src: '/images/zechariah-tokar-outdoors.webp', alt: 'Zechariah Tokar', w: 640, h: 800 };

const RbBtn: React.FC<{ href: string; children: React.ReactNode; ghost?: boolean; external?: boolean }> = ({ href, children, ghost, external }) => {
  const cls = `btn ${ghost ? 'ghost' : 'fill'}`;
  if (href.startsWith('/')) return <NavLink className={cls} to={href}>{children}</NavLink>;
  return <a className={cls} href={href} onClick={() => trackCheckout(href)} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>;
};

const Head2: React.FC<{ h2: string; answer?: string; wide?: boolean }> = ({ h2, answer, wide }) => (
  <>
    <h2>{h2}</h2>
    {answer && <p className={`ans ${wide ? 'widea' : ''}`}>{rich(answer)}</p>}
  </>
);

export const renderBlock = (b: Block, i: number) => {
  switch (b.kind) {
    case 'results':
      return (
        <section key={i} id={b.id} className="sec"><div className="wrap">
          <Head2 h2={b.h2} answer={b.answer} wide />
          <div className="cards">
            {b.items.map((r, n) => (
              <article key={r.who + r.win} className={`card ${n === 0 ? 'wide' : ''} ${r.img || r.logo ? '' : 'noimg'}`}>
                <div className="txt">
                  <p className="who"><b>{r.who}</b> {r.role}</p>
                  <p className="win">{r.win}</p>
                  {r.say && <p className="say">{r.say}</p>}
                </div>
                {r.img && <img src={r.img} alt={r.who} width={360} height={450} loading="lazy" decoding="async" />}
                {r.logo && <img className="logo" src={r.logo} alt={r.who} width={392} height={120} loading="lazy" decoding="async" />}
              </article>
            ))}
          </div>
          {b.after && <p className="after">{rich(b.after)}</p>}
        </div></section>
      );
    case 'text':
      return (
        <section key={i} id={b.id} className="sec"><div className="wrap cols">
          <div><Head2 h2={b.h2} answer={b.answer} /></div>
          <div>
            {b.list && <ul className="ticks">{b.list.map((t) => <li key={t}>{rich(t)}</li>)}</ul>}
            {b.lines && <div className="plain">{b.lines.map((t) => <p key={t}>{rich(t)}</p>)}</div>}
            {b.after && <p className="after">{rich(b.after)}</p>}
          </div>
        </div></section>
      );
    case 'steps':
      return (
        <section key={i} id={b.id} className="sec"><div className="wrap cols">
          <div><Head2 h2={b.h2} answer={b.answer} /></div>
          <ol className="steps">{b.steps.map((s) => <li key={s.h}><h3>{s.h}</h3><p>{rich(s.p)}</p></li>)}</ol>
        </div></section>
      );
    case 'table':
      return (
        <section key={i} id={b.id} className="sec"><div className="wrap">
          <Head2 h2={b.h2} answer={b.answer} wide />
          <div className="tbl"><table>
            <thead><tr>{b.head.map((h, n) => <th key={n} scope="col">{h}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, n) => <tr key={n}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row">{rich(c)}</th> : <td key={j}>{rich(c)}</td>))}</tr>)}</tbody>
          </table></div>
          {b.buy && <div className="actions left">{b.buy.map((x, n) => <RbBtn key={x.href} href={x.href} ghost={n > 0} external>{x.label}</RbBtn>)}</div>}
          {b.after && <p className="after">{rich(b.after)}</p>}
        </div></section>
      );
    case 'about':
      return (
        <section key={i} id={b.id} className="photo"><div className="wrap photo-grid">
          <img src={ME.src} alt={ME.alt} width={ME.w} height={ME.h} loading="lazy" decoding="async" />
          <div><Head2 h2={b.h2} answer={b.answer} />{b.lines.map((t) => <p key={t}>{rich(t)}</p>)}</div>
        </div></section>
      );
    case 'faq':
      return (
        <section key={i} id={b.id} className="sec"><div className="wrap">
          <h2>{b.h2}</h2>
          <div className="faq">{b.items.map((f) => <div key={f.q} id={f.id}><h3>{f.q}</h3><p>{rich(f.a)}</p></div>)}</div>
        </div></section>
      );
    default:
      return null;
  }
};

// The other main service pages, one line each (the only sideways links a main page carries).
const Siblings: React.FC<{ current: ClaimKey }> = ({ current }) => (
  <section className="sec"><div className="wrap">
    <h2>Other ways I get you found</h2>
    <div className="sibs">
      {(Object.keys(CLAIMS) as ClaimKey[]).filter((k) => k !== current).map((k) => (
        <NavLink key={k} to={CLAIMS[k].path} className="sib"><b>{CLAIMS[k].label}</b><span>{CLAIMS[k].line}</span></NavLink>
      ))}
    </div>
  </div></section>
);

export const ClaimPage: React.FC<{ content: ClaimContent; version?: 'A' | 'C'; leaf?: boolean }> = ({ content: c, version, leaf }) => {
  const v = c.versions[version || c.pick];
  useEffect(() => { updatePageSEO({ title: c.title, description: c.description, path: c.path }); }, [c]);
  const faq = v.blocks.find((b) => b.kind === 'faq') as Extract<Block, { kind: 'faq' }> | undefined;
  const results = v.blocks.find((b) => b.kind === 'results');
  const primary = c.primary || { label: 'Send your site', href: '#contact' };
  const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${c.path}#service`,
    name: c.h1,
    serviceType: c.serviceType,
    url: `${SITE_URL}${c.path}`,
    description: c.description,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: ['United States', 'United Kingdom', 'Canada', 'Australia'].map((name) => ({ '@type': 'Country', name })),
  };
  const faqSchema = faq && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };
  return (
    <div className="rb">
      <HeadSEO title={c.title} description={c.description} path={c.path} image={c.photo.src} />
      <section className="hero"><div className="wrap">
        {leaf && <nav className="crumb" aria-label="Breadcrumb"><NavLink to="/">Home</NavLink><span aria-hidden="true">/</span><NavLink to={CLAIMS[c.claim].path}>{CLAIMS[c.claim].label}</NavLink></nav>}
        <h1 className={c.h1.length > 22 ? 'long' : undefined}>{c.h1}</h1>
        <p className="lead">{rich(v.answer)}</p>
        <div className="actions">
          <RbBtn href={primary.href} external={primary.external}>{primary.label}</RbBtn>
          {results?.id ? <RbBtn href={`#${results.id}`} ghost>See results</RbBtn> : <RbBtn href="#included" ghost>See what you get</RbBtn>}
        </div>
        <p className="faces"><span>{FACES.map((f) => <img key={f} src={`/images/clients/${f}.webp`} alt="" width={40} height={40} />)}</span>Trusted by 45+ brands</p>
        <dl className="glance">{c.glance.slice(0, 4).map(([k, val]) => <div key={k}><dt>{k}</dt><dd>{rich(val)}</dd></div>)}</dl>
      </div></section>
      {v.blocks.map(renderBlock)}
      {!leaf && <Siblings current={c.claim} />}
      <section id="contact" className="sec"><div className="wrap cols">
        <div>
          <h2>How do I start?</h2>
          <p className="ans">{c.formTitle}</p>
          <p className="sub">{c.formBody} Want to talk? Message me first. If it’s a fit, I’ll set up a quick call.</p>
        </div>
        <div className="rbform">
          <ProtectedForm
            formspreeEndpoint={FORMSPREE_ENDPOINT}
            subject={c.formSubject}
            submitButtonText="Send your site"
            showMessage
            messageLabel="What do you want to be found for?"
            messagePlaceholder="The search or question you want to show up for"
            extraFields={<input type="hidden" name="service" value={c.formService} />}
          />
        </div>
      </div></section>
      <JsonLd data={schema} />
      {faqSchema && <JsonLd data={faqSchema} />}
    </div>
  );
};
