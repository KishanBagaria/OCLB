/* eslint-env node */
/* eslint-disable no-console */

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', async () => {
  gulp.src('TCLB/src/TCLB.js')
    .pipe(babel({ presets: ['latest'] }))
    .pipe(gulp.dest('TCLB/bin'));
});
gulp.task('watch', async () => {
  gulp.watch('TCLB/src/TCLB.js', { debounceDelay: 1200 }, ['default']).on('change', (event) => {
    console.log(`${event.path} was ${event.type}...`);
  });
});
