/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Font families
    'font-sans', 'font-heading', 'font-mono',
    
    // Text colors
    {
      pattern: /^text-.*$/,
      variants: ['hover', 'focus', 'dark'],
    },
    
    // Background colors
    {
      pattern: /^bg-.*$/,
      variants: ['hover', 'focus', 'dark'],
    },
    
    // Border colors
    {
      pattern: /^border-.*$/,
      variants: ['hover', 'focus', 'dark'],
    },
    
    // Responsive variants
    {
      pattern: /^(sm|md|lg|xl|2xl):.*$/,
    },
    
    // State variants
    {
      pattern: /^(hover|focus|active|disabled|dark):.*$/,
    },
    
    // Specific component classes that might be generated dynamically
    'card', 'card-dark', 'card-light', 'card-glass', 'card-gradient',
    'btn', 'btn-primary', 'btn-secondary', 'btn-dark', 'btn-light', 'btn-accent',
    'hero-container', 'grid-bg',
    
    // Flexbox
    {
      pattern: /^flex-.*$/,
    },
    {
      pattern: /^items-.*$/,
    },
    {
      pattern: /^justify-.*$/,
    },
    
    // Grid
    {
      pattern: /^grid-cols-\d+$/,
    },
    {
      pattern: /^(md|lg):grid-cols-\d+$/,
    },
    {
      pattern: /^col-span-\d+$/,
    },
    {
      pattern: /^(md|lg):col-span-\d+$/,
    },
    
    // Animation classes
    'animate-spin', 'animate-ping', 'animate-pulse', 'animate-bounce',
    'animate-fade-in', 'animate-slide-in', 'animate-glow',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0077C8',
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#0077C8',
          600: '#0061a3',
          700: '#004d7f',
          800: '#003b5c',
          900: '#002438',
        },
        secondary: {
          DEFAULT: '#404040',
          50: '#f7f7f7',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1a1a1a',
        },
        accent: {
          DEFAULT: '#F79421',
          50: '#fff7e6',
          100: '#ffefc0',
          200: '#ffe099',
          300: '#ffcf66',
          400: '#ffbd33',
          500: '#ffac00',
          600: '#F79421',
          700: '#cc8a00',
          800: '#996800',
          900: '#664600',
        },
        dark: {
          50: "#ebeced",
          100: "#d7d9db",
          200: "#afb3b7",
          300: "#878d93",
          400: "#5f666f",
          500: "#343a40", // Main dark color
          600: "#2a2e33",
          700: "#1f2326",
          800: "#15171a",
          900: "#0a0c0d",
        },
        light: {
          50: "#ffffff",
          100: "#fefefe",
          200: "#fdfdfd",
          300: "#fcfcfc",
          400: "#fafbfb",
          500: "#f8f9fa", // Main light color
          600: "#c6c7c8",
          700: "#959596",
          800: "#636364",
          900: "#323232",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Zen Dots', 'cursive'],
        mono: ['Roboto Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
        '3xs': '0.5rem',   // 8px
      },
      spacing: {
        '18': '4.5rem',    // 72px
        '72': '18rem',     // 288px
        '80': '20rem',     // 320px
        '96': '24rem',     // 384px
        '128': '32rem',    // 512px
      },
      borderRadius: {
        'xl': '1rem',        // 16px
        '2xl': '1.5rem',     // 24px
        '3xl': '2rem',       // 32px
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-xl': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}