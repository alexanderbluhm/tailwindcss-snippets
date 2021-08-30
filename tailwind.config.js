const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./remark/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {...colors, "transparent": "transparent"},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
