
(function (angular) {
    var app = angular.module('hotsite');
    app.factory('API', [function () {
        return {
            production: 'http://localhost:50072/api/api'
        };
    }]);
}(angular));