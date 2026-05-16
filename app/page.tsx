'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ['Starter Campaign', '₹15k – ₹40k', 'A focused cinematic asset pack for founders, creators and small launches.', ['1 hero concept', '2–4 premium visuals', '1 short reel direction', 'Caption + launch copy']],
  ['Growth Campaign', '₹50k – ₹1L', 'Multi-format campaign system for brands that need visual consistency and momentum.', ['Campaign concept', 'Multiple reels/edits', 'Social creative set', 'Brand visual direction']],
  ['Premium Cinematic Campaign', '₹1L+', 'High-end cinematic storytelling for luxury products, launches and premium positioning.', ['Full campaign world', 'Cinematic ad films', 'Motion design pack', 'Founder/brand story system']],
] as const;

export default function Home() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.to('.gsap-hero-glow', {
      scale: 1.045,
      opacity: 0.26,
      duration: 8.5,
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

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-start overflow-hidden bg-black px-5 py-28 md:px-10">
      <video className="absolute inset-0 h-screen w-screen object-cover object-center opacity-84 saturate-95 contrast-105" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
      <div className="gsap-hero-glow absolute left-[28%] top-1/2 h-[54vmin] w-[54vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zephyr-cyan/7 blur-[70px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_38%,rgba(123,223,229,.07),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(216,111,189,.06),transparent_22%),linear-gradient(90deg,rgba(3,3,6,.82),rgba(3,3,6,.42)_36%,rgba(3,3,6,.10)_68%,rgba(3,3,6,.04)),linear-gradient(180deg,rgba(3,3,6,.04),rgba(3,3,6,.20)_52%,#030306_98%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zephyr-black via-zephyr-black/80 to-transparent" />
      <div className="relative z-30 ml-0 max-w-4xl text-left md:ml-[4vw]">
        <p className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-zephyr-cyan sm:text-xs sm:tracking-[0.48em]">Luxury AI Cinema House</p>
        <h1 className="text-glow font-display text-[clamp(2.45rem,8.5vw,6.8rem)] font-black uppercase leading-[0.82] tracking-[-0.09em]">
          Cinematic AI Advertising
        </h1>
        <p className="mt-7 max-w-2xl font-accent text-base leading-7 text-white/84 md:text-xl">Futuristic Visual Storytelling for Modern Brands</p>
        <div className="mt-9 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a href="#portfolio" className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-zephyr-cyan hover:shadow-[0_0_22px_rgba(123,223,229,.16)]">View Portfolio</a>
          <a href="#contact" className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition hover:border-zephyr-magenta hover:text-zephyr-magenta hover:shadow-magenta">Start A Project</a>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return <section aria-label="Zephyr creative promise" className="relative border-y border-white/10 bg-black/30 px-4 py-9 md:py-10 md:px-6"><div className="mx-auto grid max-w-7xl gap-3 text-center md:grid-cols-4">{[['01','Cinematic first frame'], ['02','AI-native art direction'], ['03','Luxury product mood'], ['04','Launch-ready social cuts']].map(([num, label]) => <div key={label} className="rounded-full border border-white/8 bg-white/[.025] px-5 py-4"><span className="mr-3 text-zephyr-cyan">{num}</span><span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/70">{label}</span></div>)}</div></section>;
}

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <Reveal className="mx-auto mb-12 max-w-5xl text-center md:mb-14"><p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">{kicker}</p><h2 className="text-glow font-display text-[clamp(2.75rem,11vw,6.5rem)] font-black uppercase leading-[.88] tracking-[-0.075em]">{title}</h2>{copy && <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/62 md:text-lg">{copy}</p>}</Reveal>;
}

