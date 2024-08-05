/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          'BodyFont': ['Montserrat', 'sans-serif'],
          'HeadingFont': ['Playfair Display', 'serif'],
        },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "black-maron": "#291f1d",
        "bleu-ciel": "#c2d2e1",
        "orange": "#e35733",
        "jaune": "#fbbc3b",
        "blanc": "#FFFFF7",
        "blanc1": "#fbf7eb"
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};
