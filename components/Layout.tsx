import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { NAV_MENU, FOOTER_COLUMNS, SOCIAL_LINKS } from '../constants';

export const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Scroll animation observer (kept for blog/other pages that use .scroll-trigger)
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
      {/* Header */}
      <header className={`gpnav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="bar">
          <NavLink to="/" className="logo"><span className="dot" />Zechariah Tokar</NavLink>
          <ul className="menu">
            {NAV_MENU.map((group) => (
              <li key={group.label}>
                {group.children ? (
                  <>
                    <span>{group.label} <i className="caret" /></span>
                    <div className="dropdown">
                      {group.children.map((child) => (
                        <NavLink key={child.path} to={child.path}>
                          {child.label}<span>{child.desc}</span>
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink to={group.path || '/'}>{group.label}</NavLink>
                )}
              </li>
            ))}
          </ul>
          <div className="ncta">
            <a className="pill" href={SOCIAL_LINKS.calendly} target="_blank" rel="noopener noreferrer">
              Let's talk <span aria-hidden="true">↗</span>
            </a>
            <button className="burger" aria-label="Toggle menu" onClick={() => setIsMobileMenuOpen((v) => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        <div className="mobile">
          {NAV_MENU.flatMap((group) =>
            group.children
              ? group.children.map((c) => (
                  <NavLink key={c.path} to={c.path}>{c.label}</NavLink>
                ))
              : [<NavLink key={group.path} to={group.path || '/'}>{group.label}</NavLink>]
          )}
          <a href={SOCIAL_LINKS.calendly} target="_blank" rel="noopener noreferrer">Let's talk</a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="gpfoot">
        <div className="wrap">
          <div className="brandrow">
            <div className="brand">
              <div className="logo"><span className="dot" />Zechariah Tokar</div>
              <p>Search visibility consultant for companies targeting the US and English-speaking markets. SEO, AI search, and Reddit.</p>
              <div className="soc">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H20v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
                  <svg viewBox="0 0 24 24"><path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5-6.5L5.3 22H2l7.7-8.8L1.6 2h6.9l4.5 6 5.9-6z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24"><path d="M23 12s0-3.4-.4-5a2.7 2.7 0 00-1.9-1.9C18.9 4.7 12 4.7 12 4.7s-6.9 0-8.7.4A2.7 2.7 0 001.4 7C1 8.6 1 12 1 12s0 3.4.4 5a2.7 2.7 0 001.9 1.9c1.8.4 8.7.4 8.7.4s6.9 0 8.7-.4a2.7 2.7 0 001.9-1.9c.4-1.6.4-5 .4-5zM9.8 15.3V8.7l5.7 3.3z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.reddit} target="_blank" rel="noopener noreferrer" aria-label="Reddit">
                  <svg viewBox="0 0 24 24"><path d="M22 12a2.1 2.1 0 00-3.6-1.5 10.3 10.3 0 00-5.4-1.7l.9-4.1 2.9.6a1.5 1.5 0 101.5-1.6 1.5 1.5 0 00-1.3.8l-3.3-.7-1.1 5.1a10.3 10.3 0 00-5.5 1.7A2.1 2.1 0 102 13.8a4 4 0 00-.1.9c0 3.3 3.9 6 8.7 6s8.7-2.7 8.7-6a4 4 0 00-.1-.9A2.1 2.1 0 0022 12zM7.5 13.5a1.4 1.4 0 112.8 0 1.4 1.4 0 01-2.8 0zm7.9 3.6c-1 1-3.2 1-3.8 1s-2.8 0-3.8-1a.4.4 0 01.6-.6c.6.6 2 .8 3.2.8s2.6-.2 3.2-.8a.4.4 0 01.6.6zm-.3-2.2a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="top">
            {FOOTER_COLUMNS.map((col) => (
              <div className="col" key={col.heading}>
                <h4>{col.heading}</h4>
                {col.links.map((l) => <NavLink key={l.path} to={l.path}>{l.label}</NavLink>)}
              </div>
            ))}
          </div>
          <div className="bot">
            <span>© {new Date().getFullYear()} Zechariah Tokar · israelseofreelancer.com</span>
            <span>
              Part of <a href="https://seocompanyisrael.com" target="_blank" rel="noopener noreferrer">SEO Company Israel</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
