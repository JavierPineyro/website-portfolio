/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: '#151515',
        main: '#fb7185',
        'mid-main': '#fb7185',
        'light-main': '#fda4af',
        navigation: '#18181b',
        lightGray: '#d1d5db',
      },
    },
  },
  plugins: [],
})