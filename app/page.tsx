import { type ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { Navigation } from '@/components/Navigation';
import { PortfolioCarousel } from '@/components/PortfolioCarousel';
import { ShowreelPreview } from '@/components/ShowreelPreview';
import { basePath } from '@/lib/siteLinks';
const logoSrc = `${basePath}/brand/zephyr-ai-studio-logo.jpg`;
const heroVideoSrc = `${basePath}/video/zephyr-hero-mixkit-44541.mp4`;
const heroVideoWebmSrc = `${basePath}/video/zephyr-hero-mixkit-44541.webm`;
const heroPosterSrc = `${basePath}/images/video-posters/zephyr-hero-mixkit-44541.jpg`;
const showreelPosterSrc = `${basePath}/images/cinematic-fashion-campaign-preview.jpg`;
const showreelVideoSrc = `${basePath}/video/cinematic-fashion-campaign-preview.mp4`;
const showreelVideoWebmSrc = `${basePath}/video/cinematic-fashion-campaign-preview.webm`;
const whatsappUrl = 'https://wa.me/918796302608?text=Hi%20Zephyr%20AI%20Studio%2C%20I%20want%20premium%20AI%20ads%20for%20my%20brand.';
const emailUrl = 'mailto:support@aicloudstrategist.com?subject=Zephyr%20AI%20Studio%20Campaign%20Brief';
const instagramUrl = 'https://www.instagram.com/aicloudstrategist/';

const services = [
  {
    title: 'AI Product Commercials',
    copy: 'Cinematic product ads and launch visuals designed to make your product look premium.',
    bestFor: 'Ecommerce products',
  },
  {
    title: 'Fashion & Model Campaigns',
    copy: 'AI-generated fashion models, editorial visuals, and campaign stories for modern brands.',
    bestFor: 'Fashion boutiques',
  },
  {
    title: 'Instagram Reels & Shorts',
    copy: 'Short-form cinematic videos for Instagram, YouTube Shorts, ads, and product promotions.',
    bestFor: 'Instagram launches',
  },
  {
    title: 'Brand Launch Visuals',
    copy: 'Premium campaign visuals for new products, offers, events, and brand launches.',
    bestFor: 'Skincare / jewelry',
  },
  {
    title: 'Cinematic Story Videos',
    copy: 'Emotion-led storytelling videos for founders, creators, and premium businesses.',
    bestFor: 'Founders / creators',
  },
] as const;

const prices = [
  {
    name: 'Starter Visual Pack',
    price: '₹15K–₹40K',
    bestFor: 'Small brands launching one product or campaign.',
    includes: ['1 Bespoke Creative Concept & Moodboard', '2–4 premium AI visuals', '1 short reel concept', 'Captions + platform-ready formats', 'Revision support included'],
    cta: 'Start Starter Pack',
    message: 'I want Starter Visual Pack for my product launch.',
    recommended: false,
  },
  {
    name: 'Growth Campaign',
    price: '₹50K–₹1L',
    bestFor: 'Brands that need a complete social launch campaign.',
    includes: ['Bespoke campaign concept & moodboard', '5–10 premium visuals', '2–3 reels or shorts', 'Captions + platform-ready formats', 'Music/sound design if scoped'],
    cta: 'Plan Growth Campaign',
    message: 'I want Growth Campaign for Instagram/social launch.',
    recommended: true,
  },
  {
    name: 'Premium Cinematic Campaign',
    price: '₹1L+',
    bestFor: 'Fashion, jewelry, skincare, luxury products, and founder-led brands.',
    includes: ['Full campaign world & moodboard', 'Cinematic ad film direction', 'Multiple reels and cutdowns', 'Hero visuals + captions', 'Sound design / AI voiceover if scoped'],
    cta: 'Discuss Premium Campaign',
    message: 'I want Premium Cinematic Campaign for my brand.',
    recommended: false,
  },
] as const;

const faqs = [
  {
    question: 'Do I need to ship my physical products?',
    answer: 'Not always. For many campaigns, clear product photos, videos, packaging images, and brand references are enough. If a physical shoot is needed later, we will tell you clearly.',
  },
  {
    question: 'Will my product shape, logo, or packaging stay accurate?',
    answer: 'Yes. We use precise masking and controlled editing to keep your actual product, logo, packaging, and shape accurate while transforming the environment around it.',
  },
  {
    question: 'Are AI-generated assets safe for paid ads?',
    answer: 'We create assets for commercial brand use and deliver them for social media, Meta ads, YouTube, websites, and digital campaigns. Final platform approval depends on each ad platform’s policy and the product category.',
  },
  {
    question: 'What is the turnaround time?',
    answer: 'Starter campaigns usually take 5–10 days. Larger campaigns depend on the number of visuals, video duration, revisions, and creative complexity.',
  },
  {
    question: 'What do I need to provide?',
    answer: 'Share your product photos, logo, brand colors, references, campaign goal, target audience, and preferred format such as reel, ad, launch visual, or product film.',
  },
  {
    question: 'Do you include music, sound design, or voiceovers?',
    answer: 'Yes, selected packages can include music, sound design, captions, and AI voiceover depending on the project scope.',
  },
] as const;

const beforeAfterExamples = [
  {
    title: 'Skincare product',
    before: `${basePath}/images/before-after/skincare-before.webp`,
    after: `${basePath}/images/before-after/skincare-after.webp`,
    caption: 'A plain product reference becomes a moody beauty launch visual with premium light, depth, and campaign atmosphere.',
  },
  {
    title: 'Jewellery product',
    before: `${basePath}/images/before-after/jewellery-before.webp`,
    after: `${basePath}/images/before-after/jewellery-after.webp`,
    caption: 'Simple catalogue jewellery is elevated into a cinematic hero visual built for launches, ads, and social storytelling.',
  },
  {
    title: 'Food or cafe product',
    before: `${basePath}/images/before-after/cafe-before.webp`,
    after: `${basePath}/images/before-after/cafe-after.webp`,
    caption: 'Basic cafe references gain warmth, mood, and visual appetite for premium reels, offers, and campaign posts.',
  },
] as const;

export default function Home() {
  return (
    <main className="cinema-noise min-h-screen overflow-hidden bg-zephyr-black pb-28 text-white lg:pb-0">
      <Navigation />
      <Hero />
      <ProofStrip />
      <Showreel />
      <Portfolio />
      <BeforeAfterConcept />
      <ProductAuthenticity />
      <Services />
      <Method />
      <About />
      <TrustSignals />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <MobileBottomCTA />
    </main>
  );
}

function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+0.8rem)] pt-3 md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="premium-button mx-auto flex min-h-12 max-w-md items-center justify-center rounded-full border border-zephyr-cyan/18 bg-[linear-gradient(135deg,rgba(5,5,12,.94),rgba(18,9,22,.92))] px-5 py-3 text-center text-[0.72rem] font-black uppercase tracking-[0.13em] text-white shadow-[0_0_20px_rgba(123,223,229,.10),0_0_28px_rgba(216,111,189,.08),0_14px_42px_rgba(0,0,0,.42)] backdrop-blur-xl active:scale-[.985]"
      >
        Let’s Build Your Campaign
      </a>
    </div>
  );
}

