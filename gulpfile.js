// Подключение пакетов

const gulp = require("gulp");

const browserSync = require("browser-sync").create();

const less = require("gulp-less");

const plumber = require("gulp-plumber");

const notify = require("gulp-notify");

const autoprefixer = require("gulp-autoprefixer");

const sourcemaps = require("gulp-sourcemaps");

const pug = require("gulp-pug");

const del = require("del");

// Задачи для Gulp

gulp.task("less", function () {
  return gulp
    .src("./app/less/main.less")
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: "Styles",
            message: err.message,
          };
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 3 versions"],
        cascade: false,
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./build/css/"))
    .pipe(browserSync.stream());
});

gulp.task("pug", function () {
  return gulp
    .src("./app/pug/pages/**/*.pug")
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: "Pug",
            message: err.message,
          };
        }),
      })
    )
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("./build/"))
    .pipe(browserSync.stream());
});

gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./build/",
    },
  });

  gulp.watch("./app/pug/**/*.*").on("change", gulp.series("pug"));

  gulp.watch("./app/less/**/*.less").on("change", gulp.series("less"));

  gulp.watch("app/fonts/**/*.*").on("all", gulp.series("copy:fonts"));
  gulp.watch("app/js/**/*.js").on("all", gulp.series("copy:js"));
  gulp.watch("app/libs/**/*.*").on("all", gulp.series("copy:libs"));
  gulp.watch("app/img/**/*.*").on("all", gulp.series("copy:img"));
});

gulp.task("copy:js", function () {
  return gulp
    .src("app/js/**/*.*")
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
});

gulp.task("copy:fonts", function () {
  return gulp
    .src("app/fonts/**/*.*")
    .pipe(gulp.dest("./build/fonts"))
    .pipe(browserSync.stream());
});

gulp.task("copy:libs", function () {
  return gulp
    .src("app/libs/**/*.*")
    .pipe(gulp.dest("./build/libs"))
    .pipe(browserSync.stream());
});

gulp.task("copy:img", function () {
  return gulp
    .src("app/img/**/*.*")
    .pipe(gulp.dest("./build/img"))
    .pipe(browserSync.stream());
});

gulp.task("clean:build", function () {
  return del("./build");
});

gulp.task(
  "default",
  gulp.series(
    "clean:build",
    gulp.parallel(
      "copy:js",
      "copy:libs",
      "copy:fonts",
      "copy:img",
      "less",
      "pug"
    ),
    "server"
  )
);
