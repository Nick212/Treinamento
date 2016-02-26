
(function (angular) {
    var app = angular.module('hotsite');
    app.factory('Login', ['$http', 'API', function ($http, api) {
        var service = {};
       
        service.login = function (obj) {
            var req = {
                method: 'POST',
                url: api.production + '/login',
                data:obj
            }
            return $http(req);
        }
        return service;
    }]);
}(angular));