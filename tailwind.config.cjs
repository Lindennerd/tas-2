/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   primary: '#3f51b5',
      //   secondary: '#2C4E7F'
      // }
    },
  },
    plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core"),
  ],
};