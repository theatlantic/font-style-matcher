const gulp  = require('gulp');
const browserSync = require('browser-sync');

gulp.task('default', ['watch', 'serve']);

gulp.task('watch', () => {
  gulp.watch('./**/*.css', ['css']);
  gulp.watch('./**/*.js', ['js']);
  gulp.watch('./**/*.html', ['html']);
});

gulp.task('css', () => {
  return gulp
          .src('style.css')
          .pipe(browserSync.stream());

});

gulp.task('js', () => {
  return gulp
          .src('app.js')
          .pipe(browserSync.stream());

});

gulp.task('html', () => {
  return gulp
          .src('index.html')
          .pipe(browserSync.stream());

});

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});
