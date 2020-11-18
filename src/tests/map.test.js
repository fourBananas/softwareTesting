import map from '../map'
describe('Map', () => {
    function square(n) {
        return n * n
    }

    test("1. Squaring all array elements", () => {
        expect(map([4, 8], square)).toStrictEqual([16, 64])
    });
    
    
    test('2. Should return empty array for empty array', () => {
        expect(map([], square)).toStrictEqual([])
    });

    function minusone(n) {
        return n-1
    }

    test('3. Should handle ', () => {
        expect(map([2, "b"], minusone)).toStrictEqual([1, NaN])
    });

})