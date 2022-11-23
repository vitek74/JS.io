//Условные инструкции

let val = 10
if (val > 5) {
    val += 20
}
console.log(val)
//-----
const person = {
    age:20
}
if (!person.name) {
    console.log('Hе указано имя')
}
//-----
let vall = 10
if (vall < 5) {
    vall += 20
} else {
    vall -=20
}
console.log(vall)
//-----
const sumPositivNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Это не числа'
    }
    if (a <= 0 || b <= 0) {
        return 'Это отрицательные числа'
    }
    return a + b
}
console.log(sumPositivNumbers(5, 2))  
//------
const mount = 2
switch (mount) {
    case 12:
        console.log('декабрь')
        break
    case 1:
        console.log('январь')
        break
    case 2:
        console.log('февраль')
        break
    default:
        console.log('это не зимний месяц')
}
//--------


