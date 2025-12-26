/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
 colors: {
        brand: {
          primary: "#372B51",
          accent: "#C6A13D",     // gold
          secondaryAccent: "#C93138",
        },
        surface: {
          page: "#FFFFFF",
          subtle: "#F9FAFB",
        },
        text: {
          primaryText: "#000000",
          muted: "#CFCFCF",
          inverse: "#FFFFFF",
        },
        border: {
          primaryBorder: "#372B51",
          secondaryBorder: "#C6A13D",
        },
        focus: {
          ring: "#C93138", //wanted to use blue for familiarity but there's no actual heuristic colour for this
        },
      },
      borderRadius: {
        brandCard: "8px",
        brandButton: "60px",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },
      fontSize: {
        sectionBody: "20px",
        cardBody: "14px",
        h1: "30px", //come to this later on
        h2: "44px",
        h4: "18px",
      },
 
    },
  },
  plugins: [],
};
 
 