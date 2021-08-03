const ESLintPlugin = require('eslint-webpack-plugin')
const SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin
const ProgressPlugin = require('webpack').ProgressPlugin

module.exports = {
    mode: 'production',
    devtool: false,
    plugins: [
        new ESLintPlugin(),
        new SourceMapDevToolPlugin({
            filename: '[name].map',
        }),
        new ProgressPlugin()
    ],
    output: {
        library: {
            name: '$',
            type: 'var',
            export: 'default',
        },
        filename: 'jquery-es.min.js',
    },
}