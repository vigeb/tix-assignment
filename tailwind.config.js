module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      backgroundColor: {
        'primary': 'black'   
      },
      spacing: {
        'full': '100%',
        '10/25': '40%',
        'yt': '56.25%',
      },
      inset: {
        '3/25': '12%'
      },
      width: {
        '225': '56.25rem',
        '150': '37.5rem',
      },
      zIndex: {
        'full': '999999'
      }
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'active', 'group-hover'],
      // visibility: ['hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
