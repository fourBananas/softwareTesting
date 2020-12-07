import divide from '../divide'

describe('Divide', () => {

    test("1. Divide 20 by 2 to equal 10", () => {
        expect(divide(20, 2)).toBe(10)
    });

    test("2. Divide -20 by 2 to equal -10", () => {
        expect(divide(-20, 2)).toBe(-10)
    });

    test("3. Divide 20 by -2 to equal -10", () => {
        expect(divide(20, -2)).toBe(-10)
    });

    test("4. Divide -20 by -2 to equal 10", () => {
        expect(divide(-20, -2)).toBe(10)
    });

    test("5. Divide 20 by 2 to equal Nan", () => {
        expect(divide(20, 0)).toBe(NaN)
    });

    test("6. Divide 0 by 2 to equal 0", () => {
        expect(divide(0, 2)).toBe(0)
    });
})