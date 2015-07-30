//Variável Global
//Que contem um arrau ([]) de objetos ({})
var listaCidades = [
    { estado: "São Paulo", uf: "SP" },
    { estado: "Salvador", uf: "SP" },
    { estado: "Rio de Janeiro", uf: "SP" },
    { estado: "Minas Gerais", uf: "SP" },
    { estado: "São Paulo", uf: "SP" },
    { estado: "São Paulo", uf: "SP" },
    { estado: "São Paulo", uf: "SP" },
    { estado: "São Paulo", uf: "SP" }
];


// Por Boa prática colocar on {nome da função}{nome do evento}
// Caso, utilizamos essa função para algum evento

function onCadastrarClick() {
    RemoveClassErrorInput();

    if (ValidaCampos()) {
        var txtNome = document.getElementById('txtNome');
        var txtTelefone = document.getElementById('txtTelefone');
        var txtEmail = document.getElementById('txtEmail');
        var ddlCidade = document.getElementById('ddlCidade');
        var ckbAtivo = document.getElementById('ckbAtivo');

        ShowMessage('Cliente Salvo com Sucesso!', 'alert-success');

        //Vai Executar após 2seg
        window.setTimeout(RemoveMensagemDeSucesso, 2000);
        LimparCampos();

        //Diferença entre Chamada de Método com () e sem parenteses Apenas acessa o método

        var cliente = new Object();
        //msm coisa cliente = {}

        cliente.Nome = txtNome.value;
        cliente.Telefone = txtTelefone.value;
        cliente.Email = txtEmail.value;
        cliente.Cidade = ddlCidade.value;
        cliente.IsAtivo = ckbAtivo.checked;

        AdicionarClienteAllista(cliente);
        ListarClientes();
    }


}

    function ValidaCampos() {
        ///------------INICIO - VALIDAÇÕES DE PREENCHIMENTO CAMPOS-------------/////
        var txtNome = document.getElementById('txtNome');
        var txtTelefone = document.getElementById('txtTelefone');
        var txtEmail = document.getElementById('txtEmail');
        var ddlCidade = document.getElementById('ddlCidade');
        var ckbAtivo = document.getElementById('ckbAtivo');

        var isValido = true;

        // ==  :  Vai ser validado apenas os valores. Não é fiel ao resultado informado.
        // === :  Vai ser validado o tipo, depois o valor. É mais fiel ao resultado.

        if (txtNome.value === "") {
            txtNome.classList.add('errorInput'); // ClassList é do CSS
            isValido = false;
        }
        if (txtTelefone.value === "") {
            txtTelefone.classList.add('errorInput'); // ClassList é do CSS
            isValido = false;
        }
        if (txtEmail.value === "") {
            txtEmail.classList.add('errorInput'); // ClassList é do CSS
            isValido = false;
        }
        if (ddlCidade.value === "") {
            ddlCidade.classList.add('errorInput'); // ClassList é do CSS
            isValido = false;
        }
        if (isValido === false) {
            mensagem = "Por, favor, informe os dados em destaque abaixo";
            ShowMessage(mensagem, 'alert-danger');
        }

        return isValido;
    }

    ///------------FIM - VALIDAÇÕES DE CAMPOS-------------/////

    function ShowMessage(mensagem, nameClass) {
        var divAlert = document.getElementById('divAlert');
        divAlert.innerHTML = mensagem;
        divAlert.classList.add('alert');
        divAlert.classList.add(nameClass);
    }

    function RemoveClassErrorInput() {
        RemoveMensagem('alert-danger');
        var listInputErrorClass = document.getElementsByClassName('errorInput');
        while (listInputErrorClass.length > 0) {
            listInputErrorClass[0].classList.remove('errorInput');
        }
    }
    
    function IncluiOptionDeCidade() {
        var options = '<option value = "">------</option>';

        for (var i = 0; i < listaCidades.length; i++) {
            options += '<option value = "'+ listaCidades[i].uf +'">';
            options += listaCidades[i].estado;
            options += '</option>';
        }
        document.getElementById('ddlCidade').innerHTML = options;
    }

    function RemoveMensagem(nameClass) {
        var divAlert = document.getElementById('divAlert');
        divAlert.innerHTML = '';
        divAlert.classList.remove('alert');
        divAlert.classList.remove(nameClass);
    }

    function LimparCampos() {
       document.getElementById('txtNome').value = '';
       document.getElementById('txtTelefone').value = '';
       document.getElementById('txtEmail').value = '';
       document.getElementById('ddlCidade').value = '';
       document.getElementById('ckbAtivo').checked = false;
    }

    function RemoveMensagemDeSucesso() {
        RemoveMensagem('alert-success');
    }
