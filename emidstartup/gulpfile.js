var gulp = require("gulp"),
  path = require("path"),
  gutil = require("gulp-util"),
  rename = require("gulp-rename"),
  pkg = require("./package.json");

var SRC  = ".";
var SRC_LESS_BASE  = path.join(SRC, "less");
var SRC_JAVASCRIPT_BASE  = path.join(SRC, "js");
var SRC_IMAGES_BASE  = path.join(SRC, "img");

var SRC_ALL  = path.join(SRC, "**");
var SRC_HTML  = path.join(SRC, "html", "**", "*.html");
var SRC_LESS_ALL  = path.join(SRC_LESS_BASE, "**", "*.less");
var SRC_JAVASCRIPT_ALL  = path.join(SRC_JAVASCRIPT_BASE, "**", "*.js");
var SRC_MODULE_JS = path.join(SRC_JAVASCRIPT_BASE,"**","*.module.js");
var SRC_IMAGES_ALL  = path.join(SRC_IMAGES_BASE, "**", "*");

var DIST = "dist";
var DIST_LIB = path.join(DIST, "lib");
var DIST_ALL = path.join(DIST, "**");
var DIST_LESS = path.join(DIST, "css");
var DIST_JAVASCRIPT = path.join(DIST, "js");
var DIST_IMAGES = path.join(DIST, "img");

var MAIN_SCRIPT = "app.js";
var MAIN_CSS = "styles.css";

var gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

// LESS

// Compile app/less sources in CSS and auto-prefix the CSS
function compileLess() {
  return gulp.src(SRC_LESS_ALL)
    .pipe(plugins.less({ paths: [ path.join(SRC_LESS_BASE, "includes") ] }))
    .pipe(plugins.autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"))
    .pipe(plugins.concat(MAIN_CSS))
    .pipe(gulp.dest(DIST_LESS));
}

gulp.task("compile:less",  function() {
  return compileLess()
});

// Minify the CSS
gulp.task("dist:less",  function() {
  return compileLess()
    .pipe(rename({ suffix: ".min" }))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(DIST_LESS));
});

// JavaScripts

// Run JSHint on all of the app/js files and concatenate everything together

// The code needs a bit of sequencing - first should be the app.js
function compileJavaScript() {
  return gulp.src([SRC_MODULE_JS,SRC_JAVASCRIPT_ALL])
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.concat(MAIN_SCRIPT))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(DIST_JAVASCRIPT));
}

gulp.task("compile:javascript",  function() {
  return compileJavaScript();
});

// Uglify the JS
gulp.task("dist:javascript",  function() {
  return compileJavaScript()
    .pipe(rename({ suffix: ".min" }))
    /*
    // .pipe(plugins.ngmin()) // ngmin makes angular injection syntax compatible with uglify
    .pipe(plugins.uglify(), {
        outSourceMap: true
    })
*/
    .pipe(gulp.dest(DIST_JAVASCRIPT));
});


// Images

gulp.task("compile:images",  function() {
  return gulp.src(SRC_IMAGES_ALL)
    .pipe(gulp.dest(DIST_IMAGES));
});

// Compress the images
gulp.task("dist:images",  function() {
  return gulp.src(SRC_IMAGES_ALL)
    .pipe(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(DIST_IMAGES));
});


// Copy the html assets without modification
gulp.task("compile:html",  function() {
  return gulp.src(SRC_HTML)
    .pipe(gulp.dest(DIST));
});


// Replace the non-minified paths in html assets with the minified paths
// Todo: This brute force hacky way of doing this is error prone
gulp.task("dist:html",  function() {
  return gulp.src(SRC_HTML)
      .pipe(plugins.replace(/\.js/g, ".min.js"))
      .pipe(plugins.replace(/\.css/g, ".min.css"))
      .pipe(gulp.dest(DIST));
});

// Compile everything
gulp.task("compile", ["compile:html", "compile:less", "compile:javascript", "compile:images"]);


// Dist everything
gulp.task("dist",  ["dist:html", "dist:less", "dist:javascript", "dist:images"]);


gulp.task("default", ["dist"]);

// Clean the DIST dir
gulp.task("clean", function() {
  return gulp.src([DIST, ".build"], {read: false})
    .pipe(plugins.clean());
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(SRC_JAVASCRIPT_ALL, ['dist:javascript']);
  gulp.watch(SRC_LESS_ALL, ['dist:less']);
});

