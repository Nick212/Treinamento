(function (angular) {
    var app = angular.module('admin');
    app.factory('Voucher', ['$resource', '$http', 'API', function ($resource, $http, api) {
        var service = $resource(api.production + 'api/vouchers/:id/:pedido/:fornecedor', { id: '@id', pedido: '@pedido', fornecedor: '@fornecedor' }, {
            update: {
                method: 'PUT'
            }
        });
        service.validar = function (obj) {
            return $http.post(api.production + 'api/vouchers/validar?id=' + obj.codigo + '&pedido=' + obj.pedido + '&fornecedor=' + obj.fornecedor);
        }
        return service;
    }]);
}(angular));