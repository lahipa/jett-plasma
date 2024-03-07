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
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1360px",
      "3xl": "1440px",
      "4xl": "1680px",
      "5xl": "1920px",
    },
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
        // -- neutral
        "neutral-10": "#FFFFFF",
        "neutral-20": "#F6F6F6",
        "neutral-30": "#EFEFEF",
        "neutral-40": "#E4E4E4",
        "neutral-50": "#C9C9C9",
        "neutral-60": "#AAAAAA",
        "neutral-70": "#858585",
        "neutral-80": "#737373",
        "neutral-90": "#666687",
        "neutral-100": "#1E1E1E",
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
