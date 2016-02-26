(function (angular) {
    var app = angular.module('hotsite');
    var homeController = function ($scope) {
        
        $scope.btnCadastrarFornecedor = function(){
            $scope.cadastroFornecedor.show = true;
        }
        
        
        $scope.cadastrarFornecedor = function () {

        }
        $scope.limparDados = function () {
            $scope.dadosFornecedor.cnpj = "";
        };
    }
    app.controller('homeController', ['$scope', homeController]);
}(angular, jQuery));