import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'im-black': '#0d0d0d',
        'im-deep': '#1a1a1a',
        'im-cream': '#f5f0e8',
        'im-gold': '#c8a96e',
        'im-green': '#2d4a3e',
        'im-text-dark': '#111111',
        'im-text-light': '#f5f5f5',
        'im-muted': '#888888',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.15em',
        'widest-3': '0.2em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
export default config
