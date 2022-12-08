const gulp = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass')(require('sass'));

const concat = require('gulp-concat');
const devSer = require('browser-sync').create();
const reload = devSer.reload;

const glob = require('gulp-sass-glob');
const prefixer = require('gulp-autoprefixer');
const groupMediaQueries = require('gulp-group-css-media-queries');
const cleanUp = require('gulp-clean-css')
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const config = require("./gulp.config")
const {DIST_PATH, SRC_PATH, STYLES_LIBS, JS_LIBS} = require("./gulp.config");
const gulpif = require("gulp-if");
const dom = require("gulp-dom");

const env = process.env.NODE_ENV;

gulp.task('clean', () => {
    return gulp.src([`${DIST_PATH}/css/*, ${DIST_PATH}/index.html`], {read: false, allowEmpty: true}).pipe(rm())
})

gulp.task('copy:html', () => {
    return gulp.src(`${SRC_PATH}/*.html`)
        .pipe(gulpif(env == "prod", dom(function () {
                return this.body.querySelectorAll("script").forEach(e => {
                    const savedScripts = ["https://www.youtube.com/iframe_api", "js/main.min.js", "js/player.js"];
                    if (!savedScripts.includes(e.getAttribute("src"))) {
                        e.remove();
                    }
                });
            }))
        )
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream: true}));
})


gulp.task('css', () => {
    return gulp.src(`${SRC_PATH}/css/main.scss`)
        .pipe(gulpif(env == "dev", sourceMaps.init()))
        .pipe(glob())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulpif(env == "prod", prefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        })))
        //.pipe(groupMediaQueries())
        .pipe(gulpif(env == "dev", sourceMaps.write()))
        .pipe(gulp.dest(`${DIST_PATH}/css`))

})

gulp.task('concat', () => {

    return gulp.src([
        `${SRC_PATH}/fonts/fonts.scss`,
        ...STYLES_LIBS,
        `${DIST_PATH}/css/main.css`
    ])
        .pipe(concat("main.min.css"))
        .pipe(gulp.dest(`${DIST_PATH}/css`))
        .pipe(reload({stream: true}));
})

gulp.task('server', function () {
    devSer.init({
        server: {
            baseDir: DIST_PATH
        },
        open: false
    });
});

gulp.task('cleanUp', () => {
    return gulp.src(`${DIST_PATH}/css/main.css`)
        .pipe(cleanUp())
        .pipe(gulp.dest(`${DIST_PATH}/css`))
        .pipe(reload({stream: true}));
})

const jsFiles = [
    ...JS_LIBS,
    `${SRC_PATH}/js/hamburger.js`,
    `${SRC_PATH}/js/menu.js`,
    `${SRC_PATH}/js/order.js`,
    `${SRC_PATH}/js/reviews.js`,
    `${SRC_PATH}/js/slider.js`,
    `${SRC_PATH}/js/team.js`,
]

gulp.task('scripts', () => {

    gulp.src(`${SRC_PATH}/js/player.js`)
        .pipe(gulp.dest(`${DIST_PATH}/js`))

    return gulp.src(jsFiles)
        .pipe(gulpif(env == "dev", sourceMaps.init()))
        //.pipe(concat('main.min.js'))
        .pipe(gulpif(env == "prod", concat('main.min.js', {newLine: ";"})))
        .pipe(gulpif(env == "prod", uglify()))
        .pipe(gulpif(env == "dev", sourceMaps.write()))
        .pipe(gulp.dest(`${DIST_PATH}/js`))
        .pipe(reload({stream: true}))
})

gulp.watch(`${SRC_PATH}/css/**/*.scss`, gulp.series('css'));
gulp.watch(`${SRC_PATH}/*.html`, gulp.series('copy:html'));
gulp.watch(`${SRC_PATH}/js/*.js`, gulp.series('scripts'));

gulp.task('default', gulp.series("clean", "css", "concat", 'cleanUp', 'scripts', "copy:html", "server"));

gulp.task('build', gulp.series("clean", "css", "concat", 'cleanUp', 'scripts', "copy:html"));


/*
npm install --save normalize.css
npm install gulp gulp-rm sass gulp-sass gulp-concat browser-sync gulp-sass-glob gulp-autoprefixer
gulp-group-css-media-queries gulp-clean-css gulp-sourcemaps gulp-babel @babel/core @babel/preset-env gulp-uglify --save-dev
 */