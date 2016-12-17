'use strict';

var app = angular.module('app');

app.controller('AppCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'authentication', function($scope, $rootScope, $state, $stateParams, authentication) {
    
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

	$rootScope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams) {
      evt.preventDefault();
      var token = authentication.getToken();
      var user  = authentication.getUser();
      if($state.current.name !== "login"){
        if(!token || !user){
          $state.go('login');
        }else{
          $rootScope.userName = user.name;
        }
      }
  });

  $scope.logout = function() {
    localStorage.setItem("vivela-token", "");
    localStorage.setItem("userName", "");
    $state.go('login');
  }

}]);