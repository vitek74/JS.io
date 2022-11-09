//Функции
let a = 5
let b = 3

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
console.log(myFn)

//передача значений по ссылке(не рекомендуеца)

const personOne = {
    name: 'viktor',
    age: 48
}

function incPersonAge(person) {
    person.age += 1
    return person
}

incPersonAge(personOne)
console.log(personOne.age)

//создание копий объекта

const personOne1 = {
    name: 'viktor',
    age: 48
}

function incPersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 2
    return updatedPerson
}

const updatedPersonOne = incPersonAge(personOne1)
console.log(personOne1.age)
console.log(updatedPersonOne.age)

//колбек функция (функция в теле другой функции)

function printMyName() {
    console.log('viktor')
}

setTimeout(printMyName, 3000)