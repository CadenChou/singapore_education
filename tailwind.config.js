/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        singapore_red: "#EE2536",
      },
      textColor: {
        singapore_red: "#EE2536",
        text_white: "#e8e6e3",
      },
      backgroundImage: {
        "gradient-singapore-red":
          "linear-gradient(90deg, #EE2536 0%, #EE2536 100%)",
      },
    },
  },
  plugins: [],
};
