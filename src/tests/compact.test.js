import compact from '../compact'

describe('Compact', () => {

    test("1. Should return array without falsy values. First value falsy.", () => {
        expect(compact([0, 1, 2, 3])).toStrictEqual([1, 2, 3])
    });

    test("2. Should return array without falsy values. Second value falsy", () => {
        expect(compact([1, false, 2, 3])).toStrictEqual([1, 2, 3])
    });

    test("3. Should return array without falsy values. Last value falsy", () => {
        expect(compact([1, 2, 3, ''])).toStrictEqual([1, 2, 3])
    });

    test("4. Should return array without falsy values. Second value and second to last value are falsy", () => {
        expect(compact([1, false, 2, '', 3])).toStrictEqual([1, 2, 3])
    });

    test("5. Should return empty array. All values falsy", () => {
        expect(compact([NaN, false, undefined, '', 0, "", null])).toStrictEqual([])
    });

    test("6. Should return empty array for empty array", () => {
        expect(compact([])).toStrictEqual([])
    });
})
