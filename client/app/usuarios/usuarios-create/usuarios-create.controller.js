'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuarioService, $state, toastr) {
    this.usuarioService = usuarioService;
    this.$state = $state;
    this.toastr = toastr;
  }

  createUser(){
  	this.usuarioService.save(this.usuario).$promise
  	.then(response => {
  		console.log("Usuario registrado correctamente ",response);
        this.toastr.success('cuenta creada', {
            progressBar: true,
            closeButton: true
          });
      this.$state.go('login');
  	})
  	.catch(err=>{
  		console.log("Error al crear el usuario ",err);
       this.toastr.success('error al registrar', {
            progressBar: true,
            closeButton: true
          });
  	})
  }
}
UsuariosCreateComponent.$inject = ['usuarioService', '$state','toastr'];
angular.module('universidadFrontedApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
