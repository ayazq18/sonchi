/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}", // if you're using a /src directory
    ],
    safelist: ['font-germania', 'font-manrope', 'font-poppins'],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['var(--font-poppins)', 'sans-serif'], // optional custom font
          germania: ['var(--font-germania-one)'],
          manrope: ['var(--font-manrope)'],
        },
      },
    },
    plugins: [],
  }
  