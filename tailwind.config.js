/** @type {import('tailwindcss').Config} */

const default_theme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "class",
  content: ["./*html"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", ...default_theme.fontFamily.sans]
      },
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "instagram-color-1": "hsl(37, 97%, 70%)",
        "instagram-color-2": "hsl(329, 70%, 58%)",
        "youtube": "hsl(348, 97%, 39%)",
        "toggle-color-1": "hsl(210, 78%, 56%)",
        "toggle-color-2": "hsl(146, 68%, 55%)",
        "toggle": "hsl(230, 22%, 74%)",
        "very-dark-blue-1": "hsl(230, 17%, 14%)",
        "very-dark-blue-2": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue": "hsl(228, 28%, 20%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "very-dark-blue": "hsl(230, 17%, 14%)"
      }
    },
  },
  plugins: [],
}

