module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "sans-serif"],
      serif: ["Garamond", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
