import { action, computed, observable } from "mobx";

import { InputAreaStore } from "./editor/inputareastore";

/**
 * Store for an Editor component.
 */
export class EditorStore {
    /**
     * Store for an InputArea component.
     */
    @observable
    public inputArea: InputAreaStore;

    /**
     * Initializes a new instance of the EditorStore class.
     * 
     * @param inputArea   Store for an InputArea component.
     */
    public constructor(inputArea: InputAreaStore) {
        this.inputArea = inputArea;
    }
}
