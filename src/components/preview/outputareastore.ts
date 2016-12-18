import { ConversionContext } from "general-language-syntax/dist/amd/Conversions/ConversionContext";
import { LanguagesBag } from "general-language-syntax/dist/amd/Languages/LanguagesBag";
import { computed, observable } from "mobx";

import { InputAreaStore } from "../editor/inputareastore";
import { OptionsBarStore } from "./optionsbarstore";

/**
 * Results from attempting a GLS conversion.
 */
export interface IConversionResult {
    /**
     * Any error that occured while converting.
     */
    error?: string;

    /**
     * Output lines of code from the conversion context.
     */
    outputLines: string[];
}

/**
 * Store for a GlsOutputArea component.
 */
export class OutputAreaStore {
    /**
     * Supported GLS languages.
     */
    private static languagesBag: LanguagesBag = new LanguagesBag();

    /**
     * Store for a GlsInputArea component.
     */
    @observable
    public glsInputArea: InputAreaStore;

    /**
     * Store for an OptionsBar component.
     */
    @observable
    public optionsBar: OptionsBarStore;

    /**
     * The last known good conversion result.
     */
    private lastGoodOutputLines: string[] = [];

    /**
     * Current results from attempting a GLS conversion.
     */
    @computed
    public get conversionResult(): IConversionResult {
        const result: IConversionResult = {
            outputLines: this.lastGoodOutputLines
        };

        try {
            result.outputLines = this.conversionContext.convert(this.glsInputArea.sourceLines);
            this.lastGoodOutputLines = result.outputLines;
        } catch (error) {
            result.error = (error as any).message;
        }

        return result;
    }

    /**
     * GLS conversion context for the current language.
     */
    @computed
    private get conversionContext(): ConversionContext {
        return new ConversionContext(OutputAreaStore.languagesBag[this.optionsBar.language]);
    }

    /**
     * Initializes a new instance of the GlsOutputAreaStore class.
     */
    public constructor(glsInputArea: InputAreaStore, optionsBar: OptionsBarStore) {
        this.glsInputArea = glsInputArea;
        this.optionsBar = optionsBar;
    }
}
