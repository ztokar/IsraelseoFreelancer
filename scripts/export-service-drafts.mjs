import fs from 'node:fs';
import path from 'node:path';
import { SERVICE_OFFERS } from '../service-offers.ts';

const destination = process.argv[2];
if (!destination) throw new Error('Pass the draft output directory.');
fs.mkdirSync(destination, { recursive: true });
const escape = (text) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const paragraph = (text) => `<p>${escape(text).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')}</p>`;
for (const offer of SERVICE_OFFERS) {
  const body = `<main><h1>${escape(offer.title)}</h1>${paragraph(offer.answer)}${paragraph(offer.intro)}<h2>${escape(offer.sampleTitle)}</h2>${paragraph(offer.sampleNote)}<table><tr>${offer.columns.map((column) => `<th>${escape(column)}</th>`).join('')}</tr>${offer.rows.map((row) => `<tr>${row.map((cell) => `<td>${escape(cell)}</td>`).join('')}</tr>`).join('')}</table>${offer.sections.map((section) => `<section><h2>${escape(section.title)}</h2>${section.paragraphs.map(paragraph).join('')}</section>`).join('')}<h2>Questions about ${escape(offer.label)}</h2>${offer.faqs.map((faq) => `<h3>${escape(faq.question)}</h3>${paragraph(faq.answer)}`).join('')}${paragraph(offer.proof.caption)}${paragraph(offer.cta)}</main>`;
  fs.writeFileSync(path.join(destination, `${offer.slug}.html`), `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escape(offer.seoTitle)}</title><meta name="description" content="${escape(offer.description)}"></head><body>${body}</body></html>`);
  console.log(`${offer.slug}: ${body.replace(/<[^>]*>/g, ' ').split(/\s+/).length} words`);
}
