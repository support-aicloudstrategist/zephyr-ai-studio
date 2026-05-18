'use client';

import { useEffect, useRef } from 'react';

const interactiveSelector = 'a, button, [role="button"], .portfolio-card, .premium-card, input, textarea, select, label';
const formSelector = 'input, textarea, select, [contenteditable="true"]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    document.documentElement.classList.add('zephyr-custom-cursor-enabled');
    dot.style.display = 'block';
    ring.style.display = 'block';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;

    const setVisible = () => {
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      mouseX = event.clientX;
      mouseY = event.clientY;
      setVisible();
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (!target) return;
      const interactive = target.closest(interactiveSelector);
      const form = target.closest(formSelector);
      ring.classList.toggle('is-interactive', Boolean(interactive && !form));
      dot.classList.toggle('is-interactive', Boolean(interactive && !form));
      ring.classList.toggle('is-form', Boolean(form));
      dot.classList.toggle('is-form', Boolean(form));
    };

    const onPointerLeave = () => {
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerover', onPointerOver, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave, { passive: true });
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerover', onPointerOver);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.documentElement.classList.remove('zephyr-custom-cursor-enabled');
      dot.style.display = 'none';
      ring.style.display = 'none';
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="zephyr-cursor-ring" style={{ display: 'none', pointerEvents: 'none' }} aria-hidden="true" />
      <div ref={dotRef} className="zephyr-cursor-dot" style={{ display: 'none', pointerEvents: 'none' }} aria-hidden="true" />
    </>
  );
}
