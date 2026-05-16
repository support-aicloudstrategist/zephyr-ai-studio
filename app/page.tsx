'use client';

import { motion } from 'framer-motion';
import Particles from '@/components/Particles';
import SmoothScroll from '@/components/SmoothScroll';
import { Reveal } from '@/components/Reveal';

const portfolio = [
  ['AI Product Films', 'Hero products staged like luxury cinema stills.', '01', 'from-cyan-400/25 via-transparent to-fuchsia-500/20'],
  ['Fashion Worlds', 'Editorial silhouettes, texture, attitude and motion.', '02', 'from-fuchsia-500/25 via-transparent to-violet-500/20'],
  ['Vertical Reels', 'Trailer-cut attention systems for launches and drops.', '03', 'from-violet-500/25 via-transparent to-cyan-400/20'],
  ['Entertainment Teasers', 'Impossible scenes, posters and narrative energy.', '04', 'from-amber-200/18 via-transparent to-fuchsia-500/20'],
  ['Launch Creatives', 'High-impact social assets with premium consistency.', '05', 'from-cyan-400/20 via-transparent to-white/10'],
  ['Luxury Brand Visuals', 'Polished visual identity for expensive positioning.', '06', 'from-fuchsia-500/18 via-transparent to-cyan-400/20'],
];

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
  return (
    <main className="cinema-noise min-h-screen overflow-hidden bg-zephyr-black text-white">
      <SmoothScroll />
      <Particles />
      <Navigation />
      <Hero />
      <Showreel />
      <Portfolio />
      <Services />
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
        <a href="#hero" aria-label="Zephyr AI Studio home" className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white sm:text-sm sm:tracking-[0.32em]">Zephyr <span className="text-zephyr-cyan">AI</span> Studio</a>
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
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 pt-24">
      <video className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45 md:opacity-55" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="https://cdn.coverr.co/videos/coverr-lights-in-the-dark-6772/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,245,255,.22),transparent_27%),radial-gradient(circle_at_78%_22%,rgba(255,43,214,.18),transparent_24%),linear-gradient(180deg,rgba(3,3,6,.2),#030306_96%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zephyr-black via-zephyr-black/80 to-transparent" />
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, delay: .4 }} className="scanline absolute left-1/2 top-1/2 z-20 h-px w-[92vw] origin-left -translate-x-1/2" />
      <div className="relative z-30 mx-auto max-w-7xl text-center">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .45 }} className="mb-5 text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-zephyr-cyan sm:text-xs sm:tracking-[0.55em]">Luxury AI Cinema House</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 38, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.2, delay: .7, ease: [0.22, 1, 0.36, 1] }} className="text-glow font-display text-[clamp(3.35rem,18vw,10.5rem)] font-black uppercase leading-[0.84] tracking-[-0.09em]">
          AI-Native<br /><span className="bg-gradient-to-r from-zephyr-cyan via-white to-zephyr-magenta bg-clip-text text-transparent">Creative Studio</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.05 }} className="mx-auto mt-7 max-w-3xl font-accent text-base leading-7 text-white/72 md:text-2xl">Cinematic AI advertising, futuristic visual storytelling and premium campaign worlds.</motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: 1.25 }} className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a href="#portfolio" className="rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-zephyr-cyan hover:shadow-neon">View Portfolio</a>
          <a href="#contact" className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:border-zephyr-magenta hover:text-zephyr-magenta hover:shadow-magenta">Start A Project</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.55 }} className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-2 rounded-[1.4rem] border border-white/10 bg-black/25 p-2 text-left backdrop-blur-xl sm:gap-3 sm:p-3">
          {['AI FILMS', 'LUXURY ADS', 'REELS'].map((item) => <div key={item} className="rounded-2xl border border-white/8 bg-white/[.035] px-3 py-4 text-center text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs">{item}</div>)}
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <Reveal className="mx-auto mb-12 max-w-5xl text-center md:mb-14"><p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">{kicker}</p><h2 className="text-glow font-display text-[clamp(2.75rem,11vw,6.5rem)] font-black uppercase leading-[.88] tracking-[-0.075em]">{title}</h2>{copy && <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/62 md:text-lg">{copy}</p>}</Reveal>;
}

