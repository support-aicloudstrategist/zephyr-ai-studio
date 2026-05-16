'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import Particles from '@/components/Particles';
import SmoothScroll from '@/components/SmoothScroll';
import { Reveal } from '@/components/Reveal';
import { placeholderPortfolio, placeholderVideos } from '@/lib/placeholders';

const portfolio = placeholderPortfolio;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const logoSrc = `${basePath}/brand/zephyr-ai-studio-logo.jpg`;
const heroVideoSrc = `${basePath}/video/zephyr-hero.mp4`;
const showreelVideoSrc = `${basePath}/video/mixkit-fashion-studio-showreel.mp4`;
const showreelPosterSrc = `${basePath}/images/mixkit-fashion-studio-poster.jpg`;

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

    gsap.fromTo('.page-curtain', { yPercent: 0 }, { yPercent: -100, duration: 1.15, ease: 'power4.inOut', delay: 0.15 });
    gsap.to('.gsap-hero-glow', { scale: 1.18, opacity: 0.72, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.gsap-float', { y: -18, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.18 });

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 34;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      gsap.to('.gsap-parallax', { x, y, duration: 0.8, ease: 'power3.out' });
      gsap.to('.gsap-parallax-reverse', { x: -x * 0.5, y: -y * 0.5, duration: 1, ease: 'power3.out' });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <main className="cinema-noise min-h-screen overflow-hidden bg-zephyr-black text-white">
      <div className="page-curtain fixed inset-0 z-[90] bg-[radial-gradient(circle_at_50%_45%,rgba(0,245,255,.18),transparent_28%),#030306]" />
      <SmoothScroll />
      <Particles />
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
    <motion.header initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-10 md:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-4 py-3 shadow-[0_14px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl">
        <a href="#hero" aria-label="Zephyr AI Studio home" className="flex items-center gap-3">
          <img src={logoSrc} alt="Zephyr AI Studio logo" className="h-9 w-9 rounded-full border border-white/10 object-cover shadow-[0_0_24px_rgba(0,245,255,.24)] sm:h-11 sm:w-11" />
          <span className="hidden font-display text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white sm:inline sm:text-sm sm:tracking-[0.32em]">Zephyr <span className="text-zephyr-cyan">AI</span> Studio</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-xs uppercase tracking-[0.2em] text-white/65 lg:flex">
          {['Showreel', 'Portfolio', 'Services', 'Pricing', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-zephyr-cyan hover:drop-shadow-[0_0_14px_rgba(0,245,255,.8)]">{item}</a>)}
        </nav>
        <a href="#contact" className="rounded-full border border-zephyr-magenta/50 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white shadow-magenta transition hover:border-zephyr-cyan hover:text-zephyr-cyan sm:text-xs">Start</a>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-start overflow-hidden bg-black px-5 py-28 md:px-10">
      <video className="absolute inset-0 h-screen w-screen object-cover object-center opacity-88 saturate-150 contrast-110" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
      <div className="gsap-hero-glow absolute left-[28%] top-1/2 h-[54vmin] w-[54vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zephyr-cyan/12 blur-[90px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_38%,rgba(0,245,255,.12),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(255,43,214,.10),transparent_22%),linear-gradient(90deg,rgba(3,3,6,.82),rgba(3,3,6,.42)_36%,rgba(3,3,6,.10)_68%,rgba(3,3,6,.04)),linear-gradient(180deg,rgba(3,3,6,.04),rgba(3,3,6,.20)_52%,#030306_98%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zephyr-black via-zephyr-black/80 to-transparent" />
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, delay: .4 }} className="scanline absolute left-1/2 top-1/2 z-20 h-px w-[92vw] origin-left -translate-x-1/2" />
      <div className="relative z-30 ml-0 max-w-4xl text-left md:ml-[4vw]">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .45 }} className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-zephyr-cyan sm:text-xs sm:tracking-[0.48em]">Luxury AI Cinema House</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 38, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.2, delay: .7, ease: [0.22, 1, 0.36, 1] }} className="gsap-parallax text-glow font-display text-[clamp(2.65rem,10vw,7.8rem)] font-black uppercase leading-[0.82] tracking-[-0.09em]">
          Cinematic AI Advertising
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.05 }} className="mt-7 max-w-2xl font-accent text-base leading-7 text-white/78 md:text-xl">Futuristic Visual Storytelling for Modern Brands</motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: 1.25 }} className="mt-9 flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a href="#portfolio" className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-zephyr-cyan hover:shadow-neon">View Portfolio</a>
          <a href="#contact" className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:border-zephyr-magenta hover:text-zephyr-magenta hover:shadow-magenta">Start A Project</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.55 }} className="gsap-parallax-reverse mt-12 grid max-w-2xl grid-cols-3 gap-2 rounded-[1.4rem] border border-white/10 bg-black/18 p-2 text-left backdrop-blur-md sm:gap-3 sm:p-3">
          {['AI FILMS', 'LUXURY ADS', 'REELS'].map((item) => <div key={item} className="gsap-float rounded-2xl border border-white/8 bg-white/[.035] px-3 py-4 text-center text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs">{item}</div>)}
        </motion.div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return <section aria-label="Zephyr creative promise" className="relative border-y border-white/10 bg-black/45 px-4 py-6 backdrop-blur-xl md:px-6"><div className="mx-auto grid max-w-7xl gap-3 text-center md:grid-cols-4">{[['01','Cinematic first frame'], ['02','AI-native art direction'], ['03','Luxury product mood'], ['04','Launch-ready social cuts']].map(([num, label]) => <div key={label} className="rounded-full border border-white/10 bg-white/[.035] px-5 py-4"><span className="mr-3 text-zephyr-cyan">{num}</span><span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/70">{label}</span></div>)}</div></section>;
}

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <Reveal className="mx-auto mb-12 max-w-5xl text-center md:mb-14"><p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">{kicker}</p><h2 className="text-glow font-display text-[clamp(2.75rem,11vw,6.5rem)] font-black uppercase leading-[.88] tracking-[-0.075em]">{title}</h2>{copy && <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/62 md:text-lg">{copy}</p>}</Reveal>;
}

