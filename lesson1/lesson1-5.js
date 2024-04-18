'use strict'

let obj = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    profession: ['progammer', 'admin']
};


let {firstName: name, lastName, profession: [p1,p2]} = obj;
// определение новых переменных 
//  : означает новое имя для переменной 


console.log(`${name}, ${lastName}, ${p1}, ${p2}`)


// возраст и осталось до пенсии
let f = year => {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age]
}

let [currentAge, left] = f(1990);
console.log(currentAge, left)