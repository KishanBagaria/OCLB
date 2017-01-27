/* eslint-env node */
/* eslint-disable no-console */

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    gulp.src('src/TCLB.js')
        .pipe(babel({ presets: ['latest'] }))
        .pipe(gulp.dest('bin'));
});
gulp.task('watch', () => {
    gulp.watch('src/TCLB.js', {debounceDelay: 1200}, ['default']).on('change', (event) => {
        console.log(event.path + ' was ' + event.type + '...');
    });
});
