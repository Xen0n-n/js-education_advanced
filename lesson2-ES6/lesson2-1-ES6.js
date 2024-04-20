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

    // все статические методы привязаны к классу, а не к объекту, в них запрещено использовать this
    static test(x) {
        if(x === undefined){
            x = 10;
        }
        return x * 2;
    }

}

// let user1 = new Person('Ivan', 1990)
// console.log(user1)

console.log(Person.test(10));