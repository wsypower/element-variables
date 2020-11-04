var path = require("path");
var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
var cssWrap = require("gulp-css-wrap");

var customThemeName = ".theme-element";

gulp.task("css-wrap", function () {
  return gulp
    .src(path.resolve("./theme/index.css"))
    .pipe(cssWrap({ selector: customThemeName }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("../d2-admin-start-kit/src/assets/style/element-variables"));
});

gulp.task("move-font", function () {
  return gulp.src(["./theme/fonts/**"]).pipe(gulp.dest("dist/fonts"));
});

gulp.task("default", ["css-wrap", "move-font"]);
