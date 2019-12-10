// dependencies
const { parallel, dest, src, watch, series } = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync');
const flatten = require('gulp-flatten');

sass.compiler = require('node-sass');

// individual tasks
function styles(cb) {
	return src('src/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([
            autoprefixer(),
            // cssnano()
        ]))
        .pipe(flatten())
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

function markup() {
    return src('src/*.html')
        .pipe(dest('dist'));
}

function scripts() {
    return src('src/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(dest('dist/js'));
}

function watchAll() {
    // browser sync
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./dist/"
        }
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });

    styles();
    markup();
    scripts();

    watch('src/**/*.scss', styles);
    watch('src/*.html').on('change', function() {
        markup();
        browserSync.reload();
    });
    watch('src/**/*.js').on('change', function() {
        scripts();
        browserSync.reload();
    });
}

// default task with task sequence
exports.default = parallel(markup, styles, scripts);
exports.styles = styles;
exports.markup = markup;
exports.scripts = scripts;
exports.watch = watchAll;
