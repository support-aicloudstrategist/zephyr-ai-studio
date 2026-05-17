'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import SmoothScroll from '@/components/SmoothScroll';
import { Reveal } from '@/components/Reveal';
import { portfolioAssets } from '@/lib/portfolioAssets';

const portfolio = portfolioAssets;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const logoSrc = `${basePath}/brand/zephyr-ai-studio-logo.jpg`;
const heroVideoSrc = `${basePath}/video/zephyr-hero.mp4`;
const showreelVideoSrc = `${basePath}/video/cinematic-fashion-campaign-preview.mp4`;
const showreelPosterSrc = `${basePath}/images/cinematic-fashion-campaign-preview.jpg`;
const whatsappUrl = 'https://wa.me/918796302608?text=Hi%20Zephyr%20AI%20Studio%2C%20I%20want%20premium%20AI%20ads%20for%20my%20brand.';

const services = [
  'AI Product Advertisements',
  'Cinematic Video Production',
  'AI Fashion Campaigns',
  'Social Media Reels',
  'Storytelling Content',
  'Motion Graphics',
  'Brand Visual Systems',
  'AI Commercial Production',
];

const prices = [
  ['Starter Campaign', '₹15k – ₹40k', 'A focused launch pack.', ['1 hero direction', '2–4 premium visuals', '1 short reel direction', 'Caption + launch copy']],
  ['Growth Campaign', '₹50k – ₹1L', 'A complete campaign system.', ['Campaign direction', 'Multiple reels/edits', 'Social creative set', 'Brand visual direction']],
  ['Premium Cinematic Campaign', '₹1L+', 'Luxury storytelling at scale.', ['Full campaign world', 'Cinematic ad films', 'Motion design pack', 'Founder/brand story system']],
] as const;

function useMobileMotion() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)');
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return isMobile;
}

