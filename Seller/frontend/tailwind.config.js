/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        goldenpink:{
          500: "#d1c0a6"
        },
      }
    },
  },
  plugins: [],
}

