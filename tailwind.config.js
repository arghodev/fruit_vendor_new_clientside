/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico", "serif"],
        Nunito: ["Nunito", "serif"],
      },
    },
    colors: {
      "light-green": "#82d577",
    },
  },
  plugins: [require("daisyui")],
};
