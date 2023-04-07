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
        battery_charged_blue: "#10AEDB",
        prussian_blue: "#063455",
        mac_and_cheese: "#FFBC81",
        crayola_red: "#eb274b",
      },
      fontFamily: {
        be_vietnam_pro: "Be Vietnam Pro",
      },
    },
  },
  plugins: [],
};
