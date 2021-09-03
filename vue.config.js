module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        sourceMap: true,
        prependData: `
          @import '@/scss/colors';
          @import '@/scss/media';
          @import '@/scss/typo';
          @import '@/scss/ui';
        `,
      },
    },
  },
}
