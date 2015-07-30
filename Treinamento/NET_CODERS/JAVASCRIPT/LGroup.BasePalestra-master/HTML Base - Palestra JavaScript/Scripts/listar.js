var listaDeClientes = [];

function ListarClientes() {
    var tbody = '';

    for (var i = 0; i < listaDeClientes.length; i++) {

        tbody += '<tr>';

        tbody += '<td>';
        tbody += (i + 1).toString();
        tbody += '</td>';
        tbody += '<td>';
        tbody += listaDeClientes[i].Nome;
        tbody += '</td>';
        tbody += '<td>';
        tbody += listaDeClientes[i].Telefone;
        tbody += '</td>';
        tbody += '<td>';
        tbody += listaDeClientes[i].Email;
        tbody += '</td>';
        tbody += '<td>';
        tbody += listaDeClientes[i].Cidade;
        tbody += '</td>';
        tbody += '<td>';
        tbody += listaDeClientes[i].IsAtivo;
        tbody += '</td>';

        tbody += '</tr>';
    }

    document.getElementById('tbodyListaCliente').innerHTML = tbody;
}

function AdicionarClienteALista(cliente) {
    listaDeClientes.push(cliente);   //Inclui esse objeto dentro da lista

}