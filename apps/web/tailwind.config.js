// apps/web/tailwind.config.js
// module.exports = require('../../tailwind.config.js')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/App.tsx"],
  theme: {
    extend: {
      colors: {
        orange1: "#28231f",
        orange2: "#2e261f",
        orange3: "#412e1c",
        orange4: "#533009",
        orange5: "#5f380d",
        orange6: "#6c451b",
        orange7: "#815427",
        orange8: "#a1682c",
        orange9: "#f59e42",
        orange10: "#e99335",
        orange11: "#ffa94e",
        orange12: "#fee0c6",
      },
    },
  },
  plugins: [],
};

