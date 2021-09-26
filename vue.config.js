module.exports = {
  outputDir: 'docs',
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        sourceMap: true,
        prependData: `
          @import './scss';
        `,
      },
    },
  },
}
