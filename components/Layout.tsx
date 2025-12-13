import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { OrganizationSchema, WebSiteSchema } from './Schema';

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

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-dark font-sans text-zinc-300 selection:bg-brand-green selection:text-white flex flex-col relative overflow-x-hidden">

      {/* Schema Markup */}
      <OrganizationSchema />
      <WebSiteSchema />

      {/* Interactive Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Static Grid */}
        <div className="absolute inset-0 chess-pattern opacity-[0.03]"></div>
        
        {/* Mouse Spotlight */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.06), transparent 40%)`
          }}
        ></div>
        
        {/* Premium ambient glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-brand-dark/90 backdrop-blur-md border-zinc-800 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <NavLink to="/" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 group">
            <span className="text-brand-green text-3xl transition-transform group-hover:rotate-12 duration-300">♞</span>
            <span className="font-serif italic">Zechariah Tokar</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors hover:text-brand-green ${
                    isActive ? 'text-white' : 'text-zinc-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a 
              href={SOCIAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer" 
              className="relative px-6 py-2 text-sm font-bold text-white overflow-hidden group bg-zinc-800 rounded border border-zinc-700 transition-all hover:border-brand-green"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors"></span>
              <span className="relative">Book Audit</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark border-b border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl backdrop-blur-xl bg-brand-dark/95">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className="text-lg font-medium text-zinc-300 hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}
             <a 
              href={SOCIAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-5 py-3 text-center text-sm font-bold mt-4 rounded"
            >
              Book Audit
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow z-10 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-16 z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-brand-green text-3xl">♞</span>
              <span className="text-white font-serif font-bold text-2xl tracking-tight italic">Zechariah Tokar</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Strategic SEO for businesses targeting the US market. 
              Delivering high-end results with relevance and reputation.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-6">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-brand-green transition-colors">LinkedIn</a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-brand-green transition-colors">X (Twitter)</a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-zinc-500 hover:text-brand-green transition-colors">Email</a>
            </div>
            <a 
              href="https://israelseofreelancer.com" 
              className="text-zinc-600 hover:text-zinc-400 transition-colors text-xs uppercase tracking-widest"
            >
              israelseofreelancer.com
            </a>
            <p className="text-zinc-700 text-xs">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};