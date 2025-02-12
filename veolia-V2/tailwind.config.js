/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fondoMenu: 'rgb(110,110,112)',
        headTable: '#8c8c8c',
        borderLetfTable: '#ff3333',
        borderTable: '#eaedef',
      },
    },
  },
  plugins: [],
}

