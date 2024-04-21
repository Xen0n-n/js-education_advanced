"use strict";
class Person {
    // При создании объекта всегда вызывается конструктор
    constructor(firstName, yearOfBirth) {
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
    }

    // Если метод определен с помощью _ то считается (на уровне договоренности), что
    // он может запускаться лишь от текущего класса (типа приватность)
    _calcAge() {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }

    sayHello() {
        return `${this.firstName} say's Hello`;
    }

    static compareAge(obj1, obj2) {
        if (obj1.yearOfBirth < obj2.yearOfBirth)
            return console.log(`${obj1.firstName} старше`);
        else if (obj1.yearOfBirth > obj2.yearOfBirth)
            return console.log(`${obj2.firstName} старше`);
        return console.log("Люди одного года рождения");
    }

    // все статические методы привязаны к классу, а не к объекту, в них запрещено использовать this
    static test(x) {
        if (x === undefined) {
            x = 10;
        }
        return x * 2;
    }
}

// если класс наследуется от класса, в котором есть конструктор, всегда необходимо создавать
// констурктор в этом классе и в нем вызывать базовый конструктор с параметрами  (super())
class Teacher extends Person {
    constructor(firstName, yearOfBirth, subject) {
        super(firstName, yearOfBirth);
        this.subject = subject;
    }

    sayHello() {
        return `${super.sayHello()} as Teacher!`;
    }
}

let user1 = new Person("Ivan", 1990);
let user2 = new Person("Igor", 1975);

Person.compareAge(user1, user2);


let Anna = new Teacher('Anna', 1987, 'Physics')
console.log(Anna.sayHello());