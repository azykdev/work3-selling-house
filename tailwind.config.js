/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#ffffff",
        color2: "#ffefe2",
        color3: "#edcaac",
        color4: "#ededed",
        color5: "#2a2a2a",
      },
      fontFamily: {
        poppinsRegular: ["poppins-regular", "sans-serif"],
        poppinsBold: ["poppins-bold", "sans-serif"],
      },

    },
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
