import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
