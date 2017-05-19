(function() {

    var mainApp = angular.module("mainApp");

    mainApp.factory("github", function($http) {

        var getUser = function(username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response) {
                    return response.data
                })
        }

        var getRepo = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data
                })
        }

        var getCollaborator = function(username, reponame) {
            var repo 
            var http = "https://api.github.com/repos/" + username + "/" + reponame
            return $http.get(http)
                .then(function(response) {
                    repo = response.data
                    return $http.get(http + "/contributors")
                })
                .then(function(response) {
                    repo.contributors = response.data
                    return repo
                })
        }

        return {
            getUser: getUser,
            getRepo: getRepo,
            getCollaborator: getCollaborator
        }
    })

}())