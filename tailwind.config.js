module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        box: "#232323",
        logo_red: "#FF2B06",
        box_red: "#73150F",
      },
      extend:{
        clipPath:{
          'parallelogram':"polygon(25% 0, 100% 0%, 75% 100%, 0% 100%)"

        }
      }
    },
  },
  plugins: [],
};
