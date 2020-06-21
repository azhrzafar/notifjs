var gulp = require("gulp");
var del = require("del");
const babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var uglifycss = require("gulp-uglifycss");
var rename = require("gulp-rename");

gulp.task("clean", function () {
  return del(["./dist"]);
});

gulp.task("script", async function () {
  gulp
    .src("./src/index.js")
    .pipe(
      babel({
        presets: [
          [
            "@babel/env",
            {
              modules: false
            }
          ]
        ]
      })
    )
    .pipe(uglify())
    .pipe(rename("notif.min.js"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("style", async function () {
  gulp
    .src(["./src/style.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(
      uglifycss({
        uglyComments: true
      })
    )
    .pipe(rename("notif.min.css"))
    .pipe(gulp.dest("./dist"));
});

exports.default = gulp.series("clean", "script", "style");
