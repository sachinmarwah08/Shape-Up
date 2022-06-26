/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#272D4E",
      secondary: "#FF6000",
      black: "#1D1D1D",
      greyText: "#88898A",
      grey: "#C4C4C4",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
