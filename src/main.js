require.config({
    baseUrl: "..",
    paths: {
        "gls/src": "node_modules/general-language-syntax/dist/amd",
        "react": "node_modules/react/dist/react", // .min",
        "react-dom": "node_modules/react-dom/dist/react-dom", // .min",
        "vs": "node_modules/monaco-editor/dev/vs"
    }
});

define(["react", "react-dom", "./src/Components/WebClientComponent"], function (React, ReactDom, WebClientComponent) {
    "use strict";

    NProgress.done();

    ReactDom.render(
        React.createElement(WebClientComponent.default, null),
        document.querySelector("#app"));
});

NProgress.start();

for (var i = 0; i < 5; i += 1) {
    setTimeout(
        function () {
            if (NProgress.status) {
                NProgress.inc();
            }
        },
        i * 100);
}