import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins:
        'Poppins, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        orange: {
          50: "#fbe9e7",
          100: "#feccbc",
          200: "#feac90",
          300: "#fe8b64",
          400: "#fd7241",
          500: "#fd5a1f",
          600: "#f2541b",
          700: "#e44d16",
          800: "#d64612",
          900: "#bd3909",
        },
        sky: {
          50: "#e2f1ff",
          100: "#badcff",
          200: "#8ec7ff",
          300: "#5fb1ff",
          400: "#3ba0ff",
          500: "#188fff",
          600: "#1e81f0",
          700: "#206fdc",
          800: "#205dca",
          900: "#1f3eaa",
        },
        blue: {
          50: "#e7eaf8",
          100: "#c3c9ed",
          200: "#9aa7e0",
          300: "#7185d4",
          400: "#4f69cb",
          500: "#274fc2",
          600: "#2047b8",
          700: "#123dac",
          800: "#0033a0",
          900: "#00208c",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
