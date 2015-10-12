/*------------------------------------------------------
---------   FUNÇÕES DE CALL BACK E OBJETO  ----------------
--------------------------------------------------------



--------------------------------------------------------
Call Back -> Chama uma Função através de outra função
--------------------------------------------------------*/

function soma(num1, num2){
	var resultado = num1 + num2;
	return resultado;
}

function subtrai(num1, num2){
	var resultado = num1 - num2;
	return resultado;
}

//Função que recebe uma função
function executa(callback){
	var total = callback( 5, 25);
	document.write(total);
}

executa(soma)


/*-----------------------------------------
---------ORGANIZAÇÃO DE CALL BACK----------
Criar objeto 
------------------------------------------*/
var calculadora = {
	soma: function (num1, num2){
			var resultado = num1 + num2;
			return resultado;
	},
	subtrai: function(num1, num2){
			var resultado = num1 - num2;
			return resultado;
	},
	executa:function(callback, num1, num2){
			var total = callback( num1, num2);
			document.write(total);
	} 
}

var result = calculadora.executa(soma, num1, num2);
