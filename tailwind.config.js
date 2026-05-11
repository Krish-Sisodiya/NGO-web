/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ngo: {
          primary: "#1E3A8A",   // Deep Blue (Trust)
          secondary: "#F59E0B", // Warm Orange (Hope/Action)
          accent: "#10B981",    // Green (Growth/Nature)
          bg: "#F8FAFC",        // Soft White
          text: "#0F172A",      // Dark Slate
        }
      }
    }
  },
  plugins: [],
}