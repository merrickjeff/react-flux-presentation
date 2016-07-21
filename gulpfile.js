"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server, supports live reload
var open = require('gulp-open'); // Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var sass = require('gulp-sass');
var source = require('vinyl-source-stream'); // use conventional text streams with Gulp
var concat = require('gulp-concat'); // Concatenates files

var config = {
	port: 9005,
	devBaseURL: 'http://localhost',
	paths: {
		html: 'src/*.html',
		js: 'src/**/*.js', 
		jsx: 'src/**/*.jsx',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/toastr/toastr.scss'
		],
		dist: 'dist',
		mainJs: 'src/bootstrap.js'
	}
};

gulp.task('connect', function(){
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseURL,
		livereload: true
	});
});

gulp.task('open', ['connect'], function(){
	gulp.src('dist/index.html')
		.pipe(open({uri: config.devBaseURL + ':' + config.port + '/', app: 'chrome'}));
});

gulp.task('html', function(){
	gulp.src(config.paths.html).pipe(gulp.dest(config.paths.dist)).pipe(connect.reload());
});

gulp.task('js', function(){
		browserify({
	    extensions: ['.js', '.jsx'],
      entries: config.paths.mainJs,
      debug: true
    })
		.transform('babelify', {presets: ['es2015', 'react']}).bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src(config.paths.css)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
	gulp.watch(config.paths.jsx, ['js']);
	gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);