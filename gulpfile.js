// Grab our gulp packages
var gulp  = require('gulp'),
      gutil = require('gulp-util'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      minifycss = require('gulp-minify-css'),
      jshint = require('gulp-jshint'),
      stylish = require('jshint-stylish'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      plumber = require('gulp-plumber'),
      bower = require('gulp-bower'),
      spritesmith = require('gulp.spritesmith'),
      browserSync = require('browser-sync').create(),
      base64 = require('gulp-base64');

// Compile Sass, Autoprefix and minify
gulp.task('styles', function() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
    }))
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./assets/css/')) 
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});

// JSHint, concat, and minify JavaScript
gulp.task('js', function() {
  return gulp.src([      
          './assets/js/scripts.js'         
  ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'))
});  

// Browser-Sync Serve
gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./assets/scss/**/*.scss', ['styles']);
    gulp.watch("./assets/js/*.js").on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);

});

// Sprites
gulp.task('sprite', function () {
  var spriteData = gulp.src('./assets/images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss'
  }));
  return spriteData.pipe(gulp.dest('./assets/sprites/'));
});

// Base64
gulp.task('base64', function () {
    return gulp.src('./assets/css/style.min.css')
        .pipe(base64({
            baseDir: './assets/css',
            extensions: ['svg'],
            // exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
            maxImageSize: 8*1024, // bytes 
            debug: true
        }))
        // .pipe(concat('main.css'))
        .pipe(gulp.dest('./assets/css'));
});

//  Default  
// gulp.task('default', function() {
//   gulp.start('styles', 'site-js');
// });