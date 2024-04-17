// стрелочные функции (в др. языках лямбда-функции)
// их отличие от обычных в том, что они не создают собственного контекста, а использует контекст родителя
// то есть this, используемый в них будет работать корректно

'use strict'
// старый стиль ES5
let sum1 = function (a, b) {
    return a + b;
}

// новый стиль ES6

let sum2 = (a, b) => a + b;
console.log(sum2(1, 2));


const calcAge = year => new Date().getFullYear() - year;
console.log(calcAge(1997))

let box = {
    color: 'green',
    position: 1,

    clickMe: function () {
        document.querySelector('div').addEventListener('click', () => {
            console.log(this);
            let str = `Это контейнер ${this.position} цвета ${this.color}`
            console.log(str)
        })
    }
}

box.clickMe();