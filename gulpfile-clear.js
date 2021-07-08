const { src, dest, gulp, watch, series } = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const del = require('del');
const concat = require('gulp-concat');
// const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
/* :::: START RUN SERVER :::: */
exports.serve = function() {
    connect.server({
        port: 8888,
        livereload: true
    });
}

function run() {
    exports.serve();
}
/* :::: END RUN SERVER :::: */
exports.clear = function() {
    compileScss();
    watcher();
    // run();
}

function compileScss() {
    return src(['scss/**/*.scss', 'scss/**/*.scss', '!scss/normalize.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(cleanCSS())
        .pipe(dest('css/'))
        .pipe(connect.reload());
}

function watcher() {
    watch(['scss/*.scss', 'scss/**/*.scss'], { ignoreInitial: true }, series(compileScss));
    connect.reload();
}

exports.default = function() {
    exports.clear();
}