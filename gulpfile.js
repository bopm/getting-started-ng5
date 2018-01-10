const gulp = require('gulp');
const zip = require('gulp-gzip');

gulp.task('compress', function() {
    for (var lang in ['en', 'ru']) {
        gulp.src([`./dist/${lang}/*.js`, `./dist/${lang}/*.css`])
        .pipe(zip())
        .pipe(gulp.dest(`./dist/${lang}/`));
    }
});
