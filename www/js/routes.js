angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('login');

  $stateProvider

  .state('lista',{
    url : '/lista',
    templateUrl : 'templates/lista/lista.html',
    controller : 'ListagemCtrl',
    resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('lista');
       }]
     }
  })


  .state('login',{
    url : '/login',
    templateUrl : 'templates/login/login.html',
    controller : 'LoginCtrl',
    resolve: {
       load: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('login');
       }]
     }
  });



});
