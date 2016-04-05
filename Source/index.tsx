/// <reference path="../typings/browser/ambient/react/index.d.ts" />
/// <reference path="../typings/browser/ambient/react-dom/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import WebClientComponent from "./Components/WebClientComponent";

(() => {
    ReactDOM.render(
        <WebClientComponent />,
        document.querySelector("#app"));
})();
