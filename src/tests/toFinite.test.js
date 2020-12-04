import toFinite from '../toFinite'

describe('toFinite', () => {

    test("1. Should return 3.2 for 3.2", () => {
        expect(toFinite(3.2)).toEqual(3.2)
    });
    
    test('2. Should return 5e-324 for Number.Min_VALUE', () => {
        expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324)
    });

    test('3. Should return 1.7976931348623157e+308 for Infinity', () => {
        expect(toFinite(Infinity)).toEqual(1.7976931348623157e+308)
    });

    test('4. Should return 3.2 for "3.2"', () => {
        expect(toFinite("3.2")).toEqual(3.2)
    });

    test('5. Should return -3.2 for "-3.2"', () => {
        expect(toFinite("-3.2")).toEqual(-3.2)
    });
    
    test('6. Should return 0 for "0"', () => {
        expect(toFinite("0")).toEqual(0)
    });
})