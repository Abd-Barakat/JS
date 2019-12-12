var path = require('path');
var htmlPlugin = require('html-webpack-plugin');

module.exports = {

    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    target: 'web',
    output: {
        path: 'C://Users//a.barakat//Desktop//JS-Development-Environment//src',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new htmlPlugin({
            template: 'src/index.html',
            inject: true,
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }

};