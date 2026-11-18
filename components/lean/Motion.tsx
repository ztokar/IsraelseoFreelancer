import React, { useEffect, useRef, useState } from 'react';

// Home page graphics he picked on 2026-11-18 (ideas page round 2: 1 typing search, 2 buyer map, 5 climb).
// All three render complete without scripting and hold still under reduced motion.

const still = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Real results only (content/claims.ts: RES.zstander, RES.behfar).
const ASKS: [string, string][] = [['lucite shtenders', 'ZStander'], ['best Midwood Brooklyn real estate agent', 'The Behfar Team']];

// A search box that types a real buyer search, then shows the client named first in the answer.
export const AskDemo: React.FC = () => {
  const [i, setI] = useState(0);
  const [n, setN] = useState(ASKS[0][0].length);
  const [on, setOn] = useState(true);
  useEffect(() => {
    if (still()) return;
    let t = 0;
    let qi = 0;
    const run = () => {
      const s = ASKS[qi][0];
      let k = 0;
      setI(qi); setOn(false); setN(0);
      const step = () => {
        k += 1; setN(k);
        if (k < s.length) t = window.setTimeout(step, 55);
        else t = window.setTimeout(() => { setOn(true); t = window.setTimeout(() => { qi = (qi + 1) % ASKS.length; run(); }, 3000); }, 350);
      };
      t = window.setTimeout(step, 55);
    };
    t = window.setTimeout(() => { qi = 1; run(); }, 3000);
    return () => window.clearTimeout(t);
  }, []);
  const [q, a] = ASKS[i];
  return (
    <div className="ask" role="img" aria-label={`Asked in ChatGPT: ${ASKS[0][0]}. The first name in the answer: ${ASKS[0][1]}.`}>
      <div aria-hidden="true">
        <span className="tag">Asked in ChatGPT</span>
        <div className="box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.6-3.6" /></svg>
          <span className="q">{q.slice(0, n)}</span>
        </div>
        <div className={`reply ${on ? 'on' : ''}`}><small>The first name in the answer</small><b><em>#1</em> {a}</b></div>
      </div>
    </div>
  );
};

const WIRES = ['M80 60 Q150 170 210 180', 'M340 60 Q270 170 210 180', 'M80 300 Q150 190 210 180', 'M340 300 Q270 190 210 180'];
const PLACES: [string, number, number][] = [['Google', 80, 60], ['AI answers', 340, 60], ['Reddit', 80, 300], ['Google Maps', 340, 300]];

// Buyers travel from the four places they search into the business.
export const BuyerMap: React.FC = () => (
  <svg className="hubmap" viewBox="0 0 420 360" role="img" aria-label="Buyers arrive from Google, AI answers, Reddit and Google Maps">
    {WIRES.map((d, k) => <path key={d} className="wire" id={`bm-w${k}`} d={d} />)}
    {WIRES.map((d, k) => (
      <circle key={d} className="me" r="5">
        <animateMotion dur="2.6s" begin={`${k * 0.65}s`} repeatCount="indefinite"><mpath href={`#bm-w${k}`} /></animateMotion>
      </circle>
    ))}
    {PLACES.map(([label, x, y]) => (
      <g key={label}><rect className="pill" x={x - 70} y={y - 22} width="140" height="44" rx="22" /><text x={x} y={y + 6}>{label}</text></g>
    ))}
    <circle className="ring" cx="210" cy="180" r="58" /><circle className="core" cx="210" cy="180" r="58" />
    <text x="210" y="175">Your</text><text x="210" y="197">business</text>
  </svg>
);

const BARS = [62, 48, 70, 40];
const ROW = 62;

// A list of five results. "Your business" climbs from fifth to first, then starts again while on screen.
export const Climb: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || still() || !('IntersectionObserver' in window)) return;
    let t = 0;
    let p = 4;
    let seen = false;
    let busy = false;
    const up = () => {
      if (p === 0) { t = window.setTimeout(() => { p = 4; setPos(4); t = window.setTimeout(() => { if (seen) up(); else busy = false; }, 1300); }, 2600); return; }
      p -= 1; setPos(p);
      t = window.setTimeout(up, 750);
    };
    setPos(4);
    const io = new IntersectionObserver((es) => { seen = es[0].isIntersecting; if (seen && !busy) { busy = true; t = window.setTimeout(up, 500); } }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, []);
  return (
    <div className="climb" ref={ref} role="img" aria-label="Your business climbs from fifth place to first">
      {[0, 1, 2, 3, 4].map((k) => <span key={k} className="n" style={{ top: k * ROW }} aria-hidden="true">{k + 1}</span>)}
      {BARS.map((w, k) => <div key={w} className="r" style={{ transform: `translateY(${(k < pos ? k : k + 1) * ROW}px)` }} aria-hidden="true"><i style={{ width: `${w}%` }} /></div>)}
      <div className="r you" style={{ transform: `translateY(${pos * ROW}px)` }} aria-hidden="true">Your business</div>
    </div>
  );
};
