/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: "#8C1D18",
          ruby:    "#A02222",
          rose:    "#C0392B",
          gold:    "#D4AF37",
          cream:   "#FFF5EC",
          ink:     "#1A1A1A"
        }
      },
      fontFamily: {
        display: ["'Spectral'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(212,175,55,0.35), 0 10px 30px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};
