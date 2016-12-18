import { observable } from "mobx";

import { IAppState } from "./appstate";
import { IStorageWrapper, StorageWrapper } from "../storage/storagewrapper";

/**
 * Global state for the entire application.
 */
class AppState implements IAppState {
    /**
     * Which language to convert GLS syntax into.
     */
    @observable
    public outputLanguage: string;

    /**
     * The most recently selected sample code.
     */
    @observable
    public sampleName: string;

    /**
     * Raw lines of GLS syntax from the editor component.
     */
    @observable
    public sourceLines: string[];
}

/**
 * Creates IAppState instances.
 */
export class AppStateFactory {
    /**
     * Default storage key for the storage wrapper.
     */
    private static readonly storageKey: string = "gls-web-client";

    /**
     * Default values for the global application state.
     */
    private static readonly defaults: Partial<IAppState> = {
        outputLanguage: "C#",
        sampleName: "default",
        sourceLines: []
    };

    /**
     * Wrapper for persistent items kept in a Storage object.
     */
    private readonly storageWrapper: IStorageWrapper;

    /**
     * Initializes a new instance of the AppStateFactory class.
     * 
     * @param storagePrefix   Key prefix for storage keys.
     * @param storage   Wrapper for persistent items kept in a Storage object.
     */
    public constructor(storageWrapper: IStorageWrapper = new StorageWrapper(AppStateFactory.storageKey)) {
        this.storageWrapper = storageWrapper;
    }

    /**
     * @returns The initial IAppState instance for the application.
     */
    public createInitialState(): IAppState {
        const state: IAppState = this.proxyAppState(new AppState());

        for (const key in AppStateFactory.defaults) {
            this.storageWrapper.setItemDefault(key, AppStateFactory.defaults[key]);
            state[key] = this.storageWrapper.getItem(key);
        }

        return state;
    }

    /**
     * Proxies set operations on an IAppState to save to storage.
     * 
     * @param appState   Global state for an application.
     * @returns A storage proxy around appState.
     */
    private proxyAppState(appState: IAppState): IAppState {
        return new Proxy(appState, {
            set: <T>(appState: IAppState, key: string, value: T): true => {
                this.storageWrapper.setItem(key, value);
                appState[key] = value;
                return true;
            }
        });
    }
}
