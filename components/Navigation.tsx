'use client';

import { useEffect, useState } from 'react';
import { basePath, whatsappProjectUrl } from '@/lib/siteLinks';

const logoSrc = `${basePath}/brand/zephyr-ai-studio-logo.jpg`;
const ctaUrl = whatsappProjectUrl('Hi Zephyr AI Studio, I want to start a project.');

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
    const updateScrolled = () => setScrolled(window.scrollY > 18);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8 lg:px-10">
      <div
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 rounded-full px-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:h-16 md:px-5 ${
          scrolled
            ? 'border border-white/10 bg-black/54 shadow-[0_16px_50px_rgba(0,0,0,.28)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent shadow-none backdrop-blur-0'
        }`}
      >
        <a href="#hero" aria-label="Zephyr AI Studio home" className="group flex min-w-0 items-center gap-3">
          <img
            src={logoSrc}
            alt="Zephyr AI Studio logo"
            className="h-8 w-8 shrink-0 rounded-full border border-white/10 object-cover shadow-[0_0_12px_rgba(123,223,229,.08)] transition duration-500 group-hover:border-white/24 md:h-9 md:w-9"
          />
          <span className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/92 transition duration-500 group-hover:text-white md:text-[0.78rem]">
            Zephyr
          </span>
        </a>

        <div className="flex items-center gap-3 md:gap-5 lg:gap-7">
          <nav aria-label="Main navigation" className="hidden items-center gap-6 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-white/66 lg:flex xl:gap-8">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="premium-link hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button hidden min-h-10 items-center justify-center rounded-full bg-white px-5 text-[0.64rem] font-black uppercase tracking-[0.18em] text-black shadow-[0_10px_28px_rgba(255,255,255,.08)] hover:bg-zephyr-cyan hover:shadow-[0_0_24px_rgba(123,223,229,.16)] sm:inline-flex md:px-6"
          >
            Start a Project
          </a>

          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button inline-flex min-h-10 items-center justify-center rounded-full bg-white px-4 text-[0.62rem] font-black uppercase tracking-[0.16em] text-black shadow-[0_10px_28px_rgba(255,255,255,.08)] hover:bg-zephyr-cyan sm:hidden"
          >
            Start
          </a>
        </div>
      </div>
    </header>
  );
}
