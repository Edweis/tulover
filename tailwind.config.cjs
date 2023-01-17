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
        300: '#848486',
        500: '#858588',
        800: '#161617',
      },
      blue: {
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
