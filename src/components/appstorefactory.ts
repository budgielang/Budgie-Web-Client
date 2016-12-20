import { StorageWrapper } from "../storage/storagewrapper";
import { InputAreaStore } from "./editor/inputareastore";
import { OptionsBarStore } from "./preview/optionsbarstore";
import { OutputAreaStore } from "./preview/outputareastore";
import { AppStore } from "./appstore";
import { EditorStore } from "./editorstore";
import { PreviewStore } from "./previewstore";

/**
 * Store for an App component.
 */
export class AppStoreFactory {
    /**
     * @returns A new instance of the AppStore class.
     */
    public create() {
        const storageWrapper = new StorageWrapper("gls-web-client");

        const inputArea = new InputAreaStore(storageWrapper);
        const optionsBar = new OptionsBarStore(storageWrapper);
        const outputArea = new OutputAreaStore(inputArea, optionsBar);

        return new AppStore(
            new EditorStore(inputArea),
            new PreviewStore(optionsBar, inputArea, outputArea));
    }
}
