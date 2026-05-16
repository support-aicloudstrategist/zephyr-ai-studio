import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/zephyr-ai-studio' : '' },
  ...(isGithubPages
    ? {
        basePath: '/zephyr-ai-studio',
        assetPrefix: '/zephyr-ai-studio/',
      }
    : {}),
};

export default nextConfig;
