/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Borel': "'Borel', cursive",
        'Merriweather': "'Merriweather', serif",
        'Sans': "'Open Sans', sans-serif",
        'Poppins': "'Poppins', sans-serif",
        'Roboto': "'Roboto Mono', monospace",
      },
      colors:{
        "bookBtn":"#1d4ed8",
        "borderClr":"rgba(0,0,0,0.05)",
        "borderClrDark":"rgba(255,255,255,0.05)",
        "secondaryBG":"rgba(0,0,0,0.1)",
        "inputBorder":"rgba(109,107,107,0.49)",
        "textDark":"rgba(255,255,255,0.5)"
      },
    },
  },
  plugins: [],
}


