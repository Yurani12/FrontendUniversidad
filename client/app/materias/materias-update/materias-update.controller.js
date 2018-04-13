'use strict';
(function(){

class MateriasUpdateComponent {
  constructor(materiasService, $state, $stateParams) {
    this.materiasService = materiasService;
    this.$state = $state;
  	this.$stateParams = $stateParams;
  }
  $onInit(){
  	this.materiasService.get({id:this.$stateParams.idMaterias}).$promise
  		.then(response => {
  			this.materias = response;
  			console.log(this.mmaterias);
  		})
  		.catch(err => console.error(err));
	}

  	updateMaterias(){
  		this.materiasService.update({id:this.materias.id},this.materias).$promise
  		.then(response => {
  			console.log("La materia fue actualizado");
  			this.$state.go('materias-list');
  		})
  		.catch(err => console.error(err));
  	}
}

angular.module('universidadFrontedApp')
  .component('materiasUpdate', {
    templateUrl: 'app/materias/materias-update/materias-update.html',
    controller: MateriasUpdateComponent,
    controllerAs: 'vm'
  });

})();
