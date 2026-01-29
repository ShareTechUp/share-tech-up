/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-inter)'],
      },
      colors: {
        background: '#ffffff',
        foreground: '#0f172a',

        primary: {
          DEFAULT: '#4f46e5', // indigo-600
          foreground: '#ffffff',
        },

        secondary: {
          DEFAULT: '#0f172a', // slate-900
          foreground: '#ffffff',
        },

        muted: {
          DEFAULT: '#64748b', // slate-500
          foreground: '#334155',
        },

        border: '#e2e8f0',

        accent: {
          DEFAULT: '#6366f1', // indigo-500
        },
      },
    },

  },
  plugins: [],
}
