const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    
    devtool: "source-map",

    plugins: [
        new HtmlWebpackPlugin({
            'filename': 'index.html',
            'template': './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],

    module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ['ts-loader']
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader','css-loader']
                }
            ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".jsx"]
    },
};