const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"],
      },
      colors: {
        "primary-gray": {
          DEFAULT: "#F7F7FB",
          200: "#E8E8FB",
          300: "#BFBFE3",
        },
        yellow: {
          50: "#FFFDF0",
          100: "#FFFCE1",
          200: "#FEF7B9",
          300: "#FDF390",
          400: "#FDED5E",
          500: "#FCE72D",
          600: "#E7D103",
          700: "#CEBA03",
          800: "#AB9A02",
          900: "#7E7102",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/img/hero.svg)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
