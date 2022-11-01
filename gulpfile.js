const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const pug = require("gulp-pug");

gulp.task("pug", function () {
  return gulp
    .src(["./src/**/*.pug", "!./src/**/_*.pug"])
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("."));
});

gulp.task("scss", function () {
  return gulp
    .src(["./style/**/*.scss"])
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest("./style"));
});
