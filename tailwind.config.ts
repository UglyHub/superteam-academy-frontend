import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-archivo)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        brand: {
          yellow: '#ffd23f',
          cream: '#f7eacb',
          'green-dark': '#2f6b3f',
          'green-accent': '#008c4c',
          dark: '#1b231d',
        },
        primary: {
          DEFAULT: '#ffd23f',
          400: '#ffe066',
          500: '#ffd23f',
          600: '#e6bd38',
          foreground: '#000000',
        },
        accent: {
          DEFAULT: '#008c4c',
          400: '#33cc87',
          500: '#008c4c',
          600: '#007d44',
          foreground: '#ffffff',
        },
        dark: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#1b231d',
          elevated: '#1f2723',
          surface: '#252d28',
        },
        background: '#000000',
        foreground: '#ffffff',
        card: {
          DEFAULT: '#0a0a0a',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#1b231d',
          foreground: '#6b7280',
        },
        border: 'rgba(255,255,255,0.06)',
        input: 'rgba(255,255,255,0.05)',
        ring: '#ffd23f',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(255, 210, 63, 0.5)',
        'glow-green': '0 0 20px rgba(0, 140, 76, 0.5)',
        'glow-lg': '0 0 40px rgba(255, 210, 63, 0.3)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #1b231d 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,210,63,0.05), rgba(0,140,76,0.05))',
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;