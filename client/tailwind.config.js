/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");



module.exports = withMT({
  content: [ 
    "./src/**/*.{js,html}",
],
  theme: {
    extend: {},
  },
  plugins: [],
})

