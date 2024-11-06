/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B92B5D',
        secondary: '#373052',
        black: '#2E2E2E',
      },
      backgroundColor: {
        primary: '#B92B5D',
        secondary: '#F3F3E9',
      },
    },
  },
  plugins: [],
};

