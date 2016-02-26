(function (angular) {
    var app = angular.module('admin');
    var leftSideBarController = function ($scope, $localStorage) {
        $scope.template = '/app/admin/leftsidebar/leftsidebar.html';
        var user = $localStorage.user;
        $scope.isCatalogo = user.isCatalogo;
        $scope.isRestaurante = user.isRestaurante;
        $scope.nomeUsuario = user.nomeUsuario;
    };
    app.controller('leftSideBarController', ['$scope', '$localStorage', leftSideBarController]);
}(angular));