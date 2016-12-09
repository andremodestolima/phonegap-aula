var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var livereload = require('gulp-livereload');

gulp.task('css', function () {
  gulp.src('./estilo.css')
    .pipe(gulp.dest('./temp/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./min/'))
    .pipe(livereload());
});

gulp.task('js', function () {
  gulp.src('./script.js')
    .pipe(gulp.dest('./temp/'))
    .pipe(minify({}))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./min/'))
    .pipe(livereload());
});

gulp.task('tudo', ['js', 'css']);

gulp.task('supervisor', function () {
  livereload.listen();

  gulp.watch('script.js', ['js']);
  gulp.watch('estilo.css', ['css']);
});