export default function Home() {
  useEffect(() => {
    if (window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches) return;

    gsap.to('.cinematic-hero-glow', {
      scale: 1.055,
      opacity: 0.24,
      duration: 10.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('.cinematic-hero-depth', {
      xPercent: 1.4,
      yPercent: -0.8,
      duration: 16,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <main className="cinema-noise min-h-screen overflow-hidden bg-zephyr-black pb-28 text-white lg:pb-0">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <ProofStrip />
      <Showreel />
      <CinematicReveal />
      <Portfolio />
      <Services />
      <Method />
      <About />
      <Pricing />
      <Contact />
      <Footer />
      <MobileBottomCTA />
    </main>
  );
}

function Navigation() {
  const desktopNavItems = [
    ['Showreel', '#showreel'],
    ['Work', '#portfolio'],
    ['Services', '#services'],
    ['Pricing', '#pricing'],
    ['Contact', '#contact'],
  ] as const;
  const mobileNavItems = [
    ['View Work', '#portfolio'],
    ['Pricing', '#pricing'],
    ['WhatsApp', whatsappUrl],
  ] as const;

  return (
    <motion.header initial={false} className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-10 md:py-4">
      <div className="mx-auto max-w-7xl rounded-[1.45rem] border border-white/10 bg-black/72 px-3 py-3 shadow-[0_14px_46px_rgba(0,0,0,.30)] backdrop-blur-md md:rounded-full md:px-5">
        <div className="flex items-center justify-between gap-3">
          <a href="#hero" aria-label="Zephyr AI Studio home" className="flex min-h-11 min-w-0 items-center gap-3">
            <img src={logoSrc} alt="Zephyr AI Studio logo" className="h-10 w-10 shrink-0 rounded-full border border-white/10 object-cover shadow-[0_0_12px_rgba(123,223,229,.10)] sm:h-12 sm:w-12" />
            <span className="truncate font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.32em]">Zephyr <span className="text-zephyr-cyan">AI</span> Studio</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-xs uppercase tracking-[0.2em] text-white/78 lg:flex">
            {desktopNavItems.map(([label, href]) => <a key={label} href={href} className="premium-link hover:text-zephyr-cyan">{label}</a>)}
          </nav>
          <div className="hidden lg:block">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button rounded-full border border-white/24 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/90 shadow-none hover:border-zephyr-cyan hover:text-zephyr-cyan sm:text-xs">WhatsApp</a>
          </div>
        </div>
        <nav aria-label="Mobile navigation" className="mt-3 grid grid-cols-3 gap-2 border-t border-white/10 pt-3 lg:hidden">
          {mobileNavItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`premium-button flex min-h-10 items-center justify-center rounded-full px-3 text-center text-[0.62rem] font-black uppercase tracking-[0.12em] ${label === 'WhatsApp' ? 'bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,.14)]' : 'border border-white/10 bg-white/[.045] text-white/78'}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 lg:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-[1.15fr_.85fr] gap-2 rounded-[1.35rem] border border-white/10 bg-black/78 p-2 shadow-[0_-18px_60px_rgba(0,0,0,.48)] backdrop-blur-xl">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-4 py-3 text-[0.72rem] font-black uppercase tracking-[0.13em] text-black shadow-[0_0_24px_rgba(37,211,102,.15)]">WhatsApp Us</a>
        <a href="#pricing" className="premium-button flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/[.055] px-4 py-3 text-[0.72rem] font-black uppercase tracking-[0.13em] text-white/86">View Pricing</a>
      </div>
    </div>
  );
}

const heroEase = [0.16, 1, 0.3, 1] as const;

function Hero() {
  const reduceMotion = useMobileMotion();
  return (
    <section id="hero" className="relative flex min-h-[94svh] items-end justify-center overflow-hidden bg-black px-4 pb-10 pt-24 text-left sm:px-6 md:min-h-screen md:items-center md:justify-start md:px-10 md:py-28">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover object-center opacity-72 saturate-[.82] contrast-110 md:h-screen md:w-screen md:opacity-88 md:saturate-[.9]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        initial={{ scale: reduceMotion ? 1.01 : 1.025 }}
        animate={reduceMotion ? { scale: 1.01 } : { scale: [1.025, 1.045, 1.025] }}
        transition={{ duration: 24, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </motion.video>
      <div className="cinematic-hero-depth absolute inset-[-3%] hidden md:block bg-[radial-gradient(circle_at_20%_38%,rgba(123,223,229,.065),transparent_25%),radial-gradient(circle_at_78%_18%,rgba(216,111,189,.045),transparent_24%)]" />
      <div className="cinematic-hero-glow absolute left-1/2 top-[58%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zephyr-cyan/[.045] blur-[82px] md:left-[30%] md:h-[52vmin] md:w-[52vmin]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,6,.34),rgba(3,3,6,.50)_34%,rgba(3,3,6,.86)_76%,#030306_100%)] md:bg-[linear-gradient(90deg,rgba(3,3,6,.92),rgba(3,3,6,.62)_36%,rgba(3,3,6,.24)_68%,rgba(3,3,6,.10)),linear-gradient(180deg,rgba(3,3,6,.18),rgba(3,3,6,.10)_34%,rgba(3,3,6,.42)_74%,#030306_99%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_145px_rgba(0,0,0,.80)] md:shadow-[inset_0_0_230px_rgba(0,0,0,.84)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/78 to-transparent md:h-24" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/92 to-transparent md:h-36" />
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.14, delayChildren: 0.22 } },
        }}
        className="relative z-30 mx-auto w-full max-w-[24rem] rounded-[1.8rem] border border-white/10 bg-black/30 p-5 shadow-[0_22px_80px_rgba(0,0,0,.42)] backdrop-blur-[2px] sm:max-w-[30rem] sm:p-7 md:mx-0 md:ml-[4vw] md:max-w-5xl md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0"
      >
        <motion.p
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: heroEase }}
          className="mb-4 inline-flex rounded-full border border-zephyr-cyan/20 bg-zephyr-cyan/[.055] px-4 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-zephyr-cyan/90 sm:text-[0.65rem] md:mb-6 md:tracking-[0.32em]"
        >
          Premium AI Ad Studio
        </motion.p>
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 1.12, ease: heroEase }}
          className="text-glow max-w-[12ch] font-display text-[clamp(2.55rem,13vw,4.55rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] md:max-w-[13ch] md:text-[clamp(4.2rem,7.2vw,7.4rem)]"
        >
          Cinematic AI Ads for Brands That Want to Look Premium
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 1, ease: heroEase }}
          className="mt-5 max-w-[21rem] text-[1rem] leading-7 text-white/82 sm:max-w-md sm:text-lg md:mt-7 md:max-w-2xl md:text-2xl md:leading-9"
        >
          We create AI-powered product commercials, fashion campaigns, reels, and launch visuals for modern businesses.
        </motion.p>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.95, ease: heroEase }}
          className="mt-7 grid w-full grid-cols-1 gap-3 sm:max-w-md sm:grid-cols-2 md:mt-9 md:flex md:max-w-none md:items-center md:gap-4"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_26px_rgba(37,211,102,.18)] hover:bg-zephyr-cyan hover:shadow-[0_0_30px_rgba(123,223,229,.20)] md:min-w-56">Start on WhatsApp</a>
          <a href="#portfolio" className="premium-button flex min-h-14 items-center justify-center rounded-full border border-white/24 bg-white/7 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur-md hover:border-zephyr-magenta hover:text-zephyr-magenta hover:shadow-magenta md:min-w-44">View Work</a>
        </motion.div>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.9, ease: heroEase }}
          className="mt-5 max-w-[22rem] text-xs font-medium leading-6 text-white/58 sm:text-sm md:mt-6 md:max-w-2xl md:text-base"
        >
          For fashion, skincare, jewelry, ecommerce, influencers, and premium local brands.
        </motion.p>
      </motion.div>
    </section>
  );
}
function ProofStrip() {
  return <section aria-label="Zephyr creative promise" className="relative border-y border-white/10 bg-black/30 px-4 py-9 md:py-10 md:px-6"><div className="mx-auto grid max-w-7xl gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">{[['01','Cinematic first frame'], ['02','AI-native art direction'], ['03','Luxury product mood'], ['04','Launch-ready social cuts']].map(([num, label]) => <div key={label} className="rounded-full border border-white/8 bg-white/[.025] px-5 py-4"><span className="mr-3 text-zephyr-cyan">{num}</span><span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/70">{label}</span></div>)}</div></section>;
}

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <Reveal className="mx-auto mb-10 max-w-6xl text-center md:mb-24"><p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">{kicker}</p><h2 className="text-glow font-display text-[clamp(2rem,8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.4rem,5vw,5.2rem)]">{title}</h2>{copy && <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/62 md:mt-7 md:max-w-xl md:text-xl">{copy}</p>}</Reveal>;
}

function SectionFlow({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const mobile = useMobileMotion();
  const y = useTransform(scrollYProgress, [0, 0.5, 1], mobile ? [0, 0, 0] : [42, 0, -24]);
  const opacity = useTransform(scrollYProgress, [0, 0.16, 0.88, 1], mobile ? [1, 1, 1, 1] : [0.88, 1, 1, 0.94]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

function Showreel() {
  return <SectionFlow><section id="showreel" className="relative bg-zephyr-black px-4 py-28 md:px-6 md:py-56"><SectionTitle kicker="Showreel" title="Luxury trailer montage" copy="A cinematic fashion campaign preview." /><Reveal><div className="mx-auto max-w-7xl overflow-hidden cinema-frame rounded-[1.6rem] border border-white/12 bg-white/[.035] p-2 sm:rounded-[2.4rem] sm:p-3"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-[linear-gradient(135deg,#07070d,#100914_46%,#030306)] sm:rounded-[1.8rem] md:aspect-video"><img src={showreelPosterSrc} alt="Fashion studio showreel poster" className="absolute inset-0 h-full w-full object-cover opacity-76 saturate-110" /><video className="absolute inset-0 h-full w-full object-cover opacity-92 saturate-110 contrast-105" autoPlay muted loop playsInline preload="metadata" poster={showreelPosterSrc} aria-hidden="true"><source src={showreelVideoSrc} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-tr from-black/54 via-black/10 to-black/16" /><div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black/55 to-transparent" /><div className="absolute right-5 top-5 rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">Cinematic fashion campaign preview</div><div className="absolute bottom-6 left-5 right-5 md:bottom-8 md:left-8"><p className="text-[0.65rem] uppercase tracking-[0.26em] text-zephyr-cyan sm:text-xs sm:tracking-[0.35em]">Campaign Reel 001</p><h3 className="mt-2 max-w-4xl font-display text-[clamp(2rem,8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.4rem,5vw,5.2rem)]">Fashion. Product. Story. Motion.</h3><p className="mt-5 max-w-md text-base leading-7 text-white/62 md:text-lg">Luxury campaign direction for product, fashion, and social-first storytelling.</p></div></div></div></Reveal></section></SectionFlow>;
}

function CinematicReveal() {
  const reduceMotion = useMobileMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const frameScale = useTransform(scrollYProgress, [0.18, 0.52, 0.82], reduceMotion ? [0.9, 1, 1.01] : [0.78, 1, 1.08]);
  const frameRadius = useTransform(scrollYProgress, [0.2, 0.62], reduceMotion ? ['1.4rem', '1.1rem'] : ['2.4rem', '0rem']);
  const textOpacity = useTransform(scrollYProgress, [0.16, 0.34, 0.5], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.16, 0.38, 0.5], [34, 0, -42]);
  const filmOpacity = useTransform(scrollYProgress, [0.34, 0.58, 0.84], [0.42, 0.86, 1]);
  const veilOpacity = useTransform(scrollYProgress, [0.32, 0.7], [0.58, 0.18]);

  return (
    <section ref={ref} className="relative h-[150vh] bg-gradient-to-b from-zephyr-black via-black to-zephyr-black md:h-[220vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4">
        <motion.div
          style={{ scale: frameScale, borderRadius: frameRadius }}
          className="relative h-[62vh] w-full max-w-6xl overflow-hidden border border-white/12 bg-[#05050a] shadow-[0_26px_90px_rgba(0,0,0,.58)] md:h-[74vh] md:shadow-[0_36px_140px_rgba(0,0,0,.68)]"
        >
          <video className="absolute inset-0 h-full w-full object-cover opacity-86 saturate-[.9] contrast-105 md:opacity-90" autoPlay muted loop playsInline preload="metadata" poster={showreelPosterSrc} aria-hidden="true">
            <source src={showreelVideoSrc} type="video/mp4" />
          </video>
          <motion.div style={{ opacity: filmOpacity }} className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/18 to-black/28" />
          <motion.div style={{ opacity: veilOpacity }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_20%,rgba(0,0,0,.68)_78%)]" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/78 to-transparent" />
        </motion.div>
        <motion.div style={{ opacity: textOpacity, y: textY }} className="pointer-events-none absolute z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.38em] text-zephyr-cyan/82 md:text-xs">The Zephyr Moment</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] text-white md:text-[clamp(2.4rem,5vw,5.2rem)]">Brief to world.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/68 md:text-lg">The campaign becomes cinema.</p>
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState<(typeof portfolio)[number] | null>(null);
  const mobile = useMobileMotion();
  return (
    <section id="portfolio" className="relative bg-gradient-to-b from-zephyr-black via-[#06060d] to-zephyr-black px-4 py-24 md:px-6 md:py-44">
      <SectionTitle kicker="Portfolio" title="Campaign worlds, not gallery tiles" copy="Campaigns as cinema." />
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:gap-12">
        {portfolio.map((item, i) => (
          <Reveal delay={Math.min(i * 0.08, 0.24)} key={item.title}>
            <motion.button
              type="button"
              onClick={() => setActive(item)}
              whileHover={mobile ? undefined : "hover"}
              initial="rest"
              animate={mobile ? "hover" : "rest"}
              whileTap={{ scale: 0.998 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`premium-card group relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black text-left outline-none md:rounded-[2.8rem] ${i % 2 ? 'md:ml-auto md:w-[88%]' : 'md:mr-auto md:w-[88%]'}`}
            >
              <div className="relative min-h-[390px] overflow-hidden sm:min-h-[430px] md:min-h-[560px] lg:min-h-[640px]">
                <motion.img
                  variants={{ rest: { scale: 1 }, hover: { scale: mobile ? 1 : 1.045 } }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-78 saturate-[.92] contrast-105"
                />
                <motion.div
                  variants={{ rest: { opacity: 0.36 }, hover: { opacity: mobile ? 0.46 : 0.54 } }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/26 to-black/8" />
                <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/72 via-black/26 to-transparent" />
                <motion.div
                  variants={{ rest: { opacity: 0, y: 28 }, hover: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-10 lg:p-12"
                >
                  <p className="text-[0.66rem] uppercase tracking-[0.34em] text-zephyr-cyan/80 md:text-xs">{item.num} / High-end campaign preview</p>
                  <h3 className="mt-4 max-w-4xl font-display text-[clamp(2rem,8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] text-white md:text-[clamp(2.4rem,5vw,5.2rem)]">{item.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/68 md:mt-6 md:max-w-lg md:text-lg md:leading-7">{item.copy}</p>
                  <span className="mt-5 inline-flex rounded-full border border-white/18 bg-white/[.035] px-5 py-3 text-[0.65rem] md:mt-8 font-bold uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">Enter world</span>
                </motion.div>
                <div className="absolute left-6 top-6 rounded-full border border-white/14 bg-black/32 px-4 py-2 text-[0.62rem] uppercase tracking-[0.22em] text-white/52 backdrop-blur-sm md:left-10 md:top-10">Campaign direction</div>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-3 backdrop-blur-lg md:p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.985, y: 34 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.992, y: 22 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[82svh] w-full max-w-7xl overflow-hidden rounded-[1.4rem] border border-white/14 shadow-[0_24px_90px_rgba(0,0,0,.62)] md:h-[88vh] md:rounded-[2.6rem] md:shadow-[0_36px_140px_rgba(0,0,0,.70)]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                initial={{ scale: 1.035 }}
                animate={{ scale: 1 }}
                exit={{ scale: 1.015 }}
                transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
                src={active.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-88 saturate-[.95]"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${active.gradient} opacity-45`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-black/12" />
              <button type="button" onClick={() => setActive(null)} className="premium-button absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-black/42 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/72 backdrop-blur-md hover:border-zephyr-cyan hover:text-zephyr-cyan md:right-6 md:top-6">Close</button>
              <div className="absolute bottom-6 left-5 right-5 z-10 md:bottom-12 md:left-12 md:right-12">
                <p className="text-xs uppercase tracking-[0.34em] text-zephyr-cyan/82 md:text-sm">{active.num} / Cinematic campaign world</p>
                <h3 className="mt-4 max-w-5xl font-display text-[clamp(2rem,8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.4rem,5vw,5.2rem)]">{active.title}</h3>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-xl">{active.copy}</p>
                <p className="mt-5 text-[0.65rem] uppercase tracking-[0.25em] text-white/42">Luxury campaign direction for product, fashion, and social-first storytelling.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
function Services() {
  return <SectionFlow><section id="services" className="px-4 py-28 md:px-6 md:py-48"><SectionTitle kicker="Services" title="Frames first. Words second." /><div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s, i) => <Reveal delay={Math.min(i * 0.07, 0.24)} key={s}><motion.div whileHover={{ y: -3 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="premium-card glass min-h-44 rounded-[1.5rem] p-6 hover:border-zephyr-cyan/25 hover:shadow-[0_18px_60px_rgba(0,0,0,.22)] md:min-h-52 md:rounded-[1.8rem] md:p-7"><div className="mb-8 h-10 w-10 rounded-full bg-gradient-to-br from-zephyr-cyan/55 to-zephyr-magenta/45 shadow-[0_0_18px_rgba(123,223,229,.10)]" /><h3 className="text-lg font-bold uppercase tracking-[-0.03em]">{s}</h3></motion.div></Reveal>)}</div></section></SectionFlow>;
}

function Method() {
  const steps = [
    ['Discover', 'Product, audience, visual language and campaign ambition are translated into a cinematic brief.'],
    ['Design', 'Moodboards, prompts, composition rules and motion references lock the premium world before production.'],
    ['Produce', 'AI visuals, video generation, editing direction and platform-specific cutdowns are built as one campaign system.'],
  ];
  return <SectionFlow><section className="relative overflow-hidden bg-[#04040a] px-4 py-28 md:px-6 md:py-48"><div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(123,223,229,.055),transparent_34%),radial-gradient(circle_at_78%_40%,rgba(216,111,189,.07),transparent_28%)]" /><SectionTitle kicker="Process" title="From brief to brand world" copy="From brief to launch-ready world." /><div className="relative mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">{steps.map(([title, copy], i) => <Reveal delay={Math.min(i * 0.1, 0.24)} key={title}><div className="premium-card glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8"><p className="text-6xl font-black text-white/10">0{i+1}</p><h3 className="mt-8 text-2xl font-black uppercase tracking-[-0.04em] text-white">{title}</h3><p className="mt-6 max-w-sm text-base leading-7 text-white/58">{copy}</p></div></Reveal>)}</div></section></SectionFlow>;
}

function About() {
  const beliefs = ['Cinema over content', 'Emotion over noise', 'Worlds over templates'];
  return (
    <SectionFlow>
      <section id="about" className="relative overflow-hidden px-4 py-28 md:px-6 md:py-56">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_26%,rgba(216,111,189,.06),transparent_32%),radial-gradient(circle_at_18%_76%,rgba(123,223,229,.055),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-zephyr-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zephyr-black to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.05fr_.95fr] md:items-end md:gap-20">
          <Reveal>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-zephyr-cyan/82 md:text-xs">About Zephyr</p>
              <h2 className="mt-8 max-w-5xl font-display text-[clamp(2rem,8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] text-white md:text-[clamp(2.4rem,5vw,5.2rem)]">
                We design the world your brand deserves.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="space-y-8 border-l border-white/12 pl-6 md:pl-8">
              <p className="text-xl font-semibold leading-tight tracking-[-0.035em] text-white/82 md:text-3xl">
                Zephyr is a cinematic studio for brands that want to be felt before they are understood.
              </p>
              <div className="grid gap-3">
                {beliefs.map((item) => (
                  <div key={item} className="border-t border-white/10 py-4 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-white/58 md:text-xs">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SectionFlow>
  );
}
function Pricing() {
  return <SectionFlow><section id="pricing" className="bg-[#05050c] px-4 py-28 md:px-6 md:py-48"><SectionTitle kicker="Pricing" title="Premium campaign architecture" copy="Choose the campaign scale." /><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">{prices.map(([name, price, copy, features], i) => <Reveal delay={Math.min(i * 0.1, 0.24)} key={name}><div className={`premium-card glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8 ${i===2 ? 'border-zephyr-magenta/28 shadow-magenta' : ''}`}><p className="text-xs uppercase tracking-[0.3em] text-zephyr-cyan">{name}</p><h3 className="magenta-glow mt-6 text-3xl font-black">{price}</h3><p className="mt-6 max-w-sm text-base leading-7 text-white/58">{copy}</p><ul className="mt-8 space-y-3 text-sm text-white/72">{features.map(f => <li key={f} className="flex gap-3"><span className="text-zephyr-cyan" aria-hidden="true">✦</span><span>{f}</span></li>)}</ul></div></Reveal>)}</div></section></SectionFlow>;
}

function Contact() {
  return <SectionFlow><section id="contact" className="px-4 py-28 md:px-6 md:py-48"><SectionTitle kicker="Start a project" title="Make the brief cinematic" copy="Share the campaign ambition. We shape the world, the frames, and the launch language." /><Reveal><div className="glass mx-auto grid max-w-5xl gap-6 rounded-[1.6rem] p-6 md:grid-cols-[1.05fr_.95fr] md:gap-8 md:rounded-[2rem] md:p-10"><div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-zephyr-cyan/82">Private campaign enquiry</p><h3 className="mt-6 font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white md:text-6xl">Commission a visual world.</h3><p className="mt-6 max-w-xl text-base leading-7 text-white/64 md:text-lg">For product launches, fashion stories, premium social films, founder campaigns and cinematic brand systems.</p></div><div className="rounded-[1.4rem] border border-white/10 bg-black/32 p-6 md:p-8"><div className="space-y-5 text-sm leading-7 text-white/66"><p><span className="text-white">Send:</span> brand name, product category, campaign goal, preferred timeline and visual references.</p><p><span className="text-white">Receive:</span> a refined creative direction, production scope and launch-ready visual plan.</p></div><a href="mailto:support@aicloudstrategist.com?subject=Zephyr%20AI%20Studio%20Campaign%20Brief" className="premium-button mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black hover:bg-zephyr-cyan hover:shadow-[0_0_22px_rgba(123,223,229,.16)]">Email the brief</a></div></div></Reveal></section></SectionFlow>;
}

function Footer() {
  return <footer className="border-t border-white/10 px-4 py-10 md:px-6"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center"><div className="flex items-center gap-3"><img src={logoSrc} alt="Zephyr AI Studio logo" className="h-12 w-12 rounded-full border border-white/10 object-cover shadow-[0_0_18px_rgba(216,111,189,.12)]" /><p className="uppercase tracking-[0.3em] text-white/70">Zephyr AI Studio</p></div><p>Luxury AI advertising and cinematic brand storytelling.</p><a className="premium-link hover:text-zephyr-cyan" href="mailto:support@aicloudstrategist.com?subject=Zephyr%20AI%20Studio%20Campaign%20Brief">Start a private brief</a></div></footer>;
}
