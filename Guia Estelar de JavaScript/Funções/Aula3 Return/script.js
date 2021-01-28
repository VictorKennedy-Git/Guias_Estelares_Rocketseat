const sum = function () {
    let total = number1 + number2

    return total // serve para retornar o resultado da função e não a função ao todo
}

let number1 = 1000
let number2 = 2000

console.log(`A soma de ${number1} e ${number2} é ${sum()}`)