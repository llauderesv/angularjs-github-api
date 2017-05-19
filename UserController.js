(function() {

    var mainApp = angular.module("mainApp");

    // Initialize the controller
    mainApp.controller("UserController",
        function($scope, github, $routeParams, $location) {


            var onError = function(error) 
            {
                $scope.user = null
                $scope.repos = null
                $scope.error = "There was something error: " + error.statusText
            }

            var onGetRepo = function(data) 
            {
                $scope.repos = data
            }
            
            
            var onGetUser = function(data) 
            {
              $scope.user = data
              $scope.error = null
              github.getRepo(data).then(onGetRepo, onError)
            }
            
            $scope.username = $routeParams.username
            $scope.repoOrderBy = "-stargazers_count"
            github.getUser($scope.username).then(onGetUser, onError)
            
            var onGetCollaborator = function(data) 
            {
                console.log(data)
            }

            $scope.repoName = function(reposName, openIssue)
            {
                $scope.openIssues = openIssue
                console.log(openIssue)
                $scope.reposName = reposName
                $location.path("/repo/" + $scope.reposName)
                console.log("/repo/"+reposName)
            }
            
        })

}())