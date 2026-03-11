/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        'navy': '#0F172A',
        'brand-blue': '#0b66d1',
        'brand-blue-dark': '#094fb0',
        'brand-cyan': '#38bdf8',
        'brand-teal': '#2dd4bf',
        'muted-slate': '#6B7280',
        'off-white': '#F8FAFC'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      borderRadius: {
        lg: '12px',
      },
      boxShadow: {
        card: '0 8px 30px rgba(2,6,23,0.08)',
        nav: '0 4px 18px rgba(2,6,23,0.5)'
      },
      maxWidth: {
        '8xl': '90rem'
      }
    },
  },
  plugins: [],
}
