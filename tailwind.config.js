const defaultTHeme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      sans: ["GT America", ...defaultTHeme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
