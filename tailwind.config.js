const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "media",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./remark/**/*.js",
  ],
  theme: {
    colors: { ...colors, transparent: "transparent" },
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
