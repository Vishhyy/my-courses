/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // Ensure Tailwind applies to all JSX/TSX files
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
