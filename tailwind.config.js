/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js',
  ],
  corePlugins: {
    preflight: false,
    tableLayout: false
  },
  purge: false,
  prefix: 'tw-',
  theme: {
    extend: {
      translate: {
        '1/5': '20%',
        '1/6': '16.6666%',
        '1/8': '12.5%',
        '1/10': '10%'
      },
      backgroundSize:{
        '1/2': '50%',
        '2/3': '66.6666%',
        '3/4': '75%'
      },
      screens: {
        '3xl': {'min': '1535px'},
        '2xl': {'min': '1440px'},
      },
      margin: {
        '18': '4.5rem',
        '13': '3.25rem'
      },
      padding: {
        '18': '4.5rem',
        '13': '3.25rem'
      },
      colors: {
        black: {
          DEFAULT: '#1A1A1A',
        },
        vi: {
          light: '#ff9600',
          DEFAULT: '#ff9600',
          dark: '#ff9600',
        },
        viGray: {
          light: '#dbdbda',
          DEFAULT: '#dbdbda',
          dark: '#dbdbda',
        }
      }
    },
  },
  plugins: []
}