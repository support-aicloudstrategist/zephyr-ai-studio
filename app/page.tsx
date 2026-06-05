import { basePath } from '@/lib/siteLinks';

const aicsLogoSrc = `${basePath}/assets/brand/aics-logo.svg`;
const heroPosterSrc = `${basePath}/images/video-posters/zephyr-hero-mixkit-44541.jpg`;
const showreelPosterSrc = `${basePath}/images/zephyr-showreel-camaro-44554.jpg`;
const showreelVideoSrc = `${basePath}/video/zephyr-showreel-camaro-44554.mp4`;
const whatsappUrl = 'https://wa.me/918796302608?text=Hi%20AI%20Creative%20Studio%2C%20I%20want%20premium%20AI%20ads%20for%20my%20brand.';
const emailUrl = 'mailto:support@aicloudstrategist.com?subject=AI%20Creative%20Studio%20Campaign%20Brief';

const services = [
  ['AI Product Commercials', 'Cinematic product ads and launch visuals designed to make your product look premium.', 'Ecommerce products'],
  ['Fashion & Model Campaigns', 'AI-generated fashion models, editorial visuals, and campaign stories for modern brands.', 'Fashion boutiques'],
  ['Instagram Reels & Shorts', 'Short-form cinematic videos for Instagram, YouTube Shorts, ads, and product promotions.', 'Instagram launches'],
  ['Brand Launch Visuals', 'Premium campaign visuals for new products, offers, events, and brand launches.', 'Skincare / jewelry'],
  ['Cinematic Story Videos', 'Emotion-led storytelling videos for founders, creators, and premium businesses.', 'Founders / creators'],
] as const;

const outputs = [
  ['Product commercial', 'Launch-ready ads for websites, reels, Meta ads, YouTube, and social campaigns.'],
  ['Reel / short video', 'Short vertical videos prepared for Instagram, Shorts, offers, and promotions.'],
  ['Campaign visual', 'Hero visuals for products, launches, festivals, and premium brand moments.'],
  ['Founder story visual', 'Founder-led narrative visuals for coaches, creators, and premium local businesses.'],
] as const;

const prices = [
  ['Starter Visual Pack', '₹15K–₹40K', 'Small brands launching one product or campaign.', ['1 Bespoke Creative Concept & Moodboard', '2–4 premium AI visuals', '1 short reel concept', 'Captions + platform-ready formats', 'Revision support included'], 'Start Starter Pack', 'I want Starter Visual Pack for my product launch.'],
  ['Growth Campaign', '₹50K–₹1L', 'Brands that need a complete social launch campaign.', ['Bespoke campaign concept & moodboard', '5–10 premium visuals', '2–3 reels or shorts', 'Captions + platform-ready formats', 'Music/sound design if scoped'], 'Plan Growth Campaign', 'I want Growth Campaign for Instagram/social launch.'],
  ['Premium Cinematic Campaign', '₹1L+', 'Fashion, jewelry, skincare, luxury products, and founder-led brands.', ['Full campaign world & moodboard', 'Cinematic ad film direction', 'Multiple reels and cutdowns', 'Hero visuals + captions', 'Sound design / AI voiceover if scoped'], 'Discuss Premium Campaign', 'I want Premium Cinematic Campaign for my brand.'],
] as const;

