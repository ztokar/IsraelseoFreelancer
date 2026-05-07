import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { SocialIconLinks } from './SocialIconLinks';

export const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#f6f7f2] font-sans text-slate-900 selection:bg-emerald-100 selection:text-slate-950">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-bold">
        Skip to content
      </a>

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-6">
            <NavLink to="/" className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                ZT
              </div>
              <div className="min-w-0">
                <span className="block truncate text-lg font-bold tracking-tight text-slate-950">Zechariah Tokar</span>
                <span className="block truncate text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  SEO freelancer Israel
                </span>
              </div>
            </NavLink>

            <div className="hidden items-center gap-7 md:flex">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-bold transition-colors hover:text-[#108a00] ${
                      isActive ? 'text-[#108a00]' : 'text-slate-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="/#hire"
                className="rounded-lg bg-[#108a00] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0b6f00]"
              >
                Hire Zechariah
              </a>
            </div>

            <button
              className="rounded-lg border border-slate-200 bg-white p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white p-4 md:hidden">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.path} to={item.path} className="rounded-lg px-3 py-3 font-bold text-slate-700 hover:bg-emerald-50 hover:text-[#108a00]">
                  {item.label}
                </NavLink>
              ))}
              <a href="/#hire" className="mt-2 rounded-lg bg-[#108a00] px-3 py-3 text-center font-bold text-white">
                Hire Zechariah
              </a>
            </div>
          </div>
        )}
      </nav>

      <main id="main">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-lg font-bold text-slate-950">Zechariah Tokar</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Freelance SEO services from Israel for companies targeting English-speaking markets. Work is quoted by expected hours at $75-$100/hr.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
              <NavLink to="/videos" className="text-slate-600 hover:text-[#108a00]">Videos</NavLink>
              <NavLink to="/blog" className="text-slate-600 hover:text-[#108a00]">Blog</NavLink>
              <NavLink to="/reviews-results" className="text-slate-600 hover:text-[#108a00]">Reviews</NavLink>
            </div>
          </div>
          <SocialIconLinks />
        </div>
      </footer>
    </div>
  );
};
