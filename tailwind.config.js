/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PanelBg: '#202c33',
        PanelIcon: '#aebac1',
        BgGeneral: '#101a20',
        colorText1: '#E9EDEF',
        colorText2: '#D1D7DB',
        colorHour: '#8696A0'
      }
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar'),],
}
