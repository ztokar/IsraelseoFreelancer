// Lead form gate (his ask 2026-11-18: block the spam countries and keep form spam out, same process as his other sites).
// Every form on the site posts here first. Good posts are relayed to Formspree with the visitor's reCAPTCHA token;
// Formspree itself refuses any post without a valid token, so skipping this gate does not get a bot through.
// Blocked country, honeypot, too fast or a pitch pattern: dropped with a fake "sent" reply and no email.
// No page marker: refused with a "refresh the page" message. Each drop writes one line to the Netlify function log.
// If this function is down, the page falls back to posting to Formspree directly (ProtectedForm.tsx).
const FORMSPREE = 'https://formspree.io/f/mpwvyzbr';

// Same list as Strategic Hiring and Grok Bot Setup Pro (his call 2026-10-26). Baltic EU states are not blocked.
export const BLOCKED_COUNTRIES = new Set([
  'IN', 'PK', 'BD', 'NG', 'VN', 'PH', 'ID',
  'RU', 'UA', 'BY', 'KZ', 'MD', 'KG', 'UZ', 'TJ', 'TM', 'AM', 'AZ', 'GE',
]);
const MIN_MS = 3000;
// This is an SEO site, so real leads say "backlinks" and "first page of Google". Only patterns a buyer never writes.
const PITCH = [
  /@[\w.-]*israelseofreelancer/i, // fake sender on a lookalike of the site's own domain
  /search index|indexsubmit|addwebsite/i, // "Add <domain> in Google's Search Index"
  /\b(hi|hello|hey|dear)\s+(www\.)?israelseofreelancer/i, // "Hi israelseofreelancer.com,"
  /not interested in our services|send us\s*["“]?no\b|reply\s+["“]?stop\b|unsubscribe/i, // pitch sign-offs
  /we (offer|provide) (affordable |professional |quality )?(seo|web design|web development|link building|guest post)/i,
];
const CAPS = { name: 100, email: 200, website: 300, message: 3000 };

const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
const sent = () => json(200, { ok: true });

// Returns '' for a good post, or the reason it is spam.
export const judge = (get, country) => {
  if (get('_gotcha')) return 'honeypot filled';
  if (BLOCKED_COUNTRIES.has(country)) return `blocked country ${country}`;
  const ms = parseInt(get('_ms'), 10);
  if (!(ms >= MIN_MS)) return `sent ${Number.isNaN(ms) ? '?' : ms} ms after the page opened`;
  const text = [get('name'), get('email'), get('message')].join(' ');
  const pitch = PITCH.map((re) => (text.match(re) || [])[0]).find(Boolean);
  if (pitch) return `contains "${pitch}"`;
  const links = (get('message').match(/(?:https?:\/\/|www\.)[^\s<>"']*/gi) || []).length;
  if (links > 1) return `${links} links in the message`;
  if (/[Ѐ-ӿ]/.test(text)) return 'Cyrillic text';
  return '';
};

export default async (req, context) => {
  if (req.method !== 'POST') return json(405, { ok: false, error: 'POST only' });
  let fields = {};
  try {
    const form = await req.formData();
    form.forEach((v, k) => { if (typeof v === 'string') fields[k] = v; });
  } catch {
    return json(400, { ok: false, errors: [{ message: 'Please refresh the page and try again.' }] });
  }
  const get = (k) => (typeof fields[k] === 'string' ? fields[k].trim() : '');
  const country = String(context?.geo?.country?.code || '').toUpperCase();
  const city = String(context?.geo?.city || '');
  const ip = context?.ip || '?';

  const spam = judge(get, country);
  if (spam) {
    console.log('lead dropped:', spam, '|', ip, country, '|', get('email'));
    return sent();
  }
  if (get('_js') !== 'isf') {
    console.log('lead refused: no page marker |', ip, country, '|', get('email'));
    return json(400, { ok: false, errors: [{ message: 'Please refresh the page and try again.' }] });
  }
  const email = get('email');
  if (!get('name') || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json(400, { ok: false, errors: [{ message: 'Please add your name and a valid email.' }] });
  if (Object.entries(CAPS).some(([k, n]) => get(k).length > n)) return json(400, { ok: false, errors: [{ message: 'Please shorten your message.' }] });

  const { _gotcha, _js, _ms, ...clean } = fields;
  clean.sent_from = `${ip} (${country || 'country ?'}${city ? `, ${city}` : ''})`;
  try {
    const r = await fetch(FORMSPREE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', Origin: 'https://israelseofreelancer.com', Referer: req.headers.get('referer') || 'https://israelseofreelancer.com/' },
      body: JSON.stringify(clean),
    });
    const body = await r.text();
    console.log('lead relayed:', r.status, '|', ip, country, '|', email);
    return new Response(body, { status: r.status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  } catch (e) {
    console.log('lead relay failed:', String(e).slice(0, 120));
    return json(502, { ok: false, errors: [{ message: 'Could not send. Please try again.' }] });
  }
};

export const config = { path: '/api/lead' };
