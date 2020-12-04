import toInteger from '../toInteger'

describe('toInteger', () => {

    test("1. Should return 3 for 3.2", () => {
        expect(toInteger(3.2)).toEqual(3)
    });
    
    test('2. Should return 5e-324 for Number.Min_VALUE', () => {
        expect(toInteger(Number.MIN_VALUE)).toEqual(0)
    });

    test('3. Should return 1.7976931348623157e+308 for Infinity', () => {
        expect(toInteger(Infinity)).toEqual(1.7976931348623157e+308)
    });

    test('4. Should return 3.2 for "3.2"', () => {
        expect(toInteger("3.2")).toEqual(3)
    });

    test('5. Should return -3 for "-3.2"', () => {
        expect(toInteger("-3.2")).toEqual(-3)
    });
    
    test('6. Should return 0 for "0"', () => {
        expect(toInteger("0")).toEqual(0)
    });
})