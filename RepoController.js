(function() {

    var mainApp = angular.module("mainApp");

    mainApp.controller("RepoController",
        function($scope, github, $routeParams) {
            
            var onError = function(error) {
                $scope.error = "There was something error: " + error.statusText
            }

            var onGetCollaborator = function(data) {
                console.log(data.contributions)
                $scope.getCollaborator = data.contributors
                $scope.openIssues = data.open_issues_count
            }

            $scope.repository = $routeParams.repository
            $scope.username = $routeParams.username
            
            github
                .getCollaborator($routeParams.username, $routeParams.repository)
                .then(onGetCollaborator, onError)
                
            
        })

}())