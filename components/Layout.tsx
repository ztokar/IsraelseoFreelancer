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
      className="min-h-screen bg-bg-dark font-sans text-zinc-100 selection:bg-primary/30 selection:text-white flex flex-col relative overflow-x-hidden"
    >
      {/* Interactive Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Mouse Spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 224, 114, 0.04), transparent 40%)`,
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
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
              <div className="relative w-10 h-10 flex items-center justify-center bg-transparent group-hover:bg-white/5 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">
                  north_east
                </span>
              </div>
              <div>
                <span className="font-sans font-bold text-lg tracking-tight text-white block">
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
                    `text-sm font-medium transition-all hover:text-white hover:scale-105 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="#audit"
                className="relative overflow-hidden group border border-primary/40 bg-primary/10 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-all shadow-[0_0_15px_rgba(0,224,114,0.1)] hover:shadow-[0_0_25px_rgba(0,224,114,0.3)]"
              >
                <span className="relative z-10 text-primary group-hover:text-white transition-colors">
                  Get Free Audit
                </span>
                <div className="absolute inset-0 h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2"
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
          <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/5 p-6 flex flex-col gap-4 shadow-2xl">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-medium py-2 transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="#audit"
              className="bg-primary text-bg-dark px-6 py-4 text-center font-bold mt-4 rounded-lg shadow-[0_0_20px_rgba(0,224,114,0.3)]"
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
      <footer className="border-t border-white/5 bg-[#020503] py-16 z-10 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                  <span className="material-symbols-outlined text-primary text-xl">
                    north_east
                  </span>
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-white block">
                    Zechariah Tokar
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">
                    SEO Consultant
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
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
                  className="text-gray-500 hover:text-secondary transition-colors text-sm font-medium flex items-center gap-1"
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
                  className="text-gray-500 hover:text-secondary transition-colors text-sm font-medium flex items-center gap-1"
                >
                  X (Twitter)
                  <span className="material-symbols-outlined text-xs">
                    open_in_new
                  </span>
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-gray-500 hover:text-secondary transition-colors text-sm font-medium flex items-center gap-1"
                >
                  Email
                  <span className="material-symbols-outlined text-xs">
                    open_in_new
                  </span>
                </a>
              </div>
              <p className="text-gray-700 text-xs font-mono">
                © {new Date().getFullYear()} All Rights Reserved.
                ISRAELSEOFREELANCER.COM
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
