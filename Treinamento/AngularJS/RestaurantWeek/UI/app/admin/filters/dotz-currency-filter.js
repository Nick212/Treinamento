/*
 * Filtro de Moeda Dotz
 */

'use strict';

(function (angular) {
    var app = angular.module('admin');

    app.filter("dz",['numberFilter',function (numberFilter)
    {
        function isNumeric(value)
        {
            return (!isNaN(parseFloat(value)) && isFinite(value));
        }

        return function (inputNumber, currencySymbol, decimalSeparator, thousandsSeparator, decimalDigits) {
            if (isNumeric(inputNumber))
            {
                // Default values for the optional arguments
                currencySymbol = (typeof currencySymbol === "undefined") ? "DZ " : currencySymbol;
                decimalSeparator = (typeof decimalSeparator === "undefined") ? "," : decimalSeparator;
                thousandsSeparator = (typeof thousandsSeparator === "undefined") ? "." : thousandsSeparator;
                decimalDigits = (typeof decimalDigits === "undefined" || !isNumeric(decimalDigits)) ? 0 : decimalDigits;
                if (decimalDigits < 0) decimalDigits = 0;
                var formattedNumber = numberFilter(inputNumber, decimalDigits);
                var numberParts = formattedNumber.split(".");
                numberParts[0] = numberParts[0].split(",").join(thousandsSeparator);
                var result = currencySymbol + numberParts[0];
                if (numberParts.length == 2)
                {
                    result += decimalSeparator  + numberParts[1];
                }

                return result;
            }
            else
            {
                return inputNumber;
            }
        };
    }]);
}(angular))