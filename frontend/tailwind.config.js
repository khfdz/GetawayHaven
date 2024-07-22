/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink1: "#FF498B",
        pink2: "#B03060",
        blue1: "#3252DF",
        blue2: "#152C5B",
        yellow1: "#FFCC47",
        gray1: "#B0B0B0", // Color for stroke
        gray2: '#d1d5db', // Custom gray color
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'custom-rounded': '100px 15px 100px 15px', // Custom border-radius
      },
      spacing: {
        '40px': '40px',
        '50px': '50px',
        '-12px': '-12px',
        '-10px': '-10px',
      },
      transform: {
        'scale-09': 'scale(1.09)',
      },
      borderWidth: {
        '2': '2px',
      },
      fontSize: {
        'xxs': '0.5rem',
      }
    },
  },
  plugins: [],
}
