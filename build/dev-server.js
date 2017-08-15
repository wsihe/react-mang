var webpack = require('webpack')
var express = require('express')
var config = require('../config')
var webpackConfig = require('../build/webpack.dev.conf')
var proxyMiddleware = require('http-proxy-middleware')
var opn = require('opn')
var path = require('path')

var proxyTable = config.dev.proxyTable

var server = express()
var compiler = webpack(webpackConfig)

// server.use(require('webpack-dev-middleware')(compiler, {
// 	publicPath: webpackConfig.output.publicPath,
// 	hot: true,
// 	historyApiFallback: true,
// 	inline: true,
// 	progress: true,
// 	stats: {
// 		colors: true,
// 	}
// }));

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
	log: () => {}
})

compiler.plugin('compilation', function (compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
		hotMiddleware.publish({ action: 'reload' })
		cb()
	})
})

// server.use('/shopro', proxyMiddleware({
//     target: 'http://cangdu.org',
//     changeOrigin: true,
// }))

// server.use(require('webpack-hot-middleware')(compiler));
// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
	var options = proxyTable[context]
	if (typeof options === 'string') {
		options = { target: options }
	}
	server.use(proxyMiddleware(options.filter || context, options))
})

server.use(require('connect-history-api-fallback')())

server.use(devMiddleware)

server.use(hotMiddleware)

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
server.use(staticPath, express.static('./static'))

var port = config.dev.port
var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
	_resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
	console.log('> Listening at ' + uri + '\n')
	opn(uri)
	_resolve()
})
server.get('*', function(req, res) {
	res.sendFile(path.resolve('index.html'))
});

var server = server.listen(port)

module.exports = {
	ready: readyPromise,
	close: () => {
		server.close()
	}
}



// server.listen(8088, function() {
// 	var uri = 'http://localhost:8088'
// 	opn(uri)
// });
