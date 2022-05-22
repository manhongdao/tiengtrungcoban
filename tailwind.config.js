module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        translate: {
            '200': '200%',
            '300': '300%',
            '400': '400%'
        },
    },
  },
  plugins: [],
}
