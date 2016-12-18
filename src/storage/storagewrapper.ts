/**
 * Wrapper for persistent items kept in a Storage object.
 */
export interface IStorageWrapper {
    /**
     * Retrieves an item from storage.
     * 
     * @type T   Type of the item.
     * @param key   Key of the item to retrieve.
     * @returns The item.
     */
    getItem<T>(key: string): T;

    /**
     * Sets an item's value in storage.
     * 
     * @type T   Type of the item.
     * @param key   Key of the item to set.
     * @param value   New value of the item.
     */
    setItem<T>(key: string, value: T): void;

    /**
     * Sets the value for an item if it doesn't yet exist.
     * 
     * @type T   Type of the item.
     * @param key   Key of the item to set.
     * @param value   Default value of the item.
     */
    setItemDefault<T>(key: string, data: T): void;
}

/**
 * Wrapper for persistent items kept in a Storage object.
 */
export class StorageWrapper implements IStorageWrapper {
    /**
     * Key prefix for storage keys.
     */
    private readonly storagePrefix: string;

    /**
     * Storage location for persistent items.
     */
    private readonly storage: Storage;

    /**
     * Initializes a new instance of the AppStateFactory class.
     * 
     * @param storagePrefix   Key prefix for storage keys.
     * @param storage   Storage location for persistent items.
     */
    public constructor(storagePrefix: string, storage: Storage = localStorage) {
        this.storagePrefix = storagePrefix;
        this.storage = storage;
    }

    /**
     * Retrieves an item from storage.
     * 
     * @type T   Type of the item.
     * @param key   Key of the item to retrieve.
     * @returns The item.
     */
    public getItem<T>(key: string): T {
        return JSON.parse(this.storage.getItem(this.generateStorageKey(key))) as T;
    }

    /**
     * Sets an item's value in storage.
     * 
     * @type T   Type of the item.
     * @param key   Key of the item to set.
     * @param value   New value of the item.
     */
    public setItem<T>(key: string, data: T): void {
        this.storage.setItem(this.generateStorageKey(key), JSON.stringify(data));
    }

    /**
     * Sets the value for an item if it doesn't yet exist.
     * 
     * @type T   Type of the item.
     * @param key   Key of the item to set.
     * @param value   Default value of the item.
     */
    public setItemDefault<T>(key: string, value: T): void {
        key = this.generateStorageKey(key);

        if (this.storage.getItem(key) === null) {
            this.storage[key] = value;
        }
    }

    /**
     * Creates a storage key for the storage, factoring in the prefix.
     * 
     * @param key   User-facing key for an item.
     * @returns Prefix-considering storage key for the item.
     */
    private generateStorageKey(key: string): string {
        return this.storagePrefix + "-" + key;
    }
}
