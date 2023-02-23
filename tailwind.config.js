module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'wet-text': "#727272",
        'wet': {
          "dark": "#5F6CAE",
          "mid": "#CCD0DC",
          "light": "#E6E6E6",
          "lime": "#E7F0C3",
          "green": "#5BBFBA",
          "emerald": "#A4D4AE",
          "red": "#F67473",
          "background": "#EDF0F9",
          "divider": "#ADADAD",
          "yellow": "#F0CF85", "cyan": "#B1E0FF",
        },
      },
    },
    fontFamily: {
      'sans': ['Ubuntu'],
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
