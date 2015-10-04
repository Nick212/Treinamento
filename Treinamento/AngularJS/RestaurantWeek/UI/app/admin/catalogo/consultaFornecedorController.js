(function (angular, $, _) {
    var app = angular.module('admin');
    var controller = function (consultaFornecedorService, $scope) {

        //LOADING SUPPLIER APROVADOS PENDENTES
        var loadData = function () {
            consultaFornecedorService.fornecedores().success(function (data) {

                var dataAprovados = new Array();
                var dataPendentes = new Array();
                var k = 0;
                var j = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].ativo === true) {
                        dataAprovados[k] = data[i];
                        k = k + 1;
                    }
                    else if (data[i].ativo === false) {
                        dataPendentes[j] = data[i];
                        j = j + 1;
                    }

                }
                $scope.fornecedoresAprovados = dataAprovados;
                $scope.fornecedoresPendente = dataPendentes;

            })
        }();

        var removerPendentes = function (id) {
            var index = _.findIndex($scope.fornecedoresPendente, { wmsRestauranteId: id })
            $scope.fornecedoresPendente.splice(index, 1);
        }
        var removerAprovados = function (index) {
            $scope.fornecedoresPendente.splice(index, 1);
        }

        var listAprovadosAdd = function () {
            $scope.pessoas.push({
                nome: $scope.vNome,
                cidade: $scope.vCidade

            });
        }
        //BTN-APROVAR
        $scope.aprovarFornecedor = function (supplier, index) {
            if (confirm('Deseja realmente aprovar?'))
                consultaFornecedorService.aprovarFornecedor(supplier)
                    .success(function (data) {
                        if (data.hasError) {
                            console.log('Ocorreu um Erro');
                        }
                        else {
                            removerAprovados(index);
                        }
                    })
                    .error(function () {
                        console.log('Não foi possível efetuar a Aprovação');
                    });
        }

        //BTB-REPROVAR
        $scope.reprovarFornecedor = function (supplier, index) {
            if (confirm('Deseja realmente reprovar?'))
            consultaFornecedorService.rejeitarFornecedor(supplier)
                .success(function (data) {
                    if (data.hasError) {
                        console.log('Ocorreu um Erro');
                    }
                    else {
                        removerPendentes(supplier.wmsRestauranteId);
                        console.log('Não ocorreu erro na reprovação', supplier);
                    }
                })
                .error(function () {
                    console.log('Não foi possível efetuar a reprovação');
                });
        }

        //BTN-DOWNLOAD DATA
        $scope.exportData = function (dataSupplier) {
            exportaExcel(dataSupplier);

            //Consultando Services
            consultaFornecedorService.exportarDados(dataSupplier)
                .success(function (data) {
                    console.log('exportação sucedida');
                })
                .error(function (data) {
                    console.log('Não foi possível efetuar a exportação');
                });
        }

      
    }
    app.controller('consultaFornecedorController', ['Catalogo', '$scope', controller]);
}(angular, jQuery, _));