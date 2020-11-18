import isBuffer from '../isBuffer'

describe('isBuffer', () => {

    test("1. Detects a buffer", () => {
        expect(isBuffer(new Buffer(2))).toBeTruthy()
    });
    
    test("2. Detects array as not a buffer", () => {
        expect(isBuffer([1,2])).toBeFalsy()
    });

    test("3. Detects integral as not a buffer", () => {
        expect(isBuffer(1)).toBeFalsy()
    });

})