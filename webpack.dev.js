
const HtmlWebpackPlugin = require('html-webpack-plugin')
const EvalSourceMapDevToolPlugin = require('webpack').EvalSourceMapDevToolPlugin
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './demo/index.js',
    stats: 'errors-only',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'demo/index.html'
        }),
        new EvalSourceMapDevToolPlugin({}),
        new ESLintPlugin()
    ],
    devServer: {
        open: true,
        port: 8000,
        overlay: true,
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          }
        ]
    }
}