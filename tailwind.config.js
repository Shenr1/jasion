/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  corePlugins: {
    preflight: false,
    tableLayout: false
  },
  purge: false,
  prefix: 'tw-',
  theme: {
    extend: {
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
        vi: {
          light: '#fcb10f',
          DEFAULT: '#ff9600',
          dark: '#de9a07',
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