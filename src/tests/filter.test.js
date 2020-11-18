import filter from '../filter.js'


describe('Filter', () => {
    const users = [
        {'user': 'test', 'active': true},
        {'user': 'test2', 'active': false},
    ]
    test("1. Should return array [{'user': 'test', 'active': true}]", () => {
        var result = filter(users, ({ active }) => active)
        expect(result).toStrictEqual([{'user': 'test', 'active': true}])
    });
    var numbers = [1, 2, 3]
    const isEven = function(x) { return x % 2 == 0; }
    test('2. Should return array [2]', () => {
        var result = filter(numbers, isEven)
        expect(result).toStrictEqual([2])
    });
    numbers = [1, 3, 5]
    test('3. Should return array []', () => {
        var result = filter(numbers, isEven)
        expect(result).toStrictEqual([])
    });

})