
(function (angular) {
    var app = angular.module('admin');
    app.factory('API', [function () {
        return {
            production: 'http://localhost:50072/api/'
        };
    }]);
}(angular));