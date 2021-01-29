let carros = [

]
id = 1
function cadCarro(nome, marca, preco) {
    carros.push({
        id: id++,
        nome,
        marca,
        preco
    })
}
function listCarros() {
    const carro = carros.map(element => { return { id: element.id, nome: element.nome, marca: element.marca, preco: element.preco } })

    console.log('Carros', carro)

}

function editarCarName(id) {
    const index = carros.findIndex(element => element.id === id)
    carros[index].nome = "CIENA"
    console.log(carros)
}

function deleteCar(id) {
    const index = carros.findIndex(element => element.id === id)
    carros.splice(index, 1)
}

cadCarro("Celta", "Gol", 10000)
cadCarro("Celta", "Gol", 10000)
cadCarro("Celta", "Gol", 10000)

listCarros()
console.log("----------------------")
editarCarName(2)

console.log("--------------------")
deleteCar(2)
listCarros()
