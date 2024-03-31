/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        secondary: "#05192d",
        primary: "#03ef62",
        premium: "#7933ff",
        "primary-hover": "#00e053",
      },
    },
  },
  plugins: [],
};
