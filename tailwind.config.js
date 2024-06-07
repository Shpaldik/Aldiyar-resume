/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#00D47E', // Название цвета и его значение
        gray: '#0F172A',
        border: '#141C30',
        blue: "#050822",
      },
      screens: {
        'smaller': {'max': '375px'}, // Кастомный медиазапрос для 375px и ниже
        'middle': {'max': '850px'},
        'mb': {'max': '765px'},
      },
    },
  },
  plugins: [],
}

