import toNumber from '../toFinite'

describe('toNumber', () => {

    test("1. Should return 3.2 for 3.2", () => {
        expect(toNumber(3.2)).toEqual(3.2)
    });
    
    test('2. Should return 5e-324 for Number.Min_VALUE', () => {
        expect(toNumber(Number.MIN_VALUE)).toEqual(5e-324)
    });

    test('3. Should return Infinity for Infinity', () => {
        expect(toNumber(Infinity)).toEqual(Infinity)
    });

    test('4. Should return 3.2 for "3.2"', () => {
        expect(toNumber("3.2")).toEqual(3.2)
    });

    test('5. Should return -3.2 for "-3.2"', () => {
        expect(toNumber("-3.2")).toEqual(-3.2)
    });
    
    test('6. Should return 0 for "  0  "', () => {
        expect(toNumber("  0  ")).toEqual(0)
    });

    test('7. Should return NaN for object', () => {
        expect(toNumber({})).toEqual(NaN)
    });

    test('8. Should return NaN for Array', () => {
        expect(toNumber([])).toEqual(NaN)
    });
})