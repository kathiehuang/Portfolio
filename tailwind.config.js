/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['open-sans', 'sans-serif'],
        mono: ['roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

