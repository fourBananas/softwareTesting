import isDate from '../isDate'

describe('isDate', () => {

    test("1. Should return true for a Date", () => {
        expect(isDate(new Date)).toBeTruthy()
    });
    
    test('2. Should return falsy for a Boolean', () => {
        expect(isDate(false)).toBeFalsy()
    });

    test('3. Should return falsy for Function', () => {
        expect(isDate(Function)).toBeFalsy()
    });

    test('4. Should return falsy for null', () => {
        expect(isDate(null)).toBeFalsy()
    });

    test('5. Should return falsy for undefined', () => {
        expect(isDate(undefined)).toBeFalsy()
    });
    
    test('6. Should return falsy for 1', () => {
        expect(isDate(1)).toBeFalsy()
    });

    test('7. Should return falsy for "a"', () => {
        expect(isDate("a")).toBeFalsy()
    });

})