'use strict';
(function(){

class MateriasCreateComponent {
  constructor(materiasService) {
    this.materiasService = materiasService;
  }
  createMaterias(){
  	this.materiasService.save(this.materias).$promise
  	.then(response => {
        console.log('MATERIA CREADA', response);
        this.materias = response;
      })
      .catch(err => {
        console.log('ERROR AL CRERA MATERIA', err);
      });
  }
}

MateriasCreateComponent.$inject = ['materiasService']
angular.module('universidadFrontedApp')
  .component('materiasCreate', {
    templateUrl: 'app/materias/materias-create/materias-create.html',
    controller: MateriasCreateComponent,
    controllerAs: 'vm'
  });

})();
