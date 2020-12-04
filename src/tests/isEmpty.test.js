import isEmpty from '../isEmpty'

describe('isDate', () => {
    
    test('1. Should return true for a Boolean', () => {
        expect(isEmpty(true)).toBeTruthy()
    });

    test('2. Should return true for integer', () => {
        expect(isEmpty(1)).toBeTruthy()
    });

    test('3. Should return true for null', () => {
        expect(isEmpty(null)).toBeTruthy()
    });

    test("4. Should return falsy for a string", () => {
        expect(isEmpty('abc')).toBeFalsy()
    });

    test('5. Should return falsy for an object', () => {
        expect(isEmpty({'a': 1, 'b': 2})).toBeFalsy()
    });
    
    test('6. Should return falsy for [1, 2, 3]', () => {
        expect(isEmpty([1, 2, 3])).toBeFalsy()
    });

})