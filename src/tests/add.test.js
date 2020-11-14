//import { TestScheduler } from 'jest'
import add from '../add'

test('Adds 2 + 3 to equal 5', () => {
    expect(add(2,3)).toBe(5)
});

test('Adds 2 - 3 to equal -1', () => {
    expect(add(2,-3)).toBe(-1)
});

test('Adds - 2 - 3 to equal -5', () => {
    expect(add(-2,-3)).toBe(-5)
});

test('Adds "2" + 3 to equal "23"', () => {
    expect(add("2",3)).toBe("23")
});

test('Adds "ab" + "c" to equal "abc"', () => {
    expect(add("ab","c")).toBe("abc")
});