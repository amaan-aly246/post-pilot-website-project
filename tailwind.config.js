/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FF6D2C',
        'primaryColor-1': '#009387',
        'primaryColor-1.2': '#E0F8F2',
        'secondaryColor-1': '#FDC639',
        'secondaryColor-2': '#58595D',
        'secondaryColor-3': '#D9F2F7',
        'secondaryColor-4': '#EEECFF',
        'secondaryColor-5': '#FAEDED',
        'secondaryColor-6': '#FDF3EA',
        'secondaryColor-7': '#2E2F35',
      },
    },
    fontFamily: {
      'myFont-Playwrite': '"Playwrite IT Moderna", cursive',

    },
  },


  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}