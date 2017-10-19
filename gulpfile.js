var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	webserver = require('gulp-webserver'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    imageminPngquant = require('imagemin-pngquant'),
    rename = require("gulp-rename");



gulp.task('cssCompile', function () {
	gulp.src('./css/**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		// A cause d'un bug lié au src, on utilise gulp-rename pour clear le path
		.pipe(rename(function (path) {
			path.dirname = "/css";
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			host: 'localhost',
			port: '1111',
			livereload: true,
			directoryListing: false,
			open: true
		}));
});

gulp.task('watch', function(){
	gulp.watch('./css/**/*.scss', ['cssCompile']);
});



gulp.task('default', ['cssCompile', 'webserver', 'watch']);




gulp.task('cssMin', function () {
	gulp.src('./css/**/*.scss')
		.pipe(plumber())
		.pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 0.01% in FR'], // a voir selon le poid du fichier
            remove: false,
            grid: true // peut etre a modifier ?
        }))
		.pipe(cssmin())
		.pipe(rename(function (path) {
			path.dirname = "/css";
		}))
		.pipe(gulp.dest('./'));
});


