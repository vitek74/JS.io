//Строгий режим

'use strict'


//Области видимости

let a
let b

function myFn() {
    let b
    a = true
    b = 10
    console.log(b)
}

myFn()

console.log(a)
console.log(b)