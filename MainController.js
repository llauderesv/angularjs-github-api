(function() {

    var mainApp = angular.module("mainApp");

    mainApp.controller("MainController", function($scope, $interval, $location) {

        $scope.message = "Hello angular!"
        $scope.repoOrderBy = "+language"
        $scope.count_down = 5
        $scope.fname = "angular"

        var decrementCountDown = function() {
            $scope.count_down -= 1
            if ($scope.count_down < 1) {
                $scope.searchUser($scope.fname)
                if (countDown) {
                    $interval.cancel(countDown)
                }
            }
        }

        var countDown = null;
        var startCountDown = function() {
            countDown = $interval(decrementCountDown, 1000, decrementCountDown)
        }

        $scope.searchUser = function(fname) {
            if (countDown) {
                $interval.cancel(countDown)
            }
            // Redirect to the route
            $location.path("/user/" + fname);
        }
        startCountDown()
    });



}())