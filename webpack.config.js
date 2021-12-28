const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}