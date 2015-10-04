
(function (angular) {
    var app = angular.module('hotsite');
    app.factory('Fornecedor', ['$http', 'API', function ($http, api) {
        //var service = {};

        //service.addFornecedor = function (obj) {
        //    var request = {
        //        method: 'POST',
        //        url: api.production + '/Supplier',
        //        data: obj
        //    }
        //};
        

        return {
            estados: function () {
                return $http.get(api.production + '/Regiao/Estado');
            },
            cidades: function (estadoId) {
                return $http.get(api.production + '/Regiao/Cidade?estadoId=' + estadoId);
            },
            addFornecedor: function (obj) {

                console.log('estou dentro do servico');
                return $http.post(api.production + '/Supplier/Add', obj);
            }

        };
    }]);
}(angular));