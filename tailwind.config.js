/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  plugins: [require("daisyui")], 
  daisyui: {
    themes: ["light"],  // Only light theme
    darkTheme: false,   // Disable dark mode
  },
};
