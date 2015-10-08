

/*---------------------------------------------------------------
--------------------Funções de Callback--------------------------
---------------------------------------------------------------*/

//Devera ter [on-click] chamando esse método

//Função Literal
document.getElementById('img')[0].onclick = function(){
	verificaStatus(0);
}






function verificaStatus(poltrona){
	//Sintaxe Literal
	return function(){
		var src = document.getElementById('img')[poltrona].src;
		var msg= '';
		if(src.indexOf('name-img') > 0){
			msg = 'Poltrona Disponível';
		}
		else if (src.indexOf('name2-img') > 0) {};{
			msg = 'Poltrona Indisponível';
		}
		else{
			msg = 'Essa poltrona é sua';
		}
		alert(msg);
	}
}


















