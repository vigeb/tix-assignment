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
        'tix-v': 'calc((318%/215)*100)',
      },
      inset: {
        '3/25': '12%'
      },
      width: {
        '150': '37.5rem',
        '225': '56.25rem',
        '235': '58.75rem',
      },
      minWidth: {
        '8': '2rem',
        '40': '10rem',
      },
      fontSize: {
        '2xs': '0.5rem',
        '3xs': '0.25rem',
      },
      zIndex: {
        'full': '999999'
      }
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'active', 'group-hover'],
      backgroundImage: ['hover', 'focus']
    },
  },
  plugins: [],
}
