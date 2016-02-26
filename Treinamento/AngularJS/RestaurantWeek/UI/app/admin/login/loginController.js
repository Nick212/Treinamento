
(function (angular) {
    var app = angular.module('admin');

    var loginController = function ($scope) {
        $scope.login = function () {
            location.href = '/extranetrestaurantweek/#/?token=TyWW4rTxql';
        };
    };

    app.controller('loginController', ['$scope', loginController]);
}(angular));