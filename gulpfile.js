var gulp = require('gulp'),
    glServer = require('gulp-live-server');
var sass = require('gulp-sass');

gulp.task('serve', function() {
    var server = glServer.static('public', 9000);
    server.start();
});

gulp.watch('src/scss/*.sass', ['runall']);

gulp.task('sass', function() {
    return gulp
        .src('src/scss/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
})
gulp.task('publish', function() {
    gulp.src("src/*.html").pipe(gulp.dest('public'))
})

gulp.task('runall', ['publish', 'serve', 'sass'], function() {

});