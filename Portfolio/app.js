var app = angular.module("MyApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "sections/home.html",
        controller: "HomeController"
    }).when("/about", {
        templateUrl: "sections/about.html",
        controller: "AboutController"
    }).when("/projects", {
        templateUrl: "sections/projects.html",
        controller: "ProjectsController"
    }).when("/skills", {
        templateUrl:"sections/skills.html",
        controller: "SkillsController"
    
    })
}]);

app.controller("HomeController", ["$scope", function ($scope) {
    
}])

app.controller("AboutController", ["$scope", function ($scope) {

}]);

app.controller("ProjectsController", ["$scope", function ($scope) {

}]);

app.controller("SkillsController", ["$scope", function ($scope) {

}]);