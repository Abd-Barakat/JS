var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
module.exports = {

    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.join(__dirname, 'src/vendor.js'),
        main: path.join(__dirname, 'src/index.js')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        // to dynamic connection with bundling files.
        new htmlPlugin({
            template: 'src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeRedundantAttributes: true,
                collapseWhitespace: true,
                useShortDoctype: true,
                keepClosingSlash: true,
                minifyCSS: true,
                minifyURLs: true,
                minifyJS: true
            }
        }),
        // except the follwing entries from main bundle file.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // To minify JS.
        new webpack.optimize.UglifyJsPlugin(),
        // To prevent package duplication when creating a bundle file.
        new webpack.optimize.DedupePlugin(),
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }

};