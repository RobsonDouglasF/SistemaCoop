/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js}",
    "./index.html"
  ],
  theme: {
    extend: {
      height: {
        '128': '27.5rem',
      },
      width: {
        '45': '11.7rem'
      }
    },
  },
  plugins: [],
}

