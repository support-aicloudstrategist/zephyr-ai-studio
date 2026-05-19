'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type WheelEvent } from 'react';
import { Reveal } from '@/components/Reveal';
import { portfolioAssets } from '@/lib/portfolioAssets';
import { whatsappProjectUrl } from '@/lib/siteLinks';

const asset = (title: string) => portfolioAssets.find((item) => item.title === title)!;

type ShowcaseItem = {
  title: string;
  copy: string;
  image: string;
  video?: string;
  gradient: string;
};

type TabKey = 'format' | 'business';

const formatItems: ShowcaseItem[] = [
  {
    ...asset('Ecommerce Sellers'),
    title: 'Product Commercials',
    copy: 'Cinematic product ads for launches, ecommerce, and premium campaigns.',
  },
  {
    ...asset('Fashion Brands'),
    title: 'Instagram Reels',
    copy: 'Short vertical reels built for Instagram, Shorts, and social promotions.',
  },
  {
    ...asset('Startup Launches'),
    title: 'Launch Teaser Videos',
    copy: 'High-impact teaser videos for new products, offers, and brand drops.',
  },
  {
    ...asset('Influencers & Creators'),
    title: 'UGC-Style Ads',
    copy: 'Natural-looking ad concepts for creators, founders, and product sellers.',
  },
  {
    ...asset('Premium Brand Campaigns'),
    title: 'Cinematic Brand Films',
    copy: 'Mood-led visual stories that make your brand feel premium online.',
  },
  {
    ...asset('Luxury Products'),
    title: 'Product Photos / Visuals',
    copy: 'Premium product visuals for websites, catalogues, marketplaces, and ads.',
  },
  {
    ...asset('Influencers & Creators'),
    title: 'Founder Story Videos',
    copy: 'Founder-led story visuals for personal brands, coaches, and premium businesses.',
  },
  {
    ...asset('Cosmetics Brands'),
    title: 'Social Media Ad Creatives',
    copy: 'Scroll-stopping campaign visuals for paid ads, launches, and promotions.',
  },
];

const businessItems: ShowcaseItem[] = [
  {
    ...asset('Skincare Brands'),
    title: 'Skincare Brands',
    copy: 'Luxury skincare visuals, product reels, and ingredient-story ads.',
  },
  {
    ...asset('Cosmetics Brands'),
    title: 'Cosmetics Brands',
    copy: 'Makeup ads, beauty launch reels, and social campaign visuals.',
  },
  {
    ...asset('Jewellery Brands'),
    title: 'Jewellery Brands',
    copy: 'Jewellery glow shots, festive ads, and premium product reels.',
  },
  {
    ...asset('Fashion Brands'),
    title: 'Fashion & Boutiques',
    copy: 'Model-led fashion visuals, boutique reels, and lookbook campaigns.',
  },
  {
    ...asset('Ecommerce Sellers'),
    title: 'Ecommerce Sellers',
    copy: 'Marketplace visuals, product commercials, and conversion-ready ad concepts.',
  },
  {
    ...asset('Food Brands'),
    title: 'Food & Restaurants',
    copy: 'Food reels, menu promos, ambience visuals, and local launch creatives.',
  },
  {
    ...asset('Cafes & Restaurants'),
    title: 'Cafes & Local Brands',
    copy: 'Opening promos, offer creatives, and cinematic visuals for local discovery.',
  },
  {
    ...asset('Gyms & Fitness Studios'),
    title: 'Gyms & Fitness Studios',
    copy: 'Fitness reels, transformation ads, and cinematic workout visuals.',
  },
  {
    ...asset('Influencers & Creators'),
    title: 'Influencers & Creators',
    copy: 'Personal brand reels, cinematic intros, and premium profile visuals.',
  },
  {
    ...asset('Startup Launches'),
    title: 'Startup Product Launches',
    copy: 'Launch teasers, website banners, and product campaign visuals.',
  },
  {
    ...asset('Perfume Brands'),
    title: 'Perfume & Luxury Products',
    copy: 'Moody perfume films, premium detail shots, and luxury launch visuals.',
  },
  {
    ...asset('Real Estate & Interiors'),
    title: 'Real Estate / Interiors',
    copy: 'Interior mood visuals, property teasers, and premium space campaigns.',
  },
];

const tabs = [
  { key: 'format', label: 'By Content Format' },
  { key: 'business', label: 'By Business Type' },
] as const;

