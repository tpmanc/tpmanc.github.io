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
            '../js/modernizr-2.6.2.min.js',
            '../js/jquery-1.11.0.min.js',
            '../js/bootstrap.min.js',
            '../js/jquery.cookie.js',
            '../js/waypoints.min.js',
            '../js/gmaps.js',
            '../js/masonry.pkgd.min.js',
            '../js/owl.carousel.min.js',
            '../js/jquery.scrollTo.min.js',
            '../js/jquery.counterup.min.js',
            '../js/jquery.parallax-1.1.3.js',
            '../js/front.js',
        ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../production/'));
});

gulp.task('css', function() {
    gulp.src(['../css/*.css'])
    .pipe(concat('main.min.css'))
    .pipe(csso())
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
    gulp.src(['../img/works/gallery/*.jpg'])
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('../public/'));
});