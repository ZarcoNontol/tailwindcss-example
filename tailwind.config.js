module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Saira", "sans-serif"],
    },
    extend: {
      colors: {
        "gm2-orange": "#ff5900",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
