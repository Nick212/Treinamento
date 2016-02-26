(function (angular) {
    var analyzerApp = angular.module('admin', ['ngRoute', 'ngResource', 'ngAnimate', 'ui.utils.masks', 'ngStorage']);
    // configuring routes
    analyzerApp.run(['$rootScope', '$http', '$q', '$localStorage', function ($rootScope, $http, $q, $localStorage) {
        if (!$localStorage.user)
            window.location = '/';
    }]);

    analyzerApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/admin/voucher/voucher.html',
                controller: 'voucherController'
            })
            .when('/voucher', {
                templateUrl: '/app/admin/voucher/voucher.html',
                controller: 'voucherController'
            })
            .when('/fornecedor/cadastro', {
                templateUrl: 'app/fornecedor/cadFornecedor.html',
                controller: 'cadFornecedorController'
            })
            .when('/fornecedor/relatorio', {
                templateUrl: '/app/admin/fornecedor/relatorioRestaurante.html',
                controller :'cadFornecedorController'
            })
            .when('/catalogo/consulta', {
                templateUrl: '/app/admin/catalogo/consultaFornecedor.html',
                controller: 'consultaFornecedorController'
            })
            .when('/notfound', {
                templateUrl: '/app/admin/notfound/notfound.html',
                controller: 'notfoundController'
            })
            .otherwise({ redirectTo: '/notfound' });
    }]);
    
}(angular));

