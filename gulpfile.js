const { src, dest, gulp, watch, series } = require('gulp');
const sass = require('gulp-sass');
const glServer = require('gulp-live-server');

exports.default = function() {
    return src('src/*.html')
        .pipe(dest('public/'));
}

exports.scss = function() {
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/css/'));
}

exports.serve = function() {
    glServer.static('public', 9000).start()
}

exports.run = function() {
    exports.default();
    exports.serve();
    exports.scss();
    watch('src/scss/*.scss', function() {
        return src('src/scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(dest('public/css/'));
    });
}