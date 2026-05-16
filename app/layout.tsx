import type { Metadata } from 'next';
import { Outfit, Sora, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const sora = Sora({ subsets: ['latin'], variable: '--font-body' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-accent' });

export const metadata: Metadata = {
  title: 'Zephyr AI Studio — Cinematic AI Advertising',
  description: 'Cinematic AI advertising, futuristic visual storytelling, luxury product campaigns, fashion visuals, reels, and high-end creative content.',
  openGraph: {
    title: 'Zephyr AI Studio — Cinematic AI Advertising',
    description: 'Luxury AI cinema house for futuristic advertising, fashion worlds, reels, and premium brand visuals.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sora.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
