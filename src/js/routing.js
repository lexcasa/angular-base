'use strict';

app.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'app/shared/views/app.html'
    })

    .state('login', {
      url: "/login",
      templateUrl: "app/components/session/views/loginView.html",
      controller:'LoginCtrl'
    })
    .state('app.account', {
      url: "/account",
      templateUrl: "app/components/account/views/accountFormView.html",
      controller:'AccountCtrl'
    })

    .state('app.tours', {
      url: "/tours",
      templateUrl: "app/components/tours/views/toursListView.html",
      controller:'ToursCtrl'
    })
    .state('app.addTour', {
      url: "/tours/new",
      templateUrl: "app/components/tours/views/tourFormView.html",
      controller:'TourCtrl'
    })
    .state('app.editTour', {
      url: "/tours/:id/edit",
      templateUrl: "app/components/tours/views/tourFormView.html",
      controller:'TourCtrl'
    })
   
}]);