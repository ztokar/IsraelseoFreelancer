import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-trigger').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-bg-dark font-sans text-slate-800 selection:bg-primary/20 selection:text-slate-900 flex flex-col relative overflow-x-hidden"
    >
      {/* Interactive Background - subtle for light theme */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Mouse Spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(5, 150, 105, 0.03), transparent 40%)`,
          }}
        />

        {/* Ambient Glows - very subtle for light theme */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/[0.02] rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-10 h-10 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">
                  north_east
                </span>
              </div>
              <div>
                <span className="font-sans font-bold text-lg tracking-tight text-slate-900 block">
                  Zechariah Tokar
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-secondary group-hover:text-primary transition-colors">
                  AI SEO Strategist
                </span>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-medium transition-all hover:text-primary hover:scale-105 ${
                      isActive ? 'text-primary' : 'text-slate-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="#audit"
                className="relative overflow-hidden group bg-primary px-6 py-2.5 rounded-full text-base font-semibold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
              >
                <span className="relative z-10 text-white">
                  Get Free Audit
                </span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-700 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-slate-200 p-6 flex flex-col gap-4 shadow-xl">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-medium py-2 transition-colors ${
                    isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="#audit"
              className="bg-primary text-white px-6 py-4 text-center font-bold mt-4 rounded-lg shadow-md"
            >
              Get Free Audit
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow z-10 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-16 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-xl">
                    north_east
                  </span>
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-slate-900 block">
                    Zechariah Tokar
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500">
                    SEO Consultant
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-base max-w-sm leading-relaxed">
                English-native SEO consultant based in Israel, providing strategic SEO services for US and international businesses.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col md:items-end gap-6">
              <div className="flex gap-6">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-primary transition-colors text-base font-medium flex items-center gap-1"
                >
                  LinkedIn
                  <span className="material-symbols-outlined text-xs">
                    open_in_new
                  </span>
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-primary transition-colors text-base font-medium flex items-center gap-1"
                >
                  X (Twitter)
                  <span className="material-symbols-outlined text-xs">
                    open_in_new
                  </span>
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-slate-500 hover:text-primary transition-colors text-base font-medium flex items-center gap-1"
                >
                  Email
                  <span className="material-symbols-outlined text-xs">
                    open_in_new
                  </span>
                </a>
              </div>
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} All Rights Reserved.
                ISRAELSEOFREELANCER.COM
              </p>
              <p className="text-slate-400 text-sm">
                Part of{' '}
                <a
                  href="https://seocompanyisrael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  SEO Company Israel
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
