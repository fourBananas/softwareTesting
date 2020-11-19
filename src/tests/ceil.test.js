import ceil from '../ceil.js'


describe('Ceil', () => {

    test("1. Should round 0.9 to 1", () => {
        expect(ceil(0.9)).toEqual(1)
    });

    test("2. Should round 0.00001 to 1", () => {
        expect(ceil(0.00001)).toEqual(1)
    });

    test("3. Should round -0.49 to -0", () => {
        expect(ceil(-0.49)).toEqual(-0)
    });

    test("4. Should round 5.005 to 5.01", () => {
        expect(ceil(5.005,2)).toEqual(5.01)
    });

    test("5. Should round 1 to 1", () => {
        expect(ceil(1)).toEqual(1)
    });

    test("6. Should round 6040 to 6100", () => {
        expect(ceil(6040, -2)).toEqual(6100)
    });
})