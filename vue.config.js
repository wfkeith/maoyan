module.exports = {
  publicPath: '/maoyan/',
  devServer: {
    proxy: {
      '/maoyan': {
        target: 'http://m.maoyan.com',
        pathRewrite: {
          '^/maoyan': ''
        }
      }
    }
  }
}