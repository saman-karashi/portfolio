/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{js,jsx}',
    './components/*.{js,jsx}'
  ],
  theme: {
    screens:{
    sm:'480px',
    md:'768px',
    lg:'1280px',
    xl:'1440px'
    },

    extend: {
    colors:{
    "green-400":'#7cea9c',
    "blue-400":"#1b98e0",
    "dark-700":'#13293d',
    "red-300":"#ef626c"
    },
    },
  },
  plugins: [],
}
