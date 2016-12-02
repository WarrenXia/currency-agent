import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('babel', (cb) => {
  gulp.src('lib/*.js')
    .pipe(babel())
    .pipe(gulp.dest('app'));
    // 提示build完成
    cb();
    console.log('🎉  Done');
});

gulp.task('watch', () => {
  gulp.watch('lib/*.js', ['babel']);
});

gulp.task('default', ['babel', 'watch'], () => {

});
