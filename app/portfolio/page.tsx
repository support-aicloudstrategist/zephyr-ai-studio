import type { Metadata } from 'next';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { Reveal } from '@/components/Reveal';
import { basePath, homeUrl, whatsappProjectUrl } from '@/lib/siteLinks';

const logoSrc = `${basePath}/brand/zephyr-ai-studio-logo.jpg`;
const whatsappUrl = whatsappProjectUrl('Hi Zephyr AI Studio, I want to discuss a premium AI campaign for my brand.');

export const metadata: Metadata = {
  title: 'Portfolio Gallery — Zephyr AI Studio',
  description: 'Explore Zephyr AI Studio campaign styles for premium AI-powered ads, reels, launch visuals, and cinematic brand concepts.',
};

export default function PortfolioPage() {
  return (
    <main className="cinema-noise min-h-screen overflow-hidden bg-zephyr-black text-white">
      <PortfolioNavigation />
      <PortfolioHero />
      <PortfolioGallery />
      <PortfolioFooter />
      <MobilePortfolioCTA />
    </main>
  );
}

function PortfolioNavigation() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-10 md:py-4">
      <div className="mx-auto max-w-7xl rounded-[1.45rem] border border-white/10 bg-black/72 px-3 py-3 shadow-[0_14px_46px_rgba(0,0,0,.30)] backdrop-blur-md md:rounded-full md:px-5">
        <div className="flex items-center justify-between gap-3">
          <a href={homeUrl} aria-label="Back to Zephyr AI Studio home" className="flex min-h-11 min-w-0 items-center gap-3">
            <img src={logoSrc} alt="Zephyr AI Studio logo" className="h-10 w-10 shrink-0 rounded-full border border-white/10 object-cover shadow-[0_0_12px_rgba(123,223,229,.10)] sm:h-12 sm:w-12" />
            <span className="truncate font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.32em]">Zephyr <span className="text-zephyr-cyan">AI</span> Studio</span>
          </a>
          <nav aria-label="Portfolio navigation" className="hidden items-center gap-7 text-xs uppercase tracking-[0.2em] text-white/78 lg:flex">
            <a href={homeUrl} className="premium-link hover:text-zephyr-cyan">Home</a>
            <a href={`${homeUrl}#services`} className="premium-link hover:text-zephyr-cyan">Services</a>
            <a href={`${homeUrl}#pricing`} className="premium-link hover:text-zephyr-cyan">Pricing</a>
            <a href={`${homeUrl}#contact`} className="premium-link hover:text-zephyr-cyan">Contact</a>
          </nav>
          <div className="hidden lg:block">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button rounded-full border border-white/24 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/90 shadow-none hover:border-zephyr-cyan hover:text-zephyr-cyan sm:text-xs">WhatsApp</a>
          </div>
        </div>
        <nav aria-label="Mobile portfolio navigation" className="mt-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-3 lg:hidden">
          <a href={homeUrl} className="premium-button flex min-h-10 items-center justify-center rounded-full border border-white/10 bg-white/[.045] px-3 text-center text-[0.62rem] font-black uppercase tracking-[0.12em] text-white/78">Home</a>
          <a href={`${homeUrl}#pricing`} className="premium-button flex min-h-10 items-center justify-center rounded-full border border-white/10 bg-white/[.045] px-3 text-center text-[0.62rem] font-black uppercase tracking-[0.12em] text-white/78">Pricing</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-10 items-center justify-center rounded-full bg-[#25D366] px-3 text-center text-[0.62rem] font-black uppercase tracking-[0.12em] text-black shadow-[0_0_20px_rgba(37,211,102,.14)]">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}

function PortfolioHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-36 md:px-6 md:pb-20 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(123,223,229,.075),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(216,111,189,.07),transparent_32%),linear-gradient(180deg,#030306_0%,#060610_58%,#030306_100%)]" />
      <div className="absolute inset-0 shadow-[inset_0_-120px_160px_rgba(0,0,0,.36)]" />
      <Reveal className="relative mx-auto max-w-5xl text-center">
        <p className="mb-5 text-[0.64rem] font-semibold uppercase tracking-[0.35em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">Portfolio Gallery</p>
        <h1 className="text-glow font-display text-[clamp(2.55rem,12vw,5.8rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">Choose Your Campaign Style</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/68 md:mt-8 md:text-xl md:leading-8">
          Premium AI-powered ads, reels, launch visuals, and cinematic campaign concepts for modern brands — without expensive shoots.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_26px_rgba(37,211,102,.18)] hover:bg-zephyr-cyan">Start on WhatsApp</a>
          <a href={homeUrl} className="premium-button flex min-h-14 items-center justify-center rounded-full border border-white/18 bg-white/[.055] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white/86 hover:border-zephyr-cyan hover:text-zephyr-cyan">Back to Home</a>
        </div>
      </Reveal>
    </section>
  );
}

function MobilePortfolioCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 lg:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-[1.15fr_.85fr] gap-2 rounded-[1.35rem] border border-white/10 bg-black/78 p-2 shadow-[0_-18px_60px_rgba(0,0,0,.48)] backdrop-blur-xl">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-4 py-3 text-[0.72rem] font-black uppercase tracking-[0.13em] text-black shadow-[0_0_24px_rgba(37,211,102,.15)]">WhatsApp Us</a>
        <a href={homeUrl} className="premium-button flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/[.055] px-4 py-3 text-[0.72rem] font-black uppercase tracking-[0.13em] text-white/86">Home</a>
      </div>
    </div>
  );
}

function PortfolioFooter() {
  return (
    <footer className="border-t border-white/10 px-4 pb-32 pt-10 md:px-6 lg:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center">
        <div className="flex items-center gap-3"><img src={logoSrc} alt="Zephyr AI Studio logo" loading="lazy" decoding="async" className="h-12 w-12 rounded-full border border-white/10 object-cover shadow-[0_0_18px_rgba(216,111,189,.12)]" /><p className="uppercase tracking-[0.3em] text-white/70">Zephyr AI Studio</p></div>
        <p>Campaign styles and sample directions for premium brand visuals.</p>
        <a className="premium-link inline-flex min-h-11 items-center rounded-full border border-white/10 px-4 hover:border-zephyr-cyan hover:text-zephyr-cyan" href={homeUrl}>Back to Home</a>
      </div>
    </footer>
  );
}
