// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  dev: {
    port: 3008,
	assetsSubDirectory: 'static',
	assetsPublicPath: '/',
    proxyTable: {
      '/shopro': {
        target: 'http://cangdu.org',
        changeOrigin: true,
        pathRewrite: {
          '^/shopro': '/shopro'
        }
      }
    }
  }
}
