var app = angular.module("MyMedia", []);

app.controller("App", ["$scope", "$http", function ($scope, $http) {

    $scope.movies = [];
    var url = "http://www.omdbapi.com/";
    var s = "";

    $scope.search = function () {
        $http.get(url, {
            params: {
                "s": $scope.titleSearch

            },
        }).then(function (response) {
            $scope.movies = response.data.Search;

            angular.forEach($scope.movies, function (movie) {

                $http.get(url, {
                    params: {
                        "t": movie.Title

                    },
                }).then(function (response) {

                    movie.Plot = response.data.Plot;
                    movie.Genre = response.data.Genre;

                })
            })
        }, function (response) {
            console.log("There was an error");

        });
    }
}]);