function Showreel() {
  return <section id="showreel" className="relative bg-zephyr-black px-4 py-24 md:px-6 md:py-36"><SectionTitle kicker="Showreel" title="A moving moodboard of impossible visuals" copy="Fashion. Product. Story. Motion. Built like a trailer." /><Reveal><div className="mx-auto max-w-7xl overflow-hidden cinema-frame rounded-[1.6rem] border border-white/15 bg-white/5 p-2 shadow-neon sm:rounded-[2.4rem] sm:p-3"><div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] sm:rounded-[1.8rem] md:aspect-video"><video className="h-full w-full object-cover opacity-80" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="https://cdn.coverr.co/videos/coverr-abstract-neon-lights-5585/1080p.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-zephyr-magenta/25" /><div className="absolute bottom-6 left-5 right-5 md:bottom-8 md:left-8"><p className="text-[0.65rem] uppercase tracking-[0.26em] text-zephyr-cyan sm:text-xs sm:tracking-[0.35em]">Zephyr Reel 001</p><h3 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.05em] md:text-5xl">Fashion. Product. Story. Motion.</h3></div></div></div></Reveal></section>;
}

function Portfolio() {
  return <section id="portfolio" className="relative bg-gradient-to-b from-zephyr-black via-[#070713] to-zephyr-black px-4 py-24 md:px-6 md:py-28"><SectionTitle kicker="Portfolio" title="Spec worlds for premium brands" copy="Six visual worlds. Minimal copy. Maximum atmosphere." /><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">{portfolio.map(([title, copy, num, gradient], i) => <Reveal delay={i * .04} key={title}><motion.article whileHover={{ y: -10, scale: 1.015 }} className="group relative min-h-[360px] overflow-hidden rounded-[1.55rem] border border-white/10 bg-radial-cinema p-6 shadow-[inset_0_0_80px_rgba(255,255,255,.03)] md:min-h-[430px] md:p-7"><div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-55 transition duration-500 group-hover:opacity-95`} /><div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl" /><div className="relative z-10 flex h-full flex-col justify-between"><span className="text-6xl font-black text-white/10 md:text-7xl">{num}</span><div><h3 className="text-2xl font-black uppercase tracking-[-0.04em] text-white transition group-hover:text-zephyr-cyan">{title}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-white/60">{copy}</p><span className="mt-7 inline-flex text-xs font-bold uppercase tracking-[0.22em] text-zephyr-magenta">Cinematic Preview →</span></div></div></motion.article></Reveal>)}</div></section>;
}

function Services() {
  return <section id="services" className="px-4 py-24 md:px-6 md:py-28"><SectionTitle kicker="Services" title="Built for brands that need to look expensive" /><div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s, i) => <Reveal delay={i*.03} key={s}><motion.div whileHover={{ rotateX: 4, rotateY: -4, y: -8 }} className="glass min-h-44 rounded-[1.5rem] p-6 transition hover:border-zephyr-cyan/60 hover:shadow-neon md:min-h-52 md:rounded-[1.8rem] md:p-7"><div className="mb-8 h-10 w-10 rounded-full bg-gradient-to-br from-zephyr-cyan to-zephyr-magenta shadow-neon" /><h3 className="text-lg font-bold uppercase tracking-[-0.03em]">{s}</h3></motion.div></Reveal>)}</div></section>;
}

function About() {
  return <section id="about" className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,43,214,.16),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(0,245,255,.18),transparent_28%)]" /><div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center"><Reveal><div className="glass rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8"><p className="text-xs uppercase tracking-[0.38em] text-zephyr-cyan">About</p><h2 className="mt-6 text-4xl font-black uppercase leading-[.9] tracking-[-0.06em] md:text-6xl">A studio for impossible brand worlds.</h2></div></Reveal><Reveal delay={0.12}><p className="text-2xl leading-relaxed text-white/72 md:text-4xl">We blend storytelling, branding, motion design and AI craft into visuals that feel premium before a word is read.</p></Reveal></div></section>;
}

