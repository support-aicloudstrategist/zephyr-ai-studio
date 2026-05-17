const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const portfolioAssets = [
  {
    title: 'Luxury Skincare Launch',
    category: 'Product Campaign',
    copy: 'Soft light, glass reflections, premium textures, and cinematic close-ups for skincare and beauty brands.',
    label: 'Concept showcase',
    image: `${basePath}/images/portfolio/portfolio-1.webp`,
    gradient: 'from-cyan-200/18 via-black/10 to-fuchsia-500/16',
  },
  {
    title: 'Jewelry Glow Campaign',
    category: 'Luxury Product Film',
    copy: 'Dark luxury lighting, metallic highlights, macro details, and elegant motion for jewelry and accessories.',
    label: 'Sample campaign',
    image: `${basePath}/images/portfolio/portfolio-2.webp`,
    gradient: 'from-fuchsia-400/18 via-black/10 to-amber-200/12',
  },
  {
    title: 'Fashion Editorial Reel',
    category: 'AI Fashion Campaign',
    copy: 'Realistic AI fashion models, editorial styling, atmospheric lighting, and social-first motion.',
    label: 'Visual direction',
    image: `${basePath}/images/portfolio/portfolio-3.webp`,
    gradient: 'from-violet-400/18 via-black/10 to-cyan-300/14',
  },
  {
    title: 'Boutique Brand Launch',
    category: 'Brand Visual System',
    copy: 'Premium campaign visuals for small businesses that want to look polished, modern, and high-end.',
    label: 'Campaign preview',
    image: `${basePath}/images/portfolio/portfolio-4.webp`,
    gradient: 'from-amber-200/16 via-black/10 to-fuchsia-400/14',
  },
  {
    title: 'Founder Story Visual',
    category: 'Storytelling Video',
    copy: 'Emotion-led visuals for founders, creators, and premium personal brands.',
    label: 'Concept showcase',
    image: `${basePath}/images/portfolio/portfolio-6.webp`,
    gradient: 'from-fuchsia-400/16 via-black/10 to-cyan-300/14',
  },
] as const;
