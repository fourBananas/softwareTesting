import chunk from '../chunk.js'


describe('Chunk', () => {
    
    var ar = ['a', 'b', 'c', 'd']

    test("1. Should split array into arrays with lenght of two", () => {
        expect(chunk(ar, 2)).toEqual([['a', 'b'], ['c', 'd']])
    });

    test("2. Should split array to different lenght of arrays", () => {
        expect(chunk(ar, 3)).toEqual( [['a', 'b', 'c'], ['d']])
    });

    test("3. Should return an array in an array", () => {
        expect(chunk(ar, 4)).toEqual([ar])
    });

    test("4. Should return an array in an array", () => {
        expect(chunk(ar, 5)).toEqual([ar])
    });

    test("5. Should return an empty array", () => {
        expect(chunk(ar, 0)).toEqual([])
    });
})