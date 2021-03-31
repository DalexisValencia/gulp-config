const { src, dest, gulp, watch, series } = require('gulp');
const sass = require('gulp-sass');
const glServer = require('gulp-live-server');
const livereload = require('gulp-livereload');
function compileHtml(){
    return src('src/*.html')
    .pipe(dest('public/'));
    // .pipe(livereload());
}
function compileScss() {
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/css/'));
        // .pipe(livereload());
}

exports.serve = function() {
    glServer.static('public', 9000).start()
}

function run() {
    exports.serve();
}

function watcher() {
    // livereload.listen();
    watch('src/scss/*.scss', {ignoreInitial: true}, compileScss);
    watch('src/*.html', compileHtml);
}
exports.default = function(){
    // livereload.listen();
    run();
    compileScss();
    compileHtml();
    watcher();
}


