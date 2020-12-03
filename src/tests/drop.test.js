import drop from '../difference'

describe('Drop', () => {

    test("1. Should return an empty array", () => {
        expect(drop([2, 1], 2)).toStrictEqual([])
    });
    
    test('2. Should return [2,3]', () => {
        expect(drop([1,2,3])).toStrictEqual([2, 3])
    });

    test('3. Should return []', () => {
        expect(drop([1,2,3], 4)).toStrictEqual([])
    });

    test('4. Should return [3,4]', () => {
        expect(drop([1,2,3,4], 2)).toStrictEqual([3, 4])
    });

    test('5. Should return [1,2,3,4]', () => {
        expect(drop([1,2,3,4], 0)).toStrictEqual([1, 2, 3, 4])
    });
})