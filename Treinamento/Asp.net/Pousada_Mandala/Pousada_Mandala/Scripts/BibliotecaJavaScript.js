var erro = "";

function ValidaCNPJ(cnpj) {

    if (cnpj.value != "") {
        if (cnpj.value.length != 14)
            return false;

        if (cnpj.value == "00000000000000" ||
            cnpj.value == "11111111111111" ||
            cnpj.value == "22222222222222" ||
            cnpj.value == "33333333333333" ||
            cnpj.value == "44444444444444" ||
            cnpj.value == "55555555555555" ||
            cnpj.value == "66666666666666" ||
            cnpj.value == "77777777777777" ||
            cnpj.value == "88888888888888" ||
            cnpj.value == "99999999999999")
            return false;

        tamanho = cnpj.value.length - 2
        numeros = cnpj.value.substring(0, tamanho);
        digitos = cnpj.value.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.value.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
    } else { return false; }
    return true;
}

function ValidaSelecionar(selecionar) {
    if (selecionar.value != "Selecione") {
        return false;
    } else { return false; }
    return true;
}

function ValidaEmail(email) {
    if (email.value != "") {
        if (!(/^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/.test(email.value)))
            erro = erro + "E-MAIL Invalido\n";
        return false;
    }
    else {
        erro = erro + "Digite um E-MAIL\n";
        return false;
    }
    return true;
}

function ValidaString(palavra) {
    if (palavra.value != "") {
        if (!palavra.value.length >= 3) {
            return false;
        }
        if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(palavra.value))) {
            return false;
        }
    }
    else { return false; }
    return true;
}

function ValidaNome(palavra) {

    if (palavra.value != "") {
        if (palavra.value.length <= 3) {
            erro = erro + "Nome ou razão social invalido\n";
            return false;
        }
        if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(palavra.value))) {
            erro = erro + "Nome ou razão social invalido\n";
            return false;
        }
    } else {
        erro = erro + "Digite um Nome ou razão social\n";
        return false;
    }
    return true;
}

function ValidaRua(palavra) {
    if (palavra.value != "") {
        if (!palavra.value.length >= 3) {
            erro = erro + "Rua invalida\n";
            return false;
        }
        if (!(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(palavra.value))) {
            return false;
        }
    } else {
        erro = erro + "Digite sua Rua\n";
        return false;
    }
    return true;
}

function ValidaNumerico(qtd) {
    if (qtd.value != "") {
        if (/^\d+$/g.test(qtd.value)) {
            if (qtd.value <= 0) {
                return false;
            }
        }
    }
    return true;
}

function ValidaNomeFantasia(nome_fantasia) {
    if (nome_fantasia.value != "") {
        return true;
    } else {
        return false;
    }
}

function ValidaMotivo(motivo) {
    if (motivo.value != "") {
        if (!/[a-zA-Z0-9]+/g.test(motivo.value)) {
            return false;
        }
    } else { return false; }
    return true;
}

function ValidaCPF(cpf) {
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.value.length < 11)
        return false;
    for (i = 0; i < cpf.value.length - 1; i++)
        if (cpf.value.charAt(i) != cpf.value.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.value.substring(0, 9);
        digitos = cpf.value.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.value.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}


function VerificaNumero(e) {
    var tecla = (event.which) ? event.which : event.keyCode;

    if (tecla > 31 && (tecla < 48 || tecla > 57)) {
        return false;
    }
    return true;
}

function ValidaMoney(e) {

    event.

    console.log(e.buttonID);

    return true;

    if (/[0-9]{2}[.][0-9]{1,2}/g.test(char)) {
        return true;
    }
    return false;
}

function VerificaString(e) {
    var tecla = (event.which) ? event.which : event.keyCode;

    if (!(tecla > 31 && (tecla < 48 || tecla > 57))) {
        return false;
    }
    return true;
}



