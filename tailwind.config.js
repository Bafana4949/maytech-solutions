/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0B1120',
          blue: '#1D4ED8', // Royal-like blue
        },
        accent: {
          cyan: '#06B6D4',
          blue: '#38BDF8',
        },
        background: {
          light: '#F8FAFC',
          grey: '#F3F4F6',
        },
        text: {
          dark: '#0F172A',
          muted: '#64748B',
        }
      }
    },
  },
  plugins: [],
}
