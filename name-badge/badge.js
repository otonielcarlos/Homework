var app = angular.module('badge',[])

app.controller('MainController', function($scope){ 
   
    $scope.name=''; 
    $scope.last='';
    $scope.email = '';
    $scope.phone = '';
    $scope.birth = '';
    $scope.food = '';
    $scope.text='';
    $scope.badge = [];
    
    

    $scope.submit = function(name,last,email,phone,birth,food,text){
    
    var nameBadge = {
        name: name,
        last: last,
        email: email,
        phone: phone,
        birth: birth,
        food: food,
        text: text
    
    }
    $scope.badge.push(nameBadge);
    
    }
    
    
    
    
    //    
//    $scope.submit = function(info){
//    
//    $scope.name= info;
//        
//        
//    }
    });
