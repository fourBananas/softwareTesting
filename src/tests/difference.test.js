import difference from '../difference'

describe('Difference', () => {

    test("1. Should return 1 in an array", () => {
        expect(difference([2, 1], [2, 3])).toStrictEqual([1])
    });
    
    test('2. Should return empty array for empty array', () => {
        expect(difference([], [2])).toStrictEqual([])
    });

    test('3. Should return [["a","b"]]', () => {
        expect(difference([["a", "b"], "c"], ["a", "b", "c"])).toStrictEqual([["a", "b"]])
    });

    test('4. Should return [2]', () => {
        expect(difference([{"a": 1, "b": 2}, "c", 2], [{"a": 1, "b": 2}, "b", "c"])).toStrictEqual([2])
    });
})