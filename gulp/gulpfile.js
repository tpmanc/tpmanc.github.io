var gulp = require('gulp'); 
var less = require('gulp-less');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var imageop = require('gulp-image-optimization');
var uglify = require('gulp-uglify');

gulp.task('less', function() {
    gulp.src(['../less/main.less'])
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest('../production/'));
});

gulp.task('js', function() {
    gulp.src([
            '../js/plugins/jquery-2.1.4.min.js',
            '../js/plugins/TweenMax.min.js',
            '../js/plugins/jquery.ScrollMagic.min.js',
            '../js/plugins/animation.gsap.min.js',
            '../js/plugins/debug.addIndicators.min.js',
            '../js/plugins/jquery.arcticmodal-0.3.min.js',
            '../js/main.js',
        ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../production/'));
});

gulp.task('watch', function() {

    gulp.watch(['../less/*.less', '../less/*/*.css'], function(event) {
        gulp.run('less');
    });

    gulp.watch(['../js/*.js', '../js/*/*.js'], function(event) {
        gulp.run('js');
    });
});


gulp.task('img', function() {
    gulp.src(['../img/**/*.png','../img/**/*.jpg','../img/**/*.gif','../img/**/*.jpeg'])
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('../public/'));
});