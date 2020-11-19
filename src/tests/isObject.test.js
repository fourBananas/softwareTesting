import isObject from '../IsObject'

describe('isObject', () => {

    test("1. Detects an empty object as an object", () => {
        expect(isObject({})).toBeTruthy()
    });
    
    test("2. Detects an array as an object", () => {
        expect(isObject([1,2,3])).toBeTruthy()
    });

    test("3. Detects a Function as an object", () => {
        expect(isObject(Function)).toBeTruthy()
    });
    
    test("4. Detects null as not an object", () => {
        expect(isObject(null)).toBeFalsy()
    });
 
    test("5. Detects undefined as not an object", () => {
        expect(isObject(undefined)).toBeFalsy()
    });

    test("6. Detects primitives as not an object", () => {
        expect(isObject(1)).toBeFalsy();
        expect(isObject('1')).toBeFalsy();
        expect(isObject(true)).toBeFalsy();
    });
})