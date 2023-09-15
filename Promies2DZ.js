// 1
// это функция которая передаётся как аргумент другой функции которая её копирует и вызывает


// 2
// function alertInfo(name, age) {
    // console.log(`Привет я ${name} и мне ${age} лет`)
// }
// 
// function userInfo(a) {
    // let name = 'Alex';
    // let age = 19;
    // a(name,age)
    // 
// }
// 
// userInfo(alertInfo);

// 3
// showMessage() это функция обратного вызова


// 4
// function startProgram(showMessag) {
    // console.log('Запуск');
    // showMessag(a)
// }
// 
// startProgram(showMessage)

// 5
// он как будто обещяет что-тоби он позволяет легче работать с асинхронными задачами




// 6
// let promise = new Promise(function(resolve, reject){
// 
// })

// 7
// resolve это положительный ответ 
// reject это отрицательный ответ


// 8,9
// then потребительский и он принемает 2 функции первая успешная,а вторая нет.Т.е. resolve и reject

// 10
// выполняется несколько задач одновременно

// 11
// async это другой способ создать fetch()

// 12
// await он нам нужен когда вы создаём fetch() с помою async