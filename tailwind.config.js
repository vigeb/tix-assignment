module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'black'   
      },
      spacing: {
        'full': '100%',
        '10/25': '40%',
      },
      inset: {
        '3/25': '12%'
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
