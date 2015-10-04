
(function (angular) {
    var app = angular.module('admin');

    var headerController = function ($scope) {
        $scope.template = '/app/admin/header/header.html';
        $scope.exibirLeftSideBar = function () {
            $scope.leftSideBar = true;
            
        };
    };
    app.controller('headerController', ['$scope',headerController]);
}(angular));