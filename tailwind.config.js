export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dfourse: ['"createattach"', "sans-serif"],
        future: ['"futuristic"', "sans-serif"],
      },
      backgroundImage: {
        jumbotron: "url('/src/assets/img/jumbotron.jpg')", // Asumsi gambar ada di direktori src/assets/img
      },
      colors: {
        dark: " #111827",
        primary: "#3490dc",
        secondary: "#f472b6",
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
        },
      },
    },
  },
  plugins: [],
};
