const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
           versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./css'));
    });

gulp.task('watch', () => {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});