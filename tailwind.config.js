/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#94a3b8',
        light: '#e5e7eb',
        dark: '#1e293b'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

