import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          400: '#ffe066',
          500: '#ffd23f',
          600: '#e6bd38',
        },
        accent: {
          400: '#33cc87',
          500: '#008c4c',
          600: '#007d44',
        },
        dark: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#1b231d',
          elevated: '#1f2723',
          surface: '#252d28',
        },
      },
      backgroundImage: {
        'xp-gradient': 'linear-gradient(135deg, #008c4c, #ffd23f)',
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #1b231d 100%)',
      },
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(255, 210, 63, 0.5)',
        'glow-green': '0 0 20px rgba(0, 140, 76, 0.5)',
        'glow-xp': '0 0 30px rgba(0, 140, 76, 0.7)',
      },
    },
  },
  plugins: [],
};

export default config;