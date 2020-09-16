const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('connect-api-mocker');
const webpack = require('webpack')


module.exports = {
    watch: true,
    mode: "development",
    entry: ['./app/src/core/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //publicPath: path.resolve(__dirname, 'public'),
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        before: function(app) {
            app.use(apiMocker('/api', 'mocks/api'));
        },
        host: '172.17.105.17',//your ip address
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif)$/,use: ['file-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/index.html"
        }),
        //new webpack.DefinePlugin({
        //    ROUTER_BASENAME: JSON.stringify("/")
        //})
    ],
}