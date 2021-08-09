const ESLintPlugin = require('eslint-webpack-plugin')
const {SourceMapDevToolPlugin} = require('webpack')
const {ProgressPlugin} = require('webpack')

module.exports = {
    mode: 'production',
    devtool: false,
    plugins: [
        new ESLintPlugin(),
        new SourceMapDevToolPlugin({
            filename: 'jquery-es.min.js.map'
        }),
        new ProgressPlugin()
    ],
    output: {
        library: {
            name: '$',
            type: 'var',
            export: 'default'
        },
        filename: 'jquery-es.min.js'
    }
}