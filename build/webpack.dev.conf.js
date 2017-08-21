var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

var APP_PATH = resolve('src');
var APP_FILE = resolve('src/App.jsx');
var BUILD_PATH = resolve('/dist');

var hotMiddlewareScript = 'webpack-hot-middleware/client?';

module.exports = {
    devtool: '#cheap-module-eval-source-map',
    entry: {
        app: [
            APP_FILE,
			hotMiddlewareScript
        ]
    },
    output: {
        publicPath: '/dist/',
        path: BUILD_PATH,
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loaders: ['react-hot', 'babel'],
            include: [APP_PATH]
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loaders: ['style', 'css', 'autoprefixer'],
            include: [APP_PATH]
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loaders: ['style', 'css', 'autoprefixer', 'less'],
            include: [APP_PATH]
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader',
            include: [APP_PATH]
        }, {
          test: /\.styl$/,
            exclude: /^node_modules$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader',
            include: [APP_PATH]
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]',
            include: [APP_PATH]
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            include: [APP_PATH]
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['react-hot', 'jsx', 'babel'],
            include: [APP_PATH]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({ 
			filename: '../index.html',
			template: './src/template/index.html',
			hash: false,
			inject: true
		}),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css', '.styl'],
    }
};
