'use strict'
class Person {
    // При создании объекта всегда вызывается конструктор
    constructor(firstName, yearOfBirth){
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth
    }

    calcAge() {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }

    static compareAge(obj1, obj2) {
        if (obj1.yearOfBirth < obj2.yearOfBirth)
            return console.log(`${obj1.firstName} старше`)
        else if (obj1.yearOfBirth > obj2.yearOfBirth)
            return console.log(`${obj2.firstName} старше`)
        return console.log('Люди одного года рождения')
    }

    // все статические методы привязаны к классу, а не к объекту, в них запрещено использовать this
    static test(x) {
        if(x === undefined){
            x = 10;
        }
        return x * 2;
    }
}


let user1 = new Person('Ivan', 1990)
let user2 = new Person('Igor', 1975)

Person.compareAge(user1, user2)