/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "skyBlue" : "#5da8ef",
        "dimBlack" : "#0b0c11",
        "lightBlack" : "#333333",
        "lightGray" : "#8f8f8f",
        "lighterGray" : "#f5f5f5",
        "gray" : "#7a7a7a",
        "midGray" : "#a2a2a2",
        "pink" : "#ce60a8",
      },
      fontFamily : {
        'playfair': ['"playfair"'],
        'lspartan': ['"lspartan"'],
        'poppins': ['"poppins"'],
      },
      boxShadow : {
        "shadow-3xl" : "-40px 13px 40px 0px #00000020"          
      }
    },
  },
  plugins: [],
}