const heroEase = [0.16, 1, 0.3, 1] as const;

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[94svh] items-end justify-center overflow-hidden bg-black px-4 pb-10 pt-24 text-left sm:px-6 md:min-h-screen md:items-center md:justify-start md:px-10 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_36%_20%,rgba(123,223,229,.07),transparent_34%),linear-gradient(135deg,#050509,#100914_48%,#030306)]" />
      <video className="absolute inset-0 h-full w-full object-cover object-center opacity-88 saturate-[.9] contrast-110" autoPlay muted loop playsInline preload="auto" poster={heroPosterSrc} aria-hidden="true">
        <source src={heroVideoSrc} type="video/mp4" />
        <source src={heroVideoWebmSrc} type="video/webm" />
      </video>
      <div className="absolute inset-[-3%] bg-[radial-gradient(circle_at_18%_30%,rgba(123,223,229,.055),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(216,111,189,.05),transparent_26%),radial-gradient(circle_at_52%_76%,rgba(255,255,255,.025),transparent_24%)]" />
      <div className="absolute left-1/2 top-[58%] h-[58vmin] w-[58vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zephyr-cyan/[.035] blur-[72px] md:left-[30%] md:h-[46vmin] md:w-[46vmin]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,6,.34),rgba(3,3,6,.50)_34%,rgba(3,3,6,.86)_76%,#030306_100%)] md:bg-[linear-gradient(90deg,rgba(3,3,6,.92),rgba(3,3,6,.62)_36%,rgba(3,3,6,.24)_68%,rgba(3,3,6,.10)),linear-gradient(180deg,rgba(3,3,6,.18),rgba(3,3,6,.10)_34%,rgba(3,3,6,.42)_74%,#030306_99%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_145px_rgba(0,0,0,.80)] md:shadow-[inset_0_0_230px_rgba(0,0,0,.84)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/78 to-transparent md:h-24" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/92 to-transparent md:h-36" />
      <div
        className="relative z-30 mx-auto w-full max-w-[24rem] rounded-[1.8rem] border border-white/10 bg-black/30 p-5 shadow-[0_22px_80px_rgba(0,0,0,.42)] backdrop-blur-[2px] sm:max-w-[30rem] sm:p-7 md:mx-0 md:ml-[4vw] md:max-w-5xl md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0"
      >
        <p
          className="hero-badge-shimmer mb-4 inline-flex rounded-full border border-zephyr-cyan/20 bg-zephyr-cyan/[.055] px-4 py-2 text-[0.55rem] font-medium uppercase tracking-[0.2em] text-zephyr-cyan/90 sm:text-[0.62rem] md:mb-6 md:tracking-[0.28em]"
        >
          Premium AI Ad Studio
        </p>
        <h1
          className="text-glow max-w-[12ch] font-display text-[clamp(1.9rem,9.4vw,2.15rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] md:max-w-[13ch] md:text-[clamp(3.75rem,5.2vw,4.25rem)]"
        >
          Cinematic AI Ads for Brands That Want to Look Premium
        </h1>
        <p
          className="mt-5 max-w-[21rem] text-[0.94rem] leading-6 text-white/80 sm:max-w-md sm:text-base md:mt-7 md:max-w-2xl md:text-lg md:leading-8"
        >
          We create AI-powered product commercials, fashion campaigns, reels, and launch visuals for modern businesses.
        </p>
        <div
          className="mt-7 grid w-full grid-cols-1 gap-3 sm:max-w-md sm:grid-cols-2 md:mt-9 md:flex md:max-w-none md:items-center md:gap-4"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_26px_rgba(37,211,102,.18)] hover:bg-zephyr-cyan hover:shadow-[0_0_30px_rgba(123,223,229,.20)] md:min-w-56">Start on WhatsApp</a>
          <a href="#portfolio" className="premium-button flex min-h-14 items-center justify-center rounded-full border border-white/24 bg-white/7 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur-md hover:border-zephyr-magenta hover:text-zephyr-magenta hover:shadow-magenta md:min-w-44">View Work</a>
        </div>
        <p
          className="mt-5 max-w-[22rem] text-[0.72rem] font-medium leading-5 text-white/58 sm:text-xs md:mt-6 md:max-w-2xl md:text-sm"
        >
          For fashion, skincare, jewelry, ecommerce, influencers, and premium local brands.
        </p>
      </div>
    </section>
  );
}
function ProofStrip() {
  return <section aria-label="Zephyr creative promise" className="relative border-y border-white/10 bg-black/30 px-4 py-9 md:py-10 md:px-6"><div className="mx-auto grid max-w-7xl gap-3 text-center sm:grid-cols-2 lg:grid-cols-4">{[['01','Cinematic first frame'], ['02','AI-native art direction'], ['03','Luxury product mood'], ['04','Launch-ready social cuts']].map(([num, label]) => <div key={label} className="rounded-full border border-white/8 bg-white/[.025] px-5 py-4"><span className="mr-3 text-zephyr-cyan">{num}</span><span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/70">{label}</span></div>)}</div></section>;
}

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return <Reveal className="mx-auto mb-8 max-w-6xl text-center md:mb-24"><p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">{kicker}</p><h2 className="text-glow font-display text-[clamp(2rem,8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.4rem,5vw,5.2rem)]">{title}</h2>{copy && <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/62 md:mt-7 md:max-w-xl md:text-xl">{copy}</p>}</Reveal>;
}

