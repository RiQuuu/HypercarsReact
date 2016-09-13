var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('sass', function() {
    return gulp.src('./dev/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
})

gulp.task('build', function () {
    return browserify({entries: './dev/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react', 'stage-0'], plugins: ['transform-decorators-legacy']})
        .bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
    connect.server({
        root: '.',
        livereload: false,
        middleware: function(connect, opt) {
            return [ historyApiFallback({}) ];
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('./dev/sass/**/*.scss', ['sass']);
    gulp.watch('./dev/**/*.jsx', ['build']);
});

gulp.task('default', ['sass', 'build', 'server', 'watch']);
