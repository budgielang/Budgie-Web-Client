/// <reference path="../typings/browser/ambient/require/index.d.ts" />

requirejs.config({
    paths: {
        "react": "../bower_components/react/react",
        "react-dom": "../bower_components/react/react-dom"
    }
});

requirejs(["index"]);
