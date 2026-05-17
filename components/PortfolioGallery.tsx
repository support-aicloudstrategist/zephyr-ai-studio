'use client';

import { useMemo, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { portfolioAssets, portfolioFilters } from '@/lib/portfolioAssets';

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof portfolioFilters)[number]>('All');
  const visiblePortfolio = useMemo(
    () => activeFilter === 'All' ? portfolioAssets : portfolioAssets.filter((item) => item.filter === activeFilter),
    [activeFilter],
  );

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[linear-gradient(180deg,#030306_0%,#060610_45%,#030306_100%)] px-4 py-24 md:px-6 md:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(123,223,229,.045),transparent_28%),radial-gradient(circle_at_86%_54%,rgba(216,111,189,.04),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-zephyr-black to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-7 max-w-4xl text-center md:mb-10">
          <p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">Work</p>
          <h2 className="text-glow font-display text-[clamp(2.15rem,8vw,4.7rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.8rem,5.2vw,5.8rem)]">Find Your Campaign Style</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/64 md:mt-7 md:text-xl md:leading-8">Choose your business type and see how Zephyr can create premium ads, reels, product visuals, and launch content without expensive shoots.</p>
        </Reveal>

        <Reveal className="mx-auto mb-8 max-w-6xl md:mb-14">
          <div className="flex flex-wrap justify-center gap-2 rounded-[1.25rem] border border-white/10 bg-black/24 p-2 md:rounded-[1.6rem] md:p-3" aria-label="Campaign style filters">
            {portfolioFilters.map((filter) => {
              const active = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`premium-button inline-flex min-h-11 items-center justify-center rounded-full px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.13em] transition ${active ? 'bg-white text-black' : 'border border-white/10 bg-white/[.045] text-white/68 hover:border-zephyr-cyan/28 hover:text-zephyr-cyan'}`}
                  aria-pressed={active}
                >
                  {filter}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-center text-xs leading-5 text-white/42">Filter by campaign style — every card is a sample direction, custom-created around your brand.</p>
        </Reveal>

        <div id="portfolio-grid" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
          {visiblePortfolio.map((item, i) => {
            const desktopRemainder = visiblePortfolio.length % 4;
            const laptopRemainder = visiblePortfolio.length % 3;
            const desktopCenter = desktopRemainder === 1 && i === visiblePortfolio.length - 1 ? 'xl:col-start-2' : desktopRemainder === 2 && i === visiblePortfolio.length - 2 ? 'xl:col-start-2' : '';
            const laptopCenter = laptopRemainder === 1 && i === visiblePortfolio.length - 1 ? 'lg:col-start-2 xl:col-start-auto' : '';
            return (
            <Reveal delay={Math.min(i * 0.03, 0.15)} key={item.title} className={`h-full ${laptopCenter} ${desktopCenter}`}>
              <a
                href="#contact"
                className={`portfolio-card premium-card group relative block h-full min-h-[455px] overflow-hidden rounded-[1.25rem] border bg-black text-left outline-none shadow-[0_18px_70px_rgba(0,0,0,.34)] transition duration-500 md:min-h-[500px] md:rounded-[1.55rem] ${i < 4 && activeFilter === 'All' ? 'border-zephyr-cyan/18 shadow-[0_22px_80px_rgba(123,223,229,.08)]' : 'border-white/10'}`}
                aria-label={`Create this for my brand: ${item.title}`}
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="portfolio-image absolute inset-0 h-full w-full object-cover opacity-80 saturate-[.88] contrast-110"
                />
                {'video' in item && (
                  <video
                    className="portfolio-image absolute inset-0 hidden h-full w-full object-cover opacity-78 saturate-[.9] contrast-110 md:block"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={item.image}
                    aria-hidden="true"
                  >
                    <source media="(min-width: 768px)" src={item.video} type="video/mp4" />
                  </video>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08)_0%,rgba(0,0,0,.24)_34%,rgba(0,0,0,.95)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-black via-black/74 to-transparent" />
                <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2 md:left-5 md:top-5">
                  <span className="rounded-full border border-white/12 bg-black/48 px-3 py-2 text-[0.55rem] font-black uppercase tracking-[0.17em] text-white/58 backdrop-blur-md">Campaign style</span>
                  <span className="rounded-full border border-zephyr-cyan/18 bg-zephyr-cyan/[.07] px-3 py-2 text-[0.55rem] font-black uppercase tracking-[0.17em] text-zephyr-cyan/86 backdrop-blur-md">{item.filter}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 flex min-h-[54%] flex-col justify-end p-5 md:p-6">
                  <h3 className="font-display text-[clamp(1.72rem,6.5vw,2.75rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-[clamp(1.75rem,2.1vw,2.65rem)]">{item.title}</h3>
                  <div className="mt-4 space-y-2.5 text-sm leading-6 text-white/70 md:text-[0.92rem] md:leading-6">
                    <p>{item.create}</p>
                    <p>{item.bestFor}</p>
                  </div>
                  <span className="premium-button mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/16 bg-white/[.065] px-5 py-3 text-center text-[0.64rem] font-black uppercase tracking-[0.14em] text-white/86 backdrop-blur-sm group-hover:border-zephyr-cyan/36 group-hover:text-zephyr-cyan">
                    Create this for my brand
                  </span>
                </div>
              </a>
            </Reveal>
          );
          })}
        </div>

        <Reveal>
          <p className="mx-auto mt-7 max-w-3xl rounded-[1.1rem] border border-white/10 bg-black/28 px-5 py-4 text-center text-sm leading-6 text-white/58 md:mt-10 md:text-base">
            Choose a visual concept, share your product or brand details, and we create a custom campaign around it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
