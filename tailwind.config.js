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
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "text-primary": "#1C1D24",
        "text-secondary": "#40414a",
        "bg-primary": "#1C1D24",
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
    },
  },
};
