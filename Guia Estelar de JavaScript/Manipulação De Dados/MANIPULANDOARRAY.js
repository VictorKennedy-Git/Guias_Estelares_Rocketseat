const { table } = require("console")

let techs = ["html", "js", "css"]

//add elemento no array(FIM)
console.log(techs.push('vuejs'))
//add elemento no INICIO DO ARRAR
console.log(techs.unshift('Estudo'))
//REMOVER NO FINAL
// techs.pop()
//remover no començo
// techs.shift()
//pegar elemntos do array
// console.log(techs.slice(1, 3))
//remover 1 ou mains intens 
// console.log(techs.splice(1, 3))//qual o index do arrai até qual elemento
//ENCONTRAR POSIÇÃO DO ARRAY

let index = techs.indexOf('js')
techs.splice(index, 2)

console.log(techs)