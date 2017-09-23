angular.module('app').directive('ngCidadeValidator', function( $rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
        }
});