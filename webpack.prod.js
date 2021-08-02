const ESLintPlugin = require('eslint-webpack-plugin')
const SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin

module.exports = {
    mode: 'production',
    devtool: false,
    plugins: [
        new ESLintPlugin(),
        new SourceMapDevToolPlugin({
            filename: '[name].map',
        })
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