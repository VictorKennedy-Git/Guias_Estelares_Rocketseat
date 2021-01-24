var input_name = document.getElementById('name')

var input_curse = document.querySelector('#curse') 

var input_email = document.querySelector('#email')

var input_senha = document.querySelector('#pass')

function registrar() {
	var Aluno = {
		nome: String(input_name.value),
		curse: String(input_curse.value),
		email: String(input_email.value),
		senha: String(input_senha.value) 
	}
	if (Aluno.nome == true){
		var td_name = document.querySelector(`.name`)
		td_name.innerText = `${Aluno.nome}`
	} else {

	}	
}

