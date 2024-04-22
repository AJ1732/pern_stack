/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "teal",
        darkshade: "#21252B",
        lightshade: "#D3DDEF",
        greyshade: "#383D46"
      },
      fontFamily: {
        "dm-serif": ["DM Serif Display", "serif"],
        "poppins": ["Poppins", "sans-serif"],
        "lora": ["Lora", "serif"],
      }
    },
  },
  plugins: [],
}

