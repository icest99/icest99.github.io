/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black-01': '#0c0f11',
        'a-hover': '#4385d7',
        'black-02': '#a8adb2',
      },
      fontFamily: {
        'Helvetica': ['Helvetica Neue', 'sans-serif'],
        'roboto': ['PT Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
