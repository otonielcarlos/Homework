var app = angular.module('shopList',[])

app.controller('MainController', function($scope){ 
    $scope.item='';
    
    $scope.list = [];
    
    $scope.add = function(item){
        
        $scope.list.push(item);
        $scope.item='';
    }
    
    $scope.delete = function(item){
        var index = $scope.list.indexOf(item);
        $scope.list.splice(index,1);
    
    }
});