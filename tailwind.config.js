module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: "class",
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
      },
      colors: {
        "black-2": "#1D1D1F",
        "black-2-hover": "#272729",
        "light-grey": "#F5F5F7",
        "mid-grey": "#DDDDE1",
        "dark-grey": "#86868B",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      minHeight: {
        "card-sm": "600px",
        "card-lg": "800px",
      },
      borderRadius: {
        md: "30px",
        lg: "40px",
      },
    },
  },
};
