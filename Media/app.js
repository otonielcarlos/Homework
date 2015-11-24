var app = angular.module("MyMedia", []);

//app.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.when("/", {
//        templateUrl: "home.html",
//        controller: "HomeController"
//        
//    })
//}]);


app.controller("HomeController", ["$scope", "$http", function ($scope, $http) {

    
    //    <-------- Search Results -------->


    $scope.movies = [];
    var url = "http://www.omdbapi.com/";
    var s = "";

    $scope.search = function () {
            $http.get(url, {
                params: {
                    "s": $scope.titleSearch,
                    "type": "movie"

                },
            }).then(function (response) {
                $scope.movies = response.data.Search;

                angular.forEach($scope.movies, function (movie) {

                    $http.get(url, {
                        params: {
                            "t": movie.Title
                        }
                    }).then(function (response) {
                        movie.Plot = response.data.Plot;
                        movie.Genre = response.data.Genre;

                    })
                })
            }, function (response) {
                console.log("There was an error");

            });
        }
        //    <-------- Top Gun Release -------->
    $scope.top = []
    $http.get(url, {
        params: {
            "s": "Top Gun",

        },
    }).then(function (response) {
        $scope.top = response.data.Search;

        angular.forEach($scope.top, function (gun) {

            $http.get(url, {
                params: {
                    "t": gun.Title
                }
            }).then(function (response) {
                gun.Plot = response.data.Plot;
                gun.Genre = response.data.Genre;

            })
        })
    }, function (response) {
        console.log("There was an error");

    });

    //    <-------- Recommended For You -------->
    $scope.fast = []
    $http.get(url, {
        params: {
            "s": "The Fast and Furious",
            "t":"movie"

        },
    }).then(function (response) {
        $scope.fast = response.data.Search;

        angular.forEach($scope.fast, function (furious) {

            $http.get(url, {
                params: {
                    "t": furious.Title
                }
            }).then(function (response) {
                furious.Plot = response.data.Plot;
                furious.Genre = response.data.Genre;

            })
        })
    }, function (response) {
        console.log("There was an error");

    });

}]);