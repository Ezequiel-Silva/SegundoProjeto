//lista de dependencias
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require("gulp-clean");
const prefix = require('gulp-autoprefixer');
const browserSync = require("browser-sync");
const server = browserSync.create();

/* SASS interpreta os os arquivos começados 
 * com underline como parciais. 
 * Parte das folhas de estilo escritas 
 * em SASS é formada de vários arquivos 
 * parciais e uma versão "compilada" deles.
*/

//criar funções
//scss
const sassTask = () =>
    src("assets/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix())
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(dest("css/templates"));
//criar watch task
const watchTask = () =>
    watch(['assets/scss/*.scss'],series(sassTask,reload));
//criar task reload
const serve = (done) => {
    server.init({
        proxy: "http://127.0.0.1:5500/",
    });
    done();
};

const reload = (done) => {
    server.reload();
    done();
};
//default gulp
exports.default = series(serve, watchTask);