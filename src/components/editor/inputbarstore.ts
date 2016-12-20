import { action, observable } from "mobx";

import { IStorageWrapper } from "../../storage/storagewrapper";
import { stored } from "../../storage/stored";
import { storing } from "../../storage/storing";
import { CommandsListStore } from "./commands/commandsliststore";
import { InputAreaStore } from "./inputareastore";

/**
 * Available samples, keyed by name.
 */
export interface ISamples {
    [i: string]: string;
}

/**
 * Store for an input bar component.
 */
@storing<InputBarStore>(store => store.storageWrapper)
export class InputBarStore {
    /**
     * Sample name the user is editing from.
     */
    @stored("")
    public sample: string;

    /**
     * @param language   Name of the new sample to use.
     */
    @action
    public readonly setSample = (sample: string): void => {
        this.sample = sample;
        this.resetSampleToCurrent();
    }

    /**
     * @param language   A new language GLS syntax will compile into.
     */
    @action
    public readonly resetSampleToCurrent = (): void => {
        this.inputArea.setSource(this.samples[this.sample]);
    }

    /**
     * Store for an InputArea component.
     */
    public readonly inputArea: InputAreaStore;

    /**
     * Store for a CommandsList component.
     */
    public readonly commandsList: CommandsListStore;

    /**
     * Wrapper for persistent items kept in a Storage object.
     */
    private readonly storageWrapper: IStorageWrapper;

    /**
     * Available samples, keyed by name.
     */
    private readonly samples: ISamples;

    /**
     * Initializes a new instance of the InputBarStore class.
     * 
     * @param storageWrapper   Wrapper for persistent items kept in a Storage object.
     * @param inputArea   Store for an InputArea component.
     * @param commandsList   Store for a CommandsList component.
     * @param samples   Available samples, keyed by name.
     */
    public constructor(storageWrapper: IStorageWrapper, inputArea: InputAreaStore, commandsList: CommandsListStore, samples: ISamples) {
        this.storageWrapper = storageWrapper;
        this.inputArea = inputArea;
        this.commandsList = commandsList;
        this.samples = samples;

        if (this.sample === "" && this.inputArea.source === "") {
            this.setSample("Default");
        }
    }
}
