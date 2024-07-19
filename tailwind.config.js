/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "hsl(var(--transparent) / <alpha-value>)",
      primary: "hsl(var(--primary) / <alpha-value>)",
      secondary: "hsl(var(--secondary) / <alpha-value>)",
      shadow: "hsl(var(--shadow) / <alpha-value>)",
      background: "hsl(var(--background) / <alpha-value>)",
      white: "hsl(var(--white) / <alpha-value>)",
      alert: "hsl(var(--alert) / <alpha-value>)",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
