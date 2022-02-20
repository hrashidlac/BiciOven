module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        agblack: ['AgencyFB BlackWide', 'sans-serif'],
        agreg: ['AgencyFB RegularWide', 'sans-serif'],
        agbold: ['AgencyFB', 'sans-serif'],
      },
    },
    colors:{
      white: '#FFF',
      black: '#000',
      red: '#F00',
      orange: '#fd5214',
    },
    fontSize: {
      xxs: '1.2rem',
      xs: '1.3rem',
      sm: '1.5rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2.2rem',
      '2xl': '2.7rem',
      '3xl': '3.6rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '6xl': '6rem'
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1280px',
      xl: '1500px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
