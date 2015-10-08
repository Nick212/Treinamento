/*------------------------------------------------------
----------------BOM BROWSER OBJECT MODEL----------------
--------------------------------------------------------

TEMPORIZADOR ->

tipo 1 -> Não se repete
Tipo 2 -> Pode se repetir em um determinado tempo
--------------------------------------------------------

--------------------------------------------------------*/

window.onload = function(){
	ligar();
	setInterval(apresentaHoras, 1000);
}

														
function ligar(){

	//Após o click ligar após um tempo
	document.getElementById('xti').src = 'img/ligar.jpg';

	//Será executada apenas uma vez após 3seg
	setTimeout('desligar()', 3000)
	//ou 
	setTimeout(desligar, 3000);

	//Limpar o timeout
	clearTimeout(chaveDoTemporizador);
}				

function desligar(){
	//Após o click desligar após um tempo
	document.getElementById('xti').src = 'img/desligar.jpg';
}	

/*---------Criando um relógio com JS---------*/

function apresentaHoras(){
	var agora = new Date();
	var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();

	document.getElementById('horas').innerHTML = horas;
}							
