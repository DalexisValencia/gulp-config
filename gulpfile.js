const { src, dest, gulp, watch, series } = require('gulp');
const sass = require('gulp-sass');
var connect = require('gulp-connect');
var del = require('del');
function moveFiles(){
    return src('src/assets/**/*.*')
    .pipe(dest('public/assets'));
}
function compileHtml(){
    return src('src/*.html')
    .pipe(dest('public/'))
    .pipe(connect.reload());
}
function compileScss() {
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/css/'))
        .pipe(connect.reload());
}

exports.serve = function() {
    connect.server(
        {
            port: 8888,
            livereload: true
        }
    );
}

function run() {
    exports.serve();
}
exports.deleteAll = function() {
    return del([
        'public/**',
    ]);
}

function watcher() {
    watch('src/scss/*.scss', {ignoreInitial: true}, compileScss);
    watch('src/*.html', compileHtml);
    connect.reload();
}

exports.default = function(){
    exports.deleteAll();
    run();
    compileScss();
    compileHtml();
    watcher();
    moveFiles();
}
