import countBy from '../countBy.js'


describe('CountBy', () => {
    
    const users = [
           { 'user': 'barney', 'active': true },
           { 'user': 'betty', 'active': true },
           { 'user': 'fred', 'active': false }
         ]

    const employees = [
           { 'user': 'barney', 'salary': 1000 },
           { 'user': 'betty',  'salary': 3000 },
           { 'user': 'fred',  'salary': 1500 }
         ]

    test("1. Should count active users", () => {
        expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 })
    });

    test("2. Should count employees with salary over 1100", () => {
        expect(countBy(employees, val => val.salary > 1100)).toEqual({ 'true': 2, 'false':1 })
    });


})