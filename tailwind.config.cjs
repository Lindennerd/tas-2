/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
    plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core"),
  ],
};