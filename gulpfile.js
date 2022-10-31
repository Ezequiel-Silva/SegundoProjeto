//lista de dependencias
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefixer = require('gulp-autoprefixer');
const mimify = require('gulp-cssnano');

//criar funções
//scss
function compileScss(){
    return src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer())
    .pipe(mimify())
    .pipe(dest('./dist'))
}
//criar watch task
function watchTask(){
    watch('src/scss/style.scss',compileScss);
}
//default gulp
exports.default = series(watchTask);