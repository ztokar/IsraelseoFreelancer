import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { SOCIAL_LINKS } from '../constants';
import { CLAIMS, HUBS, PAGE_BY_PATH, SENTENCE, SENTENCE_2, SITE_URL } from '../site-map';
import { PageEnd } from './lean/PageEnd';
import { Arrow } from './lean/Arrow';

// Header: seven items that say the sentence. Four claims, Results, About, one call to action.
const NAV = [
  { label: 'AI Search', path: '/ai-seo-services' },
  { label: 'Reddit', path: '/reddit-marketing-services' },
  { label: 'Local SEO', path: '/local-seo-services' },
  { label: 'SEO Services', path: '/seo-services-israel' },
  { label: 'Results', path: '/case-studies' },
  { label: 'About', path: '/about' },
];

// Footer: the map. One column per claim, a guides column, the entity column, one legal line.
const FOOTER = [
  { heading: 'AI Search', links: [
    { label: 'AI SEO services', path: '/ai-seo-services' },
    { label: 'What is included', path: '/ai-seo-services#included' },
    { label: 'AI visibility audit', path: '/ai-visibility-audit' },
    { label: 'Generative engine optimization', path: '/geo-content-optimization' },
    { label: 'AI visibility tracking', path: '/ai-visibility-tracking-services' },
    { label: 'Monthly AI SEO plan', path: '/ai-seo-monthly' },
    { label: 'ChatGPT ads setup', path: '/chatgpt-ads-management' },
  ] },
  { heading: 'Reddit', links: [
    { label: 'Reddit marketing', path: '/reddit-marketing-services' },
    { label: 'How it works', path: '/reddit-marketing-services#how-it-works' },
    { label: 'Posting service', path: '/reddit-posting-service' },
    { label: 'Reddit SEO', path: '/reddit-seo' },
  ] },
  { heading: 'Local SEO', links: [
    { label: 'Local SEO services', path: '/local-seo-services' },
    { label: 'Target Finder $20', path: '/find-my-target' },
    { label: 'Blueprint $250', path: '/local-demand-capture-blueprint' },
    { label: 'Local Authority System $2,000', path: '/local-authority-system' },
    { label: 'Google Business Profile', path: '/google-business-profile-seo' },
  ] },
  { heading: 'SEO Services', links: [
    { label: 'SEO services', path: '/seo-services-israel' },
    { label: 'B2B SEO', path: '/b2b-seo-israel' },
    { label: 'SaaS SEO', path: '/saas-seo' },
    { label: 'Shopify SEO', path: '/shopify-seo' },
    { label: 'Technical SEO audit', path: '/technical-seo-audit' },
    { label: 'SEO content writing', path: '/content-marketing-for-seo' },
  ] },
  { heading: 'Guides', links: [
    { label: 'AI answers', path: '/ai-answers' },
    { label: 'Reddit guides', path: '/reddit-guides' },
    { label: 'SEO guides', path: '/seo-guides' },
    { label: 'Results', path: '/case-studies' },
  ] },
  { heading: 'Zechariah Tokar', links: [
    { label: 'About', path: '/about' },
    { label: 'Reviews', path: '/reviews-results' },
    { label: 'Book a call', path: '/book' },
  ] },
];


const crumbTrail = (path: string) => {
  const page = PAGE_BY_PATH[path];
  if (!page || page.type === 'home') return null;
  const trail: { name: string; url: string }[] = [{ name: 'Home', url: `${SITE_URL}/` }];
  if (page.hub && HUBS[page.hub]) trail.push({ name: HUBS[page.hub].label, url: `${SITE_URL}${page.hub}` });
  else if ((page.type === 'leaf') && page.claim) trail.push({ name: CLAIMS[page.claim].label, url: `${SITE_URL}${CLAIMS[page.claim].path}` });
  trail.push({ name: page.label, url: `${SITE_URL}${page.path}` });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: t.url })),
  };
};

