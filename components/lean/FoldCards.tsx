import React from 'react';
import { FOLD_CARDS } from '../../content/folds';
import { rich } from './Blocks';

// Answers from pages that were merged into this one, kept as anchored cards.
export const FoldCards: React.FC<{ path: string }> = ({ path }) => {
  const cards = FOLD_CARDS[path];
  if (!cards) return null;
  return (
    <section className="lsec fold-cards lp" aria-label="More answers on this topic">
      <div className="lwrap lsec-in">
        <h2>More answers on this topic</h2>
        <div className="acards">
          {cards.map((c) => (
            <article className="acard" id={c.id} key={c.id}>
              <h3>{c.h}</h3>
              <div className="acard-body">{c.p.map((x) => <p key={x}>{rich(x)}</p>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
