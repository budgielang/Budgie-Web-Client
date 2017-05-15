import { ConversionContext } from "general-language-syntax/dist/amd/Conversions/ConversionContext";
import { LanguagesBag } from "general-language-syntax/dist/amd/Languages/LanguagesBag";
import { computed, observable } from "mobx";

import { InputAreaStore } from "../editor/inputareastore";
import { OutputBarStore } from "./outputbarstore";

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
     * Store for an InputArea component.
     */
    @observable
    public inputArea: InputAreaStore;

    /**
     * Store for an OutputBar component.
     */
    @observable
    public outputBar: OutputBarStore;

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
            outputLines: this.lastGoodOutputLines,
        };

        try {
            result.outputLines = this.conversionContext.convert(this.inputArea.sourceLines);
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
        return new ConversionContext(OutputAreaStore.languagesBag[this.outputBar.language]);
    }

    /**
     * Initializes a new instance of the GlsOutputAreaStore class.
     * 
     * @param glsInputArea   Store for an InputArea component.
     * @param outputBar   Store for an OutputBar component.
     */
    public constructor(inputArea: InputAreaStore, outputBar: OutputBarStore) {
        this.inputArea = inputArea;
        this.outputBar = outputBar;
    }
}
