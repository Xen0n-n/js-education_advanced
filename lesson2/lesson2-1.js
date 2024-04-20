//ES5

'use strict'

//констуктор по которому будет создан объект класса
function Person(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;

    this.calcAge = function () {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
}

let user1 = new Person('Petr', 'Petrov', 1990);
let user2 = new Person('Ivan', 'Ivanov', 2001);

console.log(user1);

user1.__proto__.test = 10;

console.log(user1);