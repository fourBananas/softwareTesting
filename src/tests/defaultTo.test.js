import defaultTo from '../defaultTo'

describe('isArrayLikeObject', () => {

    test("1. Should return given value", () => {
        expect(defaultTo(1, 10)).toBe(1)
    });

    test("2. Should return default value on NaN", () => {
        expect(defaultTo(NaN, 10)).toBe(10)
    });

    test("3. Should return default value on null", () => {
        expect(defaultTo(null, 10)).toBe(10)
    });

    test("4. Should return default value on undefined", () => {
        expect(defaultTo(undefined, 10)).toBe(10)
    });

})