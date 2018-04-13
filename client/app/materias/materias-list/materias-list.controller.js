'use strict';
(function(){

class MateriasListComponent {
  constructor(materiasSerice) {
    this.materiasSerice = materiasSerice;
  }
  $onInit(){
  	this.materiasService.query().$promise
  	.then(response => {
      console.log('Materias full',response);
      this.materias = response;
    })
    .catch(err => {
      console.log('Error full',err);
    });
  }
}

angular.module('universidadFrontedApp')
  .component('materiasList', {
    templateUrl: 'app/materias/materias-list/materias-list.html',
    controller: MateriasListComponent,
    controllerAs: 'vm'
  });

})();
