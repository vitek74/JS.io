//Оператор разделения на свойства
const button = {
    width: 200,
    text:'Buy'
}

const redButton = {
    ...button,
    color: 'red'
    
}

console.table(redButton)

//Объединение объектов
const buttonInfo = {
    text: 'buy'
}

const buttonStyle = {
    color: 'blue',
    width: 200,
    height: 300
}

const button1 = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button1)