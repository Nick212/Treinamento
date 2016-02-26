(function (angular) {
    var app = angular.module('admin');
    var rightSideBarController = function ($scope) {
        $scope.template = '/app/admin/rightsidebar/rightsidebar.html';
    };
    app.controller('rightSideBarController', ['$scope', rightSideBarController]);
}(angular));