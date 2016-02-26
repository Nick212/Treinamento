/*
	Autor : Nicolas Alexandre de Carvalho
	Descrição: Função JS
*/


//Função Declarativa -> Possui um nome que à declara
function somar(x,y){
	return(x+y);
}

//Função Anônima -> Apenas não possui nome
new Function("x","y","alert(x+y);");
/*ou*/
function("x","y","alert(x+y);)";

/*Resgatando retorno da Função Anônima*/

var response = new Function("x","y","alert(x+y);");


//Funções Literais -> Não tem o nome da função
function(x,y){
	alert(x+y);
}
//para atribuir o nome para ela ->
var somar = function(x,y){
	alert(x+y)
}


/*
-> Nas Bibliotecas atuais as funções que mais se tem aplicado é a função literal;
-> Função Literal é aplicada para os disparos de evento (click, mouseover, etc);
*/
