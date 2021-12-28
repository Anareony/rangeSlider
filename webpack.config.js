const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    devtool: "source-map",
    
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".jsx"]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.js?$/, loader: "source-map-loader" },
            { test: /\.css$/i, use: ["style-loader", "css-loader"]}
        ]
    }
}