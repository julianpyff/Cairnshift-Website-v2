/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primitives-gray-950": "var(--primitives-gray-950)",
        "tokens-components-buttons-primary":
          "var(--tokens-components-buttons-primary)",
        "tokens-surface-primary": "var(--tokens-surface-primary)",
        "tokens-text-headline": "var(--tokens-text-headline)",
        "tokens-text-text-invert": "var(--tokens-text-text-invert)",
      },
      fontFamily: {
        "medium-text-base": "var(--medium-text-base-font-family)",
      },
    },
  },
  plugins: [],
};
