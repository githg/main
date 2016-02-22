myApp.controller('RegistrationController', 
    ['$scope','Authentication', 
     function($scope, Authentication){
 
        
        
//    $scope.message = "Welcome to my app";
//    $scope.regex = /^[A-Za-z]*$/;
    $scope.login = function(){
       Authentication.login($scope.user);
    };//login
        
        $scope.register= function(){
          Authentication.register($scope.user);
        };//register
}]);//Controller

