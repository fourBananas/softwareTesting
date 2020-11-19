import isSymbol from '../IsSymbol'

describe('isObject', () => {

    test("1. Detects a Symbol", () => {
        expect(isSymbol(Symbol.iterator)).toBeTruthy()
    });
    
    test("2. Detects an array as not a Symbol", () => {
        expect(isSymbol([1,2,3])).toBeFalsy()
    });

    test("3. Detects a Function as not a Symbol", () => {
        expect(isSymbol(Function)).toBeFalsy()
    });
    
    test("4. Detects null as not a Symbol", () => {
        expect(isSymbol(null)).toBeFalsy()
    });
 
    test("5. Detects undefined as not a Symbol", () => {
        expect(isSymbol(undefined)).toBeFalsy()
    });

    test("6. Detects primitives as not a Symbol", () => {
        expect(isSymbol(1)).toBeFalsy();
        expect(isSymbol('1')).toBeFalsy();
        expect(isSymbol(true)).toBeFalsy();
    });
})