module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#0e0e0e",
        orange: "#f2662c",
      },
      screens: {
        sm: "640px", // Default: 640px
        md: "768px", // Default: 768px
        lg: "1024px", // Default: 1024px
        xl: "1280px", // Default: 1280px
        "2xl": "1536px", // Default: 1536px
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
    },
  },
  plugins: [],
};
