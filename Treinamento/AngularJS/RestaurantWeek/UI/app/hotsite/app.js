//Module Hotsite Cadastre Supplier
(function (angular) {
    var restaurantApp = angular.module('hotsite', ['ngRoute', 'ngResource', 'ngStorage', 'ui.utils.masks']);

    //Configuring routes
    restaurantApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/hotsite/home/home.html',
                controller: 'homeController'
            })
            .when('/home', {
                templateUrl: 'app/hotsite/home/home.html',
                controller: 'homeController'
            })
             .when('/fornecedor', {
                 templateUrl: 'app/hotsite/fornecedores/fornecedor.html',
                 controller: 'fornecedorController'
             })

             .when('/login', {
                 templateUrl: 'app/hotsite/login/login.html',
                 controller: 'loginController'
             })
            .when('/notfound', {
                templateUrl: 'app/admin/notfound/notfound.html',
                controller: 'fornecedorController'
            })
        .otherwise({ redirectTo: '/notfound' });

    }]);
}(angular));

