/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  plugins: [require("daisyui")], // Ensure DaisyUI is included
  daisyui: {
    themes: ["light"], // Force light mode only
  },
};
