"use strict"
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('default', watchTask);
gulp.task('sass', scssTask);

//Compile scss into css
function scssTask() {
    // 1. Where is my scss file
    return gulp
        .src('./assets/scss/**/*.scss')
        // 2. Pass that file through sass compiler
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        // 3. Where do I save the compiled CSS?
        .pipe(gulp.dest('./dist/css'));
}

function watchTask(){
    gulp.watch('./assets/scss/**/*.scss', scssTask);
}