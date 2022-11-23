//Деструктиризация объектов

const userProfile = {
    user: 'viktor',
    commentsQt: 45, 
}

const { user, commentsQt } = userProfile
console.log(user)

//Деструктиризация

const fruits = ['banana', 'apple']
const [fruetOne, fruetTwo] = fruits

console.log(fruetOne)

//Деструктиризация в функциях

const userProfile1 = {
    user1: 'viktor',
    commentsQt: 45,
}

const userInfo = ({user1, commentsQt}) => {
    if (!commentsQt) {
        return `User ${user1} has no comments`
    }
    return `User ${user1}  ${commentsQt} comments`
}

console.log (userInfo(userProfile1))