function Showreel() {
  return <section id="showreel" className="relative bg-zephyr-black px-4 py-24 md:px-6 md:py-36"><SectionTitle kicker="Showreel" title="Luxury trailer montage" copy="No empty frames — temporary Mixkit footage fills the cinematic preview until Zephyr originals are ready." /><Reveal><div className="mx-auto max-w-7xl overflow-hidden cinema-frame rounded-[1.6rem] border border-white/15 bg-white/5 p-2 shadow-neon sm:rounded-[2.4rem] sm:p-3"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(0,245,255,.24),transparent_30%),linear-gradient(135deg,#080816,#12051d_45%,#030306)] sm:rounded-[1.8rem] md:aspect-video"><img src={showreelPosterSrc} alt="Fashion studio showreel poster" className="absolute inset-0 h-full w-full object-cover opacity-80 saturate-150" /><video className="absolute inset-0 h-full w-full object-cover opacity-95 saturate-150 contrast-115" autoPlay muted loop playsInline preload="auto" poster={showreelPosterSrc} aria-hidden="true"><source src={showreelVideoSrc} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-tr from-black/62 via-black/8 to-zephyr-magenta/20" /><div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black/55 to-transparent" /><div className="absolute right-5 top-5 rounded-full border border-white/12 bg-black/35 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur-xl">Mixkit fabric placeholder</div><div className="absolute bottom-6 left-5 right-5 md:bottom-8 md:left-8"><p className="text-[0.65rem] uppercase tracking-[0.26em] text-zephyr-cyan sm:text-xs sm:tracking-[0.35em]">Zephyr Reel 001</p><h3 className="mt-2 max-w-4xl text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">Fashion. Product. Story. Motion.</h3><p className="mt-4 max-w-xl text-sm leading-6 text-white/62 md:text-base">Temporary Temporary Mixkit abstract fabric-motion video selected to suggest AI fashion visuals without models, cameras or traditional photoshoots.</p></div></div></div></Reveal></section>;
}

