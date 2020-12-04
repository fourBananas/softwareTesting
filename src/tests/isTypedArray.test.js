import isTypedArray from '../isTypedArray'

describe('isTypedArray', () => {
    
    test('1. Should return true for a Uint8Array', () => {
        expect(isTypedArray(new Uint8Array)).toBeTruthy()
    });

    test('2. Should return true for BigUint64Array', () => {
        expect(isTypedArray(new BigUint64Array)).toBeTruthy()
    });

    test('3. Should return false for array', () => {
        expect(isTypedArray([])).toBeFalsy()
    });

    test('4. Should return false for int', () => {
        expect(isTypedArray(1)).toBeFalsy()
    });

    test('5. Should return false for string', () => {
        expect(isTypedArray('asd')).toBeFalsy()
    });

    test('6. Should return false for boolean', () => {
        expect(isTypedArray(true)).toBeFalsy()
    });
})