function Pricing() {
  return <section id="pricing" className="bg-[#05050c] px-4 py-24 md:px-6 md:py-28"><SectionTitle kicker="Pricing" title="Premium campaign architecture" copy="Three ways to turn a brief into cinematic attention." /><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">{prices.map(([name, price, copy, features], i) => <Reveal delay={i*.06} key={name}><div className={`glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8 ${i===2 ? 'border-zephyr-magenta/50 shadow-magenta' : ''}`}><p className="text-xs uppercase tracking-[0.3em] text-zephyr-cyan">{name}</p><h3 className="magenta-glow mt-6 text-4xl font-black">{price}</h3><p className="mt-5 text-sm leading-7 text-white/64 md:text-base">{copy}</p><ul className="mt-8 space-y-3 text-sm text-white/72">{features.map(f => <li key={f} className="flex gap-3"><span className="text-zephyr-cyan" aria-hidden="true">✦</span><span>{f}</span></li>)}</ul></div></Reveal>)}</div></section>;
}

function Contact() {
  return <section id="contact" className="px-4 py-24 md:px-6 md:py-28"><SectionTitle kicker="Start a project" title="Make the brief cinematic" copy="Product. Mood. Timeline. Ambition. We turn it into a world." /><Reveal><form className="glass mx-auto grid max-w-5xl gap-4 rounded-[1.6rem] p-5 md:grid-cols-2 md:gap-5 md:rounded-[2rem] md:p-10"><input name="name" aria-label="Name" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan" placeholder="Name" autoComplete="name" /><input name="contact" aria-label="Email or phone" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan" placeholder="Email / Phone" autoComplete="email" /><select name="budget" aria-label="Budget selection" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white/70 outline-none focus:border-zephyr-cyan"><option>Budget selection</option><option>₹15k–₹40k</option><option>₹50k–₹1L</option><option>₹1L+</option></select><select name="timeline" aria-label="Timeline" className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white/70 outline-none focus:border-zephyr-cyan"><option>Timeline</option><option>1–2 weeks</option><option>2–4 weeks</option><option>Campaign retainer</option></select><textarea name="details" aria-label="Project details" className="min-h-40 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition placeholder:text-white/35 focus:border-zephyr-cyan md:col-span-2" placeholder="Project details, visual references, product category, story direction..." /><label className="flex cursor-pointer flex-col gap-2 rounded-2xl border border-dashed border-white/18 bg-black/30 px-5 py-5 text-white/55 transition hover:border-zephyr-magenta hover:text-white sm:flex-row sm:items-center sm:justify-between md:col-span-2"><span>Upload references / product files</span><span className="text-xs uppercase tracking-[0.2em] text-zephyr-cyan">Optional</span><input name="references" type="file" className="hidden" aria-label="Upload references or product files" /></label><button type="button" aria-label="Submit inquiry" className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-zephyr-cyan hover:shadow-neon md:col-span-2">Submit Inquiry</button><p className="text-center text-xs text-white/42 md:col-span-2">Prototype form — connect email/CRM before public launch.</p></form></Reveal></section>;
}

function Footer() {
  return <footer className="border-t border-white/10 px-4 py-10 md:px-6"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center"><p className="uppercase tracking-[0.3em]">Zephyr AI Studio</p><p>AI-native cinematic advertising & futuristic visual storytelling.</p><div className="flex gap-5"><a className="hover:text-zephyr-cyan" href="#contact">Instagram</a><a className="hover:text-zephyr-cyan" href="#contact">LinkedIn</a><a className="hover:text-zephyr-cyan" href="#contact">YouTube</a></div></div></footer>;
}
