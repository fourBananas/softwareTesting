import isLength from '../IsLength'

describe('isLength', () => {

    test("1. Detects a number as a lenght", () => {
        expect(isLength(1)).toBeTruthy()
    });
    
    test("2. Detects 0 as a lenght", () => {
        expect(isLength(0)).toBeTruthy()
    });

    test("3. Detects '1' as not a lenght", () => {
        expect(isLenght('1')).toBeFalsy()
    });

    test("4. Detects NaN as not a lenght", () => {
        expect(isLength(NaN)).toBeFalsy()
    });

    test("5. Detects undefined as not a lenght", () => {
        expect(isLength(undefined)).toBeFalsy()
    });

    test("6. Detects null as not a lenght", () => {
        expect(isLength(null)).toBeFalsy()
    });

    test("7. Detects a negative number as not a lenght", () => {
        expect(isLength(-1)).toBeFalsy()
    });
})