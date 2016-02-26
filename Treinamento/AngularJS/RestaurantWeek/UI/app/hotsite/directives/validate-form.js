/**=========================================================
 * Module: validate-form.js
 * Initializes the validation plugin Parsley
 =========================================================*/
(function (angular) {
    var app = angular.module('hotsite');
    app.directive('validateForm', function () {
        return {
            restrict: 'A',
            controller: function ($scope, $element) {
                var $elem = $($element);
                if ($.fn.parsley)
                    $elem.parsley();
            }
        };
    });
}(angular));