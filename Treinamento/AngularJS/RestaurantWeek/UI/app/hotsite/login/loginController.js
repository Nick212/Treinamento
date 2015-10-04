
(function (angular) {
    var app = angular.module('hotsite');

    var loginController = function (loginServices, $scope, $localStorage) {
        $scope.error = {
            show: false,
            message: ''
        }

        $scope.user = {
            login: '',
            senha: ''
        }

        var createError = function (msg) {
            $scope.error.show = true;
            $scope.error.message = msg;
        };

        $scope.login = function () {
            if ($('form').parsley().isValid()) {
                loginServices.login($scope.user)
                .success(function (data, status, headers, config) {
                    if (data.hasError) {
                        createError(data.message);
                    } else {
                       $localStorage.$default({
                            user: data.object
                       });
                       $localStorage.$save()
                       window.location = 'app/admin';
                    }
                })
                .error(function (data, status, headers, config) {
                    createError('Houve um erro inesperado, tente novamente');
                });
            }
        };
    };

    app.controller('loginController', ['Login', '$scope', '$localStorage', loginController]);
}(angular));