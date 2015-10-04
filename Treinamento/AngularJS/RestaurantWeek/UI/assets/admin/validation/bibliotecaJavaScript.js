function VerificaNumero(e) {
    var tecla = (event.which) ? event.which : event.keyCode;

    if (tecla > 31 && (tecla < 48 || tecla > 57)) {
        return false;
    }
    return true;
}

function VerificaString(e) {
    var tecla = (event.which) ? event.which : event.keyCode;

    if (!(tecla > 31 && (tecla < 48 || tecla > 57))) {
        return false;
    }
    return true;
}
