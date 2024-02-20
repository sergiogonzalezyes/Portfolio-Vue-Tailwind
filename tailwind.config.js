/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#000d01",
        "weather-secondary": "#002202",
        "weather-tertiary": "#003403",

        "light-primary": "#f4f4f4",
        "light-secondary": "#f8f8f8",
        "light-tertiary": "#fcfcfc",
      }
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      "xxs": "320px",
      "xs": "360px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}

