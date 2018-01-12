
angular.module('starter')
.controller('LoginCtrl', ['$scope', 'PessoaService', '$ionicPopup', '$state', '$http', 'sessionService',
  function($scope, PessoaService, $ionicPopup, $state, $http, sessionService){
    $scope.data = {};

    $scope.realizarLogin = function(){

      var dadosDoLogin  = {
          login: $scope.data.login ,
          senha: $scope.data.senha
        }

      PessoaService.realizarLogin(dadosDoLogin)
      .then(function(dados){
        sessionService.setUser($scope.data.login);
        $state.go('lista');
      }, function(erro){
        $ionicPopup.alert({
          title: "Erro",
          template: "Login ou senha incorretos"
        })
      });


    }

}]);
