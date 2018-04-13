'use strict';

class NavbarController {
  constructor(authService) {
    this.authService = authService;
    }
}

NavbarController.$inject = ['authService']
angular.module('universidadFrontedApp')
    .component('navbar', {
    templateUrl: 'components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm'
  });