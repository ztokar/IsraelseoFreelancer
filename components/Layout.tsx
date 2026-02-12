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
                  Find Quick Wins
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
              <div className="flex flex-wrap gap-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-[#0A66C2] border border-slate-200 hover:border-[#0A66C2] rounded-lg transition-all"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-[#0A66C2] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-slate-600 group-hover:text-white text-sm font-medium transition-colors">LinkedIn</span>
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-black border border-slate-200 hover:border-black rounded-lg transition-all"
                  title="X (Twitter)"
                >
                  <svg className="w-4 h-4 fill-slate-800 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-slate-600 group-hover:text-white text-sm font-medium transition-colors">X</span>
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-[#FF0000] border border-slate-200 hover:border-[#FF0000] rounded-lg transition-all"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-[#FF0000] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-slate-600 group-hover:text-white text-sm font-medium transition-colors">YouTube</span>
                </a>
                <a
                  href={SOCIAL_LINKS.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-[#FF4500] border border-slate-200 hover:border-[#FF4500] rounded-lg transition-all"
                  title="Reddit"
                >
                  <svg className="w-4 h-4 fill-[#FF4500] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                  </svg>
                  <span className="text-slate-600 group-hover:text-white text-sm font-medium transition-colors">Reddit</span>
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-primary border border-slate-200 hover:border-primary rounded-lg transition-all"
                  title="Email"
                >
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-lg transition-colors">
                    mail
                  </span>
                  <span className="text-slate-600 group-hover:text-white text-sm font-medium transition-colors">Email</span>
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
