/** @type {import('tailwindcss').Config} */
module.exports = {
  syntax: 'postcss-scss',
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          'background': "#1E1E20",
          'primary': "#646CFF",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")],
};
``