/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'black': '#0D0208',
      'dark-green': '#003b00',
      'green': '#008F11',
      'light-green': '#00FF41',
      'white': '#fff'
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    }
  },
  plugins: [],
}
