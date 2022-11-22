//массивы

//формат записи
const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

//чтение значений массива
const myArray3 = [1, true, 'viktor']
console.log(myArray3)

console.log(myArray3[0])
console.log(myArray3[2])

console.log(myArray3.length)

//замена элемента
myArray3[2] = 'asd'
 
//метод FOREACH
const myArray4 = [1, 2, 3]
myArray4.forEach(el => console.log(el * 2))

//метод MAP
const myArray5 = [1, 2, 3]
const newArray = myArray5.map(el => el * 3)

