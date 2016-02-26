
(function (angular) {
    var app = angular.module('admin');
    app.factory('Restaurant', ['$resource', 'API','$http', function ($resource, api, $http) {
        var restaurants = {};
        //restaurants.query = function(success) {
        //    $http.get('fornecedores-config.json').success(success);
        //};
        restaurants.query = function (success) {
            $http.get(api.production + 'api/Supplier').success(success);
        };
        return restaurants;
    }]);
}(angular));