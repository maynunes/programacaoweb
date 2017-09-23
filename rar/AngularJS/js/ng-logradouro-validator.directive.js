angular.module('app').directive('ngLogradouroValidator', function($rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
    }
    });
      