

(function (angular) {
    var app = angular.module('admin');
    app.factory('Catalogo', ['$http', 'API', function ($http, api) {
        
        return {
            fornecedores: function () {
                return $http.get(api.production + 'api/Supplier');
            },
            aprovarFornecedor: function (supplier) {
                return $http.post(api.production + 'api/Supplier/Active?id=' + supplier.wmsRestauranteId);
            },
            rejeitarFornecedor: function (supplier){
                return $http.delete(api.production + 'api/Supplier/Delete?id=' + supplier.wmsRestauranteId)
            },
            exportarDados: function (dataSupplier){
                return $http.post(api.production + 'api/Supplier/Download?id=', dataSupplier.wmsRestauranteId)
            }
        };
    }]);
}(angular));