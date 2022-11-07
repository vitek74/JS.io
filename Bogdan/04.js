//Структура объекта
const myCity = {
    city:'Kovrov',
    info: { //вложенные свойства
    popular: false, //console.log(myCity.info.popular)
    country:'Russia' //delete (myCity.info.popular)
    }
}

//Получение значений свойств
console.log(myCity.country)

//Измение значений свойств
myCity.popular = true
console.log(myCity.popular)

//Добавление новых свойств

myCity.obl = 'vladimir'
console.log(myCity)

//Удаление свойств

delete myCity.obl
console.log(myCity)

//методы объекта
const mySity = {
    city:'Columbia',
    cityGreeding(){//функция
        console.log('Finish')
    }
}
mySity.cityGreeding()