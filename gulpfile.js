'use strict';

var gulp = require('gulp');  // Base gulp package
var babelify = require('babelify'); // Used to convert ES6 & JSX to ES5
var browserify = require('browserify'); // Providers "require" support, CommonJS
var notify = require('gulp-notify'); // Provides notification to both the console and Growel
var rename = require('gulp-rename'); // Rename sources
var sourcemaps = require('gulp-sourcemaps'); // Provide external sourcemap files
var gutil = require('gulp-util'); // Provides gulp utilities, including logging and beep
var chalk = require('chalk'); // Allows for coloring for logging
var source = require('vinyl-source-stream'); // Vinyl stream support
var buffer = require('vinyl-buffer'); // Vinyl stream support
var watchify = require('watchify'); // Watchify for source changes
var merge = require('utils-merge'); // Object merge tool
var duration = require('gulp-duration'); // Time aspects of your gulp process
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var historyApiFallback = require('connect-history-api-fallback');

// Configuration for Gulp
var config = {
    js: {
        src: './dev/app.jsx',
        watch: './dev/**/*',
        outputDir: './dist/',
        outputFile: 'bundle.js',
    },
};

// Error reporting function
function mapError(err) {
    if (err.fileName) {
        // Regular error
        gutil.log(chalk.red(err.name)
                  + ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
                  + ': ' + 'Line ' + chalk.magenta(err.lineNumber)
                  + ' & ' + 'Column ' + chalk.magenta(err.columnNumber || err.column)
                  + ': ' + chalk.blue(err.description));
    } else {
        // Browserify error..
        gutil.log(chalk.red(err.name)
                  + ': '
                  + chalk.yellow(err.message));
    }
}

// Completes the final file outputs
function bundle(bundler) {
    var bundleTimer = duration('Javascript bundle time');

    bundler
        .bundle()
        .on('error', mapError) // Map error reporting
        .pipe(source('app.jsx')) // Set source name
        .pipe(buffer()) // Convert to gulp pipeline
        .pipe(rename(config.js.outputFile)) // Rename the output file
        .pipe(sourcemaps.init({loadMaps: true})) // Extract the inline sourcemaps
        .pipe(sourcemaps.write('./map')) // Set folder for sourcemaps to output to
        .pipe(gulp.dest(config.js.outputDir)) // Set the output folder
        .pipe(notify({ message: 'Generated file: <%= file.relative %>', })) // Output the file being created
        .pipe(bundleTimer) // Output time timing of the file creation
}

gulp.task('server', function() {
    connect.server({
        root: '.',
        livereload: false,
        middleware: function(connect, opt) {
            return [ historyApiFallback({}) ];
        }
    });
});

gulp.task('sass', function() {
    return gulp.src('./dev/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch-sass', function () {
  return gulp.watch('./dev/sass/**/*.scss', ['sass']);
});

// Gulp task for build
gulp.task('default', ['sass', 'watch-sass', 'server'], function() {
    var args = merge(watchify.args, { debug: true }); // Merge in default watchify args with browserify arguments

    var bundler = browserify(config.js.src, args) // Browserify
    .plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']}) // Watchify to watch source file changes
    .transform('babelify', {presets: ['es2015', 'react', 'stage-0'], plugins: ['transform-decorators-legacy']}); // Babel tranforms

    bundle(bundler); // Run the bundle the first time (required for Watchify to kick in)

    bundler.on('update', function() {
        bundle(bundler); // Re-run bundle on source updates
    });
});