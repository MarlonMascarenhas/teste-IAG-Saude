angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('login');

  $stateProvider

  .state('lista',{
    url : '/lista',
    templateUrl : 'templates/lista.html',
    controller : 'ListagemController'
  })

  .state('login',{
    url : '/login',
    templateUrl : 'templates/login.html',
    controller : 'LoginController'
  });



});
