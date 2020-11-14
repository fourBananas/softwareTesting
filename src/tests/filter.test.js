import filter from '../filter.js'


describe('At', () => {
    const users = [
        {'user': 'test', 'active': true},
        {'user': 'test2', 'active': false},
    ]
    test("Should return array [{'user': 'test', 'active': true}]", () => {
        var result = filter(users, ({ active }) => active)
        expect(result).toStrictEqual([{'user': 'test', 'active': true}])
    });
    var numbers = [1, 2, 3]
    const isEven = function(x) { return x % 2 == 0; }
    test('Should return array [2]', () => {
        var result = filter(numbers, isEven)
        expect(result).toStrictEqual([2])
    });
    numbers = [1, 3, 5]
    test('Should return array [2]', () => {
        var result = filter(numbers, isEven)
        expect(result).toStrictEqual([])
    });

})