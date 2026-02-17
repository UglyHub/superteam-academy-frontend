import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Superteam BR Brand Colors
        superteam: {
          yellow: '#ffd23f',
          beige: '#f7eacb',
          'green-dark': '#2f6b3f',
          'green-bright': '#008c4c',
          black: '#1b231d',
        },
        
        // Primary (Yellow)
        primary: {
          50: '#fffbf0',
          100: '#fff8e1',
          200: '#fff3cc',
          300: '#ffe699',
          400: '#ffd966',
          500: '#ffd23f',
          600: '#e6bd38',
          700: '#cca831',
          800: '#b39329',
          900: '#997d22',
        },
        
        // Accent (Bright Green)
        accent: {
          50: '#e6f9f0',
          100: '#ccf2e1',
          200: '#99e6c3',
          300: '#66d9a5',
          400: '#33cc87',
          500: '#008c4c',
          600: '#007d44',
          700: '#006e3c',
          800: '#005f34',
          900: '#00502c',
        },
        
        // Secondary (Dark Green)
        secondary: {
          500: '#2f6b3f',
          600: '#295f38',
          700: '#235331',
        },
        
        // Dark backgrounds
        dark: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#1b231d',
          elevated: '#1f2723',
          surface: '#252d28',
          'surface-hover': '#2f3a33',
        },
        
        // XP colors
        xp: {
          DEFAULT: '#008c4c',
          glow: '#008c4c',
        },
        
        // Streak colors
        streak: {
          yellow: '#ffd23f',
          orange: '#ff8c42',
        },
        
        // Level colors
        level: {
          bronze: '#cd7f32',
          silver: '#c0c0c0',
          gold: '#ffd23f',
          platinum: '#e5e4e2',
          emerald: '#008c4c',
        },
      },
      
      backgroundImage: {
        'xp-gradient': 'linear-gradient(135deg, #008c4c, #ffd23f)',
        'streak-gradient': 'linear-gradient(135deg, #ffd23f, #ff8c42)',
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #1b231d 100%)',
      },
      
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(255, 210, 63, 0.5)',
        'glow-green': '0 0 20px rgba(0, 140, 76, 0.5)',
        'glow-xp': '0 0 30px rgba(0, 140, 76, 0.7)',
        'glow-brand': '0 0 25px rgba(255, 210, 63, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;