function TabulaData(e, id) {
    var tecla = (window.event) ? event.keyCode : e.which;

    if ((tecla > 47 && tecla < 58) || (tecla > 95 && tecla < 106)) {

        var data = document.getElementById(id);

        if (data.value.length >= 2) {
            if (Number(data.value) > 31 || Number(data.value) < 1) {
                data.value = "";
                //alert("Os dias vão de 1 à 31");
            } else {
                if (data.value.substring(2, 3) != "/") {
                    data.value = data.value + "/";
                }
            }
        }

        if (data.value.length >= 5) {
            if (Number(data.value.substring(3, 5)) > 12 || Number(data.value.substring(3, 5)) < 1) {
                data.value = "";
                //alert("Os meses vão de 1 à 12");
            }
            else {
                if (Number(data.value.substring(3, 5)) == 02 ||
                    Number(data.value.substring(3, 5)) == 04 ||
                    Number(data.value.substring(3, 5)) == 06 ||
                    Number(data.value.substring(3, 5)) == 09 ||
                    Number(data.value.substring(3, 5)) == 11) {
                    if (Number(data.value.substring(0, 2)) > 30) {
                        data.value = "";
                        //alert("Esse mês não tem mais de 31 dias");
                    }
                }
                if (data.value.substring(5, 6) != '/') {
                    data.value = data.value + "/";
                }
            }
        }
        if (data.value.length == 10) {
            if (data.value.substring(6, 10) >= (new Date()).getFullYear()) {
                data.value = "";
                //alert("O ano não pode ser maior ou igual que " + (new Date()).getFullYear());
            }
            else {
                if (data.value.substring(6, 10) <= 1793) {
                    data.value = "";
                    //alert("O ano de fundação inválido");
                }
            }
        }
    }
    else {
        if (tecla == 8 || tecla == 0) {
        }
        else {
            return false;
        }
    }

}

function CamposBusca(campo) {
    if (campo == "") {
        erro = erro + "Você deve fornecer algum dado para localizarmos o cliente\n";
        return false;
    } else {
        return true;
    }
}

function VerificaData(dataCriacao) {
    if (dataCriacao.value == "") {
        erro = erro + "você deve informa uma data de nascimento ou de inicio de suas atividades!\n";
        return false;
    } else
        dataCriacao = new Date(dataCriacao + 3).getFullYear();

    if (dataCriacao.value <= 1793) {
        erro = erro + "A data que você selecionou é indisponivel\n";
        return false;
    }

    return true;
}

function VerData() {
    var data_fundacao = document.getElementById("ContentPlaceHolder1_data").value;
    confere = /\d{4}\-\\d{2}\-\\d{2}/;
    separaData = data_fundacao.split('-');
    data = new Date();
    dia_atual = data.getDay();
    mes_atual = data.getMonth();
    anos_atual = data.getFullYear();

    if (separaData[0] <= 1786) {
        alert("Data da Fundação inválida");
        return false;
    }
    else if (separaData[0] == (anos_atual - 2) && separaData[1] == mes_atual && separaData[2] == dia_atual) {
        alert("Data mínima é de 2 anos !!!");
        return false;
    }
    else if (separaData[0] > (anos_atual - 2)) {
        alert("Data mínima é de 2 anos !!!");
        return false;
    }
    return true;


}
function TabulaTelefone(e) {
    var tecla = (window.event) ? event.keyCode : e.which;

    var telefone /*= document.getElementById('telefone');*/
    if ((tecla > 47 && tecla < 58) || (tecla > 95 && tecla < 106)) {
        if (telefone.value.length >= 2 && telefone.value.substring(0, 1) != "(") {
            telefone.value = "(" + telefone.value + ")";
        }
        if (telefone.value.length >= 11 && telefone.value.substring(8, 9) != '-' && telefone.value.substring(9, 10) != '-') {
            telefone.value = telefone.value.substring(0, 8) + '-' + telefone.value.substring(8, 12);
        }
        if (telefone.value.length >= 13 && telefone.value.substring(9, 10) != '-') {
            telefone.value = telefone.value.replace("-", "");
            telefone.value = telefone.value.substring(0, 9) + '-' + telefone.value.substring(9, 13);
        }
    } else {
        if (tecla == 8 || tecla == 0) {
            if (telefone.value.length >= 2 && telefone.value.substring(0, 1) != "(") {
                telefone.value = "(" + telefone.value + ")";
            }
            if (telefone.value.length >= 11 && telefone.value.substring(8, 9) != '-' && telefone.value.substring(9, 10) != '-') {
                telefone.value = telefone.value.substring(0, 8) + '-' + telefone.value.substring(8, 12);
            }
            if (telefone.value.length >= 13 && telefone.value.substring(9, 10) != '-') {
                telefone.value = telefone.value.replace("-", "");
                telefone.value = telefone.value.substring(0, 9) + '-' + telefone.value.substring(9, 13);
            }
        } else { cancelEvent(e); }
    }

}


