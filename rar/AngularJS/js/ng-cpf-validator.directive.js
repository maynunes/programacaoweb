angular.module('app').directive('ngCpfValidator', function(CepService, $rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModel) {
            $scope.$watch($attrs.ngModel, function(value) {
                if (value) {
                    if (value.match(/^[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{2}$/)) {
                        CepService.get(value).then(function(response) {
                            $rootScope.$broadcast('cep', response.data);
                        });
                        ngModel.$setValidity($attrs.ngModel, true);
                    }
                    else {
                        ngModel.$setValidity($attrs.ngModel, false);
                    }
                }
                else {
                    ngModel.$setValidity($attrs.ngModel, false);
                }
            });
        }
    }
});