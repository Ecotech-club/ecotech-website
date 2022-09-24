/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./pages/**/*.{js,ts,jsx,tsx}",
    	"./components/**/*.{js,ts,jsx,tsx}",
    	],
  theme: {
    extend: {
      colors:{
        green:"#3FA796"
      }
    },
  },
  plugins: [],
}
