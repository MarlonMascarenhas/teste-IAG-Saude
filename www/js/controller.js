
angular.module('starter')
.controller('LoginController', function($scope, PessoaService, $ionicPopup, $state, $http){
  $scope.data = {};


$scope.realizarLogin = function(){



      var dadosDoLogin  = {
          login: $scope.data.login ,
          senha: $scope.data.senha
        }
        
      PessoaService.realizarLogin(dadosDoLogin).then(function(dados){
        $state.go('lista');
      }, function(erro){
        $ionicPopup.alert({
          title: "Erro",
          template: "Login ou senha incorretos"
        })
      });


}

});

angular.module('starter')
.controller('ListagemController', function($scope, PessoaService){

  PessoaService.obterPessoas().then(function(dados){
    $scope.listaDeNomes = dados;
  });

});
