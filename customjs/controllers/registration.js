myApp.controller('RegistrationController', 
    ['$scope',  function($scope){
 

    $scope.chars = /^[A-Za-z]*$/;
    $scope.passWord = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    $scope.passWord2 = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
//    $scope.passWord2 = /^user.pwd1$/;
}]);//Controller

