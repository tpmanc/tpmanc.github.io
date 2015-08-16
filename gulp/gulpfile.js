var gulp = require('gulp'); 
var less = require('gulp-less');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
	gulp.src(['../less/main.less'])
		.pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(csso())
		.pipe(gulp.dest('../css/'));
});

gulp.task('watch', function() {

    gulp.watch(['../less/*.less', '../less/*/*.css'], function(event) {
        gulp.run('less');
    })
});