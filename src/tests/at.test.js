import at from "../at.js"



describe('At', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    
    test('1. Should return array [3, 4]', () => {
        var result = at(object, ['a[0].b.c', 'a[1]'] )
        expect(result).toStrictEqual([3,4])
    });

    const obj = {a: 1, b: [2, 3, 4], c: {d:5, e:6}};

    test('2. Should return array [1]', () => {
        expect(at(obj, ['a'])).toStrictEqual([1])
    });

    test('3. Should return array [[2, 3, 4]]', () => {
        expect(at(obj, ['b'])).toStrictEqual([[2,3,4]])
    });
    
    test('4. Should return array [[2, 3, 4], 5]', () => {
        expect(at(obj, ['b', 'c.d'])).toStrictEqual([[2,3,4], 5])
    });

    test('5. Should return array with undefined', () => {
        expect(at(obj, ['g'])).toContain(undefined)
    });

})




