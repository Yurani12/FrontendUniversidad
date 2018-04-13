'use strict';
(function(){

class LoginComponent {
  constructor(authService) {
  this.authService=authService;
  }
  login(){
  console.log('Datos de usuario ',this.usuario);
  this.authService.login(this.usuario);
}
}
LoginComponent.$inject=['authService']
angular.module('universidadFrontedApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
