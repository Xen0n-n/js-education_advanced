'use strict'
// arr.map(func) - используется для трансформации массива
// создает массив, который будет состоять из результатов функции func(item, i)

let langs = ['js', 'php', 'java'];
let size = langs.map(item => item.length); // на основании массива langs строим массив size, в который передаем длину каждого элемента(item) массива langs

console.log(size) 