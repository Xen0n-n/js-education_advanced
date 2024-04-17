'use strict'



let user1 = {
    userName: 'John',
    userSurname: 'Smith',
    birthYear: 1990
} 

let date = new Date();

function getAge(user) {
    let age = date.getFullYear() - user.birthYear;
    return `${user.userName} ${user.userSurname} is ${age} years old...`;
}

console.log(getAge(user1));

console.log(getAge(user1).indexOf('years')) // можно найти индекс первого вхождения слова
console.log(getAge(user1).endsWith('34'))   // проверка заканчивается ли строкой
console.log(getAge(user1).repeat(3))        // повторение строки