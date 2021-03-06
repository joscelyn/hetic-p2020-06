var del = require('del');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-csso');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var clone = require('gulp-clone');
var concat = require('gulp-concat');
var tildeImporter = require('node-sass-tilde-importer');
var babelify = require('babelify');
var browserify = require('browserify')
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var injectSvg = require('gulp-inject-svg');


var isProd = process.env.NODE_ENV === 'production';

/**
 * PUG
 */

function html() {
    return gulp.src('src/**/*.html')
        .pipe(injectSvg({
            base: '/src/'
        }))
        .pipe(clone())
        .pipe(gulp.dest('dist/'))
        .pipe(sync.stream());
}

/**
 * SCSS
 */

function scss() {
    return gulp.src(['src/scss/main.scss'])
        .pipe(gulpif(!isProd, sourcemaps.init()))
        .pipe(sass({
            importer: tildeImporter
        }))
        .pipe(gulpif(isProd, minifyCSS()))
        .pipe(gulpif(!isProd, sourcemaps.write('.')))
        .pipe(gulp.dest('dist/css'))
        .pipe(sync.stream());
}

/**
 * JS
 */

function js() {

    return browserify({entries: ['src/js/main.js'], debug: true})
        .transform(babelify, {presets: 'es2015'})
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulpif(!isProd, sourcemaps.init({loadMaps: true})))
        .pipe(uglify())
        .pipe(gulpif(!isProd, sourcemaps.write('.')))
        .pipe(gulp.dest('dist/js'))
        .pipe(sync.stream());
};

/**
 * vendorsJS
 */

function vendorsJS() {
    return gulp.src(['node_modules/rellax/rellax.min.js', 'node_modules/tiny-slider/dist/min/tiny-slider.js'])
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(sync.stream());
};

/**
 * json
 */

function json() {
    return gulp.src('src/js/**/*.json')
        .pipe(gulp.dest('dist/js'))
        .pipe(sync.stream());
};

/**
 * IMAGES
 */

function images() {
    return gulp.src('src/img/**/*')
        .pipe(gulpif(isProd, imagemin({verbose: true})))
        .pipe(gulp.dest('dist/img'));
}

/**
 * FONTS
 */

function fonts() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
}

/**
 * GLOBAL
 */

function clean() {
    return del(['dist']);
}

gulp.task('build', gulp.series(clean, gulp.parallel(html, scss, js, json, vendorsJS, images, fonts)));

gulp.task('default', gulp.parallel(html, scss, js, vendorsJS, json, images, fonts, function (done) {
    sync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('src/**/*.html', html);
    gulp.watch('src/**/*.scss', scss);
    gulp.watch('src/**/*.js', js);

    done();
}));
