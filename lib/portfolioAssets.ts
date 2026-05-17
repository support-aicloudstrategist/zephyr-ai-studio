const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const portfolioAssets = [
  {
    title: 'Luxury skincare launch film',
    copy: 'Campaign preview for a skincare product launch with polished glow, texture, and premium shelf appeal.',
    num: '01',
    gradient: 'from-cyan-400/30 via-transparent to-fuchsia-500/20',
    image: `${basePath}/images/portfolio/portfolio-1.webp`,
  },
  {
    title: 'Jewelry product glow campaign',
    copy: 'Sample direction for jewelry visuals with dramatic light, close-up detail, and luxury product presence.',
    num: '02',
    gradient: 'from-fuchsia-500/30 via-transparent to-violet-500/20',
    image: `${basePath}/images/portfolio/portfolio-2.webp`,
  },
  {
    title: 'Fashion editorial reel',
    copy: 'Visual concept for boutique fashion, model-led reels, and editorial campaign storytelling.',
    num: '03',
    gradient: 'from-violet-500/30 via-transparent to-cyan-400/20',
    image: `${basePath}/images/portfolio/portfolio-3.webp`,
  },
  {
    title: 'Boutique brand launch visuals',
    copy: 'Campaign preview for boutiques launching a new collection, offer, or premium seasonal story.',
    num: '04',
    gradient: 'from-amber-200/20 via-transparent to-fuchsia-500/20',
    image: `${basePath}/images/portfolio/portfolio-4.webp`,
  },
  {
    title: 'Futuristic product social reel',
    copy: 'Sample direction for ecommerce products that need scroll-stopping visuals for social ads and reels.',
    num: '05',
    gradient: 'from-cyan-400/24 via-transparent to-white/10',
    image: `${basePath}/images/portfolio/portfolio-5.webp`,
  },
  {
    title: 'Founder story video',
    copy: 'Visual concept for founders, creators, and premium businesses that want an emotion-led brand story.',
    num: '06',
    gradient: 'from-fuchsia-500/22 via-transparent to-cyan-400/20',
    image: `${basePath}/images/portfolio/portfolio-6.webp`,
  },
] as const;
