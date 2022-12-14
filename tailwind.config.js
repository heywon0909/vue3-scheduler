/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        primary: '#33D197',
        main: '#182747'
      }
    },
  },
  plugins: [],
}
