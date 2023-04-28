const form = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [form({ strategy: "class" })],
};
