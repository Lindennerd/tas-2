/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ofcprimary: '#3f51b5',
        ofcsecondary: '#2C4E7F'
      }
    },
  },
    plugins: [
    require("@tailwindcss/forms"),
      require("@vechaiui/core")({
        color: ["ofcprimary", "ofcsecondary"],
    })
  ],
};