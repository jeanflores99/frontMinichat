/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PanelBg: '#202c33',
        PanelIcon: '#aebac1',
        BgGeneral: '#101a20'
      }
    },
  },
  plugins: [require("daisyui")],
}
