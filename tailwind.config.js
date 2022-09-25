/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./pages/**/*.{js,ts,jsx,tsx}",
    	"./components/**/*.{js,ts,jsx,tsx}",
    	],
  theme: {
    screens:{
      'xs':'400px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',

    },
    extend: {
      
        colors: {
          'main': '#3FA796',    
          'secondary': '#FF8C32',  
          'CveEvent' :'#F5BF91',
          
          
        

        },
        fontFamily: {
          sans: ['Spartan', 'sans-serif'],
        },
      
    },
  },
  plugins: [],
}