export const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const page = PAGE_BY_PATH[path];
  const contactHref = path === '/book' || path === '/privacy' ? '/#contact' : '#contact';
  const crumbs = crumbTrail(path);

  // New page: start at the top. Same page with a hash (the "Send your site" buttons): go to that section.
  useEffect(() => {
    setIsMobileMenuOpen(false);
    const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  // Scroll animation observer (kept for pages that use .scroll-trigger)
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-trigger');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => {
      el.classList.add('js-ready');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Head>
        {(page?.type === 'noindex' || path.startsWith('/preview/')) && <meta name="robots" content="noindex, follow" />}
        {crumbs && <script type="application/ld+json">{JSON.stringify(crumbs)}</script>}
      </Head>

      <header className={`gpnav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="bar">
          <NavLink to="/" className="logo"><span className="dot" />Zechariah Tokar</NavLink>
          <nav aria-label="Main">
            <ul className="menu">
              {NAV.map((item) => (
                <li key={item.path}><NavLink to={item.path}>{item.label}</NavLink></li>
              ))}
            </ul>
          </nav>
          <div className="ncta">
            <a className="pill" href={contactHref}>Send your site <Arrow /></a>
            <button className="burger" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileMenuOpen((v) => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        <div className="mobile" id="mobile-navigation">
          {NAV.map((item) => (
            <NavLink key={item.path} to={item.path}>{item.label}</NavLink>
          ))}
          <a href={contactHref} onClick={() => setIsMobileMenuOpen(false)}>Send your site</a>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
        <PageEnd path={path} />
      </main>

      <footer className="gpfoot">
        <div className="wrap">
          <div className="brandrow">
            <div className="brand">
              <NavLink to="/" className="logo"><span className="dot" />Zechariah Tokar</NavLink>
              <p>{SENTENCE} {SENTENCE_2}</p>
              <div className="soc">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer me" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H20v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer me" aria-label="X">
                  <svg viewBox="0 0 24 24"><path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5-6.5L5.3 22H2l7.7-8.8L1.6 2h6.9l4.5 6 5.9-6z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer me" aria-label="YouTube">
                  <svg viewBox="0 0 24 24"><path d="M23 12s0-3.4-.4-5a2.7 2.7 0 00-1.9-1.9C18.9 4.7 12 4.7 12 4.7s-6.9 0-8.7.4A2.7 2.7 0 001.4 7C1 8.6 1 12 1 12s0 3.4.4 5a2.7 2.7 0 001.9 1.9c1.8.4 8.7.4 8.7.4s6.9 0 8.7-.4a2.7 2.7 0 001.9-1.9c.4-1.6.4-5 .4-5zM9.8 15.3V8.7l5.7 3.3z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.reddit} target="_blank" rel="noopener noreferrer me" aria-label="Reddit">
                  <svg viewBox="0 0 24 24"><path d="M22 12a2.1 2.1 0 00-3.6-1.5 10.3 10.3 0 00-5.4-1.7l.9-4.1 2.9.6a1.5 1.5 0 101.5-1.6 1.5 1.5 0 00-1.3.8l-3.3-.7-1.1 5.1a10.3 10.3 0 00-5.5 1.7A2.1 2.1 0 102 13.8a4 4 0 00-.1.9c0 3.3 3.9 6 8.7 6s8.7-2.7 8.7-6a4 4 0 00-.1-.9A2.1 2.1 0 0022 12zM7.5 13.5a1.4 1.4 0 112.8 0 1.4 1.4 0 01-2.8 0zm7.9 3.6c-1 1-3.2 1-3.8 1s-2.8 0-3.8-1a.4.4 0 01.6-.6c.6.6 2 .8 3.2.8s2.6-.2 3.2-.8a.4.4 0 01.6.6zm-.3-2.2a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="top">
            {FOOTER.map((col) => (
              <div className="col" key={col.heading}>
                <h2 className="fh">{col.heading}</h2>
                {col.links.map((l) => <NavLink key={l.path} to={l.path}>{l.label}</NavLink>)}
                {col.heading === 'Zechariah Tokar' && (
                  <a href="mailto:zechariah@israelseofreelancer.com">Email</a>
                )}
              </div>
            ))}
          </div>
          <div className="bot">
            <span>© {new Date().getFullYear()} Zechariah Tokar · israelseofreelancer.com</span>
            <NavLink to="/privacy">Privacy</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};
