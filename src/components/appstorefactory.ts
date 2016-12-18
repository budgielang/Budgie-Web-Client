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
        const inputArea = new InputAreaStore();
        const outputArea = new OutputAreaStore(inputArea, new OptionsBarStore());

        return new AppStore(
            new EditorStore(inputArea),
            new PreviewStore(new OptionsBarStore(), inputArea, outputArea));
    }
}
