angular.module('app').directive('ngCpfValidator', function($rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
         }
     });