import { observable } from "mobx";

import { InputAreaStore } from "./editor/inputareastore";
import { OutputAreaStore } from "./preview/outputareastore";
import { OutputBarStore } from "./preview/outputbarstore";

/**
 * Store for a Preview component.
 */
export class PreviewStore {
    /**
     * Store for an OptionsBar component.
     */
    @observable
    public optionsBar: OutputBarStore;

    /**
     * Store for a GlsInputArea component.
     */
    @observable
    public inputArea: InputAreaStore;

    /**
     * Any error that occurred while converting.
     */
    @observable
    public outputArea: OutputAreaStore;

    /**
     * Initializes a new instance of the PreviewStore class.
     * 
     * @param optionsBar   Store for an OptionsBar component.
     */
    public constructor(optionsBar: OutputBarStore, inputArea: InputAreaStore, outputArea: OutputAreaStore) {
        this.optionsBar = optionsBar;
        this.inputArea = inputArea;
        this.outputArea = outputArea;
    }
}