function SectionFlow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function Showreel() {
  return (
    <SectionFlow>
      <section id="showreel" className="relative overflow-hidden bg-zephyr-black px-4 py-24 md:px-6 md:py-56">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(123,223,229,.06),transparent_30%),radial-gradient(circle_at_68%_58%,rgba(216,111,189,.07),transparent_34%),linear-gradient(180deg,#030306,#070711_48%,#030306)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/78 to-transparent" />
        <div className="relative">
          <Reveal className="mx-auto mb-9 max-w-6xl text-center md:mb-20">
            <p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">Showreel</p>
            <h2 className="text-glow mx-auto max-w-5xl font-display text-[clamp(2rem,7.2vw,3rem)] font-black uppercase leading-[0.94] tracking-[-0.055em] md:text-[clamp(3.2rem,5vw,5.2rem)]">
              A Cinematic Preview of What Your Brand Can Become
            </h2>
            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/62 md:mt-7 md:max-w-3xl md:text-xl">
              See how products, fashion, food, and lifestyle brands can be transformed into premium ad content, reels, launch visuals, and campaign stories.
            </p>
          </Reveal>
          <Reveal>
            <ShowreelPreview
              posterSrc={showreelPosterSrc}
              videoSrc={showreelVideoSrc}
              videoWebmSrc={showreelVideoWebmSrc}
              primaryHref={whatsappUrl}
              secondaryHref="#portfolio"
            />
          </Reveal>
        </div>
      </section>
    </SectionFlow>
  );
}

