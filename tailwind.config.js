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
          'background':'#079d9c',
          'main': '#3FA796',    
          'secondary': '#FF8C32',  
          'secondary2' :'#DDE226',
          
          
        

        },
        fontFamily: {
          sans: ['Spartan', 'sans-serif'],
        },
      
    },
  },
  plugins: [],
}
