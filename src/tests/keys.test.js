import keys from '../keys'

describe('Keys', () => {
    
    test('1. Should return ["a", "b"] from {"a": 1, "b": 2}', () => {
        expect(keys({'a': 1, 'b': 2})).toEqual(['a', 'b'])
    });

    function Foo() {
           this.a = 1
           this.b = 2
    }
    Foo.prototype.c = 3
    test('2. Should return  ["a", "b"] from a function with those keys', () => {
        expect(keys(new Foo)).toEqual(['a', 'b'])
    });

    test('3. Should return ["0", "1"] for "Hi"', () => {
        expect(keys("Hi")).toEqual(['0', '1'])
    });

    test('4. Should return [] for empty string', () => {
        expect(keys("")).toEqual([])
    });

    test('5. Should return ["a", "b"] from a object with those keys', () => {
        expect(keys({"a": 1, "b": 2})).toEqual(['a', 'b'])
    });
})