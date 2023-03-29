/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "hsl(35, 77%, 62%)",
          400: "hsl(5, 85%, 63%)",
        },
        neutral: {
          200: "hsl(36, 100%, 99%)",
          400: "hsl(233, 8%, 79%)",
          600: "hsl(236, 13%, 42%)",
          800: "hsl(240, 100%, 5%)",
        },
      },
      screens: {
        desktop: "1000px",
      },
    },
  },
  plugins: [],
};
