var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('default',function(){
  gulp.src(['./source-en/design/spec/**/**.html'])
    .pipe(replace('/design/spec/','../'))
    .pipe(gulp.dest('./buid'));

  gulp.src('./index.html')
    .pipe(replace('/design/spec/',''))
    .pipe(gulp.dest('./buid'));

  gulp.src('./source-en/design/spec/static/**')
    .pipe(gulp.dest('./buid/static'));
})
