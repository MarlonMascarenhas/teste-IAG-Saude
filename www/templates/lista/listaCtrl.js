angular.module('starter')
.controller('ListagemCtrl', function($scope, PessoaService){

  PessoaService.obterPessoas().then(function(dados){
    $scope.listaDeNomes = dados;
  });

});
