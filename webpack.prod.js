
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: "production",
    entry: ['./app/src/core/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/index.html",
        }),
        /*new webpack.DefinePlugin({
            ROUTER_BASENAME: JSON.stringify("/projects/open-account"),
            ROOT_URL:JSON.stringify("http://www.banco-best.pt/projects/open-account/")
        })*/
    ],
}