/**
 *controller
 */
angular.module('myApp')
    .controller('navbarCtrl', ['$scope', 'restcall', function($scope, restcall) {

        /**service call to get data*/
        restcall.getData().then(function(response) {
            $scope.getTab = response.data;

            $scope.toolBar = false; //initial false condition for avilibility
            $scope.iconButton = false; //initial false condition for avilibility




            var impoButton = [];
            var resultRequired = [];
            var resultHidden = [];
            for (var i = 0; i < $scope.getTab.button.length; i++) {
                impoButton.push($scope.getTab.button[i]);
            }

            /**checking key avilibility */
            if ($scope.getTab.hasOwnProperty('button')) {
                $scope.iconButton = true;
                impoButton.forEach(function(value, key) {
                    if (value.status == "required") {
                        resultRequired.push(value);
                    }else if(value.status == "hidden"){
                        resultHidden.push(value);
                    };
                });
                $scope.button = resultRequired;
                $scope.dropdown = resultHidden;
            }

            /**checking key avilibility */
            if ($scope.getTab.hasOwnProperty('tabs')) {
                $scope.toolBar = true;
                $scope.tabs = $scope.getTab.tabs;
            }

        }).catch(function(errorResponse) {
            console.log('oopsie', errorResponse);
        });

    }]);
