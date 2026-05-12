/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4338ca', // Indigo 700 as primary
        secondary: '#f3f4f6',
      }
    },
  },
  plugins: [],
}
