var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mobx", "../storage/storagewrapper"], function (require, exports, mobx_1, storagewrapper_1) {
    "use strict";
    /**
     * Global state for the entire application.
     */
    class AppState {
    }
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "outputLanguage", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "sampleName", void 0);
    __decorate([
        mobx_1.observable
    ], AppState.prototype, "sourceLines", void 0);
    /**
     * Creates IAppState instances.
     */
    class AppStateFactory {
        /**
         * Initializes a new instance of the AppStateFactory class.
         *
         * @param storagePrefix   Key prefix for storage keys.
         * @param storage   Wrapper for persistent items kept in a Storage object.
         */
        constructor(storageWrapper = new storagewrapper_1.StorageWrapper(AppStateFactory.storageKey)) {
            this.storageWrapper = storageWrapper;
        }
        /**
         * @returns The initial IAppState instance for the application.
         */
        createInitialState() {
            const state = this.proxyAppState(new AppState());
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
        proxyAppState(appState) {
            return new Proxy(appState, {
                set: (appState, key, value) => {
                    this.storageWrapper.setItem(key, value);
                    appState[key] = value;
                    return true;
                }
            });
        }
    }
    /**
     * Default storage key for the storage wrapper.
     */
    AppStateFactory.storageKey = "gls-web-client";
    /**
     * Default values for the global application state.
     */
    AppStateFactory.defaults = {
        outputLanguage: "C#",
        sampleName: "default",
        sourceLines: []
    };
    exports.AppStateFactory = AppStateFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlL2FwcHN0YXRlZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUtBOztPQUVHO0lBQ0g7S0FrQkM7SUFiRztRQURDLGlCQUFVO29EQUNtQjtJQU05QjtRQURDLGlCQUFVO2dEQUNlO0lBTTFCO1FBREMsaUJBQVU7aURBQ2tCO0lBR2pDOztPQUVHO0lBQ0g7UUFvQkk7Ozs7O1dBS0c7UUFDSCxZQUFtQixpQkFBa0MsSUFBSSwrQkFBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7WUFDL0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDekMsQ0FBQztRQUVEOztXQUVHO1FBQ0ksa0JBQWtCO1lBQ3JCLE1BQU0sS0FBSyxHQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRTVELEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0ssYUFBYSxDQUFDLFFBQW1CO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLEdBQUcsRUFBRSxDQUFJLFFBQW1CLEVBQUUsR0FBVyxFQUFFLEtBQVE7b0JBQy9DLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDeEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7O0lBekREOztPQUVHO0lBQ3FCLDBCQUFVLEdBQVcsZ0JBQWdCLENBQUM7SUFFOUQ7O09BRUc7SUFDcUIsd0JBQVEsR0FBdUI7UUFDbkQsY0FBYyxFQUFFLElBQUk7UUFDcEIsVUFBVSxFQUFFLFNBQVM7UUFDckIsV0FBVyxFQUFFLEVBQUU7S0FDbEIsQ0FBQztJQWJOLDBDQTJEQyIsImZpbGUiOiJzdGF0ZS9hcHBzdGF0ZWZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIjtcclxuXHJcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gXCIuL2FwcHN0YXRlXCI7XHJcbmltcG9ydCB7IElTdG9yYWdlV3JhcHBlciwgU3RvcmFnZVdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmFnZS9zdG9yYWdld3JhcHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEdsb2JhbCBzdGF0ZSBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi5cclxuICovXHJcbmNsYXNzIEFwcFN0YXRlIGltcGxlbWVudHMgSUFwcFN0YXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogV2hpY2ggbGFuZ3VhZ2UgdG8gY29udmVydCBHTFMgc3ludGF4IGludG8uXHJcbiAgICAgKi9cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgb3V0cHV0TGFuZ3VhZ2U6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtb3N0IHJlY2VudGx5IHNlbGVjdGVkIHNhbXBsZSBjb2RlLlxyXG4gICAgICovXHJcbiAgICBAb2JzZXJ2YWJsZVxyXG4gICAgcHVibGljIHNhbXBsZU5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJhdyBsaW5lcyBvZiBHTFMgc3ludGF4IGZyb20gdGhlIGVkaXRvciBjb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIEBvYnNlcnZhYmxlXHJcbiAgICBwdWJsaWMgc291cmNlTGluZXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBJQXBwU3RhdGUgaW5zdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFwcFN0YXRlRmFjdG9yeSB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgc3RvcmFnZSBrZXkgZm9yIHRoZSBzdG9yYWdlIHdyYXBwZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHN0b3JhZ2VLZXk6IHN0cmluZyA9IFwiZ2xzLXdlYi1jbGllbnRcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmF1bHQgdmFsdWVzIGZvciB0aGUgZ2xvYmFsIGFwcGxpY2F0aW9uIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0czogUGFydGlhbDxJQXBwU3RhdGU+ID0ge1xyXG4gICAgICAgIG91dHB1dExhbmd1YWdlOiBcIkMjXCIsXHJcbiAgICAgICAgc2FtcGxlTmFtZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgc291cmNlTGluZXM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JhcHBlciBmb3IgcGVyc2lzdGVudCBpdGVtcyBrZXB0IGluIGEgU3RvcmFnZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RvcmFnZVdyYXBwZXI6IElTdG9yYWdlV3JhcHBlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBBcHBTdGF0ZUZhY3RvcnkgY2xhc3MuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBzdG9yYWdlUHJlZml4ICAgS2V5IHByZWZpeCBmb3Igc3RvcmFnZSBrZXlzLlxyXG4gICAgICogQHBhcmFtIHN0b3JhZ2UgICBXcmFwcGVyIGZvciBwZXJzaXN0ZW50IGl0ZW1zIGtlcHQgaW4gYSBTdG9yYWdlIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHN0b3JhZ2VXcmFwcGVyOiBJU3RvcmFnZVdyYXBwZXIgPSBuZXcgU3RvcmFnZVdyYXBwZXIoQXBwU3RhdGVGYWN0b3J5LnN0b3JhZ2VLZXkpKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlV3JhcHBlciA9IHN0b3JhZ2VXcmFwcGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgVGhlIGluaXRpYWwgSUFwcFN0YXRlIGluc3RhbmNlIGZvciB0aGUgYXBwbGljYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVJbml0aWFsU3RhdGUoKTogSUFwcFN0YXRlIHtcclxuICAgICAgICBjb25zdCBzdGF0ZTogSUFwcFN0YXRlID0gdGhpcy5wcm94eUFwcFN0YXRlKG5ldyBBcHBTdGF0ZSgpKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gQXBwU3RhdGVGYWN0b3J5LmRlZmF1bHRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVdyYXBwZXIuc2V0SXRlbURlZmF1bHQoa2V5LCBBcHBTdGF0ZUZhY3RvcnkuZGVmYXVsdHNba2V5XSk7XHJcbiAgICAgICAgICAgIHN0YXRlW2tleV0gPSB0aGlzLnN0b3JhZ2VXcmFwcGVyLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3hpZXMgc2V0IG9wZXJhdGlvbnMgb24gYW4gSUFwcFN0YXRlIHRvIHNhdmUgdG8gc3RvcmFnZS5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGFwcFN0YXRlICAgR2xvYmFsIHN0YXRlIGZvciBhbiBhcHBsaWNhdGlvbi5cclxuICAgICAqIEByZXR1cm5zIEEgc3RvcmFnZSBwcm94eSBhcm91bmQgYXBwU3RhdGUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJveHlBcHBTdGF0ZShhcHBTdGF0ZTogSUFwcFN0YXRlKTogSUFwcFN0YXRlIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KGFwcFN0YXRlLCB7XHJcbiAgICAgICAgICAgIHNldDogPFQ+KGFwcFN0YXRlOiBJQXBwU3RhdGUsIGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHRydWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlV3JhcHBlci5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYXBwU3RhdGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
