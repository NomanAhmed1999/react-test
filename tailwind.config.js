/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sxl': '2000px',
      // => @media (min-width: 640px) { ... }

      'sxxl': '2300px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
}

