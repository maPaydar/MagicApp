var gulp = require('gulp');
var webpack = require('webpack-stream');

/*
  this task : to do polifily app.js
*/
gulp.task('default', function() {
    return gulp.src('app/src/app.js')
        .pipe(webpack({
            watch: true,
            output: {
                filename: 'appDist.js',
            },
        }))
        .pipe(gulp.dest('app/src'));
});
