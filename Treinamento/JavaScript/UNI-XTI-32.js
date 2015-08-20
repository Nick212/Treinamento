/*
	autor : Nícolas Alexandre de Carvalho
	descrição : RegExp - Expressões Regulares
				Expressões para busca e substituição
*/

//Criando uma ER - Há duas formas de criar ER
//1º Forma : 
var regex = new RegExp("JavaScript");
var string = "JavaScript";
alert(regex.test(string));
//------------------------------------
//2º Forma : 
var regex2 = /JavaScript/;
var string2 = "JavaScript";
alert(regex.teste(string2));
/*-----------------------------------------------------
-----------MODIFICADORES-------------------------------
Geralemente colocados no final da expressão
i => ignora as letras Maiusculas e Minusculas

-------------------------------------------------------
-----------------------------------------------------*/
/*-----------------------------------------------------
--------------FUNÇÕES-------------------------------*/
//Função Test => Retorna se a função aconteceu ou não
alert(/javascript/i.test("JavaScript"));

//Função Exec => Retorna a primeira ocorrencia que 
//atende a ER
alert(/doce/i.exec("Qual é o doce mais doce que o doce?"));

//Função Match => Retorna todas as referencias que baterem 
//com o padrão dentro de um array
alert("Qual é o doce mais doce que o doce?".match(/doce/ig);
/*-------------------------------------------------------
-----------------------------------------------------*/
/*-----------------------------------------------------
--------------METACARACTERES-------------------------------*/
/* . => Ele encotra a ocorrencia de qualquer caracter com
exceção de novas linhas.*/
alert(/./.test("Fier12"));

/* w => Procura qualquer caracter de A a Z  e de 0 a 9 e underline*/
alert(/\w/.test("Fier12"));

/* s => Procura a ocorrencia de espaços no texto*/
alert(/\s/.test("Fier 12"));

/* d => Procura por digitos, lia-se números*/
alert(/\d/.test("Fier12"));

/* ^ => Indica a ocorrencia de uma determinada ação no inicio de uma string*/
alert(/^Fier/.test("Fier12"));

/* $ => Indica a ocorrencia de uma determinada ação no final de uma string*/
alert(/12$/.test("Fier12"));