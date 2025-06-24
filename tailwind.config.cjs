/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#709dff",
          200: "#5651e5",
        },
        "athirapilly-red": "#D15029",
        'olive': '#228B22',
      },
      fontFamily: {
        poppins: [
          "Poppins",
          "sans-serif",
          "lucida-bright",
          '"Lucida Bright"',
          "Georgia",
          "serif",
        ],
        "new-century": ['"New Century Schoolbook"', "TeXGyreSchola", "serif"],
        "tex-gyre": ['"TeX Gyre Schola"', "New Century Schoolbook", "serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
