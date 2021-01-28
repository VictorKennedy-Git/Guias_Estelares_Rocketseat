//Propriedades de objetos JS

//Arrays
/*
    .push
    .map
    .filtter
    .same
    .splice //apaga
    .slice
    .indexof

*/
// function func() {
//     const array = [{
//         id: 1,
//         nome: "josimar"
//     },

//     {
//         id: 2,
//         nome: "lucca"
//     }
//     ]
//     const dado = array.find(element => element.id == 2)// procura e envia 
//     const mapeado = array.map(element => { return { name: element.id } })//mapear o elemento e alterar a propriedade do objeto
//     console.log(mapeado)
//     return mapeado
// }
// func()

let messages = [

]
let id = 1
function criar(nome, texto) {
    messages.push({
        id: id++,
        nome,
        texto
    })

}

function buscar() {
    const men = messages.map(element => { return { id: element.id, nome: element.nome, texto: element.texto } })
    console.log("mensagens", men)
}

function editar(id) {
    const index = messages.findIndex(element => element.id === id)
    messages[index].texto = "SAJDKMDSNIJDNFIJSJAKJDFKJAKNSDFNKANSDJFNSKAJ"
    console.log(messages)
}

function deletar(id) {
    const index = messages.findIndex(element => element.id === id)
    messages.splice(index, 1)

}

function buscarPorId(id) {
    const mensagem = messages.filter(element => element.id === id)
    console.log(mensagem)
}
/*
    CRUD:

    BROWSE = filtra 1
    READ = lista todos
    CREATE
    UPADATE
    DELETE

*/
criar("Lucca", "textokmsnainan")
criar("Lucca", "textokmsnainan")
criar("Lucca", "textokmsnainan")
buscar()

console.log("-----------------------------------")
editar(1)
deletar(2)
buscar()

console.log("-----------------------------------")
buscarPorId(3)


