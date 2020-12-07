//import { TestScheduler } from 'jest'
import add from '../add'

describe('Add', () => {
        
    test('1. Adds 2 + 3 to equal 5', () => {
        expect(add(2,3)).toBe(5)
    });

    test('2. Adds 2 - 3 to equal -1', () => {
        expect(add(2,-3)).toBe(-1)
    });

    test('3. Adds - 2 - 3 to equal -5', () => {
        expect(add(-2,-3)).toBe(-5)
    });

    test('4. Adds "2" + 3 to equal "23"', () => {
        expect(add("2",3)).toBe("23")
    });

    test('5. Adds "ab" + "c" to equal "abc"', () => {
        expect(add("ab","c")).toBe("abc")
    });

})