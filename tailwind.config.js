/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary palette
        forest: {
          DEFAULT: '#1B3A2D',
          50:  '#EEF7E8',
          100: '#D4EEC8',
          200: '#AADDA0',
          300: '#7DC44E',
          400: '#4FAA2A',
          500: '#2F7A1E',
          600: '#1B5A16',
          700: '#1B3A2D',
          800: '#0F2018',
          900: '#060F0A',
        },
        mint: {
          DEFAULT: '#D4F0C0',
          light:   '#EEF7E8',
          bright:  '#C8F4A0',
        },
        leaf: '#7DC44E',
        // Neutral
        carbon: '#0A1A10',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'slide-left':  'slideLeft 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'float':       'float 3s ease-in-out infinite',
        'pulse-slow':  'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:   { '0%': { opacity: 0, transform: 'translateY(40px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:   { '0%': { opacity: 0 },                               '100%': { opacity: 1 } },
        slideLeft:  { '0%': { opacity: 0, transform: 'translateX(-40px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
        slideRight: { '0%': { opacity: 0, transform: 'translateX(40px)' },  '100%': { opacity: 1, transform: 'translateX(0)' } },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card':  '0 4px 24px rgba(27, 58, 45, 0.12)',
        'card-hover': '0 12px 40px rgba(27, 58, 45, 0.22)',
        'glow':  '0 0 40px rgba(125, 196, 78, 0.3)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
