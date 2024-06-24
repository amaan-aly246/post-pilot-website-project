/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange': '#FF6D2C',
        'primaryColor-1': '#009387',
        'primaryColor-1.2': '#E0F8F2',
        'secondaryColor-1': '#FDC639',
        },
    },
    fontFamily:{
      'myFont-Playwrite': '"Playwrite IT Moderna", cursive',

    },
  },
  
 
  plugins: [],
}