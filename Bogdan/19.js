//Циклы
for (let i = 0; i <= 10; i++){
    console.log(i)
}
//---------
let a = 0
while (a < 5) {
    console.log(a)
    a++
}
//-------
const myOb = {
    x: 10,
    y: true,
    z: 'abc'
}
for (const key in myOb) {
    console.log(key, myOb[key])
}
//------
const myObject = {
    a: 12,
    s: false,
    d:'qwerty'
}
Object.values(myObject).forEach(value => {
    console.log(value)
})
//---------
const myArray = [true, 10, 'asd', null] 
for (const key in myArray) {
    console.log(myArray[key])
}
//для строк
const myName = 'viktor'
for (const letter of myName){
    console.log(letter)
}