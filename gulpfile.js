"use strict";

const browserify = require("browserify");
const buffer = require("vinyl-buffer");
const fs = require("fs");
const gulp = require("gulp");
const runSequence = require("run-sequence");
const source = require("vinyl-source-stream");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");
const uglify = require("gulp-uglify");

gulp.task("browserify", () => {
    return browserify("src/main.js")
        .bundle()
        .pipe(source("main.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("src/site/scripts/bundled"));
});

gulp.task("tsc", () => {
    const tsProject = ts.createProject("tsconfig.json");

    return tsProject
        .src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("src"));
});

gulp.task("tslint", () => {
    return gulp
        .src(["src/**/*.ts", "src/**/*.tsx", "!src/**/*.d.ts"])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});

gulp.task("watch", () => {
    gulp.watch(["src/**/*.ts", "src/**/*.tsx"], ["tsc", "tslint", "browserify"]);
});

gulp.task("default", callback => {
    runSequence(
        ["tsc", "tslint"],
        ["browserify"],
        callback);
});
