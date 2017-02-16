/**
 *directive
 */
angular.module('myApp')
    .directive('navbar', function() {
        return {
            restrict: "E",
            replace: true,
            controller: 'navbarCtrl',
            templateUrl: 'template/navbar.html'
        }
    })
