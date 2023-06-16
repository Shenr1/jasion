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
      colors: {
        vi: {
          light: '#fcb10f',
          DEFAULT: '#fcb10f',
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