function Portfolio() {
  const [active, setActive] = useState<(typeof portfolio)[number] | null>(null);
  return <section id="portfolio" className="relative bg-gradient-to-b from-zephyr-black via-[#070713] to-zephyr-black px-4 py-24 md:px-6 md:py-28"><SectionTitle kicker="Portfolio" title="Fullscreen campaign worlds" copy="Tap any frame to open a cinematic preview." /><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">{portfolio.map((item, i) => <Reveal delay={i * .04} key={item.title}><motion.button type="button" onClick={() => setActive(item)} whileHover={{ y: -12, scale: 1.018 }} whileTap={{ scale: 0.98 }} className="group relative min-h-[390px] w-full overflow-hidden rounded-[1.55rem] border border-white/10 bg-radial-cinema p-0 text-left shadow-[inset_0_0_80px_rgba(255,255,255,.03)] outline-none md:min-h-[470px]"><img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-38 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-72 group-hover:grayscale-0" /><div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-75 transition duration-500 group-hover:opacity-95`} /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" /><div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl transition group-hover:bg-zephyr-cyan/25" /><div className="relative z-10 flex h-full min-h-[390px] flex-col justify-between p-6 md:min-h-[470px] md:p-7"><span className="text-6xl font-black text-white/16 md:text-7xl">{item.num}</span><div><h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-white transition group-hover:text-zephyr-cyan">{item.title}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-white/68">{item.copy}</p><span className="mt-7 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-zephyr-magenta">Fullscreen Preview →</span><span className="mt-2 block text-[0.58rem] uppercase tracking-[0.18em] text-white/34">Temporary {item.source}</span></div></div></motion.button></Reveal>)}</div><AnimatePresence>{active && <motion.div role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-4 backdrop-blur-xl" onClick={() => setActive(null)}><motion.div initial={{ scale: .92, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .94, y: 30 }} transition={{ type: 'spring', damping: 24, stiffness: 180 }} className="relative h-[86vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_0_120px_rgba(0,245,255,.20)]" onClick={(e) => e.stopPropagation()}><img src={active.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-75" /><div className={`absolute inset-0 bg-gradient-to-br ${active.gradient}`} /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /><button type="button" onClick={() => setActive(null)} className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur-xl hover:border-zephyr-cyan hover:text-zephyr-cyan">Close</button><div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10"><p className="text-sm uppercase tracking-[0.34em] text-zephyr-cyan">{active.num} / Cinematic Preview</p><h3 className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">{active.title}</h3><p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-xl">{active.copy}</p><p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/42">Temporary stock-style placeholder — ready to swap with original Zephyr AI assets.</p></div></motion.div></motion.div>}</AnimatePresence></section>;
}

function Services() {
  return <section id="services" className="px-4 py-24 md:px-6 md:py-28"><SectionTitle kicker="Services" title="Frames first. Words second." /><div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s, i) => <Reveal delay={i*.03} key={s}><motion.div whileHover={{ rotateX: 4, rotateY: -4, y: -8 }} className="glass min-h-44 rounded-[1.5rem] p-6 transition hover:border-zephyr-cyan/60 hover:shadow-neon md:min-h-52 md:rounded-[1.8rem] md:p-7"><div className="mb-8 h-10 w-10 rounded-full bg-gradient-to-br from-zephyr-cyan to-zephyr-magenta shadow-neon" /><h3 className="text-lg font-bold uppercase tracking-[-0.03em]">{s}</h3></motion.div></Reveal>)}</div></section>;
}

function Method() {
  const steps = [
    ['Discover', 'Product, audience, visual language and campaign ambition are translated into a cinematic brief.'],
    ['Design', 'Moodboards, prompts, composition rules and motion references lock the premium world before production.'],
    ['Produce', 'AI visuals, video generation, editing direction and platform-specific cutdowns are built as one campaign system.'],
  ];
  return <section className="relative overflow-hidden bg-[#04040a] px-4 py-24 md:px-6 md:py-28"><div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,245,255,.11),transparent_34%),radial-gradient(circle_at_78%_40%,rgba(255,43,214,.16),transparent_28%)]" /><SectionTitle kicker="Process" title="From brief to brand world" copy="A repeatable creative pipeline for premium AI ads: strategy, cinematic systems, then launch assets." /><div className="relative mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">{steps.map(([title, copy], i) => <Reveal delay={i*.06} key={title}><div className="glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8"><p className="text-6xl font-black text-white/10">0{i+1}</p><h3 className="mt-8 text-3xl font-black uppercase tracking-[-0.05em] text-white">{title}</h3><p className="mt-5 text-sm leading-7 text-white/64 md:text-base">{copy}</p></div></Reveal>)}</div></section>;
}

function About() {
  return <section id="about" className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,43,214,.16),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(0,245,255,.18),transparent_28%)]" /><div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center"><Reveal><div className="glass rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8"><p className="text-xs uppercase tracking-[0.38em] text-zephyr-cyan">About</p><h2 className="mt-6 text-4xl font-black uppercase leading-[.9] tracking-[-0.06em] md:text-6xl">A studio for impossible brand worlds.</h2></div></Reveal><Reveal delay={0.12}><p className="text-2xl leading-relaxed text-white/72 md:text-4xl">A futuristic cinematic creative studio combining storytelling, branding, motion design, and AI-powered visual production.</p></Reveal></div></section>;
}

function Pricing() {
  return <section id="pricing" className="bg-[#05050c] px-4 py-24 md:px-6 md:py-28"><SectionTitle kicker="Pricing" title="Premium campaign architecture" copy="Three ways to turn a brief into cinematic attention." /><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">{prices.map(([name, price, copy, features], i) => <Reveal delay={i*.06} key={name}><div className={`glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8 ${i===2 ? 'border-zephyr-magenta/50 shadow-magenta' : ''}`}><p className="text-xs uppercase tracking-[0.3em] text-zephyr-cyan">{name}</p><h3 className="magenta-glow mt-6 text-4xl font-black">{price}</h3><p className="mt-5 text-sm leading-7 text-white/64 md:text-base">{copy}</p><ul className="mt-8 space-y-3 text-sm text-white/72">{features.map(f => <li key={f} className="flex gap-3"><span className="text-zephyr-cyan" aria-hidden="true">✦</span><span>{f}</span></li>)}</ul></div></Reveal>)}</div></section>;
}

function Contact() {
  return <section id="contact" className="px-4 py-24 md:px-6 md:py-28"><SectionTitle kicker="Start a project" title="Make the brief cinematic" copy="Product. Mood. Timeline. Ambition. We turn it into a world." /><Reveal><form className="glass mx-auto grid max-w-5xl gap-4 rounded-[1.6rem] p-5 md:grid-cols-2 md:gap-5 md:rounded-[2rem] md:p-10"><input name="name" aria-label="Name" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan" placeholder="Name" autoComplete="name" /><input name="contact" aria-label="Email or phone" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan" placeholder="Email / Phone" autoComplete="email" /><select name="budget" aria-label="Budget selection" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white/70 outline-none focus:border-zephyr-cyan"><option>Budget selection</option><option>₹15k–₹40k</option><option>₹50k–₹1L</option><option>₹1L+</option></select><select name="timeline" aria-label="Timeline" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white/70 outline-none focus:border-zephyr-cyan"><option>Timeline</option><option>1–2 weeks</option><option>2–4 weeks</option><option>Campaign retainer</option></select><textarea name="details" aria-label="Project details" className="min-h-40 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan md:col-span-2" placeholder="Project details, visual references, product category, story direction..." /><label className="flex cursor-pointer flex-col gap-2 rounded-2xl border border-dashed border-white/18 bg-black/30 px-5 py-5 text-white/55 transition hover:border-zephyr-magenta hover:text-white sm:flex-row sm:items-center sm:justify-between md:col-span-2"><span>Upload references / product files</span><span className="text-xs uppercase tracking-[0.2em] text-zephyr-cyan">Optional</span><input name="references" type="file" className="hidden" aria-label="Upload references or product files" /></label><button type="button" aria-label="Submit inquiry" className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-zephyr-cyan hover:shadow-neon md:col-span-2">Submit Inquiry</button><p className="text-center text-xs text-white/42 md:col-span-2">Prototype form — connect email/CRM before public launch.</p></form></Reveal></section>;
}

function Footer() {
  return <footer className="border-t border-white/10 px-4 py-10 md:px-6"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center"><div className="flex items-center gap-3"><img src={logoSrc} alt="Zephyr AI Studio logo" className="h-12 w-12 rounded-full border border-white/10 object-cover shadow-[0_0_28px_rgba(255,43,214,.22)]" /><p className="uppercase tracking-[0.3em] text-white/70">Zephyr AI Studio</p></div><p>Built with Next.js, React, Tailwind CSS, Framer Motion, Lenis, Three.js and GSAP.</p><div className="flex gap-5"><a className="hover:text-zephyr-cyan" href="#contact">Instagram</a><a className="hover:text-zephyr-cyan" href="#contact">LinkedIn</a><a className="hover:text-zephyr-cyan" href="#contact">YouTube</a></div></div></footer>;
}
