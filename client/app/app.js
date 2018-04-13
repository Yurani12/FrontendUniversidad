'use strict';

angular.module('universidadFrontedApp', [
  'universidadFrontedApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'satellizer',
  'ngAnimate',
  'toastr'
  ])
.constant("API","http://localhost:8080/Universidad")
.config(function(API, $authProvider){
  $authProvider.loginUrl = API + '/api/auth/login';
  $authProvider.tokenName = 'token';
  $authProvider.tokenPrefix = 'universidadFrontedApp';
})

  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
