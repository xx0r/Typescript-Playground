// Karma configuration
// Generated on Sat Nov 12 2016 19:51:24 GMT+0100 (Central Europe Standard Time)

module.exports = function (config)
{
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["jasmine", "karma-typescript"],


        // list of files / patterns to load in the browser
        files: [
            { pattern: "src/**/*.ts" }
        ],


        // list of files to exclude
        exclude:
            [
            ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors:
            {
                "**/*.ts": ["karma-typescript"]
            },

        // test results reporter to use
        // possible values: "dots", "progress"
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ["progress", "karma-typescript", "spec"],
        reporters: ["spec"],


        specReporter: {
            maxLogLines: 5,         // limit number of lines logged per test 
            suppressErrorSummary: true,  // do not print error summary 
            suppressFailed: false,  // do not print information about failed tests 
            suppressPassed: false,  // do not print information about passed tests 
            suppressSkipped: true,  // do not print information about skipped tests 
            showSpecTiming: false // print the time elapsed for each spec 
        },
       
        // default html coverage report + a summary on the console
        karmaTypescriptConfig:
        {
            reports:
            {
                "html": "coverage",
                "text-summary": "coverage" // destination "" will redirect output to the console
            }
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["Chrome"],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity


    });
}
