const path = require('path');

module.exports = {
    entry: './development/src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};