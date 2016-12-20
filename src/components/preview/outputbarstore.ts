import { action, observable } from "mobx";

import { IStorageWrapper } from "../../storage/storagewrapper";
import { stored } from "../../storage/stored";
import { storing } from "../../storage/storing";

/**
 * Store for an output bar component.
 */
@storing<OutputBarStore>(store => store.storageWrapper)
export class OutputBarStore {
    /**
     * Language the GLS syntax will compile to.
     */
    @stored("CSharp")
    public language: string;

    /**
     * Sample name the user is editing from.
     */
    @stored("Default")
    public sample: string;

    /**
     * @param language   A new language GLS syntax will compile into.
     */
    @action
    public readonly setLanguage = (language: string): void => {
        this.language = language;
    }

    /**
     * Wrapper for persistent items kept in a Storage object.
     */
    private readonly storageWrapper: IStorageWrapper;

    /**
     * Initializes a new instance of the OutputBarStore class.
     * 
     * @param storageWrapper   Wrapper for persistent items kept in a Storage object.
     */
    public constructor(storageWrapper: IStorageWrapper) {
        this.storageWrapper = storageWrapper;
    }
}
