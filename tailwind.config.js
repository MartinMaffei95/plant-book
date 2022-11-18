/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: {
          100: '#D4D4D2',
          200: '#FAFAF7',
          300: '#EDEDEB',
          400: '#FFFFFC',
          500: '#949492',
        },
        dominantColor: {
          100: '#004A2A',
          200: '#00D679',
          300: '#008A4E',
          400: '#009655',
          500: '#007040',
        },
        accentColor: {
          100: '#DE7D28',
          200: '#9E591C',
          300: '#522E0F',
          400: '#5E3511',
          500: '#38200A',
        },
      },
    },
  },
  plugins: [],
};
