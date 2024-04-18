//  REST и SPREAD
// REST - упаковка значений в массив
// SPREAD - используется для разделения коллекций на отдельные элементы


'use strict'

function restTest(a, b, ...c) { // 
    console.log(c);     // все оставшиеся параметры передадутся в C в виде массива
}
restTest(1, 2, 3, 4, 5);



// SPREAD
const values = [33, 54, 52, 64, 12, 76];
console.log(Math.max(...values));


//клонирование массива ВАЖНО!!!!!!
let arr = ['one', 'two'];
let arr2 = ['first', ...arr, 'second']; // распаковываем в виде значений

console.log(arr2)


