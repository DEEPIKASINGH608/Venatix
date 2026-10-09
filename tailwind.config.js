/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#2A040A',
          900: '#4A0811',
          800: '#5B0E1B',
          700: '#7A1020',
        },
        gold: {
          300: '#F5D77F',
          400: '#E5B85C',
          500: '#D9A441',
          600: '#B88428',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        ivory: '#FFF9EF',
        cream: '#F7F0E5',
      },
      fontFamily: {
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}