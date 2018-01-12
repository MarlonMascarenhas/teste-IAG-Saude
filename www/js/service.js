angular.module('starter')
.service('PessoaService', function($http){

    var url = 'http://re98.com.br/unici_restserver/api/pessoas/';
    return{
        obterPessoas: function(){
            return $http.get(url).then( function(response){
                return response.data;
            });
            
        },
        realizarLogin : function(dadosDoLogin){
            return $http.post(url + "login").then(data => {
                console.log(data);
            }
            );
        }
    }
});
