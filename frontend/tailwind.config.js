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
        blue3: "#152C5B",
        red1: "#E74C3C",
        green1: "#1ABC9C",
        yellow1: "#FFCC47",
        gray1: "#B0B0B0", // Color for stroke
        gray2: '#d1d5db', // Custom gray color
        gray3: "#F5F6F8"
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
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-in-top': 'slide-in-top 0.6s ease-out',
        'slide-in-bottom': 'slide-in-bottom 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
