define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Wrapper for persistent items kept in a Storage object.
     */
    class StorageWrapper {
        /**
         * Initializes a new instance of the AppStateFactory class.
         *
         * @param storagePrefix   Key prefix for storage keys.
         * @param storage   Storage location for persistent items.
         */
        constructor(storagePrefix, storage = localStorage) {
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
        getItem(key) {
            return JSON.parse(this.storage.getItem(this.generateStorageKey(key)));
        }
        /**
         * Sets an item's value in storage.
         *
         * @type T   Type of the item.
         * @param key   Key of the item to set.
         * @param value   New value of the item.
         */
        setItem(key, data) {
            this.storage.setItem(this.generateStorageKey(key), JSON.stringify(data));
        }
        /**
         * Sets the value for an item if it doesn't yet exist.
         *
         * @type T   Type of the item.
         * @param key   Key of the item to set.
         * @param value   Default value of the item.
         */
        setItemDefault(key, value) {
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
        generateStorageKey(key) {
            return this.storagePrefix + "-" + key;
        }
    }
    exports.StorageWrapper = StorageWrapper;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JhZ2Uvc3RvcmFnZXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFnQ0E7O09BRUc7SUFDSDtRQVdJOzs7OztXQUtHO1FBQ0gsWUFBbUIsYUFBcUIsRUFBRSxVQUFtQixZQUFZO1lBQ3JFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDSSxPQUFPLENBQUksR0FBVztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTSxDQUFDO1FBQy9FLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDSSxPQUFPLENBQUksR0FBVyxFQUFFLElBQU87WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RSxDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0ksY0FBYyxDQUFJLEdBQVcsRUFBRSxLQUFRO1lBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQztRQUNMLENBQUM7UUFFRDs7Ozs7V0FLRztRQUNLLGtCQUFrQixDQUFDLEdBQVc7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMxQyxDQUFDO0tBQ0o7SUFwRUQsd0NBb0VDIiwiZmlsZSI6InN0b3JhZ2Uvc3RvcmFnZXdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogV3JhcHBlciBmb3IgcGVyc2lzdGVudCBpdGVtcyBrZXB0IGluIGEgU3RvcmFnZSBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdG9yYWdlV3JhcHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gc3RvcmFnZS5cclxuICAgICAqIFxyXG4gICAgICogQHR5cGUgVCAgIFR5cGUgb2YgdGhlIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0ga2V5ICAgS2V5IG9mIHRoZSBpdGVtIHRvIHJldHJpZXZlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGl0ZW0uXHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW08VD4oa2V5OiBzdHJpbmcpOiBUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBhbiBpdGVtJ3MgdmFsdWUgaW4gc3RvcmFnZS5cclxuICAgICAqIFxyXG4gICAgICogQHR5cGUgVCAgIFR5cGUgb2YgdGhlIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0ga2V5ICAgS2V5IG9mIHRoZSBpdGVtIHRvIHNldC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSAgIE5ldyB2YWx1ZSBvZiB0aGUgaXRlbS5cclxuICAgICAqL1xyXG4gICAgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgZm9yIGFuIGl0ZW0gaWYgaXQgZG9lc24ndCB5ZXQgZXhpc3QuXHJcbiAgICAgKiBcclxuICAgICAqIEB0eXBlIFQgICBUeXBlIG9mIHRoZSBpdGVtLlxyXG4gICAgICogQHBhcmFtIGtleSAgIEtleSBvZiB0aGUgaXRlbSB0byBzZXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgICBEZWZhdWx0IHZhbHVlIG9mIHRoZSBpdGVtLlxyXG4gICAgICovXHJcbiAgICBzZXRJdGVtRGVmYXVsdDxUPihrZXk6IHN0cmluZywgZGF0YTogVCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBwZXJzaXN0ZW50IGl0ZW1zIGtlcHQgaW4gYSBTdG9yYWdlIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlV3JhcHBlciBpbXBsZW1lbnRzIElTdG9yYWdlV3JhcHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIEtleSBwcmVmaXggZm9yIHN0b3JhZ2Uga2V5cy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdG9yYWdlUHJlZml4OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yYWdlIGxvY2F0aW9uIGZvciBwZXJzaXN0ZW50IGl0ZW1zLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0b3JhZ2U6IFN0b3JhZ2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgQXBwU3RhdGVGYWN0b3J5IGNsYXNzLlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gc3RvcmFnZVByZWZpeCAgIEtleSBwcmVmaXggZm9yIHN0b3JhZ2Uga2V5cy5cclxuICAgICAqIEBwYXJhbSBzdG9yYWdlICAgU3RvcmFnZSBsb2NhdGlvbiBmb3IgcGVyc2lzdGVudCBpdGVtcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHN0b3JhZ2VQcmVmaXg6IHN0cmluZywgc3RvcmFnZTogU3RvcmFnZSA9IGxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVByZWZpeCA9IHN0b3JhZ2VQcmVmaXg7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gc3RvcmFnZS5cclxuICAgICAqIFxyXG4gICAgICogQHR5cGUgVCAgIFR5cGUgb2YgdGhlIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0ga2V5ICAgS2V5IG9mIHRoZSBpdGVtIHRvIHJldHJpZXZlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGl0ZW0uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRJdGVtPFQ+KGtleTogc3RyaW5nKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy5nZW5lcmF0ZVN0b3JhZ2VLZXkoa2V5KSkpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGFuIGl0ZW0ncyB2YWx1ZSBpbiBzdG9yYWdlLlxyXG4gICAgICogXHJcbiAgICAgKiBAdHlwZSBUICAgVHlwZSBvZiB0aGUgaXRlbS5cclxuICAgICAqIEBwYXJhbSBrZXkgICBLZXkgb2YgdGhlIGl0ZW0gdG8gc2V0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlICAgTmV3IHZhbHVlIG9mIHRoZSBpdGVtLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgZGF0YTogVCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKHRoaXMuZ2VuZXJhdGVTdG9yYWdlS2V5KGtleSksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHZhbHVlIGZvciBhbiBpdGVtIGlmIGl0IGRvZXNuJ3QgeWV0IGV4aXN0LlxyXG4gICAgICogXHJcbiAgICAgKiBAdHlwZSBUICAgVHlwZSBvZiB0aGUgaXRlbS5cclxuICAgICAqIEBwYXJhbSBrZXkgICBLZXkgb2YgdGhlIGl0ZW0gdG8gc2V0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlICAgRGVmYXVsdCB2YWx1ZSBvZiB0aGUgaXRlbS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEl0ZW1EZWZhdWx0PFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgICAgIGtleSA9IHRoaXMuZ2VuZXJhdGVTdG9yYWdlS2V5KGtleSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHN0b3JhZ2Uga2V5IGZvciB0aGUgc3RvcmFnZSwgZmFjdG9yaW5nIGluIHRoZSBwcmVmaXguXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBrZXkgICBVc2VyLWZhY2luZyBrZXkgZm9yIGFuIGl0ZW0uXHJcbiAgICAgKiBAcmV0dXJucyBQcmVmaXgtY29uc2lkZXJpbmcgc3RvcmFnZSBrZXkgZm9yIHRoZSBpdGVtLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlU3RvcmFnZUtleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVByZWZpeCArIFwiLVwiICsga2V5O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
