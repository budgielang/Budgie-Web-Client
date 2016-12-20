import { action, computed, observable } from "mobx";

import { EditorStore } from "./editorstore";
import { PreviewStore } from "./previewstore";

/**
 * Store for an App component.
 */
export class AppStore {
    /**
     * Store for an Editor component.
     */
    @observable
    public editor: EditorStore;

    /**
     * Store for a Preview component.
     */
    @observable
    public preview: PreviewStore;

    /**
     * Initializes a new instance of the AppStore class.
     * 
     * @param editor   Store for an Editor component.
     * @param preview   Store for a Preview component.
     */
    public constructor(editor: EditorStore, preview: PreviewStore) {
        this.editor = editor;
        this.preview = preview;
    }
}
