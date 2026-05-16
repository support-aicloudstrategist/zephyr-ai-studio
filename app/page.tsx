'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import SmoothScroll from '@/components/SmoothScroll';
import { Reveal } from '@/components/Reveal';
import { placeholderPortfolio } from '@/lib/placeholders';

const portfolio = placeholderPortfolio;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const logoSrc = `${basePath}/brand/zephyr-ai-studio-logo.jpg`;
const heroVideoSrc = `${basePath}/video/zephyr-hero.mp4`;
const showreelVideoSrc = `${basePath}/video/mixkit-stylish-woman-sports-car-44545.mp4`;
const showreelPosterSrc = `${basePath}/images/mixkit-stylish-woman-sports-car-44545.jpg`;

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
  ['Starter Campaign', '₹15k – ₹40k', 'A focused launch pack.', ['1 hero concept', '2–4 premium visuals', '1 short reel direction', 'Caption + launch copy']],
  ['Growth Campaign', '₹50k – ₹1L', 'A complete campaign system.', ['Campaign concept', 'Multiple reels/edits', 'Social creative set', 'Brand visual direction']],
  ['Premium Cinematic Campaign', '₹1L+', 'Luxury storytelling at scale.', ['Full campaign world', 'Cinematic ad films', 'Motion design pack', 'Founder/brand story system']],
] as const;

export default function Home() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.to('.gsap-hero-glow', {
      scale: 1.055,
      opacity: 0.24,
      duration: 10.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('.gsap-hero-depth', {
      xPercent: 1.4,
      yPercent: -0.8,
      duration: 16,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <main className="cinema-noise min-h-screen overflow-hidden bg-zephyr-black text-white">
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
    </main>
  );
}

function Navigation() {
  return (
    <motion.header initial={false} className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-10 md:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/62 px-4 py-3 shadow-[0_14px_46px_rgba(0,0,0,.30)] backdrop-blur-md">
        <a href="#hero" aria-label="Zephyr AI Studio home" className="flex items-center gap-3">
          <img src={logoSrc} alt="Zephyr AI Studio logo" className="h-10 w-10 rounded-full border border-white/10 object-cover shadow-[0_0_12px_rgba(123,223,229,.10)] sm:h-12 sm:w-12" />
          <span className="hidden font-display text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white sm:inline sm:text-sm sm:tracking-[0.32em]">Zephyr <span className="text-zephyr-cyan">AI</span> Studio</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-xs uppercase tracking-[0.2em] text-white/78 lg:flex">
          {['Showreel', 'Portfolio', 'Services', 'Pricing', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-zephyr-cyan hover:drop-shadow-[0_0_10px_rgba(123,223,229,.38)]">{item}</a>)}
        </nav>
        <a href="#contact" className="rounded-full border border-white/24 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/90 shadow-none transition hover:border-zephyr-cyan hover:text-zephyr-cyan sm:text-xs">Start</a>
      </div>
    </motion.header>
  );
}

const heroEase = [0.16, 1, 0.3, 1] as const;

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-start overflow-hidden bg-black px-5 py-28 md:px-10">
      <motion.video
        className="absolute inset-0 h-screen w-screen object-cover object-center opacity-88 saturate-[.9] contrast-110"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        initial={{ scale: 1.035 }}
        animate={{ scale: [1.035, 1.055, 1.035] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </motion.video>
      <div className="gsap-hero-depth absolute inset-[-3%] bg-[radial-gradient(circle_at_22%_42%,rgba(123,223,229,.075),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(216,111,189,.05),transparent_24%)]" />
      <div className="gsap-hero-glow absolute left-[30%] top-1/2 h-[52vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zephyr-cyan/7 blur-[76px]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,6,.90),rgba(3,3,6,.58)_36%,rgba(3,3,6,.22)_68%,rgba(3,3,6,.12)),linear-gradient(180deg,rgba(3,3,6,.20),rgba(3,3,6,.08)_34%,rgba(3,3,6,.38)_74%,#030306_99%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,.82)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/75 to-transparent md:h-24" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent md:h-36" />
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18, delayChildren: 0.34 } },
        }}
        className="relative z-30 ml-0 max-w-4xl text-left md:ml-[4vw]"
      >
        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 1.05, ease: heroEase }}
          className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-zephyr-cyan/86 sm:text-xs sm:tracking-[0.48em]"
        >
          Luxury AI Cinema House
        </motion.p>
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 1.35, ease: heroEase }}
          className="text-glow font-display text-[clamp(3.2rem,10vw,8.8rem)] font-black uppercase leading-[0.82] tracking-[-0.09em]"
        >
          Cinematic AI Advertising
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 1.2, ease: heroEase }}
          className="mt-8 max-w-xl font-accent text-lg leading-7 text-white/82 md:text-2xl"
        >
          Futuristic Visual Storytelling for Modern Brands
        </motion.p>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 1.15, ease: heroEase }}
          className="mt-9 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <a href="#portfolio" className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-zephyr-cyan hover:shadow-[0_0_22px_rgba(123,223,229,.16)]">View Portfolio</a>
          <a href="#contact" className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-zephyr-magenta hover:text-zephyr-magenta hover:shadow-magenta">Start A Project</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
