// build from serve seems not working.
// probably because of missing dependencies.
// see /src-docs instead.
module.exports = {
  outputDir: '_void',
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
