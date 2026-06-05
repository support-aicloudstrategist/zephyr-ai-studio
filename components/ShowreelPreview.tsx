'use client';

import { useEffect, useId, useRef, useState } from 'react';

type ShowreelPreviewProps = {
  posterSrc: string;
  videoSrc: string;
  videoWebmSrc?: string;
  primaryHref: string;
  secondaryHref: string;
};

const labels = ['AI Product Film', 'Fashion Campaign', 'Launch Reel', 'Premium Visuals', 'Social Ad Cut'] as const;

export function ShowreelPreview({ posterSrc, videoSrc, videoWebmSrc, primaryHref, secondaryHref }: ShowreelPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const playTimer = window.setTimeout(() => {
      modalVideoRef.current?.play().catch(() => {
        // Some browsers still require the user to press the native play control.
      });
    }, 20);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.clearTimeout(playTimer);
      modalVideoRef.current?.pause();
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @keyframes showreelFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes showreelLiftIn { from { opacity: 0; transform: translateY(10px) scale(.992); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_44%,rgba(123,223,229,.18),transparent_38%),radial-gradient(circle_at_52%_58%,rgba(216,111,189,.16),transparent_42%)] blur-2xl md:-inset-10 md:rounded-[3rem]" />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative block w-full overflow-hidden rounded-[1.65rem] bg-[linear-gradient(135deg,rgba(123,223,229,.82),rgba(216,111,189,.76))] p-px text-left shadow-[0_28px_110px_rgba(0,0,0,.66)] outline-none transition duration-200 hover:scale-[1.003] focus-visible:ring-2 focus-visible:ring-zephyr-cyan/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:rounded-[2.3rem]"
            aria-haspopup="dialog"
            aria-label="Open cinematic showreel preview"
          >
            <span className="relative block overflow-hidden rounded-[1.58rem] border border-white/10 bg-[linear-gradient(135deg,#05060c,#100913_48%,#030306)] p-2 sm:rounded-[2.22rem] sm:p-3 md:p-4">
              <span className="relative block aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-black sm:rounded-[1.8rem] md:aspect-video">
                <img
                  src={posterSrc}
                  alt="Cinematic AI fashion and product campaign showreel preview"
                  loading="lazy"
                  decoding="async"
                  width="1600"
                  height="900"
                  className="absolute inset-0 h-full w-full object-cover opacity-90 saturate-110 contrast-110 transition duration-300 group-hover:scale-[1.012]"
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,7,.36),rgba(3,3,7,.20)_38%,rgba(3,3,7,.72)),radial-gradient(circle_at_50%_45%,rgba(0,0,0,.05),rgba(0,0,0,.52)_76%)]" />
                <span className="absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,.78)] md:shadow-[inset_0_0_150px_rgba(0,0,0,.84)]" />

                <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/42 px-4 py-2 text-[0.56rem] font-black uppercase tracking-[0.18em] text-white/64 backdrop-blur-md sm:left-6 sm:top-6 sm:text-[0.64rem]">
                  Studio Screening · 01
                </span>

                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full border border-white/18 bg-white/12 shadow-[0_0_42px_rgba(123,223,229,.18),0_0_58px_rgba(216,111,189,.13)] backdrop-blur-xl transition duration-300 group-hover:scale-105 group-hover:bg-white/18 sm:h-24 sm:w-24 md:h-28 md:w-28" aria-hidden="true">
                    <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-white sm:border-y-[15px] sm:border-l-[23px]" />
                  </span>
                </span>

                <span className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                  <span className="mb-0 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2 md:mb-5">
                    {labels.map((label) => (
                      <span key={label} className="rounded-full border border-white/12 bg-black/48 px-2.5 py-1.5 text-[0.5rem] font-black uppercase tracking-[0.1em] text-white/74 backdrop-blur-md sm:px-3 sm:py-2 sm:text-[0.62rem] sm:tracking-[0.14em]">
                        {label}
                      </span>
                    ))}
                  </span>
                  <span className="hidden max-w-3xl font-display text-[clamp(1.7rem,7vw,4.1rem)] font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:block">
                    Press play on your next premium campaign.
                  </span>
                </span>
              </span>
            </span>
          </button>
        </div>

        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-2 rounded-[1.35rem] border border-white/10 bg-black/32 px-4 py-4 text-center text-[0.64rem] font-black uppercase tracking-[0.14em] text-white/58 backdrop-blur-md md:mt-8 md:text-xs md:tracking-[0.18em]">
          Product Ads <span className="text-zephyr-cyan/70">·</span> Reels <span className="text-zephyr-cyan/70">·</span> Launch Teasers <span className="text-zephyr-cyan/70">·</span> Campaign Visuals <span className="text-zephyr-cyan/70">·</span> 9:16 / 1:1 / 16:9 Delivery
        </div>

        <div className="mt-7 grid gap-3 sm:mx-auto sm:max-w-xl sm:grid-cols-2 md:mt-9">
          <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-14 items-center justify-center rounded-full bg-white px-7 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-black hover:bg-zephyr-cyan">
            Create My AI Ad
          </a>
          <a href={secondaryHref} className="premium-button flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/[.055] px-7 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white hover:border-zephyr-magenta hover:text-zephyr-magenta">
            View Campaign Styles
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 px-3 py-6 backdrop-blur-xl sm:px-6"
          style={{ animation: 'showreelFadeIn .12s ease-out' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#05050b] p-2 shadow-[0_32px_120px_rgba(0,0,0,.78)] sm:rounded-[2rem] sm:p-3" style={{ animation: 'showreelLiftIn .14s cubic-bezier(.16,1,.3,1)' }}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/14 bg-black/58 text-xl text-white/78 backdrop-blur-md transition hover:border-zephyr-cyan hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zephyr-cyan"
              aria-label="Close showreel preview"
            >
              ×
            </button>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-black sm:rounded-[1.55rem] md:aspect-video">
              <video ref={modalVideoRef} className="h-full w-full object-cover" controls autoPlay muted playsInline preload="auto" poster={posterSrc} aria-label="AI Creative Studio showreel preview">
                {videoWebmSrc && <source src={videoWebmSrc} type="video/webm" />}
                <source src={videoSrc} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 to-transparent p-5 pt-16 md:p-7 md:pt-20">
                <h3 id={titleId} className="max-w-3xl font-display text-2xl font-black uppercase leading-none tracking-[-0.05em] text-white md:text-4xl">
                  A Cinematic Preview of What Your Brand Can Become
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-3">
              <p className="text-sm leading-6 text-white/58">Preview premium campaign direction across product ads, reels, launch teasers, and social cuts.</p>
              <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-center text-xs font-black uppercase tracking-[0.13em] text-black hover:bg-zephyr-cyan">
                Create similar campaign
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
