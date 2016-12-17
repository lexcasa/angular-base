app.controller('LoginCtrl', ['$scope', '$rootScope', '$state', 'RestClient', 'authentication', function ($scope, $rootScope, $state, RestClient, authentication) {

  $scope.user = {};

  $scope.login = function() {
    if(!$scope.user.email || !$scope.user.password){
      return;
    }

    console.log($scope.user);
    authentication.setToken('tokentest');
    authentication.setUser($scope.user);
    $state.go('app.tours');
/*
    RestClient.post('users/login', $scope.user, function(err, result) {
      if(err){
        authentication.removeToken();
        $scope.error = "Invalid user or password";
      }else{
        authentication.setToken(result.token);
        authentication.setUser(result.user);        
        
        $rootScope.userName = result.user.name;
        
        $state.go('app.tours');
      }
    });*/
  };

}]);