(function (angular) {
    var app = angular.module('relatorio');
    var fornecedorController = function ($http, $location, $scope) {
        var apiAddress = 'http://localhost:50072/api/api/';
        console.log('batman');
        console.log($location.search().id);
        var uid = $location.search().id;
        $http.get(apiAddress + 'Supplier/' + uid)
            .success(function(data) {
                $scope.model = {};
                $scope.model.restaurante = data.restaurante;
                if (data.enderecos[0].tipoEndereco == 'F') {
                    $scope.model.endereco = data.enderecos[1];
                    $scope.model.enderecoCobranca = data.enderecos[0];
                } else {
                    $scope.model.endereco = data.enderecos[0];
                    $scope.model.enderecoCobranca = data.enderecos[1];
                }

                $http.get(apiAddress + 'Regiao/Cidade/Find/?id=' + $scope.model.enderecoCobranca.webCidadeId).success(function (data) {
                    $scope.model.enderecoCobranca.cidade = data.cidadeNome;
                    $scope.model.enderecoCobranca.estado = data.estadoNome;
                });
                $http.get(apiAddress + 'Regiao/Cidade/Find/?id=' + $scope.model.endereco.webCidadeId).success(function(data) {
                    $scope.model.endereco.cidade = data.cidadeNome;
                    $scope.model.endereco.estado = data.estadoNome;
                });

            });
    }
    app.controller('fornecedorController', ['$http', '$location', '$scope', fornecedorController]);
}(angular, jQuery));