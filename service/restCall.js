/**
 *service
 */
angular.module('myApp').service('restcall',['$http', function($http) {
    this.getData = function() {
      return $http.get(' navbar.json');
    };
}]);
