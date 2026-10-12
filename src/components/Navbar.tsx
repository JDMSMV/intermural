'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/collections/jackets', label: 'Jackets' },
  { href: '/collections/socks', label: 'Socks' },
  { href: '/collections/event-tees', label: 'Event Tees' },
  { href: '/schools', label: 'For Schools' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrolledBg = 'bg-white/95 backdrop-blur-md border-b border-black/8';
  const topBg = 'bg-transparent';
  const textColor = scrolled || menuOpen ? 'text-[#111111]' : 'text-[#f5f5f5]';
  const mutedColor = scrolled || menuOpen ? 'text-[#111111]/50 hover:text-[#c8a96e]' : 'text-[#f5f5f5]/60 hover:text-[#c8a96e]';
  const brandColor = scrolled || menuOpen ? 'text-[#111111] hover:text-[#c8a96e]' : 'text-[#f5f5f5] hover:text-[#c8a96e]';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? scrolledBg : topBg
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-[60px] flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className={`font-light text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${brandColor}`}>
            Inter Mural
          </Link>

          {/* Center Nav — Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={`text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 ${mutedColor}`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button aria-label="Search" className={`transition-colors duration-300 ${mutedColor}`}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button aria-label="Cart" className={`transition-colors duration-300 ${mutedColor}`}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} className={`md:hidden transition-colors duration-300 ${mutedColor}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black/8 px-6 py-10 flex flex-col gap-7">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.14em] text-[#111111]/70 hover:text-[#c8a96e] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
