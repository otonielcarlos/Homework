var app = angular.module('ugly',[])

app.controller('MainController', function($scope){ 
   
    $scope.title='';
    $scope.paragraph='';
    $scope.img='';
    $scope.things = [];
    
    
    $scope.boton = function(title,paragraph,img){
        
        
        var uglyThing = {
            title: title,
            paragraph: paragraph,
            img: img
        }
    
        $scope.things.push(uglyThing);
        $scope.title='';
        $scope.paragraph='';
        $scope.img='';
    
    }



});
