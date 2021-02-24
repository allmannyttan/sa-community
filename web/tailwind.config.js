module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        saBlack: '#221223',
        saOrange: '#de7c00',
        saGreen: '#04a388',
        saPurple: '#50058B',
        saGreyBlue: '#295A66',
        saGreyBlueDark: '#112332',
        lightGrey: '#f0f0f2',
      },
      height: {
        700: '700px',
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
