/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1FCFA0',
        'secondary': '#00BCB5',
        'accent': '#00A6C1',
        'accent2': "#008FC2",
        "accent3": "#0076B5",
        "accent4": "#445C9B"
      },
    },
  },
  plugins: [],
}

