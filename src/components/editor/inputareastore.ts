import { action, computed, observable } from "mobx";

/**
 * Store for a GLS input area.
 */
export class InputAreaStore {
    /**
     * Raw text contents.
     */
    @observable
    public source: string = "";

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
}
