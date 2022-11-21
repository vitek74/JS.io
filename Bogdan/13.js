//обработка ошибок
const fnWithError = () => {
    throw new Error('Ошибка')
}

try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Contine')