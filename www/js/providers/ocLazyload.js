angular.module('starter')
.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    modules: [
        {
           name: 'login',
           files: ['templates/login/loginCtrl.js']
        },
        {
           name: 'lista',
           files: ['templates/lista/listaCtrl.js']
        }

    ]

  });
}]);
