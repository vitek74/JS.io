// Функциональные выражения и стрелочные функции

//Объявленная функция
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

//функциональное выражение в вызове другой функции
setTimeout(function(){
    console.log('отложенное сообщение')
}, 1000)


/* стрелочные функции
    (s, d) => {
    тело функции
}
*/
    

    const myFun = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
    }
console.log(myFun(4, 6))

//Значение параметров функции по умолчанию
const newPost = (post, addedAt = Date()) =>
({
    ...post,
    addedAt:  addedAt,
})

const firstPost = {
    id: 1,
    author: 'viktor',
}

console.table (newPost(firstPost))