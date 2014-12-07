var gulp = require("gulp");
var path = require("path");
var gutil = require("gulp-util");




var pkg = require("./package.json");  //We need the package.json file to be present on the file system. gulp-load-plugins would read this file to load the gulp plugins
var gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();



var SRC = ".";

var SRC_BASE = path.join(SRC, "components");
var SRC_IMAGES_BASE = path.join(SRC, "images");

var SRC_ALL = path.join(SRC, "**");
var SRC_HTML = path.join(SRC_BASE, "**", "*.html");
var SRC_LESS_ALL = path.join(SRC_BASE, "**", "*.less");
var SRC_JAVASCRIPT_ALL = path.join(SRC_BASE, "**", "*.js");
var SRC_MODULE_JS = path.join(SRC_BASE, "**", "*.module.js");
var SRC_IMAGES_ALL = path.join(SRC_IMAGES_BASE, "**", "*");

var DIST = "dist";
var DIST_ALL = path.join(DIST, "**");
var DIST_LESS = path.join(DIST, "css");
var DIST_JAVASCRIPT = path.join(DIST, "js");
var DIST_HTML = path.join(DIST, "html");
var DIST_IMAGES = path.join(DIST, "images");

var MAIN_SCRIPT = "app.js";
var MAIN_CSS = "styles.css";

/***
       Each asset goes through compile and dist 
       Compile takes care of compilation work if any, for example, compiling less to plain js. It is otherwise a plain copy of src to dest, for example, angular template htmls
       Dist takes care of minifying, renaming and other post compilation work
***/

// LESS

// Compile app/less sources in CSS and auto-prefix the CSS
function compileLess() {
    return gulp.src(SRC_LESS_ALL)
      .pipe(plugins.less({ paths: [path.join(SRC_LESS_BASE, "includes")] }))
      .pipe(plugins.autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"))
      .pipe(plugins.concat(MAIN_CSS))
      .pipe(gulp.dest(DIST_LESS, { mode: '0777' }))
}

gulp.task("compile:less", ["clean"], function () {
    return compileLess();
});

// Minify the CSS
gulp.task("dist:less", ["compile:less"], function () {
    return gulp.src(path.join(DIST_LESS, "*.css"))
      .pipe(plugins.rename({ suffix: ".min" }))
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest(DIST_LESS, { mode: '0777' }));
});

// JavaScripts

// Run JSHint on all of the app/js files and concatenate everything together

// The code needs a bit of sequencing - first should be the app.js
function compileJavaScript() {
    return gulp.src([SRC_MODULE_JS, SRC_JAVASCRIPT_ALL])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.concat(MAIN_SCRIPT))
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(DIST_JAVASCRIPT, { mode: '0777' }))
}

gulp.task("compile:javascript", ["clean", "dist:html"], function () {
    return compileJavaScript();
});

// Uglify the JS
gulp.task("dist:js", ["compile:javascript"], function () {
     return gulp.src(path.join(DIST_JAVASCRIPT, "*.js"))
      .pipe(plugins.rename({ suffix: ".min" }))
      .pipe(plugins.ngmin()) // ngmin makes angular injection syntax compatible with uglify
      .pipe(plugins.uglify(), {
          outSourceMap: true
      })
      .pipe(gulp.dest(DIST_JAVASCRIPT, { mode: '0777' }));
});


// Images

gulp.task("compile:images", function () {
    return gulp.src(SRC_IMAGES_ALL)
      .pipe(gulp.dest(DIST_IMAGES, {mode:'0777'}));
});

// Compress the images
gulp.task("dist:images", ["clean"], function () {
    return; //TODO Use minified images
    //return gulp.src(SRC_IMAGES_ALL)
    //  .pipe(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    //  .pipe(gulp.dest(DIST_IMAGES, {mode:'0777'}));
});

// HTML

// No compile task for html only copy
function compileHtml() {
    return gulp.src(SRC_HTML)
        .pipe(gulp.dest(DIST_HTML, { mode: '0777' }))
}

gulp.task("compile:html", ["clean"], function () {
    return compileHtml();
});


// Replace the non-minified paths in html assets with the minified paths
// Todo: This brute force hacky way of doing this is error prone
gulp.task("dist:html", ["compile:html"], function () {
    return;

    // TODO enable minification of js/css refs in html before going to prod
        //.pipe(plugins.replace(/\.js/g, ".min.js"))
        //.pipe(plugins.replace(/\.css/g, ".min.css"))
        
});

// Compile everything
gulp.task("compile", ["compile:html", "compile:less", "compile:javascript", "compile:images"]);


// Dist everything

gulp.task("dist", ['dist:html', 'dist:js', 'dist:less', 'dist:images']);

// Clean the DIST dir

gulp.task("clean", function () {
    return gulp.src([DIST, ".build"], { read: false })
      .pipe(plugins.clean());
});


gulp.task('watch', function () {

    // Watch .scss files
    //Now any watch will have to run full dist so as to update the reference in the parent index.html file
    gulp.watch(SRC_JAVASCRIPT_ALL, ['dist:js']);
    gulp.watch(SRC_LESS_ALL, ['dist:less']);
    gulp.watch(SRC_HTML, ['dist:html']);
});

