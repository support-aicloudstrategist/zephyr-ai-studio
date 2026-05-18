import { Reveal } from '@/components/Reveal';
import { PortfolioCard } from '@/components/PortfolioCard';
import { portfolioAssets } from '@/lib/portfolioAssets';
import { portfolioUrl } from '@/lib/siteLinks';

const asset = (title: string) => portfolioAssets.find((item) => item.title === title)!;

const featuredPortfolio = [
  asset('Skincare Brands'),
  asset('Jewellery Brands'),
  {
    ...asset('Fashion Brands'),
    title: 'Fashion & Boutiques',
    create: 'We create model-led fashion visuals, boutique reels, and lookbook-style campaign ads.',
    bestFor: 'Best for collections, boutiques, seasonal drops, and social launches.',
  },
  {
    ...asset('Ecommerce Sellers'),
    title: 'Ecommerce Products',
    create: 'We create product commercials, marketplace visuals, and conversion-ready ad concepts.',
    bestFor: 'Best for D2C products, Amazon/Flipkart sellers, launches, and paid ads.',
  },
  {
    ...asset('Cafes & Restaurants'),
    title: 'Food & Restaurants',
    create: 'We create food reels, ambience visuals, menu promos, and local launch creatives.',
    bestFor: 'Best for cafes, restaurants, packaged food, cloud kitchens, and offers.',
  },
  asset('Premium Brand Campaigns'),
] as const;

export function HomePortfolioTeaser() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-[linear-gradient(180deg,#030306_0%,#060610_52%,#030306_100%)] px-4 py-24 md:px-6 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(123,223,229,.045),transparent_28%),radial-gradient(circle_at_86%_54%,rgba(216,111,189,.04),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zephyr-black to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-8 max-w-4xl text-center md:mb-12">
          <p className="mb-4 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-zephyr-cyan sm:text-xs sm:tracking-[0.45em]">Work</p>
          <h2 className="text-glow font-display text-[clamp(2.15rem,8vw,4.7rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] md:text-[clamp(2.8rem,5.2vw,5.8rem)]">Explore Campaign Styles</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/64 md:mt-7 md:text-xl md:leading-8">
            From skincare and jewellery to fashion, food, fitness, creators, and product launches — see how Zephyr can make your brand look premium.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {featuredPortfolio.map((item, i) => (
            <Reveal delay={Math.min(i * 0.03, 0.15)} key={item.title} className="h-full">
              <PortfolioCard item={item} featured={i < 3} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-9 flex justify-center md:mt-12">
            <a href={portfolioUrl} className="premium-button inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-black hover:bg-zephyr-cyan hover:shadow-[0_0_28px_rgba(123,223,229,.18)]">
              View Full Portfolio
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
