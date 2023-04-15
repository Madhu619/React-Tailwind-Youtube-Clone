/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      height: {
        "40px": "40px",
      },
      margin: {
        default: "15px",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        base: "16px",
        large: "18px",
        "x-large": "24px",
      },
    },
  },
  plugins: [],
};
