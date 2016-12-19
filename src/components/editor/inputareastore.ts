import { action, computed } from "mobx";

import { IStorageWrapper } from "../../storage/storageWrapper";
import { stored } from "../../storage/stored";
import { storing } from "../../storage/storing";

/**
 * Store for a GLS input area.
 */
@storing<InputAreaStore>(store => store.storageWrapper)
export class InputAreaStore {
    /**
     * Raw text contents.
     */
    @stored("")
    public source: string;

    /**
     * Text contents split by line.
     */
    @computed
    public get sourceLines(): string[] {
        return this.source.split("\n");
    }

    /**
     * @param source   New raw text contents.
     */
    @action
    public setSource(source: string): void {
        this.source = source;
    }

    /**
     * Wrapper for persistent items kept in a Storage object.
     */
    private readonly storageWrapper: IStorageWrapper;

    /**
     * Initializes a new instance of the InputAreaStore class.
     * 
     * @param storageWrapper   Wrapper for persistent items kept in a Storage object.
     */
    public constructor(storageWrapper: IStorageWrapper) {
        this.storageWrapper = storageWrapper;
    }
}
