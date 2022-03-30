module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        saOrange: '#de7c00',
        saPurple: '#b272a5',
        saDarkGrey: '#818387',
        saGrey: '#adaeb0',
        saLightGrey: '#dad9d6',
        saAqua: '#179dab',
        saEmerald: '#28b29a',
        saBlue: '#5d809f',
        saRed: '#c87164',
        saBrown: '#ae8643',
      },
      height: {
        700: '700px',
        500: '500px',
        300: '300px',
      },
      width: {
        700: '700px',
        500: '500px',
        300: '300px',
      },

      screens: {
        '3xl': '1800px',
      },
    },
    variants: {
      fontStyle: ['responsive', 'hover', 'active', 'focus'],
    },
    plugins: [],
  },
}
