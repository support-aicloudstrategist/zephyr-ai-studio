'use client';

import { useMemo, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { PortfolioCard } from '@/components/PortfolioCard';
import { portfolioAssets, portfolioFilters } from '@/lib/portfolioAssets';

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof portfolioFilters)[number]>('All');
  const visiblePortfolio = useMemo(
    () => activeFilter === 'All' ? portfolioAssets : portfolioAssets.filter((item) => item.filter === activeFilter),
    [activeFilter],
  );

  return (
    <section aria-label="Full portfolio gallery" className="relative overflow-hidden px-4 pb-28 md:px-6 md:pb-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(123,223,229,.045),transparent_28%),radial-gradient(circle_at_86%_54%,rgba(216,111,189,.04),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
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
                <PortfolioCard item={item} featured={i < 4 && activeFilter === 'All'} />
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mx-auto mt-7 max-w-3xl rounded-[1.1rem] border border-white/10 bg-black/28 px-5 py-4 text-center text-sm leading-6 text-white/58 md:mt-10 md:text-base">
            Choose a visual concept, share your product or brand details, and we create a custom campaign direction around it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
