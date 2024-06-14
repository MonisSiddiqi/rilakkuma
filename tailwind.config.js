/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-hero': "url('/images/home_01.webp')",
        'home-section-2': "url('./images/section2_bg.webp')",

      },
    },
  },
  plugins: [],
}