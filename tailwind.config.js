/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    colors: {
      'blue': '#060526',
      'white': '#ffffff',
      'red': '#DC2727',
      'black': '#000000',
      'green': '#317221'
    },
    extend: {},
  },
}

