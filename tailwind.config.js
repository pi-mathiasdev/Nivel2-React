// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bladeExtend: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        bladeExtend: "bladeExtend 1.5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
