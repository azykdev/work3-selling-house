/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
      xxl: "2560px",
    },
  },
  plugins: [],
};
