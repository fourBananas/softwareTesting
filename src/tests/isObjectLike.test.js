import isObjectLike from '../IsObjectLike'

describe('isObject', () => {

    test("1. Detects an empty object as an object like", () => {
        expect(isObjectLike({})).toBeTruthy()
    });
    
    test("2. Detects an array as an object like", () => {
        expect(isObjectLike([1,2,3])).toBeTruthy()
    });

    test("3. Detects a Function as not object like", () => {
        expect(isObjectLike(Function)).toBeFalsy()
    });
    
    test("4. Detects null as not an object like", () => {
        expect(isObjectLike(null)).toBeFalsy()
    });
 
    test("5. Detects undefined as not an object like", () => {
        expect(isObjectLike(undefined)).toBeFalsy()
    });

    test("6. Detects primitives as not an object like", () => {
        expect(isObjectLike(1)).toBeFalsy();
        expect(isObjectLike('1')).toBeFalsy();
        expect(isObjectLike(true)).toBeFalsy();
    });
})