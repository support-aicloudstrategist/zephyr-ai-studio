const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const portfolioAssets = [
  {
    title: 'AI Product Films',
    copy: 'Chrome, glass and neon staged like a luxury launch film.',
    num: '01',
    gradient: 'from-cyan-400/30 via-transparent to-fuchsia-500/20',
    image: `${basePath}/images/portfolio/portfolio-1.webp`,
  },
  {
    title: 'Fashion Worlds',
    copy: 'Editorial silhouettes, synthetic rain, texture and attitude.',
    num: '02',
    gradient: 'from-fuchsia-500/30 via-transparent to-violet-500/20',
    image: `${basePath}/images/portfolio/portfolio-2.webp`,
  },
  {
    title: 'Vertical Reels',
    copy: 'Trailer-cut attention systems for launches, drops and reels.',
    num: '03',
    gradient: 'from-violet-500/30 via-transparent to-cyan-400/20',
    image: `${basePath}/images/portfolio/portfolio-3.webp`,
  },
  {
    title: 'Entertainment Teasers',
    copy: 'Impossible scenes, poster energy and narrative pulse.',
    num: '04',
    gradient: 'from-amber-200/20 via-transparent to-fuchsia-500/20',
    image: `${basePath}/images/portfolio/portfolio-4.webp`,
  },
  {
    title: 'Launch Creatives',
    copy: 'Hero visuals with premium consistency across every format.',
    num: '05',
    gradient: 'from-cyan-400/24 via-transparent to-white/10',
    image: `${basePath}/images/portfolio/portfolio-5.webp`,
  },
  {
    title: 'Luxury Brand Visuals',
    copy: 'Polished campaign identity for expensive positioning.',
    num: '06',
    gradient: 'from-fuchsia-500/22 via-transparent to-cyan-400/20',
    image: `${basePath}/images/portfolio/portfolio-6.webp`,
  },
] as const;
