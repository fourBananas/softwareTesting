import isLength from '../IsLength'

describe('isLength', () => {

    test("1. Detects a number as a length", () => {
        expect(isLength(1)).toBeTruthy()
    });
    
    test("2. Detects 0 as a length", () => {
        expect(isLength(0)).toBeTruthy()
    });

    test("3. Detects '1' as not a length", () => {
        expect(isLength('1')).toBeFalsy()
    });

    test("4. Detects NaN as not a length", () => {
        expect(isLength(NaN)).toBeFalsy()
    });

    test("5. Detects undefined as not a length", () => {
        expect(isLength(undefined)).toBeFalsy()
    });

    test("6. Detects null as not a length", () => {
        expect(isLength(null)).toBeFalsy()
    });

    test("7. Detects a negative number as not a length", () => {
        expect(isLength(-1)).toBeFalsy()
    });
})