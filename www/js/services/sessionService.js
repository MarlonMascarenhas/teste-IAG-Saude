angular.module('starter')
.factory('sessionService', function(){
	var user = null;
  this.setUser = function(u){
    user = u;
  }

  this.isLogged = function(){
    return user != null;
  }

  return {
    setUser: this.setUser,
    isLogged: this.isLogged
  };

});
