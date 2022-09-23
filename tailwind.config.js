/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./pages/**/*.{js,ts,jsx,tsx}",
    	"./components/**/*.{js,ts,jsx,tsx}",
    	],
  theme: {
    extend: {
      colors: {
        'main': '#3FA796',    
        'secondary': '#FF8C32',        
      },
      fontFamily: {
        sans: ['Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

