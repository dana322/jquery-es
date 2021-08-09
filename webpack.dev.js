
const HtmlPlugin = require('html-webpack-plugin')
const {EvalSourceMapDevToolPlugin} = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const {ProgressPlugin} = require('webpack')

module.exports = {
    mode: 'development',
    entry: './demo/index.js',
    stats: 'errors-only',
    plugins: [
        new HtmlPlugin({
            template: 'demo/index.html'
        }),
        new EvalSourceMapDevToolPlugin({}),
        new ESLintPlugin(),
        new ProgressPlugin()
    ],
    devServer: {
        open: true,
        port: 8000,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ]
    }
}