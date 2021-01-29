let alunos = [

]
/*
    .push === add element ao array.
    .map === retornar dados do array de acordo com a invocação da função e preenchimento do array
    .findIndex === pesquisa 
    .splace === deleta 
*/
let id = 0
//CREAT
function createAluno(name, email, idade) {
    alunos.push({ //.push adiciona elementos ao array
        id: id++,
        name,
        email,
        idade
    })
}
//READ

function buscarAlunos() {
    const aluno = alunos.map(element => { return { id: element.id, nome: element.name, email: element.email, idade: element.idade } })
    console.log("alunos", aluno)
    //.map retorna dados do array de acordo com a invocação da função callback
}

//UPDATE
function editarCadAluno(id) {
    const index = alunos.findIndex(element => element.id === id)

    alunos[index].name = "aaaaaa"
    console.log(alunos)
}

//DELETE 

function deletAluno(id) {
    const index = alunos.findIndex(element => element.id === id)
    alunos.splice(index, 1)
}


createAluno("Kennedy", "Victorsilvasm92@gmail.com", 18)
createAluno("JP", "joaom92@gmail.com", 12)
createAluno("Prediho", "lucca@gmail.com", 12)
buscarAlunos()

console.log("---------------------------------------")
editarCadAluno(0)
deletAluno(2)
buscarAlunos()