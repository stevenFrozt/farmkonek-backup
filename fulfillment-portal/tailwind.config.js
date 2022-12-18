/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#299A47",
          50: "#97E3AB",
          100: "#87DF9E",
          200: "#67D785",
          300: "#47CE6B",
          400: "#32BA56",
          500: "#299A47",
          600: "#1D6E33",
          700: "#11411E",
          800: "#06150A",
          900: "#000000"
        },
        secondary: {
          DEFAULT: "#0C88EF",
          50: "#B7DCFB",
          100: "#A4D3FA",
          200: "#7DC0F8",
          300: "#56AEF7",
          400: "#2F9BF5",
          500: "#0C88EF",
          600: "#096ABA",
          700: "#074B84",
          800: "#042D4F",
          900: "#010E19"
        },
        tertiary: {
          DEFAULT: "#F4AF1B",
          50: "#FCECCA",
          100: "#FCE6B7",
          200: "#FAD890",
          300: "#F8CA69",
          400: "#F6BD42",
          500: "#F4AF1B",
          600: "#CD8F0A",
          700: "#976A07",
          800: "#624405",
          900: "#2C1F02"
        },
        mercury: {
          DEFAULT: "#EAE8E8",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FDFDFD",
          500: "#EAE8E8",
          600: "#CFCBCB",
          700: "#B4ADAD",
          800: "#9A9090",
          900: "#7E7373"
        },
        persimmon: {
          DEFAULT: "#FF5656",
          50: "#FFFFFF",
          100: "#FFF9F9",
          200: "#FFD0D0",
          300: "#FFA8A8",
          400: "#FF7F7F",
          500: "#FF5656",
          600: "#FF1E1E",
          700: "#E50000",
          800: "#AD0000",
          900: "#750000"
        },
        "mine-shaft": {
          DEFAULT: "#242424",
          50: "#808080",
          100: "#767676",
          200: "#616161",
          300: "#4D4D4D",
          400: "#383838",
          500: "#242424",
          600: "#080808",
          700: "#000000",
          800: "#000000",
          900: "#000000"
        }
      }
    }
  },
  plugins: []
}
