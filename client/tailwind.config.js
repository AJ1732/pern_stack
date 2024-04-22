/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#008080',
        'orange': '#FFA048',
        'darkshade': '#222327',
        'lightshade': '#D3DDEF',
        'greyshade': '#292B31',
        'halfwhite': '#FFFFFF80',
        'textshade': '#989CAA',
      },
      fontFamily: {
        'dm-serif': ['DM Serif Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}

