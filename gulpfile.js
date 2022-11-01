const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

// Compile sass into css
const style = () => {

    return gulp.src('./assets/scss/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles'))
        .pipe(browserSync.stream())
}

const watch = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('./assets/scss/**/*.sass', style)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./assets/js/**/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch

/* SASS interpreta os os arquivos começados 
 * com underline como parciais. 
 * Parte das folhas de estilo escritas 
 * em SASS é formada de vários arquivos 
 * parciais e uma versão "compilada" deles.*/