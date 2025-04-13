// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     theme: {
//       extend: {
//         fontFamily: {
//           'iransans': ['IranSans', 'Arial', 'sans-serif'],
//           'iransans-bold': ['IranSans-Bold', 'Arial', 'sans-serif'],
//         },
//       },
//     },
//     // سایر تنظیمات
//   }

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["IRANSans", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
