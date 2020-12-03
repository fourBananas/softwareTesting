import slice from '../slice'

describe('Slice', () => {

    test("1. Should return [2, 1]", () => {
        expect(slice([2, 1], 2)).toStrictEqual([])
    });
    
    test('2. Should return [2,3]', () => {
        expect(slice([1,2,3], 1, 2)).toStrictEqual([3])
    });

    test('3. Should return []', () => {
        expect(slice([1,2,3], 4)).toStrictEqual([])
    });

    test('4. Should return [1,2,3,4]', () => {
        expect(slice([1,2,3,4], 0,0)).toStrictEqual([1, 2, 3, 4])
    });

    test('5. Should return [1,2,3,4]', () => {
        expect(slice([1,2,3,4], 0)).toStrictEqual([1, 2, 3, 4])
    });
})