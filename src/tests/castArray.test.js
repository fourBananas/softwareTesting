import castArray from "../castArray.js"

test('Should return array [3]', () => {
    expect(castArray(3)).toStrictEqual([3])
});
test("Should return array [{ 'a': 1 }]", () => {
    expect(castArray({ 'a': 1 })).toStrictEqual([{ 'a': 1 }])
});





