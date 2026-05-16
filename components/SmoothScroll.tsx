'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: window.matchMedia('(max-width: 767px)').matches ? 1.05 : 1.38,
      smoothWheel: true,
      wheelMultiplier: window.matchMedia('(max-width: 767px)').matches ? 1 : 0.92,
      touchMultiplier: window.matchMedia('(max-width: 767px)').matches ? 1.28 : 1.18,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });
    let rafId = 0;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, []);
  return null;
}
