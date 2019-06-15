module.exports = {
  publicPath: '/cat/',
  devServer: {
    proxy: {
      '/maoyan': {
        target: 'http://m.maoyan.com/',
        pathRewrite: {
          '^/maoyan': ''
        }
      }
    }
  }
}