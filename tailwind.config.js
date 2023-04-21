
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        'golden': '#DCCA87',
        'black': '#0C0C0C',
        'gray': '#545454',
        'crimson': '#F5EFDB',
        'grey': '#AAAAAA',
        'white': '#FFFFFF',
      },

    },

    

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "950px",
      lg: "1200px",
      xl: "1680px",
    },

    fontFamily: {
      baseF: ['Cormorant Upright', 'serif'],
      altF: ['Open Sans', 'sans-serif']
    }
  },
  plugins: [],
}