function Showreel() {
  return <section id="showreel" className="relative bg-zephyr-black px-4 py-28 md:px-6 md:py-44"><SectionTitle kicker="Showreel" title="Luxury trailer montage" copy="No empty frames — temporary Mixkit footage fills the cinematic preview until Zephyr originals are ready." /><Reveal><div className="mx-auto max-w-7xl overflow-hidden cinema-frame rounded-[1.6rem] border border-white/12 bg-white/[.035] p-2 sm:rounded-[2.4rem] sm:p-3"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-[linear-gradient(135deg,#07070d,#100914_46%,#030306)] sm:rounded-[1.8rem] md:aspect-video"><img src={showreelPosterSrc} alt="Fashion studio showreel poster" className="absolute inset-0 h-full w-full object-cover opacity-76 saturate-110" /><video className="absolute inset-0 h-full w-full object-cover opacity-92 saturate-110 contrast-105" autoPlay muted loop playsInline preload="auto" poster={showreelPosterSrc} aria-hidden="true"><source src={showreelVideoSrc} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-tr from-black/54 via-black/10 to-black/16" /><div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black/55 to-transparent" /><div className="absolute right-5 top-5 rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">Mixkit fashion placeholder</div><div className="absolute bottom-6 left-5 right-5 md:bottom-8 md:left-8"><p className="text-[0.65rem] uppercase tracking-[0.26em] text-zephyr-cyan sm:text-xs sm:tracking-[0.35em]">Zephyr Reel 001</p><h3 className="mt-2 max-w-4xl text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">Fashion. Product. Story. Motion.</h3><p className="mt-4 max-w-xl text-sm leading-6 text-white/62 md:text-base">Temporary Mixkit fashion/luxury visual selected by Anushka until original Zephyr AI-generated assets are ready.</p></div></div></div></Reveal></section>;
}

function Portfolio() {
  const [active, setActive] = useState<(typeof portfolio)[number] | null>(null);
  return (
    <section id="portfolio" className="relative bg-gradient-to-b from-zephyr-black via-[#06060d] to-zephyr-black px-4 py-32 md:px-6 md:py-44">
      <SectionTitle kicker="Portfolio" title="Campaign worlds, not gallery tiles" copy="Large-format previews designed to feel like premium launch films." />
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
                  <h3 className="mt-4 max-w-4xl font-display text-5xl font-black uppercase leading-[0.86] tracking-[-0.07em] text-white md:text-7xl lg:text-8xl">{item.title}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 md:text-base">{item.copy}</p>
                  <span className="mt-8 inline-flex rounded-full border border-white/18 bg-white/[.035] px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/78 backdrop-blur-sm">Open cinematic view</span>
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
                <p className="mt-5 text-[0.65rem] uppercase tracking-[0.25em] text-white/42">Temporary stock-style placeholder — ready to swap with original Zephyr AI assets.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
function Services() {
  return <section id="services" className="px-4 py-28 md:px-6 md:py-36"><SectionTitle kicker="Services" title="Frames first. Words second." /><div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s, i) => <Reveal delay={Math.min(i * 0.07, 0.24)} key={s}><motion.div whileHover={{ y: -3 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="glass min-h-44 rounded-[1.5rem] p-6 transition hover:border-zephyr-cyan/25 hover:shadow-[0_18px_60px_rgba(0,0,0,.22)] md:min-h-52 md:rounded-[1.8rem] md:p-7"><div className="mb-8 h-10 w-10 rounded-full bg-gradient-to-br from-zephyr-cyan/55 to-zephyr-magenta/45 shadow-[0_0_18px_rgba(123,223,229,.10)]" /><h3 className="text-lg font-bold uppercase tracking-[-0.03em]">{s}</h3></motion.div></Reveal>)}</div></section>;
}

function Method() {
  const steps = [
    ['Discover', 'Product, audience, visual language and campaign ambition are translated into a cinematic brief.'],
    ['Design', 'Moodboards, prompts, composition rules and motion references lock the premium world before production.'],
    ['Produce', 'AI visuals, video generation, editing direction and platform-specific cutdowns are built as one campaign system.'],
  ];
  return <section className="relative overflow-hidden bg-[#04040a] px-4 py-28 md:px-6 md:py-36"><div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(123,223,229,.055),transparent_34%),radial-gradient(circle_at_78%_40%,rgba(216,111,189,.07),transparent_28%)]" /><SectionTitle kicker="Process" title="From brief to brand world" copy="A repeatable creative pipeline for premium AI ads: strategy, cinematic systems, then launch assets." /><div className="relative mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">{steps.map(([title, copy], i) => <Reveal delay={Math.min(i * 0.1, 0.24)} key={title}><div className="glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8"><p className="text-6xl font-black text-white/10">0{i+1}</p><h3 className="mt-8 text-3xl font-black uppercase tracking-[-0.05em] text-white">{title}</h3><p className="mt-5 text-sm leading-7 text-white/64 md:text-base">{copy}</p></div></Reveal>)}</div></section>;
}

function About() {
  return <section id="about" className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(216,111,189,.07),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(123,223,229,.07),transparent_28%)]" /><div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center"><Reveal><div className="glass rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8"><p className="text-xs uppercase tracking-[0.38em] text-zephyr-cyan">About</p><h2 className="mt-6 text-4xl font-black uppercase leading-[.9] tracking-[-0.06em] md:text-6xl">A studio for impossible brand worlds.</h2></div></Reveal><Reveal delay={0.18}><p className="text-2xl leading-relaxed text-white/72 md:text-4xl">A futuristic cinematic creative studio combining storytelling, branding, motion design, and AI-powered visual production.</p></Reveal></div></section>;
}

