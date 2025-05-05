// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {colors: {
      primary: '#3EA6D2',      // celeste casco
      accent:  '#B4000A',      // rojo fuerte
      paper:   '#FFFFFF',      // blanco
    }},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
};
