import isArrayLike from '../isArrayLike'

describe('isArrayLike', () => {

    test("1. Should return truthy  for [2, 1]", () => {
        expect(isArrayLike([2, 1])).toBeTruthy()
    });
    
    test('2. Should return truthy for "asd"', () => {
        expect(isArrayLike('asd')).toBeTruthy()
    });

    test('3. Should return falsy for Function', () => {
        expect(isArrayLike(Function)).toBeFalsy()
    });

    test('4. Should return falsy for null', () => {
        expect(isArrayLike(null)).toBeFalsy()
    });

    test('5. Should return falsy for undefined', () => {
        expect(isArrayLike(undefined)).toBeFalsy()
    });

    test('6. Should return truthy for {"a": 1, "b": 2}', () => {
        expect(isArrayLike({'a': 1, 'b': 2})).toBeTruthy()
    });
})