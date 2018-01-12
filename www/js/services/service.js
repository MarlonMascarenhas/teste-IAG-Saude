angular.module('starter')
.service('PessoaService', function($http){

    var url = 'http://re98.com.br/unici_restserver/api/pessoas/';
    var urlLogin = 'http://re98.com.br/unici_restserver/api/login/';
    return{
        obterPessoas: function(){
            return $http.get(url).then( function(response){
                return response.data;
            });

        },

        realizarLogin : function(dadosDoLogin){

    return $http.post(urlLogin, dadosDoLogin, {
      headers: {
        'Content-Type': '	application/json;charset=utf-8'
      }
    }).success(function (response) {
      console.log(response.data);
                return response;
            });


        }
    }
});
