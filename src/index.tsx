import { useStrict } from "mobx";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppStoreFactory } from "./app/factory";
import { App } from "./app/view";

useStrict(true);

const storeFactory = new AppStoreFactory();
const app = document.getElementById("app");

ReactDOM.render(
    <App store={storeFactory.create()} />,
    app);

(window as any).NProgress.done();
delete (window as any).requirejs.onResourceLoad;
app.className = "";
