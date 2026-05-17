const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const portfolioAssets = [
  {
    title: 'Skincare Campaigns',
    category: 'Product Launch',
    create: 'Luxury product visuals, launch reels, ingredient-story ads.',
    why: 'Makes your skincare product look premium and trustworthy.',
    image: `${basePath}/images/portfolio/portfolio-1.webp`,
    gradient: 'from-cyan-200/18 via-black/10 to-fuchsia-500/14',
  },
  {
    title: 'Cosmetics Ads',
    category: 'Beauty Creatives',
    create: 'Beauty product visuals, reels, and ad creatives.',
    why: 'Promotes beauty products without expensive models or studio shoots.',
    image: `${basePath}/images/portfolio/portfolio-2.webp`,
    gradient: 'from-fuchsia-400/18 via-black/10 to-violet-300/12',
  },
  {
    title: 'Jewellery Campaigns',
    category: 'Luxury Product',
    create: 'Cinematic jewellery shots, festive ads, and Instagram reels.',
    why: 'Makes jewellery look high-value and premium online.',
    image: `${basePath}/images/portfolio/portfolio-3.webp`,
    gradient: 'from-amber-200/18 via-black/10 to-fuchsia-400/14',
  },
  {
    title: 'Fashion & Boutique Reels',
    category: 'Fashion Launch',
    create: 'AI fashion models, clothing launch visuals, boutique reels.',
    why: 'Shows collections without costly model shoots and locations.',
    image: `${basePath}/images/portfolio/portfolio-4.webp`,
    gradient: 'from-violet-400/16 via-black/10 to-cyan-300/14',
  },
  {
    title: 'Ecommerce Product Ads',
    category: 'Product Commercials',
    create: 'Product commercials, marketplace visuals, social ads.',
    why: 'Makes ordinary products look like premium brand campaigns.',
    image: `${basePath}/images/portfolio/portfolio-5.webp`,
    gradient: 'from-cyan-300/16 via-black/10 to-white/10',
  },
  {
    title: 'Food & Restaurant Ads',
    category: 'Food Reels',
    create: 'Food reels, menu visuals, restaurant ads, festive offers.',
    why: 'Makes food look tempting and improves social engagement.',
    image: `${basePath}/images/portfolio/portfolio-6.webp`,
    gradient: 'from-amber-300/16 via-black/10 to-fuchsia-400/14',
  },
] as const;
