/*
ss

*/

function verificarStatus(nPoltrona){
	var path = document.getElementByTagName("img")[nPoltrona].src);
}

//Sem depender do evento onclick
window.onload = function(){
	document.getElementByTagName("img").[0].onclick = function(){
	verificarStatus(0);
	}
}