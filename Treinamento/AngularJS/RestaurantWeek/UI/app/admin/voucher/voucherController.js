(function (angular) {
    var app = angular.module('admin');
    var voucherController = function (validation, voucherService, restaurantService, $scope) {
        //Initial state
        $scope.boxResultadoPesquisa = {
            show: false
        }
        $scope.boxSucesso = {
            show: false
        }
        $scope.boxPesquisa = {
            show: true
        }
        $scope.boxNaoEncontrado = {
            show: false
        }
        $scope.boxUtilizado = {
            show: false
        }
        $scope.boxNaoPertence = {
            show: false
        }
        $scope.boxVencido = {
            show: false
        }
        $scope.boxEncontrado = {
            show: false
        }
        $scope.boxProduto = {
            show: false
        }
        $scope.boxIndisponivel = {
            show: false
        }

        $scope.voucher = {};

        restaurantService.query(function (data) {
            var rest = new Array();
            var k = 0;
            for (var i = 0; i < data.length; i++) {
                if (data[i].ativo === true) {
                    rest[k] = data[i];
                    k = k + 1;
                }
            };
            $scope.restaurants = rest;
        });

        var disableAllMessages = function () {
            $scope.boxNaoEncontrado.show = false;
            $scope.boxUtilizado.show = false;
            $scope.boxNaoPertence.show = false;
            $scope.boxVencido.show = false;
            $scope.boxEncontrado.show = false;
        }

        var isFormValid = function () {
            var toReturn = true;
            if ($scope.voucher.codigo === undefined) {
                $scope.codigo = { valid: true }
                toReturn = false;
            } else {
                $scope.codigo = { valid: false }
            }
            if ($scope.voucher.pedido === undefined) {
                $scope.pedido = { valid: true }
                toReturn = false;
            } else {
                $scope.pedido = { valid: false }
            }
            if ($scope.voucher.fornecedor === undefined) {
                $scope.fornecedor = { valid: true }
                toReturn = false;
            } else {
                $scope.fornecedor = { valid: false }
            }
            return toReturn;
        }

        $scope.consultar = function () {
            disableAllMessages();
            if (isFormValid() === true) {
                var voucher = voucherService.get({
                    id: $scope.voucher.codigo,
                    pedido: $scope.voucher.pedido,
                    fornecedor: 858405
                }, function () {
                    $scope.boxResultadoPesquisa.show = true;
                    $scope.boxPesquisa.show = false;
                    switch (voucher.status) {
                        case 1:
                            {
                                //Vale troca disponível
                                $scope.boxEncontrado.show = true;
                                $scope.boxProduto.show = true;
                                $scope.produtoNome = voucher.produtoNome;
                                $scope.dataVencimento = (voucher.dataVencimento) ? voucher.dataVencimento : 'Indisponível';
                                $scope.adquirenteNome = voucher.adquirenteNome;
                                break;
                            }
                        case 2:
                            {
                                //vale troca não encontrado
                                $scope.boxNaoEncontrado.show = true;
                                break;
                            }
                        case 3:
                            {
                                //vale troca não encontrado
                                $scope.boxNaoEncontrado.show = true;
                                break;
                            }
                        case 4:
                            {
                                //vale troca já utilizado
                                $scope.boxUtilizado.show = true;
                                break;
                            }
                        case 5:
                            {
                                //Vale troca de outro restaurante
                                $scope.boxNaoPertence.show = true;
                                break;
                            }
                        case 6:
                            {
                                //vale troca está vencido e não pode mais ser utilizado
                                $scope.boxVencido.show = true;
                                break;
                            }
                        case 9:
                            {
                                //vale troca está indisponível e não pode mais ser utilizado
                                alert('EBaaaa ;)')
                                $scope.boxIndisponivel.show = true;
                                break;
                            }
                        default:
                            {
                                //vale troca não encontrado
                                $scope.boxNaoEncontrado.show = true;
                                break;
                            }
                    }
                }, function () {
                    //vale troca não encontrado
                    $scope.boxNaoEncontrado.show = true;
                });
            }
        };

        $scope.validarVoucher = function () {
            voucherService.validar({
                codigo: $scope.voucher.codigo,
                pedido: $scope.voucher.pedido,
                fornecedor: $scope.voucher.fornecedor
            }).success(function (data) {
                if (data.status === 8) {
                    $scope.boxResultadoPesquisa.show = false;
                    $scope.boxSucesso.show = true;
                }
            });
        };

        $scope.finalizar = function () {
            $scope.limpar();
            $scope.boxPesquisa.show = true;
            $scope.boxSucesso.show = false;
            $scope.boxResultadoPesquisa.show = false;
        }

        $scope.cancelar = function () {
            $scope.finalizar();
        };

        $scope.limpar = function () {
            $scope.voucher = {};
        };
    }
    app.controller('voucherController', ['Validation', 'Voucher', 'Restaurant', '$scope', voucherController]);
}(angular, jQuery));