function Portfolio() {
  return <PortfolioCarousel />;
}

function BeforeAfterConcept() {
  return (
    <SectionFlow>
      <section id="before-after" className="relative overflow-hidden bg-[#04040a] px-4 py-24 md:px-6 md:py-40" aria-labelledby="before-after-title">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(123,223,229,.05),transparent_30%),radial-gradient(circle_at_88%_44%,rgba(216,111,189,.05),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto mb-9 max-w-5xl text-center md:mb-14">
            <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-zephyr-cyan/84 md:text-xs md:tracking-[0.45em]">Demo transformations</p>
            <h2 id="before-after-title" className="text-glow font-display text-[clamp(2rem,8vw,4.7rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.7rem,5.2vw,5.8rem)]">
              From Simple Product Photo to Cinematic Campaign
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/64 md:mt-7 md:text-xl md:leading-8">
              See how ordinary product references can become premium launch visuals, ads, and social content.
            </p>
            <p className="mx-auto mt-4 inline-flex rounded-full border border-white/10 bg-black/28 px-4 py-2 text-[0.6rem] font-black uppercase tracking-[0.18em] text-white/48 md:text-xs">
              Sample demo visuals — not client work
            </p>
          </Reveal>
          <div className="grid gap-5 lg:gap-7">
            {beforeAfterExamples.map(({ title, before, after, caption }, i) => (
              <Reveal delay={Math.min(i * 0.08, 0.2)} key={title}>
                <article className="premium-card glass overflow-hidden rounded-[1.6rem] p-3 md:rounded-[2.1rem] md:p-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <figure className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/30 md:rounded-[1.65rem]">
                      <img src={before} alt={`Demo before reference for ${title}`} loading="lazy" decoding="async" width="1024" height="1024" className="aspect-[4/3] h-full w-full object-cover md:aspect-[5/4]" />
                      <figcaption className="absolute left-3 top-3 rounded-full border border-white/12 bg-black/62 px-3 py-2 text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/76 backdrop-blur-md">
                        Before · reference photo
                      </figcaption>
                    </figure>
                    <figure className="relative overflow-hidden rounded-[1.25rem] border border-zephyr-cyan/18 bg-black/30 shadow-[0_0_28px_rgba(123,223,229,.055)] md:rounded-[1.65rem]">
                      <img src={after} alt={`Demo cinematic campaign visual for ${title}`} loading="lazy" decoding="async" width="1024" height="1024" className="aspect-[4/3] h-full w-full object-cover md:aspect-[5/4]" />
                      <figcaption className="absolute left-3 top-3 rounded-full border border-zephyr-cyan/24 bg-black/62 px-3 py-2 text-[0.58rem] font-black uppercase tracking-[0.18em] text-zephyr-cyan/90 backdrop-blur-md">
                        After · campaign visual
                      </figcaption>
                    </figure>
                  </div>
                  <div className="px-2 pb-3 pt-5 md:flex md:items-end md:justify-between md:gap-8 md:px-4 md:pb-4 md:pt-6">
                    <h3 className="text-xl font-black uppercase leading-tight tracking-[-0.04em] text-white md:text-3xl">{title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62 md:mt-0 md:text-right md:text-base md:leading-7">{caption}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SectionFlow>
  );
}

function ProductAuthenticity() {
  const points = ['Product shape protected', 'Logo and packaging preserved', 'Cinematic background transformation', 'Brand-safe visual direction'];

  return (
    <SectionFlow>
      <section className="relative overflow-hidden px-4 py-14 md:px-6 md:py-20" aria-labelledby="product-authenticity-title">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(123,223,229,.045),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(216,111,189,.04),transparent_30%)]" />
        <Reveal>
          <div className="premium-card glass relative mx-auto max-w-6xl overflow-hidden rounded-[1.65rem] p-6 shadow-[0_22px_80px_rgba(0,0,0,.22)] md:rounded-[2.2rem] md:p-9 lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zephyr-cyan/42 to-transparent" />
            <div>
              <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-zephyr-cyan/84 md:text-xs md:tracking-[0.42em]">Product authenticity</p>
              <h2 id="product-authenticity-title" className="text-glow max-w-2xl font-display text-[clamp(2rem,8vw,4.7rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.5rem,5vw,5.3rem)]">
                Your Product Stays Real
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/68 md:text-lg md:leading-8">
                Your product remains accurate. We use precise masking and controlled editing to keep your physical product, logo, packaging, and shape authentic while transforming the world around it into a cinematic campaign.
              </p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:mt-0">
              {points.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-black/24 px-4 py-4 text-sm font-bold uppercase leading-5 tracking-[0.08em] text-white/76 md:px-5 md:py-5">
                  <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-zephyr-cyan/82 shadow-[0_0_14px_rgba(123,223,229,.28)]" aria-hidden="true" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </SectionFlow>
  );
}

function Services() {
  return <SectionFlow><section id="services" className="px-4 py-24 md:px-6 md:py-44"><SectionTitle kicker="Services" title="What We Create" copy="Premium AI-powered visual content for brands that want to stand out online." /><div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ title, copy, bestFor }, i) => <Reveal delay={Math.min(i * 0.07, 0.24)} key={title}><div className={`premium-card glass h-full min-h-56 rounded-[1.45rem] p-6 hover:border-zephyr-cyan/20 hover:shadow-[0_18px_60px_rgba(0,0,0,.22)] md:rounded-[1.8rem] md:p-7 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}><div className="mb-7 flex items-center justify-between gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[.035] text-sm font-black text-zephyr-cyan/88 shadow-[0_0_18px_rgba(123,223,229,.08)]">0{i + 1}</div><span className="rounded-full border border-white/10 bg-black/24 px-3 py-2 text-[0.58rem] font-black uppercase tracking-[0.16em] text-white/54">Best for {bestFor}</span></div><h3 className="max-w-xs text-xl font-black uppercase leading-tight tracking-[-0.04em] text-white md:text-2xl">{title}</h3><p className="mt-5 max-w-sm text-sm leading-7 text-white/62 md:text-base">{copy}</p></div></Reveal>)}</div></section></SectionFlow>;
}

function Method() {
  const steps = [
    ['Share your product and goal', 'Send your product, brand, offer, audience, and where you want to launch it.'],
    ['We create a premium visual direction', 'We shape the style, story, formats, and campaign look so your brand feels expensive online.'],
    ['You receive launch-ready visuals/reels', 'Final visuals, reels, and launch copy are prepared for social media, ads, and product promotions.'],
  ];
  return <SectionFlow><section className="relative overflow-hidden bg-[#04040a] px-4 py-24 md:px-6 md:py-48"><div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(123,223,229,.045),transparent_34%),radial-gradient(circle_at_78%_40%,rgba(216,111,189,.055),transparent_28%)]" /><SectionTitle kicker="Process" title="Simple, Clear, Launch-Ready" copy="A calm creative process built for business owners, not production teams." /><div className="relative mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">{steps.map(([title, copy], i) => <Reveal delay={Math.min(i * 0.1, 0.24)} key={title}><div className="premium-card glass h-full rounded-[1.6rem] p-7 md:rounded-[2rem] md:p-8"><p className="text-6xl font-black text-white/10">0{i+1}</p><h3 className="mt-8 text-2xl font-black uppercase tracking-[-0.04em] text-white">{title}</h3><p className="mt-6 max-w-sm text-base leading-7 text-white/62">{copy}</p></div></Reveal>)}</div></section></SectionFlow>;
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
              <p className="text-base leading-7 text-white/62 md:text-lg">Built for brands that need premium-looking ads without a traditional photoshoot.</p>
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
function TrustSignals() {
  const signals = ['WhatsApp-first briefing', 'India-friendly pricing', 'Fast launch visuals', 'No full shoot required', 'Platform-ready formats', 'Revision support included'];
  return <SectionFlow><section className="relative overflow-hidden border-y border-white/10 bg-black/28 px-4 py-20 md:px-6 md:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(123,223,229,.045),transparent_34%)]" /><div className="relative mx-auto max-w-7xl"><SectionTitle kicker="Trust" title="Premium Visuals. Clear Process. No Confusion." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{signals.map((signal) => <div key={signal} className="rounded-full border border-white/10 bg-white/[.035] px-5 py-4 text-center text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/68"><span className="mr-2 text-zephyr-cyan">✦</span>{signal}</div>)}</div></div></section></SectionFlow>;
}

function Pricing() {
  return <SectionFlow><section id="pricing" className="relative overflow-hidden bg-[#05050c] px-4 py-24 md:px-6 md:py-48"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(123,223,229,.055),transparent_28%),radial-gradient(circle_at_82%_46%,rgba(216,111,189,.06),transparent_30%)]" /><div className="relative"><SectionTitle kicker="Pricing" title="Choose Your Campaign Scale" copy="Simple premium packages for Indian brands that want better visuals, reels, and launch content." /><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">{prices.map(({ name, price, bestFor, includes, cta, message, recommended }, i) => <Reveal delay={Math.min(i * 0.1, 0.24)} key={name}><div className={`premium-card glass relative flex h-full flex-col rounded-[1.6rem] p-6 md:rounded-[2rem] md:p-8 ${recommended ? 'border-zephyr-cyan/30 shadow-[0_0_46px_rgba(123,223,229,.10)] lg:-translate-y-4' : 'border-white/10'}`}>{recommended && <div className="mb-5 inline-flex w-fit rounded-full border border-zephyr-cyan/24 bg-zephyr-cyan/[.08] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.22em] text-zephyr-cyan">Recommended</div>}<p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/54">Package 0{i + 1}</p><h3 className="mt-4 min-h-16 text-2xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white md:text-3xl">{name}</h3><p className="magenta-glow mt-6 text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">{price}</p><div className="mt-7 rounded-2xl border border-white/10 bg-black/24 p-4"><p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-zephyr-cyan/84">Best for</p><p className="mt-3 text-sm leading-6 text-white/70 md:text-base md:leading-7">{bestFor}</p></div><ul className="mt-7 grow space-y-3 text-sm leading-6 text-white/72 md:text-base">{includes.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zephyr-cyan/78" aria-hidden="true" /><span>{item}</span></li>)}</ul><a href={`https://wa.me/918796302608?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className={`premium-button mt-8 flex min-h-14 items-center justify-center rounded-full px-5 py-4 text-center text-xs font-black uppercase tracking-[0.14em] ${recommended ? 'bg-white text-black hover:bg-zephyr-cyan' : 'border border-white/14 bg-white/[.055] text-white hover:border-zephyr-magenta hover:text-zephyr-magenta'}`}>{cta}</a></div></Reveal>)}</div><Reveal><p className="mx-auto mt-8 max-w-4xl rounded-[1.35rem] border border-white/10 bg-black/26 px-5 py-4 text-center text-sm leading-6 text-white/58 md:text-base">Final pricing depends on product type, number of visuals, video duration, revisions, and delivery timeline.</p></Reveal></div></section></SectionFlow>;
}

function FAQ() {
  return (
    <SectionFlow>
      <section id="faq" className="relative overflow-hidden border-y border-white/10 bg-[#04040a] px-4 py-24 md:px-6 md:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(123,223,229,.055),transparent_30%),radial-gradient(circle_at_84%_62%,rgba(216,111,189,.055),transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#05050c] to-transparent" />
        <div className="relative mx-auto max-w-5xl">
          <SectionTitle kicker="FAQ" title="Questions Before We Begin" copy="Clear answers before you start your campaign." />
          <div className="mx-auto grid gap-3 md:gap-4">
            {faqs.map(({ question, answer }, i) => (
              <Reveal delay={Math.min(i * 0.05, 0.2)} key={question}>
                <details className="faq-item group rounded-[1.35rem] border border-white/10 bg-white/[.035] p-0 shadow-[0_18px_60px_rgba(0,0,0,.18)] backdrop-blur-md open:border-zephyr-cyan/24 open:bg-white/[.055] md:rounded-[1.65rem]">
                  <summary className="flex min-h-[4.8rem] cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left md:min-h-[5.4rem] md:px-7 md:py-6">
                    <span className="max-w-[42rem] text-base font-black uppercase leading-tight tracking-[-0.035em] text-white md:text-xl">
                      {question}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-black/24 text-lg font-light text-zephyr-cyan transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-6 pr-16 md:px-7 md:pb-7 md:pr-24">
                    <p className="max-w-3xl text-sm leading-7 text-white/66 md:text-base md:leading-8">{answer}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SectionFlow>
  );
}

function Contact() {
  return (
    <SectionFlow>
      <section id="contact" className="relative overflow-hidden px-4 py-24 md:px-6 md:py-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(123,223,229,.055),transparent_30%),radial-gradient(circle_at_86%_70%,rgba(216,111,189,.055),transparent_32%)]" />
        <div className="relative mx-auto max-w-6xl">
          <SectionTitle kicker="Start a project" title="Let’s Make Your Brand Look Cinematic" copy="Send your product, brand, or campaign idea. We’ll suggest the best visual direction for your launch." />
          <Reveal>
            <div className="glass grid gap-6 rounded-[1.6rem] p-5 md:grid-cols-[.9fr_1.1fr] md:gap-8 md:rounded-[2rem] md:p-8 lg:p-10">
              <div className="flex flex-col justify-between gap-8 rounded-[1.35rem] border border-white/10 bg-black/24 p-5 md:p-7">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-zephyr-cyan/82">Quick enquiry</p>
                  <h3 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white md:text-5xl">Start with one message.</h3>
                  <p className="mt-5 text-base leading-7 text-white/64">Tell us what you sell and where you want to promote it. We’ll help shape the visual direction.</p>
                  <p className="mt-5 rounded-2xl border border-white/10 bg-white/[.035] p-4 text-sm leading-6 text-white/62">Fastest reply: WhatsApp. You can also send product photos or references directly on WhatsApp.</p>
                </div>
                <div className="grid gap-3">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_24px_rgba(37,211,102,.15)]">Start on WhatsApp</a>
                  <div className="grid grid-cols-2 gap-3">
                    <a href={emailUrl} className="premium-button flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/[.055] px-4 py-3 text-xs font-black uppercase tracking-[0.13em] text-white/86 hover:border-zephyr-cyan hover:text-zephyr-cyan">Email</a>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/[.055] px-4 py-3 text-xs font-black uppercase tracking-[0.13em] text-white/86 hover:border-zephyr-magenta hover:text-zephyr-magenta">Instagram</a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </SectionFlow>
  );
}

function Footer() {
  return <footer className="border-t border-white/10 px-4 py-10 md:px-6"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center"><div className="flex items-center gap-3"><img src={logoSrc} alt="Zephyr AI Studio logo" loading="lazy" decoding="async" className="h-12 w-12 rounded-full border border-white/10 object-cover shadow-[0_0_18px_rgba(216,111,189,.12)]" /><p className="uppercase tracking-[0.3em] text-white/70">Zephyr AI Studio</p></div><p>Luxury AI advertising and cinematic brand storytelling.</p><a className="premium-link inline-flex min-h-11 items-center rounded-full border border-white/10 px-4 hover:border-zephyr-cyan hover:text-zephyr-cyan" href={emailUrl}>Start a private brief</a></div></footer>;
}
