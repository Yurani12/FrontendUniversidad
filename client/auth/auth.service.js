'use strict';
function authService($auth,$state,toastr) {
var auth = {
	login:login,
 	logout:logout,
    datosUsuario: datosUsuario,
    idUsuario: idUsuario,

};

//Funcion para iniciar seccion
function login(user,collback){
	$auth.login(user)

	.then(response => {
        toastr.success('Acaba de iniciar correctamente',{
        progressBar: true,
        closeButton: true
});
		$state.go('materias-list');
	})
	.catch(err => {
        toastr.error('Error de login vuelvalo a intentar',{
      progressBar: true,
      closeButton: true

    });
        console.log("Error de login vuelvalo a intentar", err);
        $state.go('login');
      })
}

//Funcion para cerrar seccion
function logout(){
if($auth.isAuthenticated()){
$auth.logout()
.then(respose=>{
$state.go('main');
})
}
}
//Funcion para autenticar
function isAuthenticated(){
	if($auth.isAuthenticated()){
		return true;
	}else{
		return false;
	}
}
  function datosUsuario() {
    if ($auth.isAuthenticated()) {

      return $auth.getPayload().users;
    }
  }

  function idUsuario() {
    if ($auth.isAuthenticated()) {
      return $auth.getPayload().sub;
    } else {
      return null;
    }
  }


  return auth;

}
authService.$inject  = ['$auth','$state','toastr'];
angular.module('universidadFrontedApp')
  .factory('authService', authService);
