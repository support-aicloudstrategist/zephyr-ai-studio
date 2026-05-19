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
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'border-b border-white/8 bg-black/44 shadow-[0_18px_60px_rgba(0,0,0,.24)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent shadow-none backdrop-blur-0'
      }`}
    >
      <div className="mx-auto flex h-[4.35rem] max-w-[92rem] items-center justify-between px-5 sm:px-7 md:px-10 lg:px-14 xl:px-16">
        <a href="#hero" aria-label="Zephyr AI Studio home" className="group flex min-w-0 items-center gap-3">
          <img
            src={logoSrc}
            alt="Zephyr AI Studio logo"
            className="h-8 w-8 shrink-0 rounded-full object-cover opacity-95 ring-1 ring-white/10 transition duration-500 group-hover:opacity-100 group-hover:ring-white/24 md:h-9 md:w-9"
          />
          <span className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-white/90 transition duration-500 group-hover:text-white md:text-[0.78rem]">
            Zephyr
          </span>
        </a>

        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/70 lg:flex xl:gap-9">
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
            className="premium-button hidden min-h-10 items-center justify-center rounded-full bg-white px-5 text-[0.62rem] font-black uppercase tracking-[0.18em] text-black shadow-[0_12px_34px_rgba(255,255,255,.10)] hover:bg-zephyr-cyan hover:shadow-[0_0_24px_rgba(123,223,229,.16)] sm:inline-flex md:px-6"
          >
            Start a Project
          </a>

          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 text-[0.58rem] font-black uppercase tracking-[0.16em] text-black shadow-[0_10px_28px_rgba(255,255,255,.08)] hover:bg-zephyr-cyan sm:hidden"
          >
            Start
          </a>
        </div>
      </div>
    </header>
  );
}
