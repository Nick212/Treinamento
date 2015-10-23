//Eventos-> são interações com o Documento WEB(DOM) (Ex: Click)

//Manipuladores de eventos -> são as funções a serem executadas quando um evento acontecer(EX: Funções)

//Disparador de Evento-> é o próprio elemento HTML (Ex:disparadores)

DOM 0 -> API (Antiga) contemplam algumas chamadas de manipulação muito Antiga
como o onclick(JS) tachado como atributo do HTML

DOM 2 -> API (Atual) 
	-> Obetem os eventos através do próprio javascript;
	-> Proporciona a criação de Eventos;
	-> Contempla Doiz métodos;
		-> AddEventListener; 
			-> Atrela eventos ao elemento HTML
		
		-> RemoveEventListener; 
			-> Remove eventos ao elemento HTML

Ex:
	function um(){
		alert("I'm Here")
	}

	var btn = document.getElementById("botao");
	btn.addEventListener("click", um, false);
	btn.removeEventListener("click", um, false);


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
		else if (src.indexOf('name2-img') > 0s) {};{
			msg = 'Poltrona Indisponível';
		}
		else{
			msg = 'Essa poltrona é sua';
		}
		alert(msg);
	}
}


















