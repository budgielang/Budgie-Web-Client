import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppStateFactory } from "./state/appstatefactory";
import { App } from "./views/app";

const stateFactory = new AppStateFactory();
const app = document.getElementById("app");

ReactDOM.render(
    <App app={stateFactory.createInitialState()} />,
    app);

(window as any).NProgress.done();
delete (window as any).requirejs.onResourceLoad;
app.className = "";
