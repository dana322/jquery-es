const path = require('path')
process.env.CHROME_BIN = require('puppeteer').executablePath()
module.exports = function(config) {
    config.set({
        files: [
            {
                pattern: './test/**/*.spec.js'
            }
        ],
        frameworks: ['mocha'],
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        preprocessors: {
            './test/**/*.spec.js': ['webpack']
        },
        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'istanbul-instrumenter-loader',
                            options: {esModules: true}
                        },
                        include: path.resolve('src/')
                    }
                ]
            }
        },
        reporters: ['progress', 'coverage-istanbul'],
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        singleRun: true
    })
}
