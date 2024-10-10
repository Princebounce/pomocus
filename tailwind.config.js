// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '410px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        customPink: "#15858f", 
        customTeal: "#30082c",
        customGray: "#B3A9A0",
        customZeeb: "#5A9D8A",
        customBlue: "#000080"
      },
    },
  },
  plugins: [],
};
