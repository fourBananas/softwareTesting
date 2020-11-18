import isBuffer from '../isBuffer'

describe('isBuffer', () => {

    test("1. Detects a buffer", () => {
        expect(isBuffer(new Buffer(2))).toBeTrue()
    });
    
    test("2. Detects not a buffer", () => {
        expect(isBuffer([1,2])).toBeFalse()
    });

    test("3. Detects not a buffer", () => {
        expect(isBuffer(1)).toBeFalse()
    });

})