import toString from '../toString'

describe('toString', () => {

    test("1. Should return '' for null", () => {
        expect(toString(null)).toEqual('')
    });
    
    test('2. Should return "-0" for -0', () => {
        expect(toString(-0)).toEqual('-0')
    });

    test("3. Should return '' for undefined", () => {
        expect(toString(undefined)).toEqual('')
    });

    test('4. Should return 3.2 for "3.2"', () => {
        expect(toString(3.2)).toEqual("3.2")
    });

    test('5. Should return 1,2,3 for [1,2,3]', () => {
        expect(toString([1,2,3])).toEqual('1,2,3')
    });

    test('6. Should return "a,b,c" for ["a", "b", "c"]', () => {
        expect(toString(["a", "b", "c"])).toEqual("a,b,c")
    });
})