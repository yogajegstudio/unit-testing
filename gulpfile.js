const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile SCSS
function compileStyles() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
}

// Watch files
function watchFiles() {
    gulp.watch('src/scss/*.scss', compileStyles);
}

// Define complex tasks
const build = gulp.series(compileStyles);
const watch = gulp.parallel(watchFiles);

// Export tasks
exports.build = build;
exports.watch = watch;
exports.default = build; 