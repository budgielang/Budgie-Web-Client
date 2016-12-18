import { ConversionContext } from "general-language-syntax/dist/amd/Conversions/ConversionContext";
import { Language } from "general-language-syntax/dist/amd/Languages/Language";
import { LanguagesBag } from "general-language-syntax/dist/amd/Languages/LanguagesBag";
import { action, autorun, computed, observable } from "mobx";

import { InputAreaStore } from "./editor/inputareastore";
import { OptionsBarStore } from "./preview/optionsbarstore";
import { OutputAreaStore } from "./preview/outputareastore";

/**
 * Store for a Preview component.
 */
export class PreviewStore {
    /**
     * Languages keyed by their friendly names.
     */
    private static languagesBag: LanguagesBag = new LanguagesBag();

    /**
     * Store for an OptionsBar component.
     */
    @observable
    public optionsBar: OptionsBarStore;

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
    public constructor(optionsBar: OptionsBarStore, inputArea: InputAreaStore, outputArea: OutputAreaStore) {
        this.optionsBar = optionsBar;
        this.inputArea = inputArea;
        this.outputArea = outputArea;
    }
}
