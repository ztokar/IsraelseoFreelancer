import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export type OfferTier = 'target' | 'blueprint' | 'system';

interface Rung {
  key: OfferTier;
  tag: string;
  name: string;
  price: string;
  line: string;
  path: string;
}

const RUNGS: Rung[] = [
  {
    key: 'target',
    tag: 'Start here',
    name: 'Target Finder',
    price: '$20',
    line: 'I find the one local search worth owning.',
    path: '/find-my-target',
  },
  {
    key: 'blueprint',
    tag: 'Most popular',
    name: 'Local Demand Capture Blueprint',
    price: '$250',
    line: 'The full plan of pages to rank for it.',
    path: '/local-demand-capture-blueprint',
  },
  {
    key: 'system',
    tag: 'Done for you',
    name: 'Local Authority System',
    price: '$2,000',
    line: 'I build the whole lead system for you.',
    path: '/local-authority-system',
  },
];

export const OfferLadder: React.FC<{ current: OfferTier }> = ({ current }) => (
  <section className="offer-ladder divider">
    <div className="wrap">
      <div className="sec-head">
        <span className="eyebrow">Ways to work together</span>
        <h2>Three simple steps, whenever you are ready.</h2>
        <p>Start small and prove it. Move up only if it makes sense for you.</p>
      </div>
      <div className="ladder-grid">
        {RUNGS.map((rung) => {
          const active = rung.key === current;
          const inner = (
            <>
              <span className={`ladder-tag${active ? ' is-here' : ''}`}>
                {active ? (<><Check size={13} strokeWidth={2.6} /> You are here</>) : rung.tag}
              </span>
              <h3>{rung.name}</h3>
              <div className="ladder-price">{rung.price}</div>
              <p>{rung.line}</p>
              {!active && <span className="ladder-link">See this <ArrowRight size={15} strokeWidth={2.2} /></span>}
            </>
          );
          return active ? (
            <div className="ladder-card is-active" key={rung.key}>{inner}</div>
          ) : (
            <NavLink className="ladder-card" to={rung.path} key={rung.key}>{inner}</NavLink>
          );
        })}
      </div>
    </div>
  </section>
);
