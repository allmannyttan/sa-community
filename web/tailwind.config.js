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
      },
    },
  },
  variants: {
    fontStyle: ['responsive', 'hover', 'active', 'focus'],
  },
  plugins: [],
}
