const { src, dest, gulp, watch, series } = require('gulp');
const sass = require('gulp-sass');
var connect = require('gulp-connect');
var del = require('del');
/* :::: START RUN SERVER :::: */
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
/* :::: END RUN SERVER :::: */
exports.clear = function() {
    return del([
        'public/**',
    ]);
}

function moveFiles(){
    return src('src/assets/**/*.*')
    .pipe(dest('public/assets'));
}
function compileHtml(){
    return src('src/*.html')
    .pipe(dest('public/'))
    .pipe(connect.reload());
}

/* :::: START WORK WITH SCSS :::: */
function clearCss() {
    return del(['public/css/']);
}
function compileScss() {
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/css/'))
        .pipe(connect.reload());
}
/* :::: END WORK WITH SCSS :::: */


function watcher() {
    watch('src/scss/*.scss', {ignoreInitial: true}, series(clearCss, compileScss));
    watch('src/*.html', {ignoreInitial: true}, compileHtml);
    connect.reload();
}

exports.default = function(){
    exports.clear();
    run();
    compileScss();
    compileHtml();
    watcher();
    moveFiles();
}
