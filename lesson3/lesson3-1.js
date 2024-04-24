let userJson = '{"name" : "Petr", "age" : 25, "isAdmin" : true}';

let user = JSON.parse(userJson); // преобразование строки JSON в объект
user.dateCreated = '2024-04-24'; // добавление свойств
user.adress = {
    city: "Moscow",
    index: "119634"
}

console.log(user)

// Преобразование обратно в строку

let user2 = JSON.stringify(user, ['name', 'dateCreated', 'age', 'adress', 'city'], 4)
console.log(user2)


let user3 = JSON.parse(user2, (key, value) => {
    if(key === 'dateCreated') {
        value = new Date(value);
    }
    return value;
});
console.log(user3)