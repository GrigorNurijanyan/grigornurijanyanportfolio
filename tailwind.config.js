const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#FF5656",
          50: "#ffe5e5",
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff5656",
          600: "#cc4545",
          700: "#993434",
          800: "#662323",
          900: "#331212",
        },
      },
      fontSize: {
        md: "1rem",
        md1: "1.5rem",
        md2: "2rem",
        lg: "2.5rem",
        xl: "3.125rem",
      },
    },
  },
  darkMode: "className",
  plugins: [nextui()],
};
