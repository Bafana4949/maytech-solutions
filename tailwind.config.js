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
          navy: '#0F172A',
          blue: '#2563EB',
        },
        accent: {
          blue: '#38BDF8',
        },
        background: {
          light: '#F8FAFC',
        },
        text: {
          dark: '#111827',
          muted: '#64748B',
        }
      }
    },
  },
  plugins: [],
}
