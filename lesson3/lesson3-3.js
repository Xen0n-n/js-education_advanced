// Промис - это объект в котором есть свойствва resolve и reject
// Эти свойства назначатся в зависимости от исполнения асинхронности

let num = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a){
                resolve(a + 10); //resolve запускает обработчик then
            }
            else {
                reject("Error"); //reject запускает обработчик catch
            }
        }, 3000)
        return 5000;
    }) 
}

num(0)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })