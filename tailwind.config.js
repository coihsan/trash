/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#CCFF02",
        secodary: "#A0BF28",
        coral: {
          100: "#FFFFFF",
          200: "#F0F0F0",
          300: "#E3E3E3",
          400: "#C9C9C9",
          600: "#666666",
          500: "#ADADAD",
          700: "#474747",
          800: "#333333",
          900: "#1C1C1C",
          950: "#141414",
        },
      },
    },
  },
  plugins: [],
};
