/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8E4585",
        cream: "#FFFDF4",
        black: "#1C0041",
        white: "#ffffff",
        grey: {
          DEFAULT: "#5E5E5E",
          2: "#B3B3B3",
          dark: "#4D4D4D",
          light: "#A5A5A5",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        sans: ["Hind Madurai", "sans"],
        "sans-serif": ["Playfair Display", "sans-serif"],
        serif: ["Dancing Script", "serif"],
      },
    },
  },
  plugins: [],
};
