/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico", "serif"],
        Nunito: ["Nunito", "serif"],
      },
      colors: {
        "light-green": "#82d577",
        "light-pink": "#ff968f",
        "deep-green": "#2C7764",
        "extra-orange": "#FF9900",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-motion")],
};