function Pricing() {
  return <section id="pricing" className="bg-[#05050c] px-4 py-28 md:px-6 md:py-36"><SectionTitle kicker="Pricing" title="Premium campaign architecture" copy="Three ways to turn a brief into cinematic attention." /><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">{prices.map(([name, price, copy, features], i) => <Reveal delay={Math.min(i * 0.1, 0.24)} key={name}><div className={`glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8 ${i===2 ? 'border-zephyr-magenta/28 shadow-magenta' : ''}`}><p className="text-xs uppercase tracking-[0.3em] text-zephyr-cyan">{name}</p><h3 className="magenta-glow mt-6 text-4xl font-black">{price}</h3><p className="mt-5 text-sm leading-7 text-white/64 md:text-base">{copy}</p><ul className="mt-8 space-y-3 text-sm text-white/72">{features.map(f => <li key={f} className="flex gap-3"><span className="text-zephyr-cyan" aria-hidden="true">✦</span><span>{f}</span></li>)}</ul></div></Reveal>)}</div></section>;
}

function Contact() {
  return <section id="contact" className="px-4 py-28 md:px-6 md:py-36"><SectionTitle kicker="Start a project" title="Make the brief cinematic" copy="Product. Mood. Timeline. Ambition. We turn it into a world." /><Reveal><form className="glass mx-auto grid max-w-5xl gap-4 rounded-[1.6rem] p-5 md:grid-cols-2 md:gap-5 md:rounded-[2rem] md:p-10"><input name="name" aria-label="Name" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan" placeholder="Name" autoComplete="name" /><input name="contact" aria-label="Email or phone" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan" placeholder="Email / Phone" autoComplete="email" /><select name="budget" aria-label="Budget selection" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white/70 outline-none focus:border-zephyr-cyan"><option>Budget selection</option><option>₹15k–₹40k</option><option>₹50k–₹1L</option><option>₹1L+</option></select><select name="timeline" aria-label="Timeline" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white/70 outline-none focus:border-zephyr-cyan"><option>Timeline</option><option>1–2 weeks</option><option>2–4 weeks</option><option>Campaign retainer</option></select><textarea name="details" aria-label="Project details" className="min-h-40 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan md:col-span-2" placeholder="Project details, visual references, product category, story direction..." /><label className="flex cursor-pointer flex-col gap-2 rounded-2xl border border-dashed border-white/18 bg-black/30 px-5 py-5 text-white/55 transition hover:border-zephyr-magenta/55 hover:text-white sm:flex-row sm:items-center sm:justify-between md:col-span-2"><span>Upload references / product files</span><span className="text-xs uppercase tracking-[0.2em] text-zephyr-cyan">Optional</span><input name="references" type="file" className="hidden" aria-label="Upload references or product files" /></label><button type="button" aria-label="Submit inquiry" className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-zephyr-cyan hover:shadow-[0_0_22px_rgba(123,223,229,.16)] md:col-span-2">Submit Inquiry</button><p className="text-center text-xs text-white/42 md:col-span-2">Prototype form — connect email/CRM before public launch.</p></form></Reveal></section>;
}

function Footer() {
  return <footer className="border-t border-white/10 px-4 py-10 md:px-6"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center"><div className="flex items-center gap-3"><img src={logoSrc} alt="Zephyr AI Studio logo" className="h-12 w-12 rounded-full border border-white/10 object-cover shadow-[0_0_18px_rgba(216,111,189,.12)]" /><p className="uppercase tracking-[0.3em] text-white/70">Zephyr AI Studio</p></div><p>Built with Next.js, React, Tailwind CSS, Framer Motion, Lenis, Three.js and GSAP.</p><div className="flex gap-5"><a className="hover:text-zephyr-cyan" href="#contact">Instagram</a><a className="hover:text-zephyr-cyan" href="#contact">LinkedIn</a><a className="hover:text-zephyr-cyan" href="#contact">YouTube</a></div></div></footer>;
}
