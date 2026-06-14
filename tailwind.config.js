/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        discord: {
          brand: '#5865F2',
          green: '#248046',
          yellow: '#FEE75C',
          fuchsia: '#EB459E',
          red: '#ED4245',
          dark: {
            100: '#40444b',
            200: '#36393f',
            300: '#2f3136',
            400: '#292b2f',
            500: '#202225',
            600: '#18191c',
          },
          light: {
            100: '#ffffff',
            200: '#f2f3f5',
            300: '#e3e5e8',
            400: '#ebedef',
            500: '#f2f3f5',
          }
        }
      }
    },
  },
  plugins: [],
}