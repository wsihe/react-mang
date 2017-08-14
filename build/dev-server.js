var webpack = require('webpack');
var express = require('express');
var config = require('../build/webpack.hot.conf');
var proxyMiddleware = require('http-proxy-middleware')
var opn = require('opn')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true,
	}
}));

//代理服务器
app.use('/shopro', proxyMiddleware({
    target: 'http://cangdu.org',
    changeOrigin: true,
}))

app.use(require('webpack-hot-middleware')(compiler));

//将其他路由，全部返回index.html
app.get('*', function(req, res) {
	res.sendFile(__dirname + '../index.html')
});

app.listen(8088, function() {
	var uri = 'http://localhost:8088'
	opn(uri)
});