function ValidaEmailReserva(email) {
    if (email.value != "") {
        if (!(/^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/.test(email.value)))
            erro = erro + "E-MAIL Invalido\n";
        return false;
    }
    else if (email.value == "") {
        return true;
    }
    return true;
}

function ValidaDocumento(documento) {
    if (documento.value.length == 11) {
        ValidaCPF(documento)
        return true;
    } else if (documento.value.length == 14) {
        ValidaCNPJ(documento)
        return true;
    } else if (documento.value == "") {
        erro = erro + "Digite um CNPJ ou o CPF\n";
        return false;
    } else {
        erro = erro + "CNPJ ou o CPF invalido\n";
        return false;
    }
    return false;
}

function ValidaCidade(cidade) {
    if (cidade.value == "") {
        erro = erro + "informe uma cidade\n";
        return false;
    } else {
        return true;
    }
}

function ValidaCEP(cep) {
    if (cep.value == "") {
        erro = erro + "Digite um CEP\n";
        return false;
    } else if (cep.value.length < 5 || cep.value.length > 10) {
        erro = erro + "CEP invalido\n";
        return false;
    } else {
        return true;
    }
    return true;
}

function VerCEP(cep) {
    var i;
    var cep
    strCep = (cep)
    confere = /\\d{5}\d{3}/;
    if (cep.value != "") {
        if (cep.value.length != 8) {
            alert("CEP inválido");
        }
    }

    if (cep.value == "00000000" ||
       cep.value == "11111111" ||
       cep.value == "22222222" ||
       cep.value == "33333333" ||
       cep.value == "44444444" ||
       cep.value == "55555555" ||
       cep.value == "66666666" ||
       cep.value == "77777777" ||
       cep.value == "88888888" ||
       cep.value == "99999999") {

        alert("CEP INVÁLIDO");
    } else {
        alert("CEP OK");
    }
}


function ValidaNumeroCasa(numero) {
    if (numero.value != "") {
        return true;
    } else {
        erro = erro + "Informe o número da sua casa\n";
        return false;
    }
}

function ValidaDDD(ddd) {
    if (ddd.value == "") {
        erro = erro + "Digite um DDD\n";
    } else if (ddd.value.length != 2) {
        erro = erro + "DDD invalido\nO DDD deve ter apenas 2 números\n";
        return false;
    } else {
        return true;
    }
}

function ValidaContatoCad(contato) {
    if (contato.value == "") {
        erro = erro + "Digite um contato!\n";
    } else if (contato.value.length <= 7 || contato.value.length >= 10) {
        erro = erro + "Contato telefonico Invalido\nO contato pode ser CEL ou TEL\n";
        return false;
    } else {
        return true;
    }
}


function VerTelefone(telefone) {
    var i;
    var telefone
    strTelefone = (telefone);
    confere = /\(\d{2}\)\d{4}\-\d{4}/ || /\(\d{2}\)\d{5}\-\d{4}/;

    if (telefone[1] === 0 || telefone[2] === 0) {
        return false;
    }
    if (telefone[4] < 2) {
        if (strTelefone.search(confere) == -1) {
            return false;
        } else {
            return true;
        }
    }

}

function ValidaCredito() {
    var id_status = document.getElementById('id_status');
    var id_mecanica = document.getElementById('id_mecanica');
    var data_credito = document.getElementById('id_credito');
    var motivo = document.getElementById('motivo');
    var valor_compra = document.getElementById('valor_compra');


}

