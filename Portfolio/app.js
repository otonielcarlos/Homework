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
        templateUrl: "sections/portfolio.html",
        controller: "PortfolioController"
    }).when("/skills", {
        templateUrl: "sections/skills.html",
        controller: "SkillsController"
    }).when("/contact",{
        templateUrl:"sections/contact.html",
        controller:"ContactController"
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

app.controller("PortfolioController", ["$scope", function ($scope) {
    $scope.pageClass = "portfolio"

}]);

app.controller("SkillsController", ["$scope", function ($scope) {
    $scope.pageClass = "skills"

}]);

app.controller("ContactController", ["$scope", function ($scope) {
    $scope.pageClass = "contact"

}]);