function ProofStrip() {
  return <section aria-label="Zephyr creative promise" className="relative border-y border-white/10 bg-black/30 px-4 py-9 md:py-10 md:px-6"><div className="mx-auto grid max-w-7xl gap-3 text-center md:grid-cols-4">{[['01','Cinematic first frame'], ['02','AI-native art direction'], ['03','Luxury product mood'], ['04','Launch-ready social cuts']].map(([num, label]) => <div key={label} className="rounded-full border border-white/8 bg-white/[.025] px-5 py-4"><span className="mr-3 text-zephyr-cyan">{num}</span><span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/70">{label}</span></div>)}</div></section>;
}

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <Reveal className="mx-auto mb-16 max-w-6xl text-center md:mb-24"><p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">{kicker}</p><h2 className="text-glow font-display text-[clamp(3.4rem,13vw,8.8rem)] font-black uppercase leading-[.82] tracking-[-0.09em]">{title}</h2>{copy && <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/58 md:text-xl">{copy}</p>}</Reveal>;
}

function Showreel() {
  return <section id="showreel" className="relative bg-zephyr-black px-4 py-36 md:px-6 md:py-56"><SectionTitle kicker="Showreel" title="Luxury trailer montage" copy="A luxury motion preview." /><Reveal><div className="mx-auto max-w-7xl overflow-hidden cinema-frame rounded-[1.6rem] border border-white/12 bg-white/[.035] p-2 sm:rounded-[2.4rem] sm:p-3"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-[linear-gradient(135deg,#07070d,#100914_46%,#030306)] sm:rounded-[1.8rem] md:aspect-video"><img src={showreelPosterSrc} alt="Fashion studio showreel poster" className="absolute inset-0 h-full w-full object-cover opacity-76 saturate-110" /><video className="absolute inset-0 h-full w-full object-cover opacity-92 saturate-110 contrast-105" autoPlay muted loop playsInline preload="auto" poster={showreelPosterSrc} aria-hidden="true"><source src={showreelVideoSrc} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-tr from-black/54 via-black/10 to-black/16" /><div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black/55 to-transparent" /><div className="absolute right-5 top-5 rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">Mixkit fashion placeholder</div><div className="absolute bottom-6 left-5 right-5 md:bottom-8 md:left-8"><p className="text-[0.65rem] uppercase tracking-[0.26em] text-zephyr-cyan sm:text-xs sm:tracking-[0.35em]">Zephyr Reel 001</p><h3 className="mt-2 max-w-4xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.075em] md:text-8xl">Fashion. Product. Story. Motion.</h3><p className="mt-5 max-w-md text-base leading-7 text-white/62 md:text-lg">A placeholder frame for the Zephyr visual language.</p></div></div></div></Reveal></section>;
}

function CinematicReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const frameScale = useTransform(scrollYProgress, [0.18, 0.52, 0.82], [0.78, 1, 1.08]);
  const frameRadius = useTransform(scrollYProgress, [0.2, 0.62], ['2.4rem', '0rem']);
  const textOpacity = useTransform(scrollYProgress, [0.16, 0.34, 0.5], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.16, 0.38, 0.5], [34, 0, -42]);
  const filmOpacity = useTransform(scrollYProgress, [0.34, 0.58, 0.84], [0.42, 0.86, 1]);
  const veilOpacity = useTransform(scrollYProgress, [0.32, 0.7], [0.58, 0.18]);

  return (
    <section ref={ref} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4">
        <motion.div
          style={{ scale: frameScale, borderRadius: frameRadius }}
          className="relative h-[74vh] w-full max-w-6xl overflow-hidden border border-white/12 bg-[#05050a] shadow-[0_36px_140px_rgba(0,0,0,.68)]"
        >
          <video className="absolute inset-0 h-full w-full object-cover opacity-90 saturate-[.92] contrast-105" autoPlay muted loop playsInline preload="metadata" poster={showreelPosterSrc} aria-hidden="true">
            <source src={showreelVideoSrc} type="video/mp4" />
          </video>
          <motion.div style={{ opacity: filmOpacity }} className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/18 to-black/28" />
          <motion.div style={{ opacity: veilOpacity }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_20%,rgba(0,0,0,.68)_78%)]" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/78 to-transparent" />
        </motion.div>
        <motion.div style={{ opacity: textOpacity, y: textY }} className="pointer-events-none absolute z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.38em] text-zephyr-cyan/82 md:text-xs">The Zephyr Moment</p>
          <h2 className="mt-5 font-display text-[clamp(2.7rem,9vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.08em] text-white">Brief to world.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/68 md:text-lg">The campaign becomes cinema.</p>
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState<(typeof portfolio)[number] | null>(null);
  return (
    <section id="portfolio" className="relative bg-gradient-to-b from-zephyr-black via-[#06060d] to-zephyr-black px-4 py-40 md:px-6 md:py-60">
      <SectionTitle kicker="Portfolio" title="Campaign worlds, not gallery tiles" copy="Campaigns as cinema." />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:gap-16">
        {portfolio.map((item, i) => (
          <Reveal delay={Math.min(i * 0.08, 0.24)} key={item.title}>
            <motion.button
              type="button"
              onClick={() => setActive(item)}
              whileHover="hover"
              initial="rest"
              animate="rest"
              whileTap={{ scale: 0.998 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black text-left outline-none md:rounded-[2.8rem] ${i % 2 ? 'md:ml-auto md:w-[88%]' : 'md:mr-auto md:w-[88%]'}`}
            >
              <div className="relative min-h-[560px] overflow-hidden md:min-h-[680px] lg:min-h-[760px]">
                <motion.img
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.045 } }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-78 saturate-[.92] contrast-105"
                />
                <motion.div
                  variants={{ rest: { opacity: 0.36 }, hover: { opacity: 0.54 } }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/26 to-black/8" />
                <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/72 via-black/26 to-transparent" />
                <motion.div
                  variants={{ rest: { opacity: 0, y: 28 }, hover: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-10 lg:p-12"
                >
                  <p className="text-[0.66rem] uppercase tracking-[0.34em] text-zephyr-cyan/80 md:text-xs">{item.num} / High-end campaign preview</p>
                  <h3 className="mt-4 max-w-4xl font-display text-6xl font-black uppercase leading-[0.8] tracking-[-0.085em] text-white md:text-8xl lg:text-9xl">{item.title}</h3>
                  <p className="mt-6 max-w-lg text-base leading-7 text-white/62 md:text-lg">{item.copy}</p>
                  <span className="mt-8 inline-flex rounded-full border border-white/18 bg-white/[.035] px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">Enter world</span>
                </motion.div>
                <div className="absolute left-6 top-6 rounded-full border border-white/14 bg-black/32 px-4 py-2 text-[0.62rem] uppercase tracking-[0.22em] text-white/52 backdrop-blur-sm md:left-10 md:top-10">Zephyr concept</div>
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
              className="relative h-[88vh] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/14 shadow-[0_36px_140px_rgba(0,0,0,.70)] md:rounded-[2.6rem]"
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
              <button type="button" onClick={() => setActive(null)} className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-black/42 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/72 backdrop-blur-md transition duration-500 hover:border-zephyr-cyan hover:text-zephyr-cyan md:right-6 md:top-6">Close</button>
              <div className="absolute bottom-6 left-5 right-5 z-10 md:bottom-12 md:left-12 md:right-12">
                <p className="text-xs uppercase tracking-[0.34em] text-zephyr-cyan/82 md:text-sm">{active.num} / Cinematic campaign world</p>
                <h3 className="mt-4 max-w-5xl font-display text-5xl font-black uppercase leading-[0.82] tracking-[-0.075em] md:text-8xl lg:text-9xl">{active.title}</h3>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-xl">{active.copy}</p>
                <p className="mt-5 text-[0.65rem] uppercase tracking-[0.25em] text-white/42">Placeholder — ready for Zephyr originals.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
function Services() {
  return <section id="services" className="px-4 py-36 md:px-6 md:py-48"><SectionTitle kicker="Services" title="Frames first. Words second." /><div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s, i) => <Reveal delay={Math.min(i * 0.07, 0.24)} key={s}><motion.div whileHover={{ y: -3 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="glass min-h-44 rounded-[1.5rem] p-6 transition hover:border-zephyr-cyan/25 hover:shadow-[0_18px_60px_rgba(0,0,0,.22)] md:min-h-52 md:rounded-[1.8rem] md:p-7"><div className="mb-8 h-10 w-10 rounded-full bg-gradient-to-br from-zephyr-cyan/55 to-zephyr-magenta/45 shadow-[0_0_18px_rgba(123,223,229,.10)]" /><h3 className="text-lg font-bold uppercase tracking-[-0.03em]">{s}</h3></motion.div></Reveal>)}</div></section>;
}

function Method() {
  const steps = [
    ['Discover', 'Product, audience, visual language and campaign ambition are translated into a cinematic brief.'],
    ['Design', 'Moodboards, prompts, composition rules and motion references lock the premium world before production.'],
    ['Produce', 'AI visuals, video generation, editing direction and platform-specific cutdowns are built as one campaign system.'],
  ];
  return <section className="relative overflow-hidden bg-[#04040a] px-4 py-36 md:px-6 md:py-48"><div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(123,223,229,.055),transparent_34%),radial-gradient(circle_at_78%_40%,rgba(216,111,189,.07),transparent_28%)]" /><SectionTitle kicker="Process" title="From brief to brand world" copy="From brief to launch-ready world." /><div className="relative mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">{steps.map(([title, copy], i) => <Reveal delay={Math.min(i * 0.1, 0.24)} key={title}><div className="glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8"><p className="text-6xl font-black text-white/10">0{i+1}</p><h3 className="mt-8 text-3xl font-black uppercase tracking-[-0.05em] text-white">{title}</h3><p className="mt-6 max-w-sm text-base leading-7 text-white/58">{copy}</p></div></Reveal>)}</div></section>;
}

function About() {
  return <section id="about" className="relative overflow-hidden px-4 py-32 md:px-6 md:py-44"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(216,111,189,.07),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(123,223,229,.07),transparent_28%)]" /><div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center"><Reveal><div className="glass rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8"><p className="text-xs uppercase tracking-[0.38em] text-zephyr-cyan">About</p><h2 className="mt-6 text-4xl font-black uppercase leading-[.9] tracking-[-0.06em] md:text-6xl">Impossible brand worlds.</h2></div></Reveal><Reveal delay={0.18}><p className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white/86 md:text-7xl">Cinematic worlds for modern brands.</p></Reveal></div></section>;
}

function Pricing() {
  return <section id="pricing" className="bg-[#05050c] px-4 py-36 md:px-6 md:py-48"><SectionTitle kicker="Pricing" title="Premium campaign architecture" copy="Choose the campaign scale." /><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">{prices.map(([name, price, copy, features], i) => <Reveal delay={Math.min(i * 0.1, 0.24)} key={name}><div className={`glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8 ${i===2 ? 'border-zephyr-magenta/28 shadow-magenta' : ''}`}><p className="text-xs uppercase tracking-[0.3em] text-zephyr-cyan">{name}</p><h3 className="magenta-glow mt-6 text-4xl font-black">{price}</h3><p className="mt-6 max-w-sm text-base leading-7 text-white/58">{copy}</p><ul className="mt-8 space-y-3 text-sm text-white/72">{features.map(f => <li key={f} className="flex gap-3"><span className="text-zephyr-cyan" aria-hidden="true">✦</span><span>{f}</span></li>)}</ul></div></Reveal>)}</div></section>;
}

function Contact() {
  return <section id="contact" className="px-4 py-36 md:px-6 md:py-48"><SectionTitle kicker="Start a project" title="Make the brief cinematic" copy="Send the brief. We shape the world." /><Reveal><form className="glass mx-auto grid max-w-5xl gap-4 rounded-[1.6rem] p-5 md:grid-cols-2 md:gap-5 md:rounded-[2rem] md:p-10"><input name="name" aria-label="Name" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan" placeholder="Name" autoComplete="name" /><input name="contact" aria-label="Email or phone" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan" placeholder="Email / Phone" autoComplete="email" /><select name="budget" aria-label="Budget selection" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white/70 outline-none focus:border-zephyr-cyan"><option>Budget selection</option><option>₹15k–₹40k</option><option>₹50k–₹1L</option><option>₹1L+</option></select><select name="timeline" aria-label="Timeline" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white/70 outline-none focus:border-zephyr-cyan"><option>Timeline</option><option>1–2 weeks</option><option>2–4 weeks</option><option>Campaign retainer</option></select><textarea name="details" aria-label="Project details" className="min-h-40 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan md:col-span-2" placeholder="Project details, visual references, product category, story direction..." /><label className="flex cursor-pointer flex-col gap-2 rounded-2xl border border-dashed border-white/18 bg-black/30 px-5 py-5 text-white/55 transition hover:border-zephyr-magenta/55 hover:text-white sm:flex-row sm:items-center sm:justify-between md:col-span-2"><span>Upload references / product files</span><span className="text-xs uppercase tracking-[0.2em] text-zephyr-cyan">Optional</span><input name="references" type="file" className="hidden" aria-label="Upload references or product files" /></label><button type="button" aria-label="Submit inquiry" className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-zephyr-cyan hover:shadow-[0_0_22px_rgba(123,223,229,.16)] md:col-span-2">Submit Inquiry</button><p className="text-center text-xs text-white/42 md:col-span-2">Prototype form — connect email/CRM before public launch.</p></form></Reveal></section>;
}

function Footer() {
  return <footer className="border-t border-white/10 px-4 py-10 md:px-6"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center"><div className="flex items-center gap-3"><img src={logoSrc} alt="Zephyr AI Studio logo" className="h-12 w-12 rounded-full border border-white/10 object-cover shadow-[0_0_18px_rgba(216,111,189,.12)]" /><p className="uppercase tracking-[0.3em] text-white/70">Zephyr AI Studio</p></div><p>Built with Next.js, React, Tailwind CSS, Framer Motion, Lenis, Three.js and GSAP.</p><div className="flex gap-5"><a className="hover:text-zephyr-cyan" href="#contact">Instagram</a><a className="hover:text-zephyr-cyan" href="#contact">LinkedIn</a><a className="hover:text-zephyr-cyan" href="#contact">YouTube</a></div></div></footer>;
}
