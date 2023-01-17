/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Basier Circle', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}
