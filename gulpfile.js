const gulp = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass')(require('sass'));

const concat = require('gulp-concat');
const devSer = require('browser-sync').create();
const reload = devSer.reload;

const glob = require('gulp-sass-glob');
const prefixer = require('gulp-autoprefixer');

const styleFiles = [
    "node_modules/normalize.css/normalize.css",
    "src/css/main.scss"
]



gulp.task('clean', () => {
    return gulp.src(["dist/css/*","dist/index.html"], {read: false}).pipe(rm())
})

gulp.task('copy:html', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream: true}));
})

gulp.task('css', () => {
    return gulp.src(styleFiles)
        .pipe(concat("main.scss"))
        .pipe(glob())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(prefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({stream: true}));
})

gulp.task('server', function () {
    devSer.init({
        server: {
            baseDir: "dist"
        },
        open: false
    });
});

gulp.watch('./src/css/**/*.scss', gulp.series('css'));
gulp.watch('./src/*.html', gulp.series('copy:html'));

gulp.task('default', gulp.series("clean", "css", "copy:html", "server"));
