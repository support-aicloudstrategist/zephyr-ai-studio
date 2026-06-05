import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://support-aicloudstrategist.github.io/zephyr-ai-studio/';
const socialImage = 'https://support-aicloudstrategist.github.io/zephyr-ai-studio/images/cinematic-fashion-campaign-preview.jpg';
const socialTitle = 'AI Creative Studio — Cinematic AI Ads & Premium Brand Visuals';
const socialDescription = 'Premium AI-powered ads, reels, product visuals, and launch campaigns for modern brands without expensive shoots.';

export const metadata: Metadata = {
  metadataBase: new URL('https://support-aicloudstrategist.github.io'),
  title: socialTitle,
  description: socialDescription,
  alternates: { canonical: siteUrl },
  icons: {
    icon: '/zephyr-ai-studio/assets/brand/aics-logo.svg',
    shortcut: '/zephyr-ai-studio/assets/brand/aics-logo.svg',
    apple: '/zephyr-ai-studio/assets/brand/aics-logo.svg',
  },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: siteUrl,
    siteName: 'AI Creative Studio',
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'AI Creative Studio cinematic AI brand visuals preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: socialTitle,
    description: socialDescription,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
