/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoDark: "#301C3B",
        logoPushti: "#db6ac1",
        logoKok: "#7366ff",

        color1: "#F0EBE3",
        color2: "#E4DCCF",
        color3: "#7D9D9C",
        color4: "#576F72",
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
