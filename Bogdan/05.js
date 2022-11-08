//Мутирование копии

const person = {
    name: 'viktor',
    age: 48
}
const person2 = person

person2.age = 49
person2.isAdult = true

console.log(person.age)
console.log(person.isAdult)
//------------------------
//Без мутаций(вариант 1)

const person3 = {
    city: 'kovrov',
    age: 450
}

const person4 = Object.assign({}, person3)

person3.age = 451

console.log(person3.age)
console.log(person4.age)
//---------------------
//вариант 2

const person5 = {
    city: 'vladimir',
    age: 1000
}

const person6 = { ...person5 }

person6.age = 1001

console.log(person5.age)
console.log(person6.age)
//---------------------
//вариант 3
//ссылки на вложенные объкты не сохраняются
const person7 = {
    city: 'moskow',
    age: 850
}

const person8 = JSON.parse(JSON.stringify(person7))

person8.age = 851

console.log(person7.age)
console.log(person8.age)

