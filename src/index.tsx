import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppStateFactory } from "./state/appstatefactory";
import { AppView } from "./views/appview";

const stateFactory = new AppStateFactory();
const app = document.getElementById("app");

ReactDOM.render(
    <AppView app={stateFactory.createInitialState()} />,
    app);

(window as any).NProgress.done();
delete (window as any).requirejs.onResourceLoad;
app.className = "";
