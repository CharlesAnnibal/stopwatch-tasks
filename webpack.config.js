const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('connect-api-mocker');
const webpack = require('webpack')

const { networkInterfaces } = require('os');
console.log(networkInterfaces())
const ipWifi = networkInterfaces()["Wi-Fi"][1].address;
const ipAdress = networkInterfaces()["vEthernet (Default Switch)"][1].address;

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
        https: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        before: function(app) {
            app.use(apiMocker('/api', 'mocks/api'));
        },
        host: ipWifi,//your ip address
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