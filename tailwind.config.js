module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'greenClass'  : 'rgba(98, 178, 46, 1)',
      'greenClass2' : 'rgba(98, 178, 46, 0.2)',
      'greenClass4' : 'rgba(98, 178, 46, 0.4)',
      'greenClass6' : 'rgba(98, 178, 46, 0.6)',
      'greenClass8' : 'rgba(98, 178, 46, 0.8)',

      'redClass'      : 'rgba(207, 80, 52, 1)',
      'redClass2'     : 'rgba(207, 80, 52, 0.2)',
      'redClass4'     : 'rgba(207, 80, 52, 0.4)',
      'redClass6'     : 'rgba(207, 80, 52, 0.6)',
      'redClass8'     : 'rgba(207, 80, 52, 0.8)',

      'orangeClass'   : 'rgba(221, 162, 28, 1)',
      'orangeClass2'  : 'rgba(221, 162, 28, 0.2)',
      'orangeClass4'  : 'rgba(221, 162, 28, 0.4)',
      'orangeClass6'  : 'rgba(221, 162, 28, 0.6)',
      'orangeClass8'  : 'rgba(221, 162, 28, 0.8)',

    }) 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
