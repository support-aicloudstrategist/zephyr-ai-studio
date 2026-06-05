import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zephyr: {
          black: '#071827',
          ink: '#0f2438',
          cyan: '#2de2c5',
          magenta: '#d86fbd',
          violet: '#7aa7ff',
          gold: '#f6b94b',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui'],
        accent: ['var(--font-accent)', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        neon: '0 0 22px rgba(123,223,229,.18), 0 0 46px rgba(216,111,189,.08)',
        magenta: '0 0 24px rgba(216,111,189,.16)',
      },
      backgroundImage: {
        'radial-cinema': 'radial-gradient(circle at 20% 20%, rgba(123,223,229,.10), transparent 30%), radial-gradient(circle at 80% 10%, rgba(216,111,189,.08), transparent 32%), radial-gradient(circle at 50% 90%, rgba(117,98,181,.08), transparent 38%)',
      },
    },
  },
  plugins: [],
};
export default config;
