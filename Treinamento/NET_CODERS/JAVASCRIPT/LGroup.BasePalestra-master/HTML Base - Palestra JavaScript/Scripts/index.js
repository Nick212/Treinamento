function SetData() {

    //Estamos pegando o DOM do Elemento Label
    var lblTimeYear = document.getElementById('lblTimeYear');
    lblTimeYear.textContent = "2015"

}
//Executar apenas quando a página for carregada
// window.onload = É um evento do proprio navegador, através do JavaScript.
//Que será acionado quando a página for totalmente renderizada.

//Abaixo, estamos passando para o evento onload (Função Anônima)
window.onload = function () {
    //Criar a chamada da função
        SetData();
       IncluiOptionDeCidade();
}
