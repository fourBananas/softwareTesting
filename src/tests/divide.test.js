import divide from '../divide'


describe('Difference', () => {
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
})