/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionDuration: {
        3000: "3000ms", // 3 seconds
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
      },
    },
  },

  plugins: [],
};
