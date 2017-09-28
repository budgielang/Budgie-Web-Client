import { MonacoToMonacoStore } from "monaco-to-monaco";

export class AppStore {
    public readonly monacoToMonaco: MonacoToMonacoStore;

    public constructor(monacoToMonaco: MonacoToMonacoStore) {
        this.monacoToMonaco = monacoToMonaco;
    }
}