export function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const activeIndexRef = useRef(0);
  const [activeTab, setActiveTab] = useState<TabKey>('format');
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const items = useMemo(() => (activeTab === 'format' ? formatItems : businessItems), [activeTab]);

  const pauseVideo = (index: number) => {
    const video = videoRefs.current[String(index)];
    if (!video) return;
    video.pause();
  };

  const playVideo = (index: number) => {
    const video = videoRefs.current[String(index)];
    if (!video) return;
    video.play().catch(() => undefined);
  };

  const updateActiveFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;
    Array.from(track.children).forEach((child, index) => {
      const element = child as HTMLElement;
      const childCenter = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(center - childCenter);
      if (distance < nearestDistance) {
        nearest = index;
        nearestDistance = distance;
      }
    });
    setActiveIndex(nearest);
    activeIndexRef.current = nearest;
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const safeIndex = (index + items.length) % items.length;
    const track = trackRef.current;
    const card = track?.children.item(safeIndex) as HTMLElement | null;
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActiveIndex(safeIndex);
    activeIndexRef.current = safeIndex;
  }, [items.length]);

  const scrollByStep = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    const firstCard = track?.children.item(0) as HTMLElement | null;
    if (!track || !firstCard) return;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || '0') || 0;
    const step = firstCard.offsetWidth + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const target = direction > 0
      ? track.scrollLeft + step >= maxScroll - 8 ? 0 : track.scrollLeft + step
      : track.scrollLeft <= 8 ? maxScroll : track.scrollLeft - step;
    track.scrollTo({ left: target, behavior: 'smooth' });
    const nextIndex = (activeIndexRef.current + direction + items.length) % items.length;
    setActiveIndex(nextIndex);
    activeIndexRef.current = nextIndex;
  }, [items.length]);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      track.scrollLeft += event.deltaY;
      updateActiveFromScroll();
    }
  };

  const switchTab = (tab: TabKey) => {
    if (tab === activeTab) return;
    if (previewIndex !== null) pauseVideo(previewIndex);
    setPreviewIndex(null);
    setActiveTab(tab);
    setActiveIndex(0);
    activeIndexRef.current = 0;
    requestAnimationFrame(() => trackRef.current?.scrollTo({ left: 0, behavior: 'smooth' }));
  };

  const togglePreview = (index: number) => {
    setPreviewIndex((current) => {
      if (current === index) {
        pauseVideo(index);
        return null;
      }
      if (current !== null) pauseVideo(current);
      playVideo(index);
      return index;
    });
    scrollToIndex(index);
  };

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[linear-gradient(180deg,#030306_0%,#060610_52%,#030306_100%)] px-4 py-20 md:px-6 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(123,223,229,.04),transparent_28%),radial-gradient(circle_at_86%_54%,rgba(216,111,189,.035),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zephyr-black to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
          <p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">Work</p>
          <h2 className="text-glow font-display text-[clamp(2.15rem,8vw,4.7rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.8rem,5.2vw,5.8rem)]">What We Can Create For You</h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/64 md:mt-7 md:text-xl md:leading-8">
            Premium AI-powered videos, ads, reels, and campaign visuals for modern brands — without expensive shoots, models, studios, or production teams.
          </p>
        </Reveal>

        <Reveal>
          <div className="mx-auto mb-7 grid max-w-xl grid-cols-2 gap-2 rounded-full border border-white/10 bg-black/38 p-1.5 backdrop-blur-md md:mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => switchTab(tab.key)}
                className={`premium-button min-h-12 rounded-full px-3 text-center text-[0.66rem] font-black uppercase tracking-[0.13em] md:text-xs ${activeTab === tab.key ? 'bg-white text-black shadow-[0_0_22px_rgba(123,223,229,.12)]' : 'text-white/64 hover:bg-white/[.055] hover:text-white'}`}
                aria-pressed={activeTab === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollByStep(-1)}
              className="premium-button absolute left-2 top-[42%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/64 text-lg text-white/80 shadow-[0_0_18px_rgba(123,223,229,.08)] backdrop-blur-md hover:border-zephyr-cyan hover:text-zephyr-cyan md:flex lg:left-3 lg:h-11 lg:w-11"
              aria-label="Previous visual concept"
            >
              ‹
            </button>
            <div
              ref={trackRef}
              onScroll={updateActiveFromScroll}
              onWheel={handleWheel}
              className="portfolio-carousel-track -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 sm:gap-5 md:mx-0 md:px-1 lg:gap-6"
              aria-label={`${tabs.find((tab) => tab.key === activeTab)?.label} visual concept carousel`}
            >
              {items.map((item, index) => (
                <div key={`${activeTab}-${item.title}`} className="w-[82vw] shrink-0 snap-center sm:w-[46vw] lg:w-[31%] xl:w-[24%]">
                  <ShowcaseCard
                    item={item}
                    index={index}
                    active={previewIndex === index}
                    setVideoRef={(node) => { videoRefs.current[String(index)] = node; }}
                    onTap={() => togglePreview(index)}
                    onMouseEnter={() => { setPreviewIndex(index); playVideo(index); }}
                    onMouseLeave={() => { setPreviewIndex((current) => current === index ? null : current); pauseVideo(index); }}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollByStep(1)}
              className="premium-button absolute right-2 top-[42%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/64 text-lg text-white/80 shadow-[0_0_18px_rgba(216,111,189,.08)] backdrop-blur-md hover:border-zephyr-magenta hover:text-zephyr-magenta md:flex lg:right-3 lg:h-11 lg:w-11"
              aria-label="Next visual concept"
            >
              ›
            </button>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-2 flex justify-center gap-2" aria-label="Carousel position">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`View ${item.title}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${activeIndex === index ? 'w-8 bg-zephyr-cyan shadow-[0_0_14px_rgba(123,223,229,.30)]' : 'w-2.5 bg-white/22 hover:bg-white/40'}`}
              />
            ))}
          </div>
          <p className="mt-5 text-center text-xs font-black uppercase tracking-[0.22em] text-zephyr-cyan/70 md:hidden">Swipe to explore</p>
        </Reveal>
      </div>
    </section>
  );
}

