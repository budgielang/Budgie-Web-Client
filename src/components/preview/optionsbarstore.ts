import { action, observable } from "mobx";

/**
 * Store for an options bar component.
 */
export class OptionsBarStore {
    /**
     * Language the GLS syntax will compile to.
     */
    @observable
    public language: string = "CSharp";

    /**
     * Sample name the user is editing from.
     */
    @observable
    public sample: string = "default";

    /**
     * @param language   A new language GLS syntax will compile into.
     */
    @action
    public readonly setLanguage = (language: string): void => {
        this.language = language;
    };

    /**
     * @param sample   A new sample name the user is editing from.
     */
    @action
    public readonly setSample = (sample: string): void => {
        this.sample = sample;
    };
}
