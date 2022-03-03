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
      fuschia: '#ec00a1'
    },
    fontSize: {
      xxs: '10px',
      xs: '11px',
      sm: '12px',
      base: '14px',
      lg: '18px',
      xl: '22px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '48px',
      '6xl': '58px'
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
