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
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
