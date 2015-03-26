var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('default',function(){
  gulp.src(['./source-en/design/spec/**/**.html'])
    // 公共 css
    .pipe(replace('/design/spec/','../'))
    // 公共 js
    .pipe(replace('//www.gstatic.com/external_hosted/picturefill/','../static/js/'))
    .pipe(replace('//www.google-analytics.com/','../static/js/'))
    // LOGO
    .pipe(replace('//material-design.storage.googleapis.com/images/Google_Logo.svg','../static/images/Google_Logo.svg'))
    // 1.Material design
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7c0R4RUtiTkhMZTQ/','../static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7VG9DQVluOFJ4Tnc/','../static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7NndTQW9VZTlZV2s/','../static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7dkRYelJkeklqWFU/','../static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/','../static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7QTA5cHFBUlV3RTA/','../static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/images/','../static/images/'))
    // 输出
    .pipe(gulp.dest('./buid'));

  gulp.src('./source-en/index.html')
    // 公共 css
    .pipe(replace('/design/spec/',''))
    // 公共 js
    .pipe(replace('//www.gstatic.com/external_hosted/picturefill/','static/js/'))
    .pipe(replace('//www.google-analytics.com/','static/js/'))
    // LOGO
    .pipe(replace('//material-design.storage.googleapis.com/images/Google_Logo.svg','static/images/Google_Logo.svg'))
    // 1.Material design
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7c0R4RUtiTkhMZTQ/','static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7VG9DQVluOFJ4Tnc/','static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7NndTQW9VZTlZV2s/','static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7dkRYelJkeklqWFU/','static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7TDlCYzRROE84YWM/','static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/publish/v_2/material_ext_publish/0Bx4BSt6jniD7QTA5cHFBUlV3RTA/','static/images/'))
    .pipe(replace('//material-design.storage.googleapis.com/images/','static/images/'))
    // 输出
    .pipe(gulp.dest('./buid'));

  gulp.src('./source-en/design/spec/static/**')
    .pipe(gulp.dest('./buid/static'));
})

gulp.task('watch',function(){
  gulp.watch('./source-en/**/**',['default'])
})

gulp.task('a',function(){
  gulp.src(['./source-en/design/spec/**/**.html'])

    .pipe(gulp.dest('./buid'))
  gulp.src('./source-en/index.html')
    .pipe(replace('//material-design.storage.googleapis.com/images/Google_Logo.svg','static/images/Google_Logo.svg'))
    .pipe(gulp.dest('./buid'));
})
