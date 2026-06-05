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
    <main className="min-h-screen bg-[#f6fbff] text-[#172033]">
      <Navbar />
      <Hero />
      <ReviewStrip />
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
    <header className="sticky top-0 z-50 bg-[#071827]/95 py-4 shadow-[0_1px_18px_rgba(7,24,39,.08)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-6">
        <a href="#hero" className="flex items-center gap-3 font-extrabold text-white" aria-label="AICloudStrategist home">
          <img src={aicsLogoSrc} alt="AICloudStrategist logo" className="h-9 w-9 rounded-lg bg-white object-contain p-1" />
          <span>AICloudStrategist</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/85 md:flex" aria-label="Page navigation">
          <a className="hover:text-[#2de2c5]" href="#services">Services</a>
          <a className="hover:text-[#2de2c5]" href="#showreel">Proof</a>
          <a className="hover:text-[#2de2c5]" href="#pricing">Pricing</a>
          <a className="hover:text-[#2de2c5]" href="#contact">Contact</a>
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hidden min-h-11 items-center justify-center rounded-lg bg-[#2de2c5] px-5 text-sm font-bold text-[#071827] shadow-[0_10px_28px_rgba(45,226,197,.22)] sm:inline-flex">Send enquiry</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(45,226,197,.18),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(122,167,255,.22),transparent_28%),linear-gradient(135deg,#071827_0%,#0f2438_58%,#102f47_100%)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="relative mx-auto grid min-h-[88vh] max-w-[1180px] items-center gap-14 px-6 py-24 md:grid-cols-[minmax(0,1fr)_360px]">
        <div className="max-w-4xl pt-10">
          <p className="mb-4 inline-flex text-xs font-extrabold uppercase tracking-[.08em] text-[#2de2c5]">AI Creative Studio</p>
          <h1 className="max-w-[920px] text-[clamp(2.4rem,6vw,5.4rem)] font-extrabold leading-[.98] tracking-tight">Cinematic AI ads for brands that want to look premium.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">We create AI-powered product commercials, fashion campaigns, reels, and launch visuals for modern businesses — as the creative layer of the AICloudStrategist growth system.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center rounded-lg bg-[#2de2c5] px-6 py-3 font-bold text-[#071827] shadow-[0_10px_28px_rgba(45,226,197,.22)]">Start on WhatsApp</a>
            <a href="#services" className="inline-flex min-h-13 items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-bold text-white">Explore services</a>
          </div>
        </div>
        <div className="rounded-lg border border-white/20 bg-white/10 p-5 shadow-[0_24px_70px_rgba(0,0,0,.18)] backdrop-blur">
          <img src={heroPosterSrc} alt="AI Creative Studio campaign preview" className="aspect-[4/5] w-full rounded-lg object-cover" />
          <div className="mt-5 border-t border-white/15 pt-4 text-sm text-white/78">
            <div className="flex justify-between gap-4 py-2"><span>Website</span><strong className="text-white">Brand online</strong></div>
            <div className="flex justify-between gap-4 py-2"><span>Leads</span><strong className="text-white">Campaign ready</strong></div>
            <div className="flex justify-between gap-4 py-2"><span>Creative</span><strong className="text-[#f6b94b]">Visuals prepared</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewStrip() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-[1180px] gap-1 border border-[#d9e5ee] bg-[#d9e5ee] px-0 md:grid-cols-4">
        {['Product ads', 'Instagram reels', 'Launch visuals', 'Campaign stories'].map((item) => (
          <div key={item} className="bg-white p-6 text-center font-bold text-[#0f2438]">{item}</div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ tag, title, copy }: { tag: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[.08em] text-[#2de2c5]">{tag}</p>
      <h2 className="text-[clamp(1.9rem,3vw,3rem)] font-extrabold leading-[1.08] text-[#071827]">{title}</h2>
      {copy && <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#64748b]">{copy}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[#f6fbff] px-6 py-20">
      <SectionHeading tag="What we do" title="AI Creative Studio as your 4th growth service." copy="Buy it separately, or connect it with website, lead capture, trust, and automation." />
      <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, copy, bestFor], index) => (
          <article key={title} className="rounded-lg border border-[#d9e5ee] bg-white p-7 shadow-[0_18px_50px_rgba(7,24,39,.10)]">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[.08em] text-[#2de2c5]">0{index + 1}</p>
            <h3 className="text-xl font-extrabold leading-tight text-[#071827]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#64748b]">{copy}</p>
            <p className="mt-6 rounded-lg bg-[#f6fbff] p-3 text-xs font-bold text-[#0f2438]">Best for: {bestFor}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Showreel() {
  return (
    <section id="showreel" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 md:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[.08em] text-[#2de2c5]">Proof</p>
          <h2 className="text-[clamp(1.9rem,3vw,3rem)] font-extrabold leading-[1.08] text-[#071827]">See what the creative layer can produce.</h2>
          <p className="mt-5 text-base leading-8 text-[#64748b]">Products, fashion, food, and lifestyle brands can be transformed into premium ad content, reels, launch visuals, and campaign stories.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#2de2c5] px-6 font-bold text-[#071827]">Request creative review</a>
        </div>
        <div className="rounded-lg border border-[#d9e5ee] bg-[#071827] p-4 shadow-[0_18px_50px_rgba(7,24,39,.12)]">
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
    <section className="bg-[#f6fbff] px-6 py-20">
      <SectionHeading tag="What you get" title="Real creative assets you can use — not slides." />
      <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-4">
        {outputs.map(([title, copy]) => (
          <div key={title} className="rounded-lg border border-[#d9e5ee] bg-white p-6 shadow-[0_18px_50px_rgba(7,24,39,.08)]">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-[#071827] text-xl font-extrabold text-[#2de2c5]">AD</div>
            <h3 className="font-extrabold text-[#071827]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#64748b]">{copy}</p>
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
    <section className="bg-white px-6 py-20">
      <SectionHeading tag="How it works" title="Simple from day one." />
      <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-3">
        {steps.map(([title, copy], index) => (
          <div key={title} className="rounded-lg border border-[#d9e5ee] bg-white p-7">
            <p className="text-4xl font-extrabold text-[#2de2c5]">0{index + 1}</p>
            <h3 className="mt-5 text-xl font-extrabold text-[#071827]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#64748b]">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-[#f6fbff] px-6 py-20">
      <SectionHeading tag="Pricing" title="Choose your campaign scale." copy="Simple premium packages for Indian brands that want better visuals, reels, and launch content." />
      <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-3">
        {prices.map(([name, price, bestFor, includes, cta, message], index) => (
          <article key={name} className={`rounded-lg border bg-white p-7 shadow-[0_18px_50px_rgba(7,24,39,.10)] ${index === 1 ? 'border-[#2de2c5]' : 'border-[#d9e5ee]'}`}>
            {index === 1 && <p className="mb-4 inline-flex rounded-lg bg-[#2de2c5] px-3 py-2 text-xs font-extrabold uppercase tracking-[.08em] text-[#071827]">Recommended</p>}
            <p className="text-xs font-extrabold uppercase tracking-[.08em] text-[#64748b]">Package 0{index + 1}</p>
            <h3 className="mt-4 min-h-14 text-2xl font-extrabold leading-tight text-[#071827]">{name}</h3>
            <p className="mt-5 text-4xl font-extrabold text-[#071827]">{price}</p>
            <p className="mt-5 rounded-lg bg-[#f6fbff] p-4 text-sm leading-6 text-[#64748b]"><strong className="text-[#0f2438]">Best for:</strong> {bestFor}</p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-[#64748b]">
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
    <section className="bg-white px-6 py-20">
      <SectionHeading tag="FAQ" title="Questions before we begin." />
      <div className="mx-auto grid max-w-3xl gap-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="rounded-lg border border-[#d9e5ee] bg-white p-5">
            <summary className="cursor-pointer font-extrabold text-[#071827]">{question}</summary>
            <p className="mt-4 text-sm leading-7 text-[#64748b]">{answer}</p>
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
