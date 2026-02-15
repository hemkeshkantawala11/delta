/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep Navy (Hero Background & Footer - Images 1 & 7)
        primary: "#001e62", 
        // Bright Blue (Buttons & Highlights - Image 1 & 4)
        accent: "#0056d2", 
        // Text Colors
        dark: "#0f172a",
        light: "#64748b",
        // Backgrounds
        cream: "#f8f9fa", // Light grey bg seen in Testimonials/Mentors
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}