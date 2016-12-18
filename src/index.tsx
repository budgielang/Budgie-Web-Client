import { useStrict } from "mobx";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppStoreFactory } from "./components/appstorefactory";
import { App } from "./components/app";

useStrict(true);

const storeFactory: AppStoreFactory = new AppStoreFactory();
const app = document.getElementById("app");

ReactDOM.render(
    <App store={storeFactory.create()} />,
    app);

(window as any).NProgress.done();
delete (window as any).requirejs.onResourceLoad;
app.className = "";
