import castArray from "../castArray.js"


describe('castArray', () => {

    test('1. Should return array [3] from 3', () => {
        expect(castArray(3)).toStrictEqual([3])
    });

    test("2. Should return array [{ 'a': 1 }] from {'a':1}", () => {
        expect(castArray({ 'a': 1 })).toStrictEqual([{ 'a': 1 }])
    });

    test("3. Should return array ['abc'] from 'abc'", () => {
        expect(castArray('abc')).toStrictEqual(['abc'])
    });

    test("4. Should return array ['abc'] from 'abc'", () => {
        expect(castArray('abc')).toStrictEqual(['abc'])
    });

    test("5. Should return empty array when given no parameters ", () => {
        expect(castArray()).toStrictEqual([])
    });

    test("6. Should return same array of when given array ", () => {
        expect(castArray(['a', 'b'])).toStrictEqual(['a', 'b'])
    });

})