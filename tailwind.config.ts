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
        'im-black': '#ffffff',
        'im-deep': '#faf9f7',
        'im-dark': '#f5f3ef',
        'im-cream': '#111111',
        'im-gold': '#c8a96e',
        'im-green': '#2d4a3e',
        'im-text-dark': '#111111',
        'im-text-light': '#111111',
        'im-muted': '#888888',
        'im-text-muted': '#aaaaaa',
        'im-border': '#e5e7eb',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
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
