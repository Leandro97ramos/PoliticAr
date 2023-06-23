const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return gulp.src('./politicAr/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
           versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./politicAr/css'));
    });

gulp.task('watch', () => {
    gulp.watch('./politicAr/scss/**/*.scss', gulp.series('sass'));
});