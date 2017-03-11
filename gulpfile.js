var path = require('path')
var gulp = require('gulp')
var cssWrap = require('gulp-css-wrap');
gulp.task('css-wrap', function() {
  return gulp.src( path.resolve('./theme/index.css'))
    .pipe(cssWrap({selector:'.my-app'}))
    .pipe(gulp.dest('dist'));
});