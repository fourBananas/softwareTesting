import isBoolean from '../isBoolean'

describe('isBoolean', () => {

    test("1. Should return true for true", () => {
        expect(isBoolean(true)).toBeTruthy()
    });
    
    test('2. Should return true for false', () => {
        expect(isBoolean(false)).toBeTruthy()
    });

    test('3. Should return falsy for Function', () => {
        expect(isBoolean(Function)).toBeFalsy()
    });

    test('4. Should return falsy for null', () => {
        expect(isBoolean(null)).toBeFalsy()
    });

    test('5. Should return falsy for undefined', () => {
        expect(isBoolean(undefined)).toBeFalsy()
    });
    
    test('6. Should return falsy for 1', () => {
        expect(isBoolean(1)).toBeFalsy()
    });

    test('7. Should return falsy for "a"', () => {
        expect(isBoolean("a")).toBeFalsy()
    });

})