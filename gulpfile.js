var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');

gulp.task('spritesmith', function(){
	 var spriteData = gulp.src('images/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.styl',
    imgPath: '../../images/sprite.png'
  }));

	var imgStream = spriteData.img
		.pipe(imagemin({
			optimizationLevel: 4
		}))
    .pipe(gulp.dest('./images'));

  var cssStream = spriteData.css
    .pipe(gulp.dest('./styles'));
});

gulp.task('default', ['spritesmith']);
