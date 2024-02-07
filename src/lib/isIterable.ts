/**
 * Check whether or not the object is able to be iterated over.
 * @param obj {any} The object in question
 * @returns boolean
 */
const isIterable = (obj : any) => {
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

export default isIterable;
