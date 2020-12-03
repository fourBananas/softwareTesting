import isArrayLikeObject from '../isArrayLikeObject'

describe('isArrayLikeObject', () => {

    test("1. Should return truthy for [2, 1]", () => {
        expect(isArrayLikeObject([2, 1])).toBeTruthy()
    });
    
    test('2. Should return falsy for "asd"', () => {
        expect(isArrayLikeObject('asd')).toBeFalsy()
    });

    test('3. Should return falsy for Function', () => {
        expect(isArrayLikeObject(Function)).toBeFalsy()
    });

    test('4. Should return falsy for null', () => {
        expect(isArrayLikeObject(null)).toBeFalsy()
    });

    test('5. Should return falsy for undefined', () => {
        expect(isArrayLikeObject(undefined)).toBeFalsy()
    });

})