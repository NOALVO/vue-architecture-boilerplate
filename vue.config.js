const path = require('path');

module.exports = {
  publicPath: '',
  lintOnSave: false,
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    resolve: {
      alias: {
        "@dominio": path.resolve(__dirname, 'node_modules/@noalvo/dominio/dist/schemas/vue'),
        "@core": path.resolve(__dirname, 'node_modules/@noalvo/core'),
        "@ui": path.resolve(__dirname, 'node_modules/@noalvo-ui/style/scss'),
        "@libs": path.resolve(__dirname, 'node_modules/@noalvo-libs/core'),
      },
    },
  }
};
