// ES5
'use strict'

function Person(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;

    this.calcAge = function () {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
}

function Teacher(firstName, lastName, yearOfBirth, subject) {
    Person.call(this, firstName, lastName, yearOfBirth);
    this.subject = subject;
}

let user3 = new Teacher('Vasiliy', 'Vasiliev', 1987, 'Maths')
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.construct = Person;
console.log(user3)

// Честно говоря, какая-то хрень, очень сомневаюсь, что сейчас юзается
