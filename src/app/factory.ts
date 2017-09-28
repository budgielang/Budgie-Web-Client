import { createStorageCache, createStore } from "monaco-to-monaco";

import { AppStore } from "./store";
import { createGlsTransformer } from "./transformer";

export class AppStoreFactory {
    public create() {
        const storageCache = createStorageCache(localStorage, "gls-web-client");
        const store = createStore({
            input: {
                language: "javascript",
                value: "",
            },
            localCache: storageCache,
            outputLanguage: "javascript",
            transformer: createGlsTransformer(),
        });

        return new AppStore(store);
    }
}
