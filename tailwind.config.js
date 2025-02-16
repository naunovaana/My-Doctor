/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0E1B2B',
        homeBlue: '#1D2F47',
        cardColor: '#E0E1DC',
        customButton: '#303C52',
        gradientfrom: '#606979',
        gradientvia: '#D9D9D9',
        gradientto: '#4D5D78',
        formbg: '#D9D9D9',
        lightblue: '#A5BBD9',
        bgblur: '#6B8CB9',
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'footer-bg': "url('/src/assets/footer.png')",
      },
      clipPath: {
        'double-wave': 'ellipse(180% 80% at 50% 70%), ellipse(100% 50% at 50% 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-wave': {
          'clip-path': 'ellipse(180% 80% at 50% 70%), ellipse(100% 50% at 50% 100%)',
        },
      });
    },
  ],
}

