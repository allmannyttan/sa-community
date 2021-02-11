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
        saGreen: '#04a388',
        saPurple: '#50058B',
      },
      height: {
        700: '700px',
      },
    },
  },
  variants: {
    fontStyle: ['responsive', 'hover', 'active', 'focus'],
  },
  plugins: [],
}
