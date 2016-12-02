import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('babel', () => {
  gulp.src('lib/*.js')
    .pipe(babel())
    .pipe(gulp.dest('app'));
});

gulp.task('watch', () => {
  gulp.watch('lib/*.js', ['babel']);
});

gulp.task('default', ['babel', 'watch'], () => {
  console.log('babel');
});
