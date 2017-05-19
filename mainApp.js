(function(){

    // Create a module for the document...
    var mainApp = angular.module("mainApp", ["ngRoute"]);

    mainApp.config(function($routeProvider){
         $routeProvider
         .when("/main", {
            templateUrl: "main.html",
            controller: "MainController"
         })
         .when("/user/:username", {
            templateUrl: "userdetails.html",
            controller: "UserController"
         })
         .when("/repo/:username/:repository", {
            templateUrl: "repo.html",
            controller: "RepoController"
         })
         .otherwise({redirectTo:"/main"})

    })


}())
