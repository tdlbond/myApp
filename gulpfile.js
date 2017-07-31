var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var app = {
	srcPath: 'src/',
	devPath: 'build/',
	prdPath: 'dist/'
};

gulp.task('lib', function() {
	gulp.src('node_modules/**/*.min.js').
	pipe(gulp.dest(app.devPath + 'vender')).
	pipe(gulp.dest(app.prdPath + 'vender'));
});


gulp.task('delete', function() {
	gulp.src([app.prdPath, app.devPath]).
	pipe($.clean());
})