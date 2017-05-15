import { observable } from "mobx";

import { IStorageWrapper } from "./storagewrapper";

/**
 * Internal observable storage for a single value.
 * 
 * @type TData   Type of observed value data.
 */
class SingleObservableStore<TData> {
    /**
     * The observed value.
     */
    @observable
    public value: TData;
}

/**
 * Creates property decorators to keep property data in sync with storage.
 * 
 * @type TData   Type of observed value data.
 * @param defaultValue   Default value for the data.
 * @returns A decorator to keep the data in sync with storage.
 */
export function stored<TData>(defaultValue: TData) {
    return (target: any, key: string): void => {
        const store = new SingleObservableStore<TData>();

        Object.defineProperty(target, key, {
            configurable: true,
            get(): TData {
                const storageWrapper: IStorageWrapper = target.constructor.getStorageWrapper(this);
                if (typeof storageWrapper === "undefined") {
                    throw new Error(`Class with property '${key}' needs to have the @storing decorator.`);
                }

                storageWrapper.setItemDefault(key, defaultValue);
                store.value = storageWrapper.getItem<TData>(key);

                Object.defineProperty(target, key, {
                    get: (): TData => store.value,
                    set(value: TData): void {
                        store.value = value;
                        storageWrapper.setItem(key, value);
                    },
                });

                return store.value;
            },
            set(value: TData): void {
                store.value = value;
                target.constructor.getStorageWrapper(this).setItem(key, value);
            },
        });
    };
}
