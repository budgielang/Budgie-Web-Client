import { IStorageWrapper } from "./storagewrapper";

/**
 * Retrieves a storage wrapper for an object.
 * 
 * @param target   Target to retrieve a storage wrapper from.
 * @type TTarget   Data type of the target.
 * @returns The target's storage wrapper.
 */
export interface IGetStorageWrapper<TTarget> {
    (target: TTarget): IStorageWrapper;
}

/**
 * Creates class decorators to allow @stored properties.
 * 
 * @type Type of class being targeted.
 * @param getStorageWrapper   Retrieves a storage wrapper for an object.
 * @returns A decorator to add the getStorageWrapper hook to a class.
 */
export function storing<TTarget>(getStorageWrapper: IGetStorageWrapper<TTarget>) {
    return function (target: any): void {
        target.getStorageWrapper = (target: any): IStorageWrapper => {
            return getStorageWrapper(target);
        };
    };
}
