/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,json}",
    './src/features/**/*.{js,ts,jsx,tsx,mdx,json}',
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F8F5EF",
        primary: "#41C0F0",
        "surface-primary": "#F5F8FF",
        "border-primary": "#AAC3FC",
        warning: "#FAB000",
        "surface-warning": "#FEFAEF",
        "border-warning": "#FDE5AA",
        danger: "#F54A45",
        "surface-danger": "#FFF0F0",
        "border-danger": "#FCC3C1",
        success: "#03A08B",
        "surface-success": "#F0FFFD",
        "border-success": "#95C7C0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [forms, typography],
};
