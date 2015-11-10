var app = angular.module("MyApp", ["ngRoute", "ngAnimate"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "sections/home.html",
        controller: "HomeController"
    }).when("/about", {
        templateUrl: "sections/about.html",
        controller: "AboutController"
    }).when("/education", {
        templateUrl: "sections/education.html",
        controller: "EducationController"
    }).when("/projects", {
        templateUrl: "sections/projects.html",
        controller: "ProjectsController"
    }).when("/skills", {
        templateUrl: "sections/skills.html",
        controller: "SkillsController"

    })
}]);

app.controller("HomeController", ["$scope", function ($scope) {
    $scope.pageClass = "home"
}])

app.controller("AboutController", ["$scope", function ($scope) {
    $scope.pageClass = "about"

}]);

app.controller("EducationController", ["$scope", function ($scope) {
    $scope.pageClass = "education"

}]);

app.controller("ProjectsController", ["$scope", function ($scope) {
    $scope.pageClass = "projects"

}]);

app.controller("SkillsController", ["$scope", function ($scope) {
    $scope.pageClass = "skills"

}]);