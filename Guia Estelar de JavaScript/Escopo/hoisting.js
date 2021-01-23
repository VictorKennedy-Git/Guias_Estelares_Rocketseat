//HOISTING É A ELEVAÇÃO

//CASO UMA VARIÁVEL ESTAJA NO ESCOPO GLOBAL E ELA SEJA GLOBAL
//A chamada dela vai procurar mesmo que ela estejja 300 escopos acima

var eu = "Kennedy"

{
	{
		{
			{
				console.log(eu)
			}
		}
	}
}
