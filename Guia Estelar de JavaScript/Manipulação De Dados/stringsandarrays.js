// ALOQUE CADA PALAVRA DE UM TEXTO EM UMA STRING, DEPOIS SEPARE CADA UMA EM ESPAÇOS E DPS EM _

let phrase = 'EU QUERO DORMIR AGORA'

let myArray = phrase.split(' ')//transforma string em array

console.log(myArray)

let phrasWithUnderscore = myArray.join('_') //JUNTA TUDO DO ARRAY COMO TEXTO
console.log(phrasWithUnderscore)
