import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['var(--font-instrumental-serif)', 'serif'],
        'sans': ['var(--font-instrumental-sans)', 'sans-serif'],
      },
      colors: {
        'bg': '#FAFAFA',
        'text': '#1A1A1A',
        'accent': '#0066FF',
      },
    },
  },
  plugins: [],
}

export default config
