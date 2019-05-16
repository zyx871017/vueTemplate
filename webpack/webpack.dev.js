const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    }
});