function ShowcaseCard({
  item,
  index,
  active,
  setVideoRef,
  onTap,
  onMouseEnter,
  onMouseLeave,
}: {
  item: ShowcaseItem;
  index: number;
  active: boolean;
  setVideoRef: (node: HTMLVideoElement | null) => void;
  onTap: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const href = whatsappProjectUrl(`Hi Zephyr AI Studio, I want this campaign style for my brand: ${item.title}.`);

  return (
    <article
      className={`portfolio-card premium-card group relative h-[430px] overflow-hidden rounded-[1.35rem] border bg-black text-left shadow-[0_18px_70px_rgba(0,0,0,.34)] transition duration-500 md:h-[500px] md:rounded-[1.65rem] ${active ? 'scale-[1.012] border-zephyr-cyan/28 shadow-[0_24px_82px_rgba(123,223,229,.10)]' : 'border-white/10'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button type="button" onClick={onTap} className="absolute inset-0 z-10 cursor-pointer text-left" aria-label={`Preview ${item.title}`}>
        <span className="sr-only">Preview {item.title}</span>
      </button>
      <img src={item.image} alt="" loading="lazy" decoding="async" className="portfolio-image absolute inset-0 h-full w-full object-cover opacity-82 saturate-[.88] contrast-110" />
      {item.video && (
        <video
          ref={setVideoRef}
          className={`portfolio-image absolute inset-0 h-full w-full object-cover saturate-[.9] contrast-110 transition-opacity duration-500 ${active ? 'opacity-82' : 'opacity-0 md:group-hover:opacity-82'}`}
          muted
          loop
          playsInline
          preload="none"
          poster={item.image}
          aria-hidden="true"
        >
          <source src={item.video} type="video/mp4" />
        </video>
      )}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08)_0%,rgba(0,0,0,.30)_38%,rgba(0,0,0,.96)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[76%] bg-gradient-to-t from-black via-black/76 to-transparent" />
      <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2 md:left-5 md:top-5">
        <span className="rounded-full border border-white/12 bg-black/48 px-3 py-2 text-[0.55rem] font-black uppercase tracking-[0.17em] text-white/58 backdrop-blur-md">Visual concept</span>
        <span className="rounded-full border border-zephyr-cyan/18 bg-zephyr-cyan/[.07] px-3 py-2 text-[0.55rem] font-black uppercase tracking-[0.17em] text-zephyr-cyan/86 backdrop-blur-md">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 flex min-h-[50%] flex-col justify-end p-5 md:p-6">
        <h3 className="font-display text-[clamp(1.65rem,6.2vw,2.55rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-white md:text-[clamp(1.65rem,2vw,2.45rem)]">{item.title}</h3>
        <p className="mt-4 text-sm leading-6 text-white/70 md:text-[0.92rem] md:leading-6">{item.copy}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="premium-button relative z-30 mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/16 bg-white/[.075] px-5 py-3 text-center text-[0.64rem] font-black uppercase tracking-[0.14em] text-white/86 backdrop-blur-sm hover:border-zephyr-cyan/36 hover:text-zephyr-cyan">
          Create this for my brand
        </a>
      </div>
    </article>
  );
}
