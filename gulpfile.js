/**
 * Created by Administrator on 2016/12/15.
 */
var gulp = require('gulp');

var imagemin = require('gulp-imagemin');

gulp.task('image',function () {
    gulp.src('image/*.*')

    .pipe(imagemin({
        progressive:true
    }))
    .pipe(gulp.dest('dist/image'))
});

gulp.task('auto',function () {
    gulp.watch("image/*.*",['image'])
})

gulp.task('default',['image','auto'])
