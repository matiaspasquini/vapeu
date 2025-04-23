/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#353a8c',
        'brand-orange': '#cf5f34',
        'brand-gray': '#757774',
      },
    },
  },
  plugins: [],
}