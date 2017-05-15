import { Samples } from "../samples";
import { StorageWrapper } from "../storage/storagewrapper";
import { AppStore } from "./appstore";
import { CommandsListStore } from "./editor/commands/commandsliststore";
import { InputAreaStore } from "./editor/inputareastore";
import { InputBarStore } from "./editor/inputbarstore";
import { EditorStore } from "./editorstore";
import { OutputAreaStore } from "./preview/outputareastore";
import { OutputBarStore } from "./preview/outputbarstore";
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

        const commandsList = new CommandsListStore(storageWrapper);
        const inputArea = new InputAreaStore(storageWrapper);
        const inputBar = new InputBarStore(storageWrapper, inputArea, commandsList, Samples);
        const outputBar = new OutputBarStore(storageWrapper);
        const outputArea = new OutputAreaStore(inputArea, outputBar);

        return new AppStore(
            new EditorStore(inputArea, commandsList, inputBar),
            new PreviewStore(outputBar, inputArea, outputArea));
    }
}