const faqs = [
  ['Do I need to ship my physical products?', 'Not always. For many campaigns, clear product photos, videos, packaging images, and brand references are enough. If a physical shoot is needed later, we will tell you clearly.'],
  ['Will my product shape, logo, or packaging stay accurate?', 'Yes. We use precise masking and controlled editing to keep your actual product, logo, packaging, and shape accurate while transforming the environment around it.'],
  ['Are AI-generated assets safe for paid ads?', 'We create assets for commercial brand use and deliver them for social media, Meta ads, YouTube, websites, and digital campaigns. Final platform approval depends on each ad platform’s policy and the product category.'],
  ['What is the turnaround time?', 'Starter campaigns usually take 5–10 days. Larger campaigns depend on the number of visuals, video duration, revisions, and creative complexity.'],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020b14] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Showreel />
      <Outputs />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <>
      <div className="bg-[#050d18] text-[13px] text-[#c9d8e6]">
        <div className="mx-auto flex min-h-[38px] max-w-[1180px] items-center justify-between gap-4 px-6">
          <span>Websites · Automation · Trust · AI Creatives — for businesses worldwide.</span>
          <span className="hidden sm:inline"><a className="font-black text-[#bffff5]" href="tel:+918065480898">Call +91 80654 80898</a><span className="px-1">·</span><a className="font-black text-[#bffff5]" href="https://wa.me/918796302608">WA +91 87963 02608</a></span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071827]/94 backdrop-blur-[18px]">
        <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between gap-6 px-6">
          <a href="https://aicloudstrategist.com/" className="flex items-center gap-[13px] font-black tracking-[-.03em] text-white" aria-label="AICloudStrategist home">
            <span className="grid h-[42px] w-[42px] place-items-center rounded-[15px] bg-[conic-gradient(from_210deg,#25e6c8,#22d3ee,#7aa7ff,#25e6c8)] font-black text-[#06131f] shadow-[0_14px_36px_rgba(37,230,200,.28)]">AI</span>
            <span>AICloudStrategist</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-black md:flex" aria-label="Page navigation">
            <a className="text-white/84 hover:text-[#8afce7]" href="https://aicloudstrategist.com/">Home</a>
            <a className="text-white/84 hover:text-[#8afce7]" href="https://aicloudstrategist.com/#services">Services</a>
            <a className="text-white/84 hover:text-[#8afce7]" href="https://aicloudstrategist.com/industries.html">Industries</a>
            <a className="text-white/84 hover:text-[#8afce7]" href="https://aicloudstrategist.com/pricing.html">Pricing</a>
            <a className="text-white/84 hover:text-[#8afce7]" href="https://aicloudstrategist.com/about/">About</a>
            <a className="text-white/84 hover:text-[#8afce7]" href="#contact">Contact</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hidden min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#25e6c8,#8afce7)] px-[17px] text-sm font-black text-[#04111e] shadow-[0_18px_45px_rgba(37,230,200,.28)] sm:inline-flex">Get free growth review</a>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_14%,rgba(37,230,200,.24),transparent_28%),linear-gradient(135deg,#020b14,#08243b_58%,#075f63)] px-6 py-[58px] text-white">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 md:grid-cols-[1.02fr_.98fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[.07em] text-[#c6fff5]">AI Creative Studio</p>
          <h1 className="max-w-[900px] text-[clamp(38px,5.2vw,66px)] font-black leading-[.98] tracking-[-.04em] text-white">Cinematic AI ads for brands that want to look premium.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#d5e7ef]">We create AI-powered product commercials, fashion campaigns, reels, and launch visuals — connected to the AICloudStrategist growth system.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#25e6c8,#8afce7)] px-[17px] font-black text-[#04111e] shadow-[0_18px_45px_rgba(37,230,200,.28)]">Get creative growth review</a>
            <a href="#services" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-[17px] font-black text-white">Explore services ↓</a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {['Product ads', 'Reels', 'Launch visuals', 'Campaign stories'].map((item) => <div key={item} className="rounded-[18px] border border-white/15 bg-white/[.075] p-3 backdrop-blur"><strong className="block text-lg leading-tight text-white">{item}</strong><span className="text-xs text-[#c5d7e6]">ready to use</span></div>)}
          </div>
        </div>
        <div className="relative -translate-y-2 overflow-hidden rounded-[34px] border border-white/20 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,.18)] backdrop-blur">
          <div className="rounded-[24px] border border-white/15 bg-[#071827]/80 p-5">
            <div className="mb-5 flex items-center justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.12em] text-[#8afce7]">Digital Growth System</p><h3 className="mt-2 text-2xl font-black text-white">AI Creative Studio</h3></div><span className="rounded-full bg-[#25e6c8] px-3 py-2 text-xs font-black text-[#04111e]">4th service</span></div>
            <div className="grid gap-3">
              {[['Website', 'Brand online'], ['Leads', 'Campaign ready'], ['Creative', 'Visuals prepared'], ['Follow-up', 'WhatsApp ready']].map(([label, value]) => <div key={label} className="flex items-center justify-between gap-5 rounded-[18px] border border-white/10 bg-white/[.075] p-4"><span className="text-[#c5d7e6]">{label}</span><strong className="text-white">{value}</strong></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ tag, title, copy }: { tag: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[.08em] text-[#2de2c5]">{tag}</p>
      <h2 className="text-[clamp(1.9rem,3vw,3rem)] font-extrabold leading-[1.08] text-white">{title}</h2>
      {copy && <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#9fb6c2]">{copy}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[radial-gradient(circle_at_16%_8%,rgba(34,211,238,.14),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(139,92,246,.13),transparent_28%),#020b14] px-6 py-20">
      <SectionHeading tag="What we do" title="AI Creative Studio as your 4th growth service." copy="Buy it separately, or connect it with website, lead capture, trust, and automation." />
      <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, copy, bestFor], index) => (
          <article key={title} className="rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,.82),rgba(2,6,23,.86))] p-7 shadow-[0_24px_70px_rgba(0,0,0,.28)]">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[.08em] text-[#2de2c5]">0{index + 1}</p>
            <h3 className="text-xl font-extrabold leading-tight text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#9fb6c2]">{copy}</p>
            <p className="mt-6 rounded-lg bg-white/5 p-3 text-xs font-bold text-[#cbd5e1]">Best for: {bestFor}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Showreel() {
  return (
    <section id="showreel" className="bg-[linear-gradient(135deg,#020b14,#061827_58%,#08243b)] px-6 py-20">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 md:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[.08em] text-[#2de2c5]">Proof</p>
          <h2 className="text-[clamp(1.9rem,3vw,3rem)] font-extrabold leading-[1.08] text-white">See what the creative layer can produce.</h2>
          <p className="mt-5 text-base leading-8 text-[#9fb6c2]">Products, fashion, food, and lifestyle brands can be transformed into premium ad content, reels, launch visuals, and campaign stories.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2de2c5] px-6 font-bold text-[#071827]">Request creative review</a>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 p-4 shadow-[0_24px_70px_rgba(0,0,0,.28)]">
          <video className="aspect-video w-full rounded-lg object-cover" controls preload="metadata" poster={showreelPosterSrc}>
            <source src={showreelVideoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

function Outputs() {
  return (
    <section className="bg-[radial-gradient(circle_at_16%_8%,rgba(34,211,238,.14),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(139,92,246,.13),transparent_28%),#020b14] px-6 py-20">
      <SectionHeading tag="What you get" title="Real creative assets you can use — not slides." />
      <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-4">
        {outputs.map(([title, copy]) => (
          <div key={title} className="rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,.82),rgba(2,6,23,.86))] p-6 shadow-[0_24px_70px_rgba(0,0,0,.24)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[#071827] text-xl font-extrabold text-[#2de2c5]">AD</div>
            <h3 className="font-extrabold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#9fb6c2]">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ['Share product and goal', 'Send product, brand, offer, audience, and where you want to launch it.'],
    ['We create direction', 'We shape style, story, formats, and campaign look.'],
    ['You receive launch-ready assets', 'Final visuals, reels, and launch copy are prepared for promotion.'],
  ] as const;
  return (
    <section className="bg-[linear-gradient(135deg,#020b14,#061827_58%,#08243b)] px-6 py-20">
      <SectionHeading tag="How it works" title="Simple from day one." />
      <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-3">
        {steps.map(([title, copy], index) => (
          <div key={title} className="rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,.82),rgba(2,6,23,.86))] p-7">
            <p className="text-4xl font-extrabold text-[#2de2c5]">0{index + 1}</p>
            <h3 className="mt-5 text-xl font-extrabold text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#9fb6c2]">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-[radial-gradient(circle_at_16%_8%,rgba(34,211,238,.14),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(139,92,246,.13),transparent_28%),#020b14] px-6 py-20">
      <SectionHeading tag="Pricing" title="Choose your campaign scale." copy="Simple premium packages for Indian brands that want better visuals, reels, and launch content." />
      <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-3">
        {prices.map(([name, price, bestFor, includes, cta, message], index) => (
          <article key={name} className={`rounded-lg bg-[linear-gradient(145deg,rgba(15,23,42,.82),rgba(2,6,23,.86))] p-7 shadow-[0_24px_70px_rgba(0,0,0,.28)] ${index === 1 ? 'border-[#2de2c5]' : 'border-white/10'}`}>
            {index === 1 && <p className="mb-4 inline-flex rounded-lg bg-[#2de2c5] px-3 py-2 text-xs font-extrabold uppercase tracking-[.08em] text-[#071827]">Recommended</p>}
            <p className="text-xs font-extrabold uppercase tracking-[.08em] text-[#9fb6c2]">Package 0{index + 1}</p>
            <h3 className="mt-4 min-h-14 text-2xl font-extrabold leading-tight text-white">{name}</h3>
            <p className="mt-5 text-4xl font-extrabold text-white">{price}</p>
            <p className="mt-5 rounded-lg bg-white/5 p-4 text-sm leading-6 text-[#9fb6c2]"><strong className="text-white">Best for:</strong> {bestFor}</p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-[#9fb6c2]">
              {includes.map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
            <a href={`https://wa.me/918796302608?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#071827] px-5 text-sm font-bold text-white hover:bg-[#0f2438]">{cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-[linear-gradient(135deg,#020b14,#061827_58%,#08243b)] px-6 py-20">
      <SectionHeading tag="FAQ" title="Questions before we begin." />
      <div className="mx-auto grid max-w-3xl gap-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="rounded-lg border border-white/10 bg-white/[.035] p-5">
            <summary className="cursor-pointer font-extrabold text-white">{question}</summary>
            <p className="mt-4 text-sm leading-7 text-[#9fb6c2]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#071827] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-[1180px] items-center gap-8 md:grid-cols-[1fr_420px]">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[.08em] text-[#2de2c5]">Start a project</p>
          <h2 className="text-[clamp(1.9rem,3vw,3rem)] font-extrabold leading-[1.08]">Let’s make your brand look cinematic.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">Send your product, brand, or campaign idea. We’ll suggest the best visual direction for your launch.</p>
        </div>
        <div className="rounded-lg border border-white/15 bg-white/10 p-6">
          <p className="font-extrabold">Quick enquiry</p>
          <p className="mt-3 text-sm leading-7 text-white/72">Fastest reply: WhatsApp. You can also send product photos or references directly there.</p>
          <div className="mt-6 grid gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2de2c5] px-5 font-bold text-[#071827]">Start on WhatsApp</a>
            <a href={emailUrl} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-5 font-bold text-white">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071827] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img src={aicsLogoSrc} alt="AICloudStrategist logo" className="h-10 w-10 rounded-lg bg-white p-1" />
          <div>
            <p className="font-extrabold text-white">AICloudStrategist</p>
            <p>AI Creative Studio · 4th service</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="https://aicloudstrategist.com/">Website</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
