/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors:{
        "lightPink": "hsl(275, 100%, 97%)",
        "grayishPurple": "hsl(292, 16%, 49%)",
        "darkPurple": "hsl(292, 42%, 14%)"
      },
      fontFamily: {
        'sans': ['Work Sans','sans-serif' ],
      }
    },
  },
  plugins: [],
}


