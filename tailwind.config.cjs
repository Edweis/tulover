/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Basier Circle', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      ...colors,
      black: {
        DEFAULT: '#000000',
      },
      gray: {
        muted: '#878787', // muted text
        500: '#161618',
        800: '#212122',
      },
      blue: {
        100: '#AFD3FF',
        500: '#0C79FF',
        900: '#17212B',
      },
    },
    outlineWidth: {},
    outlineOffset: {},
    outlineColor: {},
    extend: {},
  },
  plugins: [],
};
