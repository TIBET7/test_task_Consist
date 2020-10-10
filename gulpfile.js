import gulp from "gulp";
import plumber from "gulp-plumber";
import sourcemaps  from "gulp-sourcemaps";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import sync from "browser-sync";
import csso from "gulp-csso";
import rename from "gulp-rename";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import svgstore from "gulp-svgstore";
import del from "del";
// import terser from 'gulp-terser';
import htmlmin from 'gulp-htmlmin';


// Server

export const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Styles

export const styles = () => {
  return gulp.src("source/sass/style.scss")
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(gulp.dest("build/css"))
  .pipe(csso())
  .pipe(rename("styles.min.css"))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("build/css"))
  .pipe(sync.stream());
};

//HTML

export const html = () => {
  return gulp.src("source/*.html")
    .pipe(plumber())
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest("build"))
    .pipe(sync.stream());
};

//JS

export const js = () => {
  return gulp.src('source/js/script.js')
    .pipe(plumber())
    .pipe(gulp.dest("build/js"))
    // .pipe(terser())
    // .pipe(rename("script.min.js"))
    // .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
};

//Images optimization

export const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin ([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
};

//WebP

export const webP = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
};

//Sprite

export const sprite = () => {
  return gulp.src("source/img/**/icon-*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
};


// Watcher

export const watch = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/js/*.js", gulp.series(js));
  gulp.watch("source/*.html", gulp.series(html));
};

//Copy

export const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/*.ico",
    "source/js/modules/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
};

//Clean

export const clean = () => {
  return del("build");
};


//Build

export const build =  gulp.series(clean, copy, styles, js, html);


//Start
export const start = gulp.series(build, server, watch);
