'use strict';
(function(){

class MateriasCreateComponent {
  constructor(materiasService) {
    this.materiasService = materiasService;
  }
  createMaterias(){
  	this.materiasService.save(this.matterias).$promise
  	.then(response => {
        console.log('materia creado', response);
        this.materia = response;
      })
      .catch(err => {
        console.log('Error al crear materia', err);
      });
  }
}

angular.module('universidadFrontedApp')
  .component('materiasCreate', {
    templateUrl: 'app/materias/materias-create/materias-create.html',
    controller: MateriasCreateComponent,
    controllerAs: 'vm'
  });

})();
