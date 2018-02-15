const path = require('path');

module.exports = {
    entry: {
        index:'./development/src/index.js'
    },

    output: {
        filename: '[name].bundle.js',
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
    },
};