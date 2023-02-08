/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#202020',
        whity: {
          100: '#e3e3e3',
          300: '#c3c3c3',
          500: '#a3a3a3',
        },
      },
    },
  },
  plugins: [],
})
