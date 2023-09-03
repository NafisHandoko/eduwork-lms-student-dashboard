/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "surface": "#EDF3FF",
          "main": "#3F85EC",
          "border": "#A2BEF6"
        },
        "neutral": {
          "10": "#FFFFFF",
          "40": "#E0E0E0",
          "60": "#9E9E9E",
          "70": "#757575"
        },
        "success": {
          "main": "#43936C",
          "surface": "#EAFFF5"
        },
        "danger": {
          "main": "#CB3A31",
          "surface": "#FFF4F2"
        },
        "text": {
          "heading": "#303030",
          "paragraph": "#676767"
        },
        "flowkit": {
          "red": "#FF0101",
          "green": "#29CC6A"
        }
      }
    },
  },
  plugins: [],
}

