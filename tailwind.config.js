/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-jp': ['Noto Serif JP', 'Be Vietnam Pro', 'Noto Sans', 'serif'],
      }
    },
  },
  plugins: [],
}
