/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'serif' : 'DM Serif Display',
        'script' : 'Dancing Script',
        'kodchasan' : 'Kodchasan',
        'lateef' : 'Lateef',
        'crushed' : 'Crushed',
      },
      colors : {
        'hd-red' : '#ED6C5D',
        'hd-gray' : '#00000082',
        'hd-dark' : '#000000',
      }
    },
  },
  plugins: [],
}