/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        softGray: "#FBFBFB",
        borderColor: "#DCDFEA",
        darkGray: "#F4F5F6",
        darkBlue: "#30374F",
        softBlue: "#7D89B0",
      },
      height: {
        "header-height": "calc(100% - 72px)",
      },
    },
  },
  plugins: [],
};
