angular.module('starter', ['ionic', 'oc.lazyLoad'])

.run(['$rootScope', '$ionicPlatform', 'sessionService', '$state',
  function($rootScope, $ionicPlatform, sessionService, $state) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {

        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });


    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
        console.log();
        if(toState.name != 'login' && !sessionService.isLogged()){
          event.preventDefault();
          $state.go('login');
        }

      }
    );

  }
])
