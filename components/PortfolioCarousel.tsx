'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type WheelEvent } from 'react';
import { Reveal } from '@/components/Reveal';
import { portfolioAssets } from '@/lib/portfolioAssets';
import { whatsappProjectUrl } from '@/lib/siteLinks';

const asset = (title: string) => portfolioAssets.find((item) => item.title === title)!;

const carouselItems = [
  asset('Skincare Brands'),
  asset('Jewellery Brands'),
  {
    ...asset('Fashion Brands'),
    title: 'Fashion & Boutiques',
    create: 'We create model-led fashion visuals, boutique reels, and lookbook-style campaign ads.',
  },
  {
    ...asset('Ecommerce Sellers'),
    title: 'Ecommerce Products',
    create: 'We create product commercials, marketplace visuals, and conversion-ready ad concepts.',
  },
  {
    ...asset('Cafes & Restaurants'),
    title: 'Food & Restaurants',
    create: 'We create food reels, ambience visuals, menu promos, and local launch creatives.',
  },
  asset('Gyms & Fitness Studios'),
  asset('Influencers & Creators'),
  asset('Premium Brand Campaigns'),
] as const;

type CarouselItem = (typeof carouselItems)[number];

export function PortfolioCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoStartTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [autoPaused, setAutoPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const safeIndex = (index + carouselItems.length) % carouselItems.length;
    const track = trackRef.current;
    const card = track?.children.item(safeIndex) as HTMLElement | null;
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActiveIndex(safeIndex);
    activeIndexRef.current = safeIndex;
  }, []);

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
    const nextIndex = (activeIndexRef.current + direction + carouselItems.length) % carouselItems.length;
    setActiveIndex(nextIndex);
    activeIndexRef.current = nextIndex;
  }, []);

  const pauseAuto = useCallback((resume = true) => {
    setAutoPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (resume) {
      resumeTimerRef.current = setTimeout(() => setAutoPaused(false), 7000);
    }
  }, []);

  const resumeAuto = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setAutoPaused(false), 1800);
  }, []);

  const updateActiveFromScroll = () => {
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
  };

  const playVideo = (index: number) => {
    const video = videoRefs.current[String(index)];
    if (!video) return;
    video.play().catch(() => undefined);
  };

  const pauseVideo = (index: number) => {
    const video = videoRefs.current[String(index)];
    if (!video) return;
    video.pause();
  };

  const togglePreview = (index: number) => {
    pauseAuto();
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

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    pauseAuto();
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      track.scrollLeft += event.deltaY;
      updateActiveFromScroll();
    }
  };

  const handleManualMove = () => pauseAuto();

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (autoPaused) return undefined;
    autoStartTimerRef.current = setTimeout(() => {
      scrollByStep(1);
    }, 1400);
    const interval = setInterval(() => {
      scrollByStep(1);
    }, 4300);
    return () => {
      if (autoStartTimerRef.current) clearTimeout(autoStartTimerRef.current);
      clearInterval(interval);
    };
  }, [autoPaused, scrollByStep]);

  useEffect(() => () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (autoStartTimerRef.current) clearTimeout(autoStartTimerRef.current);
  }, []);

  const dots = useMemo(() => carouselItems.map((item) => item.title), []);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[linear-gradient(180deg,#030306_0%,#060610_52%,#030306_100%)] px-4 py-24 md:px-6 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(123,223,229,.045),transparent_28%),radial-gradient(circle_at_86%_54%,rgba(216,111,189,.04),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zephyr-black to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-8 max-w-4xl text-center md:mb-12">
          <p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">Work</p>
          <h2 className="text-glow font-display text-[clamp(2.15rem,8vw,4.7rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.8rem,5.2vw,5.8rem)]">Explore Campaign Styles</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/64 md:mt-7 md:text-xl md:leading-8">
            Swipe through cinematic campaign styles for skincare, jewellery, fashion, food, ecommerce, creators, and premium brands.
          </p>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-zephyr-cyan/70 md:hidden">Swipe to explore</p>
        </Reveal>

        <Reveal>
          <div className="relative">
            <button
              type="button"
              onClick={() => { pauseAuto(); scrollByStep(-1); }}
              className="premium-button absolute left-2 top-[42%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/64 text-lg text-white/80 shadow-[0_0_18px_rgba(123,223,229,.08)] backdrop-blur-md hover:border-zephyr-cyan hover:text-zephyr-cyan md:flex lg:left-3 lg:h-11 lg:w-11"
              aria-label="Previous campaign style"
            >
              ‹
            </button>
            <div
              ref={trackRef}
              onScroll={updateActiveFromScroll}
              onWheel={handleWheel}
              onPointerDown={handleManualMove}
              onTouchStart={handleManualMove}
              onMouseEnter={() => pauseAuto(false)}
              onMouseLeave={resumeAuto}
              className="portfolio-carousel-track -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 sm:gap-5 md:mx-0 md:px-1 lg:gap-6"
              aria-label="Featured campaign style carousel"
            >
              {carouselItems.map((item, index) => (
                <div key={item.title} className="w-[82vw] shrink-0 snap-center sm:w-[46vw] lg:w-[31%] xl:w-[24%]">
                  <CarouselCard
                    item={item}
                    index={index}
                    active={previewIndex === index}
                    setVideoRef={(node) => { videoRefs.current[String(index)] = node; }}
                    onTap={() => togglePreview(index)}
                    onMouseEnter={() => { pauseAuto(false); setPreviewIndex(index); playVideo(index); }}
                    onMouseLeave={() => { setPreviewIndex((current) => current === index ? null : current); pauseVideo(index); }}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => { pauseAuto(); scrollByStep(1); }}
              className="premium-button absolute right-2 top-[42%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/64 text-lg text-white/80 shadow-[0_0_18px_rgba(216,111,189,.08)] backdrop-blur-md hover:border-zephyr-magenta hover:text-zephyr-magenta md:flex lg:right-3 lg:h-11 lg:w-11"
              aria-label="Next campaign style"
            >
              ›
            </button>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-2 flex justify-center gap-2" aria-label="Carousel position">
            {dots.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => { pauseAuto(); scrollToIndex(index); }}
                aria-label={`View ${label}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${activeIndex === index ? 'w-8 bg-zephyr-cyan shadow-[0_0_14px_rgba(123,223,229,.34)]' : 'w-2.5 bg-white/22 hover:bg-white/40'}`}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center md:mt-10">
            <a href="#contact" className="premium-button inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-black hover:bg-zephyr-cyan hover:shadow-[0_0_28px_rgba(123,223,229,.18)]">
              View More Campaign Styles
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CarouselCard({
  item,
  index,
  active,
  setVideoRef,
  onTap,
  onMouseEnter,
  onMouseLeave,
}: {
  item: CarouselItem;
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
      className={`portfolio-card premium-card group relative h-[440px] overflow-hidden rounded-[1.35rem] border bg-black text-left shadow-[0_18px_70px_rgba(0,0,0,.34)] transition duration-500 md:h-[500px] md:rounded-[1.65rem] ${active ? 'scale-[1.018] border-zephyr-cyan/28 shadow-[0_24px_82px_rgba(123,223,229,.12)]' : 'border-white/10'}`}
      style={active ? { transform: 'scale(1.018)' } : undefined}
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.10)_0%,rgba(0,0,0,.28)_36%,rgba(0,0,0,.96)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-black via-black/76 to-transparent" />
      <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2 md:left-5 md:top-5">
        <span className="rounded-full border border-white/12 bg-black/48 px-3 py-2 text-[0.55rem] font-black uppercase tracking-[0.17em] text-white/58 backdrop-blur-md">Sample direction</span>
        <span className="rounded-full border border-zephyr-cyan/18 bg-zephyr-cyan/[.07] px-3 py-2 text-[0.55rem] font-black uppercase tracking-[0.17em] text-zephyr-cyan/86 backdrop-blur-md">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 flex min-h-[52%] flex-col justify-end p-5 md:p-6">
        <h3 className="font-display text-[clamp(1.72rem,6.5vw,2.75rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-[clamp(1.75rem,2.1vw,2.65rem)]">{item.title}</h3>
        <p className="mt-4 text-sm leading-6 text-white/70 md:text-[0.92rem] md:leading-6">{item.create}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="premium-button relative z-30 mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/16 bg-white/[.075] px-5 py-3 text-center text-[0.64rem] font-black uppercase tracking-[0.14em] text-white/86 backdrop-blur-sm hover:border-zephyr-cyan/36 hover:text-zephyr-cyan">
          Create this for my brand
        </a>
        <p className="mt-3 text-center text-[0.62rem] uppercase tracking-[0.16em] text-white/36 md:hidden">Tap for preview</p>
      </div>
    </article>
  );
}
