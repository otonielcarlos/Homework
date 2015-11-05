var app = angular.module("MyApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "sections/home.html",
        controller: "MainController"
    }).when("/about", {
        templateUrl: "sections/about.html",
        controller: "SecondController"
    }).when("/projects", {
        templateUrl: "sections/projects.html",
        controller: "ThirdController"
    })
}]);

app.controller("MainController", ["$scope", function ($scope) {
    
}])

app.controller("SecondController", ["$scope", function ($scope) {

}]);

app.controller("ThirdController", ["$scope", function ($scope) {

}]);