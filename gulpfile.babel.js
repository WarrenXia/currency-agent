import gulp from 'gulp';
import babel from 'gulp-babel';
import nodemon from 'gulp-nodemon';

gulp.task('babel', (cb) => {
  gulp.src('lib/*.js')
    .pipe(babel())
    .pipe(gulp.dest('app'));
  // 提示build完成
  cb();
  console.log('🎉  Done');
});

gulp.task('run', () => {
  nodemon({
    script: './app/app.js',
    ext: 'js',
    ignore: ['app/'],
    watch: ['lib/']
  });
});

gulp.task('watch', () => {
  gulp.watch('lib/*.js', ['babel']);
});

gulp.task('build', ['babel'], () => {});
gulp.task('default', ['babel', 'run', 'watch'], () => {
});
