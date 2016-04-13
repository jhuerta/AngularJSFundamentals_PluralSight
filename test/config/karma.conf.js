// Karma configuration
// Generated on Tue Apr 12 2016 09:49:53 GMT+0200 (W. Europe Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    //This will be used in case the file path specified in "files" does not math the one used in directives
    //This is purely for testing directives!
    /*ngHtml2JsPreprocessor: {
        //stripPrefix: 'app',
        prependPrefix: '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
    },*/
    

    logLevel: config.LOG_DEBUG,
    // list of files / patterns to load in the browser
    files: [
    'lib/angular/angular.js',
    'lib/angular/angular-*.js',
    'lib/angular/tmhDynamicLocale.js',
    'test/angular-mocks.js',
    'test/sinon-1.15.0.js',
    'js/**/*.js',
    'test/unit/**/*.js',
    'templates/directives/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/*.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins:[
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-ng-html2js-preprocessor'
    ]
  });
};
