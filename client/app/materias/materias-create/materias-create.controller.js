'use strict';
(function(){

class MateriasCreateComponent {
  constructor(materiasService, $state) {
    this.materiasService = materiasService;
    this.$state = $state;
  }
  createMaterias(){
  	this.materiasService.save(this.materias).$promise
  	.then(response => {
        console.log('MATERIA CREADA', response);
        this.materias = response;
	/*$state.go('materias-list');*/
      })
      .catch(err => {
        console.log('ERROR AL CRERA MATERIA', err);
      });
  }
}

MateriasCreateComponent.$inject = ['materiasService', '$state']
angular.module('universidadFrontedApp')
  .component('materiasCreate', {
    templateUrl: 'app/materias/materias-create/materias-create.html',
    controller: MateriasCreateComponent,
    controllerAs: 'vm'
  });

})();
