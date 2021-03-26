/*const gulp = require('gulp'),
    glServer = require('gulp-live-server');

const { src, dest } = require('gulp');

gulp.task('serve', function() {
    var server = glServer.static('public', 9000);
    server.start();
});

// gulp.watch('src/scss/*.sass', ['runall']);

gulp.task('sass', function() {
    // return gulp
    //     .src('src/scss/*.sass')
    //     .pipe(sass())
    //     .pipe(gulp.dest('public/css'))
})
gulp.task('publish', function() {
    // src("src/*.html").pipe(dest('public/'))
})

// gulp.task('run', gulp.series('publish', 'serve'));*/

// const { watch } = require('chokidar');
const { src, dest, gulp } = require('gulp');
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
}


gulp.watch('src/scss/*.scss', (done) => {
    gulp.series(['run', 'scss'])(done);
});