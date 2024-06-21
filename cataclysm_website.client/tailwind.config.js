/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dust-grey': '#292b28',
      },
        backgroundImage: {
          'deathwing-image': "url('https://i.imgur.com/nSYB78I.jpeg')",
          // Add more custom images as needed
        },
    },
    plugins: [],
  },
};
