const merge = require('webpack-merge');
const common = require('./webpack.common');
const babelMinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new babelMinifyPlugin()
    ]
});