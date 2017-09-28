"use strict";

const gulp = require("gulp");

gulp.task("build", ["html", "sass", "tsc", "tslint"]);

gulp.task("clean", () => {
    const del = require("del");

    return del("lib/**/*");
})

gulp.task("html", () => {
    const htmlmin = require("gulp-htmlmin");

    return gulp.src("src/**/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true
        }))
        .pipe(gulp.dest("lib"));
});

gulp.task("sass", () => {
    // const sass = require("gulp-sass");
    // const cleanCss = require("gulp-clean-css");

    // return gulp.src("src/**/*.scss")
    //     .pipe(sass())
    //     .pipe(cleanCss())
    //     .pipe(gulp.dest("lib"));
});

gulp.task("stylelint", () => {
    const stylelint = require("stylelint");

    return gulp.src("src/**/*.scss")
        .pipe(stylelint({
            reporters: [
                { formatter: "string", console: true }
            ]
        }));
});


gulp.task("tsc", () => {
    const merge = require("merge2");
    const sourcemaps = require("gulp-sourcemaps");
    const ts = require("gulp-typescript");
    const uglify = require("gulp-uglify");

    const project = ts.createProject("tsconfig.json");
    const output = project
        .src()
        .pipe(sourcemaps.init())
        .pipe(project());

    return merge([
        output.dts.pipe(gulp.dest("lib")),
        output.js
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("lib"))
    ]);
});

gulp.task("tslint", () => {
    var tslint = require("tslint");
    var gulpTslint = require("gulp-tslint");
    var program = tslint.Linter.createProgram("./tsconfig.json");

    return gulp
        .src(["src/**/*.ts", "src/**/*.tsx", "!src/**/*.d.ts"])
        .pipe(gulpTslint({
            formatter: "stylish",
            program
        }))
        .pipe(gulpTslint.report());
});

gulp.task("watch", () => {
    gulp.watch(
        "src/**/*.html",
        ["html"]);

    gulp.watch(
        "src/**/*.scss",
        ["sass"]);

    gulp.watch(
        ["src/**/*.ts", "src/**/*.tsx"],
        ["tsc"]);
});

gulp.task("default", ["build"]);