function ValidarCampos() {

    document.getElementById("erroInput").style.visibility = "hidden";
    document.getElementById("erroInput").value = '';
    erro = '';

    ValidaNome(document.getElementById("ContentPlaceHolder1_nome"));
    ValidaNomeFantasia(document.getElementById("ContentPlaceHolder1_nome_fantasia"));
    ValidaCNPJ(document.getElementById("ContentPlaceHolder1_cnpj"));
    VerData(document.getElementById("ContentPlaceHolder1_data"));
    VerCEP(document.getElementById("ContentPlaceHolder1_cep"));
    ValidaNome(document.getElementById("ContentPlaceHolder1_rua"));
    ValidaNumeroCasa(document.getElementById("ContentPlaceHolder1_numero"));
    VerTelefone(document.getElementById("ContentPlaceHolder1_telefone"));
    ValidaEmail(document.getElementById("ContentPlaceHolder1_email"));
    ValidaEmailReserva(document.getElementById("ContentPlaceHolder1_emailReserva"));
    ValidaDDD(document.getElementById("ContentPlaceHolder1_ddd1"));
    ValidaContatoCad(document.getElementById("ContentPlaceHolder1_telefone"));
    ValidaDDD(document.getElementById("ContentPlaceHolder1_ddd2"));
    ValidaContatoCad(document.getElementById("ContentPlaceHolder1_celular"));

    if (erro != "") {
        document.getElementById("erroInput").style.visibility = "visible";
        document.getElementById("erroInput").value = erro;
        return false;
    } else {
        alert("CADASTRO EFETUADO COM SUCESSO !! SEJA BEM VINDO A NOSSA EMPRESA !!");
        return true
    }
    return true;
}

function ValidarEdicao() {
    ValidaNomeFantasia(document.getElementById("ContentPlaceHolder1_nome_fantasia"));
    TabulaTelefone(document.getElementById("ContentPlaceHolder1_telefone"));
    ValidaEmail(document.getElementById("ContentPlaceHolder1_email"));
    ValidaString(document.getElementById("ContentPlaceHolder1_rua"));
    ValidaString(document.getElementById("ContentPlaceHolder1_bairro"));
    ValidaString(document.getElementById("ContentPlaceHolder1_cidade"));
    ValidaString(document.getElementById("ContentPlaceHolder1_estado"));
}

function ValidarLista() {
    ValidaCNPJ(document.getElementById("ContentPlaceHolder1_cnpj"));
    ValidaString(document.getElementById("ContentPlaceHolder1_nome_razao_social"));
}

function ValidaCampos() {
    debugger;
    ValidaNome(document.getElementById("ContentPlaceHolder1_TextBox1"));
    ValidaDocumento(document.getElementById("ContentPlaceHolder1_TextBox2"));
    VerificaData(document.getElementById("ContentPlaceHolder1_TextBox3"));
    ValidaEmail(document.getElementById("ContentPlaceHolder1_TextBox4"));
    ValidaEmailReserva(document.getElementById("ContentPlaceHolder1_TextBox5"));
    ValidaCidade(document.getElementById("ContentPlaceHolder1_ddl_cid"));
    ValidaCEP(document.getElementById("ContentPlaceHolder1_TextBox8"));
    ValidaRua(document.getElementById("ContentPlaceHolder1_TextBox9"));
    ValidaNumeroCasa(document.getElementById("ContentPlaceHolder1_TextBox10"));
    ValidaDDD(document.getElementById("ContentPlaceHolder1_TextBox11"));
    ValidaContatoCad(document.getElementById("ContentPlaceHolder1_TextBox12"));

    if (erro !== "") {
        document.getElementById("ContentPlaceHolder1_ModalAlerta").style.visibility = "visible";
        document.getElementById("ContentPlaceHolder1_txtAlerta").value = erro;
        return false;
    } else {
        return true;
    }
    return true;
}

function ValidaBusca1() {
    if (CamposBusca(document.getElementById("ContentPlaceHolder1_TextBox13").value) == false) {
        if (erro !== "") {
            document.getElementById("ContentPlaceHolder1_ModalAlerta").style.visibility = "visible";
            document.getElementById("ContentPlaceHolder1_txtAlerta").value = erro;
        }
        return false;
    } else {
        return true;
    }
    return true;
}

