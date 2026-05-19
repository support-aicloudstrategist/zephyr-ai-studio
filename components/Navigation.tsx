'use client';

import { useEffect, useState } from 'react';
import { basePath } from '@/lib/siteLinks';

const logoSrc = `${basePath}/brand/zephyr-navbar-logo-file18.jpg`;

const navItems = [
  ['WORK', '#portfolio'],
  ['SERVICES', '#services'],
  ['PRICING', '#pricing'],
  ['ABOUT', '#about'],
  ['CONTACT', '#contact'],
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? 'bg-black/42 backdrop-blur-xl' : 'bg-transparent backdrop-blur-0'
      }`}
    >
      <div className="flex h-[4.5rem] w-full items-center justify-between px-4 sm:px-5 md:px-8 lg:px-10 xl:px-12">
        <a href="#hero" aria-label="Zephyr AI Studio home" className="flex shrink-0 items-center">
          <img
            src={logoSrc}
            alt="Zephyr AI Studio logo"
            className="h-10 w-auto object-contain md:h-12 lg:h-14"
          />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center justify-end gap-7 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/74 md:flex lg:gap-9 xl:gap-10">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="premium-link hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
