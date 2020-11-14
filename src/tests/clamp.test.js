import clamp from '../clamp'

test('1. Should return lower bound when given number smaller than lower bound', () => {
    expect(clamp(-10,-5,5)).toBe(-5)
});

test('2. Should return lower bound when given negative number same as lower bound', () => {
    expect(clamp(-5,-5,5)).toBe(-5)
});

test('3. Should return lower bound when given positive number same as lower bound', () => {
    expect(clamp(5,5, 10)).toBe(5)
});

test('4. Should return  number when given negative number thats within bounds', () => {
    expect(clamp(-10,-15,-5)).toBe(-10)
});

test('5. Should return  number when given positive number thats within bounds', () => {
    expect(clamp(10,5,15)).toBe(10)
});

test('6. Should return upper bound when given number same as upper bound', () => {
    expect(clamp(-10,-15,-10)).toBe(-10)
});

test('7. Should return upper bound when given number same as upper bound', () => {
    expect(clamp(10,5,10)).toBe(10)
});

test('8. Should return upper bound when given number bigger than upper bound', () => {
    expect(clamp(15,5,10)).toBe(10)
});

