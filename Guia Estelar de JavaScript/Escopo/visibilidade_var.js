//Escopo são campos ou blocos com inicio em "{" e término em "}"

// function function_name(argument) {
// 
// } A FUNCTION É UM ESCOPO

//ESCOPO GLOBAL

var name = "Kennedy"
/*console.log*/(idade)//AQUI NÃO FUNCIONA

{//escopo pai
//ESCOPO PAI TEM ACESSO AO FILHO SEMPO	
	const idade = 18
	console.log(idade)
	{//escopo filho
		//ESCOPO FILHO TEM ACESSO AO PAI CASO SEJA UMA VARIÁVEL GLOBAL ATIBUIDA
		console.log(name)
		// console.log(idade) //aqui não funciona... DO MESMO JEITO COM LET
	}
}

/*Cada atribuição de variável tem um comportamento em relação ao escopo
	var: é tanto global como local;
	let: é local mas, mutável;
	const: é local e imutavel
*/
