import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HeadSEO, updatePageSEO } from '../../utils/seo';
import { ContactCTA } from '../ContactCTA';
import { CLAIMS, ClaimKey, SITE_URL } from '../../site-map';
import {
  AnswerCard, Btn, DemandChart, Faq, JsonLd, LeanHero, List, Photo, PhotoBreak, Quote, Receipt, Receipts, Section, Steps, Table, rich,
} from './Blocks';

// One block of a page. A version is an ordered list of blocks; versions share the same facts.
export type Block =
  | { kind: 'text'; id?: string; h2: string; answer?: string; list?: string[]; check?: boolean; after?: string; tint?: boolean }
  | { kind: 'steps'; id?: string; h2: string; answer?: string; steps: { h: string; p: string }[]; tint?: boolean }
  | { kind: 'table'; id?: string; h2: string; answer?: string; head: string[]; rows: string[][]; buy?: { label: string; href: string }[]; after?: string; tint?: boolean }
  | { kind: 'receipts'; id?: string; h2: string; answer?: string; items: Receipt[]; after?: string; tint?: boolean }
  | { kind: 'quotes'; id?: string; h2: string; answer?: string; items: { text: string; name: string; role: string }[]; tint?: boolean }
  | { kind: 'cards'; id?: string; h2: string; answer?: string; cards: { id: string; h: string; p: string[] }[]; tint?: boolean }
  | { kind: 'demand'; id?: string; h2: string; answer?: string; title: string; rows: [string, number][]; source: string; tint?: boolean }
  | { kind: 'faq'; id?: string; h2: string; items: { q: string; a: string }[]; tint?: boolean }
  | { kind: 'photo'; photo: Photo };

export interface PageVersion {
  answer: string; // first sentence(s) under the H1: names Zechariah Tokar as the provider and the proof
  sub?: string;
  blocks: Block[];
}

export interface ClaimContent {
  claim: ClaimKey;
  path: string;
  title: string; // keyword | benefit (brand suffix is added centrally)
  description: string;
  h1: string;
  photo: Photo;
  glance: [string, string][];
  serviceType: string;
  primary?: { label: string; href: string; external?: boolean };
  formSubject: string;
  formService: string;
  formTitle: string;
  formBody: string;
  versions: { A: PageVersion; C: PageVersion };
  pick: 'A' | 'C';
}

export const renderBlock = (b: Block, i: number) => {
  const tone = 'tint' in b && b.tint ? 'tint' : 'plain';
  switch (b.kind) {
    case 'photo':
      return <PhotoBreak key={i} photo={b.photo} />;
    case 'text':
      return (
        <Section key={i} id={b.id} h2={b.h2} answer={b.answer} tone={tone}>
          {b.list && <List items={b.list} check={b.check} />}
          {b.after && <p>{rich(b.after)}</p>}
        </Section>
      );
    case 'steps':
      return <Section key={i} id={b.id} h2={b.h2} answer={b.answer} tone={tone}><Steps items={b.steps} /></Section>;
    case 'table':
      return (
        <Section key={i} id={b.id} h2={b.h2} answer={b.answer} tone={tone}>
          <Table head={b.head} rows={b.rows} />
          {b.buy && <div className="lh-actions">{b.buy.map((x, n) => <Btn key={x.href} href={x.href} ghost={n > 0} external={x.href.startsWith('http')}>{x.label}</Btn>)}</div>}
          {b.after && <p>{rich(b.after)}</p>}
        </Section>
      );
    case 'receipts':
      return (
        <Section key={i} id={b.id} h2={b.h2} answer={b.answer} tone={tone}>
          <Receipts items={b.items} />
          {b.after && <p>{rich(b.after)}</p>}
        </Section>
      );
    case 'quotes':
      return <Section key={i} id={b.id} h2={b.h2} answer={b.answer} tone={tone}><div className="lquotes">{b.items.map((q) => <Quote key={q.name} {...q} />)}</div></Section>;
    case 'cards':
      return (
        <Section key={i} id={b.id} h2={b.h2} answer={b.answer} tone={tone}>
          <div className="acards">{b.cards.map((c) => <AnswerCard key={c.id} id={c.id} h={c.h}>{c.p.map((p) => <p key={p}>{rich(p)}</p>)}</AnswerCard>)}</div>
        </Section>
      );
    case 'demand':
      return <Section key={i} id={b.id} h2={b.h2} answer={b.answer} tone={tone}><DemandChart title={b.title} rows={b.rows} source={b.source} /></Section>;
    case 'faq':
      return <Section key={i} id={b.id} h2={b.h2} tone={tone}><Faq items={b.items} /></Section>;
    default:
      return null;
  }
};

// The other claim pages, one line each (the only sideways links a claim page carries).
const Siblings: React.FC<{ current: ClaimKey }> = ({ current }) => (
  <Section h2="Other ways to get found" tone="tint">
    <div className="siblings">
      {(Object.keys(CLAIMS) as ClaimKey[]).filter((k) => k !== current).map((k) => (
        <NavLink key={k} to={CLAIMS[k].path} className="sibling">
          <strong>{CLAIMS[k].label}</strong>
          <span>{CLAIMS[k].line}</span>
        </NavLink>
      ))}
    </div>
  </Section>
);

export const ClaimPage: React.FC<{ content: ClaimContent; version?: 'A' | 'C'; leaf?: boolean }> = ({ content: c, version, leaf }) => {
  const v = c.versions[version || c.pick];
  useEffect(() => { updatePageSEO({ title: c.title, description: c.description, path: c.path }); }, [c]);
  const faq = v.blocks.find((b) => b.kind === 'faq') as Extract<Block, { kind: 'faq' }> | undefined;
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
    mainEntity: faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') } })),
  };
  return (
    <div className="lp">
      <HeadSEO title={c.title} description={c.description} path={c.path} image={c.photo.src} />
      <LeanHero h1={c.h1} answer={v.answer} sub={v.sub} photo={c.photo} glance={c.glance} primary={c.primary} secondary={{ label: 'Book a call', href: '/book' }} crumb={leaf ? { label: CLAIMS[c.claim].label, path: CLAIMS[c.claim].path } : undefined} />
      {v.blocks.map(renderBlock)}
      {!leaf && <Siblings current={c.claim} />}
      <ContactCTA subject={c.formSubject} service={c.formService} title={c.formTitle} body={c.formBody} submitButtonText="Send my site" />
      <JsonLd data={schema} />
      {faqSchema && <JsonLd data={faqSchema} />}
    </div>
  );
};
