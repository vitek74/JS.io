//Класс
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    
    upvote() {
        this.votesQty +=1
    }
}

//Создание экземляра
const firstComment = new Comment('First comment')

//Проверка принанадлежностей
firstComment instanceof Comment
firstComment instanceof Object

//Вызов метода
firstComment.upvote()
console.log(firstComment.votesQty)

//Расширение классов
class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0 )
    }
}

const myArray = new NumbersArray(2, 5, 7)

console.log(myArray)
myArray.sum