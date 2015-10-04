(function (angular) {
    var analyzerApp = angular.module('relatorio', ['ngRoute', 'ngResource']);
  

    analyzerApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/relatorio/fornecedor/fornecedor.html',
                controller: 'fornecedorController'
            })
            .otherwise({ redirectTo: '/notfound' });
    }]);

}(angular));

