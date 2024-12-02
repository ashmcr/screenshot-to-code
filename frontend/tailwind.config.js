/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      borderColor: {
        border: '#e5e7eb', // e.g. '#e5e7eb'
      },
    },
  },
  plugins: [],
}