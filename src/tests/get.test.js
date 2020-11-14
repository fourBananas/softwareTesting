import get from '../get'

describe('Get', () => {

    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    
    test('1. Should return 3', () => {
        expect(get(object, 'a[0].b.c')).toBe(3)
    });

    test('2. Should return 3 using array as a path', () => {
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
    });

    test('3. Should return "default" with nonexistent path', () => {
        expect(get(object, 'a.b.c', 'default')).toBe('default')
    });

    const obj = { a: undefined };
    test('4. Should return "default" with undefined value', () => {
        expect(get(obj, 'a', 'default')).toBe('default')
    });
    

    

  

});