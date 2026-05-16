import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zephyr: {
          black: '#030306',
          ink: '#070812',
          cyan: '#00f5ff',
          magenta: '#ff2bd6',
          violet: '#8c5cff',
          gold: '#f8d58c',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui'],
        accent: ['var(--font-accent)', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        neon: '0 0 35px rgba(0,245,255,.35), 0 0 80px rgba(255,43,214,.15)',
        magenta: '0 0 40px rgba(255,43,214,.3)',
      },
      backgroundImage: {
        'radial-cinema': 'radial-gradient(circle at 20% 20%, rgba(0,245,255,.22), transparent 28%), radial-gradient(circle at 80% 10%, rgba(255,43,214,.18), transparent 30%), radial-gradient(circle at 50% 90%, rgba(140,92,255,.16), transparent 35%)',
      },
    },
  },
  plugins: [],
};
export default config;
