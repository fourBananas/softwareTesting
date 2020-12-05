import reduce from '../reduce.js'

describe('Reduce', () => {
    var array = [1,2,3,4,5]
    test("1. Test valid array with sum function", () => {
        expect(reduce(array, (result, n) => result + n, 0)).toBe(15)
    });
    test("2. Test empty array with sum function", () => {
        expect(reduce([], (result, n) => result + n, 0)).toBe(0)
    });
    test("3. Test array with sum function(intial value 10)", () => {
        expect(reduce(array, (result, n) => result + n, 10)).toBe(25)
    });
    test("4. Test array with multiplication function(intial value 1)", () => {
        expect(reduce(array, (result, n) => result * n, 1)).toBe(120)
    });
    test("4. Test array with multiplication function(intial value 0)", () => {
        expect(reduce(array, (result, n) => result * n, 1)).toBe(0)
    });
})
