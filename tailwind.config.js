/** @type {import('tailwindcss').Config} */

import scrollbarHide from 'tailwind-scrollbar-hide';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
    },
    fontFamily:{
      raleway:["Raleway","sans-serif"],
      inter:["Inter","sans-serif"],
      newspaper:["Noticia Text","serif"]
    }
  },
  plugins: [scrollbarHide,],
}