function ValidaBusca2() {
    if (CamposBusca(document.getElementById("ContentPlaceHolder1_TextBox14").value) == false) {
        if (erro !== "") {
            document.getElementById("ContentPlaceHolder1_ModalAlerta").style.visibility = "visible";
            document.getElementById("ContentPlaceHolder1_txtAlerta").value = erro;
        }
        return false;
    } else {
        return true;
    }
    return true;
}

function ValidaBusca3() {
    if (CamposBusca(document.getElementById("ContentPlaceHolder1_TextBox15").value) == false) {
        if (erro !== "") {
            document.getElementById("ContentPlaceHolder1_ModalAlerta").style.visibility = "visible";
            document.getElementById("ContentPlaceHolder1_txtAlerta").value = erro;
        }
        return false;
    } else {
        return true;
    }
    return true;
}


function ValidaBusca4() {
    if (CamposBusca(document.getElementById("ContentPlaceHolder1_TextBox16").value) == false) {
        if (erro !== "") {
            document.getElementById("ContentPlaceHolder1_ModalAlerta").style.visibility = "visible";
            document.getElementById("ContentPlaceHolder1_txtAlerta").value = erro;
        }
        return false;
    } else {
        return true;
    }
    return true;
}


function ValidaFinanceiro() {
    TabulaData(document.getElementById("ContentPlaceHolder1_dataAbertura"));
    TabulaData(document.getElementById("ContentPlaceHolder1_dataFechamento"));
    ValidaSelecionar(document.getElementById("ContentPlaceHolder1_parceiroID"));
    VerificaNumero(document.getElementById("ContentPlaceHolder1_faturaID"));
}

/*window.onload = function () {

    var btn = document.getElementById('btn1');
    btn.addEventListener('click', function (e) {
        alert('btn clicado!');
    })

}*/

function escondeModal() {
    document.getElementById("ContentPlaceHolder1_ModalAlerta").style.visibility = "hidden";
    document.getElementById("ContentPlaceHolder1_txtAlerta").value = '';
    erro = '';
}

function ValidaAtendimentoCliente() {
    var cpf = document.getElementById("ContentPlaceHolder1_txtCPF").value;
    var tipoAtend = document.getElementById("ContentPlaceHolder1_tipoAtendimento").value;
    var nome = document.getElementById("ContentPlaceHolder1_nomeUsuario").value;
    var dataNasc = document.getElementById("ContentPlaceHolder1_dataNasc").value;
    var descri = document.getElementById("ContentPlaceHolder1_descAtendimento").value;


    if (cpf == "" || tipoAtend == "--Selecione o Tipo--" || nome == "" || dataNasc == "" || descri == "") {

        //alert('Erro ao Abrir o Chamado, Verifique os Campos digitados' + '\n' + erro + '\n');
        return;
    }
    else {
        //alert('Chamado Aberto com Sucesso !!!');
    }
}

function ValidaCPFAtendimento() {

    var valCPF = ValidaCPF(document.getElementById("ContentPlaceHolder1_txtCPF"));
    if (valCPF == false) {
        alert("CPF Inválido");
        return;
    }


}

function ValidaAtendimentoParceiro() {
    var cnpj = document.getElementById("ContentPlaceHolder1_txtCNPJ");
    var tipoAtend = document.getElementById("ContentPlaceHolder1_tipoAtendimento");
    var razaoSocial = document.getElementById("ContentPlaceHolder1_razaoSocial");
    var dataFundacao = document.getElementByI("ContentPlaceHolder1_dataFundacao");
    var descri = document.getElementById("ContentPlaceHolder1_descAtendimento")

    if (cnpj == "" || tipoAtend == "" || razaoSocial == "" || dataFundacao == "" || descri == "") {
        //alert("Verifique os Campos Digitados, não podem ser nulos !!!")
        return;
    }

    else {
        //alert('Chamado Aberto com Sucesso !!!');

    }
}

function ValidaCNPJAtendimento() {
    var valCNPJ = ValidaCNPJ(document.getElementById("ContentPlaceHolder1_txtCNPJ"));
    if (valCNPJ == false) {
        alert("CNPJ Inválido");
        return;
    }
}

function btnCalendario() {
    var x = $("#calendario");
    x.datepicker();

}
