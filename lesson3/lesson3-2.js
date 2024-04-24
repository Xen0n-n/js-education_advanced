// Асинхронность и синхронность

const async = (a) => {
    setTimeout(() => {
        const b = a + 1;
        return b;
    }, 4000)
    return 5000;
}
console.log(async(5));

// Callback - функция, которая в определенный момент запускает другую функцию
// данная конструкция супер сзапутана так не делается уже
const async1 = (a, cb) => {
    setTimeout(() => {
        const b = a + 1;
        cb(b);
    }, 4000)
    return 5000;
}
console.log(async1(5, (data) => {
    console.log(data);
}));
