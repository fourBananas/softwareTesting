import castArray from "../castArray.js"

test('Should return array [3] from 3', () => {
    expect(castArray(3)).toStrictEqual([3])
});

test("Should return array [{ 'a': 1 }] from {'a':1}", () => {
    expect(castArray({ 'a': 1 })).toStrictEqual([{ 'a': 1 }])
});

test("Should return array ['abc'] from 'abc'", () => {
    expect(castArray('abc')).toStrictEqual(['abc'])
});

test("Should return array ['abc'] from 'abc'", () => {
    expect(castArray('abc')).toStrictEqual(['abc'])
});

test("Should return empty array when given no parameters ", () => {
    expect(castArray()).toStrictEqual([])
});


test("Should return same array of when given array ", () => {
    expect(castArray(['a', 'b'])).toStrictEqual(['a', 'b'])
});